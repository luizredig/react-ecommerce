import { productsImages } from "@/helpers/productsImages";
import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <>
      <Link href={`/category/${category.slug}`}>
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
          <div className="rounded-bl-lg rounded-br-lg bg-accent py-3">
            <p className="text-center text-sm font-semibold">{category.name}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CategoryItem;
