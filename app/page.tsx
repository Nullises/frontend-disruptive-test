"use client";
import Image from "next/image";
import Footer from "./components/footer";
import { Button } from "@material-tailwind/react";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return (
    <>
      <main>
        <>
          {/* Hero Section */}
          <section className="flex flex-col items-start justify-start h-screen bg-gray-100">
            <div className="w-full max-w-1xl mx-6 md:mx-8 lg:max-w-4xl rounded-lg shadow-md overflow-hidden">
              <Image
                src="/hero.png"
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
              />
              <div className="flex items-end justify-start absolute mt-[90vh]">
                <Button
                  size="lg"
                  variant="text"
                  className="flex items-center gap-2 text-white-100 text-1xl ml-10 mt-5"
                  onClick={() => router.push("/sign-in")}
                >
                  ¡Únete ahora!{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </section>
        </>
        <div className="flex justify-center">
          <Footer></Footer>
        </div>
      </main>
    </>
  );
};

export default Home;
