"use client";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { HelpCircle, Lock, StopCircle, Truck, User } from "lucide-react";
import { useAppContext } from "@/contexProvider";

const Home = () => {
  const { products } = useAppContext();

  return (
    <>
      <Head>
        <title>GCTU Bookstore</title>
        <meta name="description" content="Your one-stop shop for All Books" />
      </Head>

      {/* Header */}

      {/* Banner */}
      <section
        className="bg-gray-50 text-center py-12 pt-20"
        style={{ backgroundImage: "url(/sca.jpg)" }}
      >
        <h2 className="text-3xl font-bold mb-4">
          Welcome to the GCTU Online Bookstore
        </h2>
        <p className="text-lg italic mb-6">Your one-stop shop for All Books</p>
        <Link href="/shop">Shop Now</Link>
      </section>

      {/* Services Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Truck />,
              title: "Free Delivery",
              desc: "Order over $10",
            },
            {
              icon: <Lock />,
              title: "Secure Payment",
              desc: "100% Secure payment",
            },
            {
              icon: <StopCircle />,
              title: "Easy Returns",
              desc: "48hr Return",
            },
            {
              icon: <HelpCircle />,
              title: "24/7 Support",
              desc: "Call Us Anytime",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-4 border rounded-lg shadow hover:shadow-lg"
            >
              {service.icon}
              <h4 className="font-semibold text-lg">{service.title}</h4>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className="py-8">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6">New Arrivals</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {products.map((item) => (
              <Link key={item.id} href={"/shop"}>
                <div className="bg-white border rounded-lg shadow hover:shadow-lg cursor-pointer p-4">
                  <Image
                    src={item.image}
                    alt={`Book ${item.id}`}
                    width={150}
                    height={200}
                    className="rounded"
                  />
                  <div className="text-center mt-4">
                    <p className="font-semibold"> {item.name}</p>
                    <p className="text-gray-500">₵{item.price}</p>
                    <p>{item?.auto}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-blue-500 text-white py-8 text-center">
        <h4 className="text-xl font-semibold mb-4">
          Stay in the Know – Sign Up for Updates!
        </h4>
        <form className="flex justify-center space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded w-1/3"
          />
          <button
            type="submit"
            className="bg-white text-blue-500 px-6 py-2 rounded hover:bg-gray-100"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
    </>
  );
};

export default Home;
