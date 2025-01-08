"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { User } from "lucide-react";
import Cart from "../Cart";
import { useAppContext } from "@/contexProvider";
const Navbar = () => {
  const { user } = useAppContext();
  return (
    <header className="bg-gray-100 shadow sticky">
      <div className="text-center py-2 bg-gray-200">
        <p className="text-sm italic text-gray-700">
          Designed and coded with ❤ by Allies Group SAAD
        </p>
      </div>
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/crest.jpg"
            alt="GCTU Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1 className="text-xl font-bold">GCTU BOOKSTORE</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/about">About Contact</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {user !== null || user !== undefined ? (
            ""
          ) : (
            <Link href="/sigin">Sign In</Link>
          )}

          <Link href="/cart">
            <Link href="/sigin">
              {" "}
              <User />
            </Link>
          </Link>

          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
