import Image from "next/image";

export default function NewImage({
  src,
  alt,

  onLoadingComplete,
}: any) {
  const newImageSrc = src.toString().replace(/[()]/g, "");
  const convertImage = (w: number, h: number) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
          <stop stop-color="rgba(244, 241, 238, 1)" offset="0%" />
          <stop stop-color="rgba(242, 242, 236, 1)" offset="35%" />
          <stop stop-color="rgba(212, 233, 237, 1)" offset="75%" />
          <stop stop-color="rgba(241, 241, 241, 1)" offset="97%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="rgb(244, 241, 238)" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>`;

  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  return (
    <div className="custom-image">
      <style jsx>{`
        .custom-image {
          position: relative;
          width: 100%;
          height: 100%;
        }
      `}</style>
      <Image
        style={{ objectFit: "cover" }}
        onLoadingComplete={onLoadingComplete}
        src={src}
        alt={alt}
        quality={100}
        fill
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          convertImage(700, 475)
        )}`}
      />
    </div>
  );
}
