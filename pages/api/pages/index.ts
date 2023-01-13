import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../utils/connection";
import { ResponseFuncs } from "../../../utils/types";
import { Page } from "../../../models/page.model";
import errorHandler from "../../../utils/db.error-handler";
import { isErrnoException } from "utils/type-gurats";
connectDB();
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;

  const catcher = (error: unknown) =>
    res.status(400).json({
      error: errorHandler(error),
    });
  type Page = {
    name: string;
    data: any;
  };

  const handleCase: ResponseFuncs = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      try {
        const { name } = req.query;

        const page: Page | null = await Page.findOne({
          name,
        })
          .select(`data.${req.headers["accept-language"]} name`)
          .lean();

        if (page)
          res
            .status(200)
            .json(page.data[req.headers["accept-language"] as string]);
      } catch (error) {
        console.log(error);
        if (isErrnoException(error) && error.code === "ENOENT") return;
        catcher(error);
      }
    },
  };

  // Check if there is a response for the particular method, if so invoke it, if not response with an error
  const response = handleCase[method];
  if (response) response(req, res);
  else res.status(400).json({ error: "No Response for This Request" });
};

export default handler;
