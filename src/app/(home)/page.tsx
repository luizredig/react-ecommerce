import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductCarousel from "./components/product-carousel";

export default async function Home() {
  const productsOnSale = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <>
      <div>
        <Image
          src="/banner-home-01.png"
          height={0}
          width={0}
          className="h-auto w-full px-5"
          sizes="100vw"
          alt="Highlight banner says: até 55% de desconto. Só esse mês!"
        />
      </div>
      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <ProductCarousel products={productsOnSale} />
      </div>
    </>
  );
}
