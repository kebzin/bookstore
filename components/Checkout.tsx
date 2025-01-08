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
import { convertToGambianCurrency } from "./ui/ProductCard";
import { Avatar, AvatarImage } from "./ui/avatar";

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
};

const Checkout = ({
  cart,
  onClose,
}: {
  cart: CartItem[];
  onClose: () => void;
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="hidden" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Checkout</SheetTitle>
        </SheetHeader>

        {/* <div className="mt-4 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {convertToGambianCurrency(item.price)}
                </p>
              </div>
              <div className="w-16 h-16">
                <Avatar className="w-[100%] h-48 object-cover rounded-none cursor-pointer">
                  <AvatarImage
                    className="transition-transform duration-500 hover:scale-105"
                    src={item?.image}
                    alt={item?.name}
                  />
                </Avatar>
              </div>
            </div>
          ))}
          <div className="text-right font-bold">
            Total: {convertToGambianCurrency(totalPrice)}
          </div>
        </div> */}

        <SheetFooter className="mt-6">
          <Button
            onClick={() => {
              alert("Purchase Successful! 🎉");
              onClose();
            }}
          >
            Confirm Purchase
          </Button>
          <SheetClose asChild>
            <Button variant="secondary">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Checkout;
