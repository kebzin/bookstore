"use client";

import React, { createContext, useContext, useState } from "react";
import { books } from "./constant";

// Define types for data
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
  originalPrice?: number;
  rating?: number;
  sold?: number;
}

interface User {
  id: string;
  name: string;
  email: string;
  isAuthenticated: boolean;
}

interface AuthContextType {
  cart: Product[];
  products: Product[];
  user: User | null;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  registerUser: (userData: Omit<User, "id">) => void;
  loginUser: (email: string) => void;
  logoutUser: () => void;
}

// Create Context
const AppContext = createContext<AuthContextType | undefined>(undefined);

// Provider Component
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [products] = useState<Product[]>(books); // Use book data as initial products
  const [user, setUser] = useState<User | null>(null);

  // Add product to cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Remove product from cart
  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Register a new user
  const registerUser = (userData: Omit<User, "id">) => {
    const newUser: User = {
      id: Date.now().toString(),
      ...userData,
      isAuthenticated: true,
    };
    setUser(newUser);
  };

  // Login a user
  const loginUser = (email: string) => {
    // Simple example for authentication
    if (email === "test@example.com") {
      setUser({
        id: "1",
        name: "Test User",
        email,
        isAuthenticated: true,
      });
    }
  };

  // Logout user
  const logoutUser = () => {
    setUser(null);
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        products,
        user,
        addToCart,
        removeFromCart,
        registerUser,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook to use the Context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
