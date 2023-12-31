import {
  HomeIcon,
  LayoutListIcon,
  LogInIcon,
  MenuIcon,
  ShoppingCartIcon,
  TagIcon,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

const Header = () => {
  return (
    <>
      <Card className="flex items-center justify-between p-[1.875rem]">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant={"outline"}>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader className="text-lg font-bold sm:text-center">
              Menu
            </SheetHeader>
            <div className="mt-2 flex flex-col gap-4">
              <Button className="w-full gap-1 text-left">
                <LogInIcon size={16} />
                Login
              </Button>
              <Button
                variant={"outline"}
                className="w-full justify-start gap-1 text-left"
              >
                <HomeIcon size={16} />
                Home
              </Button>
              <Button
                variant={"outline"}
                className="w-full justify-start gap-1 text-left"
              >
                <TagIcon size={16} />
                Offers
              </Button>
              <Button
                variant={"outline"}
                className="w-full justify-start gap-1 text-left"
              >
                <LayoutListIcon size={16} />
                Catalog
              </Button>
            </div>
          </SheetContent>
        </Sheet>
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
