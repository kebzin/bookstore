"use client";
import { Button } from "@/components/ui/button";

import DemoPaymentMethod from "./PaymentMethod";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useState } from "react";
const PopoverDemo = () => {
  const [open, setopen] = useState<boolean>();
  return (
    <Sheet open={open}>
      <SheetTrigger asChild>
        <Button>Make Purchased</Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="w-full">
        <DemoPaymentMethod setopen={setopen} />
      </SheetContent>
    </Sheet>
  );
};
export default PopoverDemo;
