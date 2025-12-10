"use client";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import About from "@/components/layout/About";
import OurProducts from "@/components/layout/OurProducts";
import ScrollToTop from "@/components/layout/ScrollTop";
import TrendingProducts from "@/components/layout/TrendingProducts";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-full text-[var(--main-color)] overflow-x-hidden bg-[linear-gradient(135deg,var(--banner-color-1),var(--banner-color-2),var(--banner-color-3),var(--banner-color-4))]">
        <Header />

        {/* Banner Section */}
        <div className="relative px-4 md:px-15  w-full min-h-screen overflow-hidden">

          {/* Banner Image BEHIND content */}



          {/* Title + Borders */}
          <div>
            <div className="border-t-2 border-white"></div>
            <div className="  text-center">

              {/* <h1 className="text-[12rem] font-thin font-crl tracking-[100px]  my-[-55px]">
            AFSANA
             </h1> */}

              <h1 className="text-[12rem] font-thin font-crl flex justify-center space-x-25 my-[-55px]">
                <span>A</span>
                <span>F</span>
                <span>S</span>
                <span>A</span>
                <span>N</span>
                <span>A</span>
              </h1>


            </div>
            <div className="border-b-2 border-white"></div>
          </div>

          <div className="relative flex items-center pb-20  justify-between">
            <div className="w-1/4 flex flex-col space-y-7 py-30 ">
              <h2 className="font-crl font-bold text-5xl">COLLECTION <br />2025</h2>
              <p className=" text-lg">Discover exquisite jewelry inspired by
                the beauty of the heavens. Each piece
                is crafted to bring elegance and grace
                to your most cherished occasions.
              </p>
              <Link href="#" className="inline-block ">
                <button className="cursor-pointer w-fit flex bg-[var(--btn-color)] py-3 px-5 rounded-full items-center gap-3 tracking-[3px] leading-none">
                  <span className="text-lg leading-none">DISCOVER</span>
                  <span className="text-[28px] font-light leading-none">⟶</span>
                </button>
              </Link>


            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 ">
              <Image
                src="/banners/banner.png"
                alt="Banner"
                width={270}
                height={250}
                className="pointer-events-none select-none"
              />
            </div>
            <div className="flex flex-col space-y-50 w-1/3 mt-15">
              <p className="font-crl text-4xl font-bold ">A CELESTIAL TOUCH <br />
                FOR TIMELESS MOMENTS
              </p>

              <div className="flex flex-col space-y-3 ">

                <div className="border-t-2 border-white"></div>

                <Link href="#">
                  <div className="flex  items-center justify-between">
                    <p className="leading-none tracking-[3px]">RINGS</p>
                    <p className="text-[28px] font-light leading-none">⟶</p>
                  </div>
                </Link>

                <div className="border-t-2 border-white"></div>

                <Link href="#">
                  <div className="flex items-center justify-between">
                    <p className="leading-none tracking-[3px]">EARRINGS  </p> <p className="text-[28px] font-light leading-none">⟶</p>
                  </div>
                </Link>

                <div className="border-t-2 border-white"></div>

                <Link href="#">
                  <div className="flex items-center justify-between">
                    <p className="leading-none tracking-[3px]">NECKLACES  </p> <p className="text-[28px] font-light leading-none">⟶</p>
                  </div>
                </Link>

                <div className="border-t-2 border-white"></div>

                <Link href="#">
                  <div className="flex items-center justify-between">
                    <p className="leading-none tracking-[3px]">BRACLETS  </p> <p className="text-[28px] font-light leading-none">⟶</p>
                  </div>
                </Link>
                <div className="border-t-2 border-white"></div>
              </div>
            </div>
          </div>


        </div>
      </div>
      <About />
      <OurProducts />
      <TrendingProducts />
      <Footer />
      <ScrollToTop />
    </>
  );
}
