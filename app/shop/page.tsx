"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/ui/ProductCard";
import { useAppContext } from "@/contexProvider";

export default function Home() {
  const { products } = useAppContext();

  return (
    <Card>
      <CardContent>
        <div className="mt-3 space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Products</h2>
          <p className="text-sm text-muted-foreground">
            List of products in the store
          </p>
        </div>
        <div className="items-center justify-between gap-2 flex">
          <Input placeholder="Search products..." />
        </div>
        <div className="mt-10">
          {products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              No products available at the moment.
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
