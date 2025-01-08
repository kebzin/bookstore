"use client";
import { Button } from "@/components/ui/button";

import DemoPaymentMethod from "./PaymentMethod";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
const PopoverDemo = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Make Purchased</Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="w-full">
        <DemoPaymentMethod />
      </SheetContent>
    </Sheet>
  );
};
export default PopoverDemo;
