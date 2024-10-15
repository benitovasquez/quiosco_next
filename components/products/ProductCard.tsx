import { formatCurrency } from "@/src/utils"
import { Product } from "@prisma/client"
import Image from "next/image"

type ProductCardProps = {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border bg-white flex flex-col justify-between h-full min-h-[500px]">
        <div className="overflow-hidden">
            <Image
                width={400}
                height={300}
                src={`/products/${product.image}.jpg`}
                alt={`Imagen platillo ${product.name}`}
                className="w-full h-[300px] object-cover"
            />
            <div className="p-5 flex-grow">
                <h3 className="text-xl font-bold min-h-[60px]">{product.name}</h3>
                <p className="mt-3 font-black text-3xl text-amber-500">
                    {formatCurrency(product.price)}
                </p>
            </div>
        </div>
        <button
            type="button"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-3 p-3 uppercase
            font-bold cursor-pointer"
        >
            Agregar
        </button>
    </div>
  )
}
