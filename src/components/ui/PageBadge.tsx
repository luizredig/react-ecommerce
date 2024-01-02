import { Badge } from "./badge";
import { ComponentProps } from "react";

const PageBadge = ({ children, ...props }: ComponentProps<"p">) => {
  return (
    <>
      <div>
        <Badge
          className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
          variant={"outline"}
        >
          {children}
        </Badge>
      </div>
    </>
  );
};

export default PageBadge;
