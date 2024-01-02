import { productsImages } from "@/helpers/productsImages";
import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex h-[150px] w-full items-center justify-center rounded-tl-lg rounded-tr-lg bg-gradient-to-tr from-[#5000C3] to-[#5100c34d]">
          <Image
            src={productsImages[category.slug as keyof typeof productsImages]}
            alt={category.name}
            width={0}
            height={0}
            sizes="100vw"
            className="max-w[80%] h-auto max-h-[70%] w-auto"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className="py-3 rounded-bl-lg rounded-br-lg bg-accent">
          <p className="text-sm font-semibold text-center">{category.name}</p>
        </div>
      </div>
    </>
  );
};

export default CategoryItem;
