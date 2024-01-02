import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";
import { prismaClient } from "@/lib/prisma";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = async ({ product }: ProductItemProps) => {
  const productsImages = {
    mouses: "/mx-master-3s.png",
    monitors: "/monitor-redragon.png",
    headphones: "/JBL_Quantum.png",
    mousepads: "/logitech-mouse-pad.png",
    keyboards: "/mx-keys-mini.png",
    speakers: "/logitech-speakers.png",
  };

  const category = await prismaClient.category.findUniqueOrThrow({
    where: {
      id: product.categoryId,
    },
  });

  return (
    <>
      <div className="flex max-w-[156px] flex-col gap-4 ">
        <div className="relative flex h-[170px] w-[156px] items-center justify-center rounded-lg bg-accent">
          <Image
            // src="/JBL_Quantum.png"
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
            <Badge className="absolute left-2 top-2 px-2 py-[2px]">
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
                <p className="font-semibold">
                  R$ {product.totalPrice.toFixed(2)}
                </p>

                <p className="text-xs line-through opacity-75">
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
    </>
  );
};

export default ProductItem;
