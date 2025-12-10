import Link from "next/link";

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (

        <footer className="text-[var(--main-color)] bg-[linear-gradient(135deg,var(--banner-color-1),var(--banner-color-2),var(--banner-color-3),var(--banner-color-4))] sticky top-0 z-50 tracking-widest">
            <div className="flex flex-col space-y-5 items-center justify-between  px-6 py-6 md:py-10 mx-auto max-w-7xl ">
                {/* Navigation */}
                <div className="flex flex-col w-full md:flex-row items-center justify-between  gap-x-10">
                    <nav className="flex mb-5 md:mb-0  gap-8 text-md font-medium ">
                        <Link href="/">Home</Link>
                        <Link href="/shop">Shop</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </nav>

                    <div className="flex gap-10">
                        <div className="flex gap-6 items-center justify-center">
                            <Link href='/'><FaFacebook className="w-5 h-5 " /></Link>
                            <Link href='/'><FaInstagram className="w-5 h-5 " /></Link>
                            <Link href='/'><FaYoutube className="w-6 h-6" /></Link>
                            <Link href='/'><FaTwitter className="w-5 h-5 " /></Link>

                        </div>
                    </div>

                </div>
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
                <div className="flex flex-col w-full md:flex-row items-center justify-between  gap-x-10">
                    <nav className="flex mb-5 md:mb-0  gap-8 text-md font-medium ">
                        <Link href="/">RINGS</Link>
                        <Link href="/shop">NECKLACES</Link>
                        <Link href="/about">EARRINGS</Link>
                        <Link href="/contact">BRACELETS</Link>
                    </nav>



                </div>

            </div>

            <div className="text-center text-sm py-5">
                <p>Copyright © 2025 <strong>AFSANAJEWELS</strong> | All rights reserved</p>
            </div>
        </footer>


    )
}

export default Footer
