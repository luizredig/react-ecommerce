import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";
import { prismaClient } from "@/lib/prisma";
import { productsImages } from "@/helpers/productsImages";
import Link from "next/link";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = async ({ product }: ProductItemProps) => {
  const category = await prismaClient.category.findUniqueOrThrow({
    where: {
      id: product.categoryId,
    },
  });

  return (
    <>
    <Link href={`/product/${product.slug}`}>
      <div className="flex flex-col gap-4 ">
        <div className="relative flex h-[170px] w-full items-center justify-center rounded-lg bg-accent md:h-[500px] lg:h-[500px]">
          <Image
            src={productsImages[category.slug as keyof typeof productsImages]}
            alt={product.name}
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto max-h-[80%] w-auto max-w-[80%]"
            style={{
              objectFit: "contain",
            }}
          />

          {product.discountPercentage > 0 && (
            <Badge className="absolute left-2 top-2 px-2 py-[2px] md:px-4 md:py-[4px] md:text-lg lg:px-4 lg:py-[4px] lg:text-lg">
              <ArrowDownIcon size={14} />
              {product.discountPercentage} %
            </Badge>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
            {product.name}
          </p>

          <div className="flex items-center gap-2">
            {product.discountPercentage > 0 ? (
              <>
                <p className="text-nowrap font-semibold">
                  R$ {product.totalPrice.toFixed(2)}
                </p>

                <p className="text-nowrap text-[12px] line-through opacity-75">
                  R$ {Number(product.basePrice).toFixed(2)}
                </p>
              </>
            ) : (
              <p className="font-semibold">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
    </>
  );
};

export default ProductItem;
