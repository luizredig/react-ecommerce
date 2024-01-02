import { prismaClient } from "@/lib/prisma";
import CategoryFilterItem from "./category-filter-item";

const Categories = async () => {
  const categories = await prismaClient.category.findMany({});
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <CategoryFilterItem key={category.id} category={category} />
        ))}
      </div>
    </>
  );
};

export default Categories;
