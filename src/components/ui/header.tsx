import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card, CardContent } from "./card";

const Header = () => {
  return (
    <>
      <Card className="flex justify-between items-center p-[1.875rem]">
        <Button size="icon" variant={"outline"}>
          <MenuIcon />
        </Button>
        <h1 className="cursor-pointer text-lg">
          <span className="font-bold text-primary">FWS </span>Store
        </h1>
        <Button size="icon" variant={"outline"}>
          <ShoppingCartIcon />
        </Button>
      </Card>
    </>
  );
};

export default Header;
