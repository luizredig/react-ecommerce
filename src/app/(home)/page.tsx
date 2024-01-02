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
      <Image
        src="/banner-home-01.png"
        height={0}
        width={0}
        priority
        className="h-auto w-full px-5"
        sizes="100vw"
        alt="Até 55% de desconto. Só esse mês!"
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <p className="mb-2 pl-5 font-bold uppercase">Ofertas</p>
        <ProductCarousel products={productsOnSale} />
      </div>

      <Image
        src="/banner-mouses.png"
        height={0}
        width={0}
        priority
        className="h-auto w-full"
        sizes="100vw"
        alt="Até 55% de desconto em mouses!"
      />
    </>
  );
}
