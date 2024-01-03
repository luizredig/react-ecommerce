"use client";

import { Button } from "@/components/ui/button";
import { CATEGORY_ICON } from "@/helpers/category-icon";
import { Category } from "@prisma/client";
import Link from "next/link";

interface CategoryFilterItemProps {
  category: Category;
}

const CategoryFilterItem = ({ category }: CategoryFilterItemProps) => {
  return (
      <Link href={`/category/${category.slug}`}>
        <Button
          variant={"outline"}
          className="flex items-center justify-center gap-2 rounded-lg py-8 w-full"
        >
          {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
          <span className="text-xs font-bold">{category.name}</span>
        </Button>
      </Link>
  );
};

export default CategoryFilterItem;
