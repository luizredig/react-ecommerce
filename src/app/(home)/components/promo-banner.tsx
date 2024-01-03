import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image, { ImageProps } from "next/image";

const PromoBanner = ({ src, alt, ...props }: ImageProps) => {
  return (
    <>
      <Image
        src={src}
        height={0}
        width={0}
        priority
        className="m-auto h-auto w-full max-w-[80%] px-5"
        sizes="100vw"
        alt={alt}
        {...props}
      />
    </>
  );
};

export default PromoBanner;
