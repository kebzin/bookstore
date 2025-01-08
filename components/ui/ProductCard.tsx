"use client";

import React from "react";
import { Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import ViewProduct from "./ViewProduct";
import { useAppContext } from "@/contexProvider";

export const convertToGambianCurrency = (amount: number) => {
  const formattedAmount = amount?.toFixed(2);
  const formattedGambianAmount = formattedAmount.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );
  return `₵ ${formattedGambianAmount}`;
};

const ProductCard = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useAppContext();

  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <Card className="relative w-[100%] transition-transform duration-500 hover:scale-105">
      <CardHeader className="relative p-0">
        <Avatar className="w-[100%] h-48 object-cover rounded-none cursor-pointer">
          <AvatarImage
            className="transition-transform duration-500 hover:scale-105"
            src={product?.image}
            alt={product?.name}
          />
        </Avatar>

        <Button variant="ghost" className="absolute top-2 right-2 p-2">
          <Heart className="w-5 h-5 text-gray-600" />
        </Button>
        <div className="absolute top-2 left-2 px-2 py-1 rounded-md">
          <ViewProduct product={product} />
        </div>
      </CardHeader>
      <CardContent>
        {/* Price section */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-lg font-bold">
            {convertToGambianCurrency(product?.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {convertToGambianCurrency(product?.originalPrice)}
            </span>
          )}
        </div>
        {/* Product name below price */}
        <CardTitle className="text-sm font-semibold mt-1">
          {product.name}
        </CardTitle>
        <CardDescription className="flex items-center text-sm gap-2 mt-2">
          <Star className="w-4 h-4 text-yellow-400" />
          <span>{product.rating || "N/A"}</span>
          <span>•</span>
          <span>{product.sold || 0} Sold</span>
        </CardDescription>
        {/* Add/Remove from Cart Button */}
        <div className="mt-4">
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
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
