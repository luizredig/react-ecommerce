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

  const keyboardsOnSale = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const headphonesOnSale = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "headphones",
      },
    },
  });

  return (
    <>
      <div className="flex flex-col gap-8">
        <PromoBanner
          src="/banner-home-01.png"
          alt="Até 55% de desconto. Só esse mês!"
        />

        <div className="px-5">
          <Categories />
        </div>

        <div>
          <SectionTitle>Ofertas</SectionTitle>
          <ProductCarousel products={productsOnSale} />
        </div>

        <PromoBanner
          src="/banner-mouses.png"
          alt="Até 55% de desconto em mouses!"
        />

        <div>
          <SectionTitle>Teclados</SectionTitle>
          <ProductCarousel products={keyboardsOnSale} />
        </div>

        <PromoBanner
          src="/banner-headphones.png"
          alt="Até 55% de desconto em headphones!"
        />

        <div>
          <SectionTitle>Headphones</SectionTitle>
          <ProductCarousel products={headphonesOnSale} />
        </div>
      </div>
    </>
  );
}
