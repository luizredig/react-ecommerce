"use client";

import { Separator } from "@radix-ui/react-separator";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data } = useSession();
  return (
    <>
      <h1>home</h1>
    </>
  );
}
