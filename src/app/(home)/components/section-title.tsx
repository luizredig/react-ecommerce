import { ComponentProps } from "react";

const SectionTitle = ({ children, ...props }: ComponentProps<"p">) => {
  return (
    <>
      <p
        className="md:mb-8 lg:mb-8 mb-2 pl-5 font-bold uppercase md:text-xl lg:text-xl"
        {...props}
      >
        {children}
      </p>
    </>
  );
};

export default SectionTitle;
