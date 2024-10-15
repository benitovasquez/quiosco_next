import { Category } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";

type CategoryiconProps = {
  category: Category;
};

export default function Categoryicon({ category }: CategoryiconProps) {
  return (
    <div
      className={`flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}
    >
      <div className="w-16 h-16 relative">
        <Image
          fill
          src={`/icon_${category.slug}.svg`}
          alt={`Imagen de la categoría ${category.name}`}
        />
      </div>
      <Link 
        className="text-xl font-bold"
        href={`/order/${category.slug}`}
      >{category.name}</Link>
    </div>
  );
}