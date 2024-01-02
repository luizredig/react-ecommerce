"use client";

import { Button } from "@/components/ui/button";
import { CATEGORY_ICON } from "@/helpers/category-icon";
import { Category } from "@prisma/client";

interface CategoryFilterItemProps {
  category: Category;
}

const CategoryFilterItem = ({ category }: CategoryFilterItemProps) => {
  return (
    <Button
      variant={"outline"}
      className="flex items-center justify-center gap-2 rounded-lg py-3"
    >
      {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
      <span className="text-xs font-bold">{category.name}</span>
    </Button>
  );
};

export default CategoryFilterItem;
