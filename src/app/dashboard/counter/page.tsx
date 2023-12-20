import { CartCounter } from "@/shopping-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Counter",
  description: "Contador de productos en el carrito de compras",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Producto en el carrito de compras</span>

      <CartCounter value={20} />
    </div>
  );
}
