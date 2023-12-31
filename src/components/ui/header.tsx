"use client";

import {
  HomeIcon,
  LayoutListIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  ShoppingCartIcon,
  TagIcon,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const Header = () => {
  const { data, status } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

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
            {status === "authenticated" && data?.user?.image && (
              <div className="flex flex-row items-center justify-center gap-2 py-4">
                <Avatar>
                  <AvatarFallback>
                    {data.user.name?.[0].toUpperCase()}
                  </AvatarFallback>

                  {data.user.image && <AvatarImage src={data.user.image} />}
                </Avatar>

                <p className="font-medium">Olá, {data.user.name}!</p>
              </div>
            )}
            <div className="mt-2 flex flex-col gap-2">
              {status === "unauthenticated" && (
                <Button
                  onClick={handleLoginClick}
                  className="w-full gap-1 text-left"
                >
                  <LogInIcon size={16} />
                  Login
                </Button>
              )}

              {status === "authenticated" && (
                <Button
                  onClick={handleLogoutClick}
                  className="w-full gap-1 text-left"
                >
                  <LogOutIcon size={16} />
                  Logout
                </Button>
              )}

              <Separator />

              <Button
                variant={"outline"}
                className="w-full justify-start gap-2 text-left"
              >
                <HomeIcon size={16} />
                Home
              </Button>

              <Button
                variant={"outline"}
                className="w-full justify-start gap-2 text-left"
              >
                <TagIcon size={16} />
                Offers
              </Button>

              <Button
                variant={"outline"}
                className="w-full justify-start gap-2 text-left"
              >
                <LayoutListIcon size={16} />
                Catalog
              </Button>
            </div>
          </SheetContent>
        </Sheet>
        <h1 className="cursor-pointer text-nowrap text-3xl">
          <span className="font-bold text-primary">FWS </span>Store
        </h1>

        <div className="flex items-center gap-2">
          {status === "authenticated" && data?.user?.image && (
            <div className="flex items-center gap-2">
              <Avatar className="select-none">
                <AvatarFallback>
                  {data.user.name?.[0].toUpperCase()}
                </AvatarFallback>

                {data.user.image && <AvatarImage src={data.user.image} />}
              </Avatar>
            </div>
          )}
          <Button size="icon" variant={"outline"}>
            <ShoppingCartIcon />
          </Button>
        </div>
      </Card>
    </>
  );
};

export default Header;
