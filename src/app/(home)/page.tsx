import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductCarousel from "./components/product-carousel";
import SectionTitle from "./components/section-title";
import PromoBanner from "./components/promo-banner";

export default async function Home() {
  const productsOnSale = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  return (
    <>
      <PromoBanner
        src="/banner-home-01.png"
        alt="Até 55% de desconto. Só esse mês!"
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <SectionTitle>Ofertas</SectionTitle>
        <ProductCarousel products={productsOnSale} />
      </div>

      <PromoBanner
        src="/banner-mouses.png"
        alt="Até 55% de desconto em mouses!"
      />

      <div className="mt-8">
        <SectionTitle>Teclados</SectionTitle>
        <ProductCarousel products={keyboards} />
      </div>
    </>
  );
}
