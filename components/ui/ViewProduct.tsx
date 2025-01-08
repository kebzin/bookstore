"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { convertToGambianCurrency } from "./ProductCard";
import { Avatar, AvatarImage } from "./avatar";
import { useAppContext } from "@/contexProvider";
import Cart from "../Cart";
// import Checkout from "../Checkout";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description?: string;
  author?: string;
  category?: string;
  originalPrice?: number;
}

const ViewProduct = ({ product }: { product: Product }) => {
  const { cart, addToCart, removeFromCart } = useAppContext();
  // const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">View</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{product.name}</SheetTitle>
        </SheetHeader>

        <div className="mt-4">
          <Avatar className="w-[100%] h-48 object-cover rounded-none cursor-pointer">
            <AvatarImage
              className="transition-transform duration-500 hover:scale-105"
              src={product?.image}
              alt={product?.name}
            />
          </Avatar>
          <h3 className="text-xl font-bold">
            {convertToGambianCurrency(product.price)}
          </h3>
          <p className="text-muted-foreground">{product?.description}</p>
          <p>Author: {product?.author || "Unknown"}</p>
          <p>Category: {product?.category || "Uncategorized"}</p>
          {product.originalPrice && (
            <p className="text-gray-500 line-through">
              Original Price: {convertToGambianCurrency(product.originalPrice)}
            </p>
          )}
        </div>

        <SheetFooter className="mt-6 flex flex-col gap-3">
          {isInCart ? (
            <Button
              variant="destructive"
              onClick={() => removeFromCart(product.id)}
            >
              Remove from Cart
            </Button>
          ) : (
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
          )}
          <Button
          // variant="primary"
          >
            <Cart />
          </Button>
          <SheetClose asChild>
            <Button variant="secondary">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>

      {/* Checkout Sheet */}
    </Sheet>
  );
};

export default ViewProduct;
