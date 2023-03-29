export namespace AppTypes {
  export type PageType = {
    name: string;
    data: any;
  };
  export type ProjectType = {
    banner: string;
    title: string;
    description: string;
    id: number;
    sub: string;
    url: string;
    text: string;
    date: string;
    video: {
      mp4: string;
      webm: string;
    };
  };
  export type ContactsData = "title" | "email" | "telegram" | "viber";

  export type ContactsType = Record<ContactsData, string>;
  export type IDoType = { title: string; data: Array<string> };
}
