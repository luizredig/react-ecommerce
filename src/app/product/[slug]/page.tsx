import { prismaClient } from "@/lib/prisma";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

const ProductPage = async ({ params: { slug } }: ProductPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
  });

  if (!product) return null;

  return (
    <>
      <div className="mt-28">
        <h1>{product.name}</h1>
      </div>
    </>
  );
};

export default ProductPage;
