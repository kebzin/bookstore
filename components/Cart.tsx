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
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useAppContext } from "@/contexProvider";
import PopoverDemo from "./PopoverDemo";

const Cart = () => {
  const { cart } = useAppContext();

  // calculate the total prince in the cart
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <Sheet>
      <SheetTrigger className="relative" asChild>
        <Button size={"icon"} className="">
          <span className=" absolute left-[-10px] w-5 h-5 rounded-full bg-red-600">
            {cart.length}
          </span>

          <ShoppingCart />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Checkout</SheetTitle>
        </SheetHeader>

        <div className="mt-4 space-y-4">
          {cart?.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-muted-foreground">{item.price}</p>
              </div>
              <div className="w-16 h-16">
                <Image
                  width={200}
                  height={200}
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          ))}
          <div className="text-right font-bold">Total: {totalPrice}</div>
        </div>

        <SheetFooter className="mt-6">
          <PopoverDemo />
          <SheetClose asChild>
            <Button variant="secondary">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
