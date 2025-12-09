import Image from "next/image";
import Link from "next/link";

const About = () => {
    return (
        <div className="relative w-full px-4 md:px-15 overflow-hidden py-15 bg-[var(--sb-color)]">

            <div className='flex w-full items-center justify-between'>
                <div className='basis-[45%] flex-col space-y-8'>
                    <div className="text-[var(--banner-color-1)]">
                        <p className="font-crl text-9xl">ABOUT</p>
                        <p className="font-crl text-9xl mt-[-25px]">US</p>
                    </div>

                    <div className="flex flex-col space-y-4 tracking-wider">
                        <p className="basis-[90%]">
                            We carefully select the finest materials-precious metals,
                            sparkling gemstones, and luxurious pearls-to create
                            each piece. Every design is meticulously crafted by
                            skilled artisans, ensuring that each item is not only
                            beautiful but built to last.
                        </p>
                        <p className="basis-[90%]">
                            Our commitment to excellence is reflected in every detail,
                            from the intricate designs to the flawless finish. At
                            Celestique, we are dedicated to creating jewelry that
                            transcends trends, offering pieces that will remain
                            cherished for generations.
                        </p>
                        <p>
                            Whether you're celebrating love, marking a special
                            occasion, or simply treating yourself, we invite you to
                            explore our collection and experience the celestial
                            elegance that defines us.
                        </p>
                    </div>

                    <Link href="#" className="inline-block ">
                        <button className="cursor-pointer w-fit text-white flex bg-[var(--btn-color)] py-3 px-5 rounded-full items-center gap-3 tracking-[3px] leading-none">
                            <span className="text-lg leading-none ">MORE ABOUT US</span>
                            <span className="text-[28px] font-light leading-none">⟶</span>
                        </button>
                    </Link>
                </div>



                <div className='basis-[45%] flex flex-col space-y-30'>

                    <div>
                        <p>At Celestique, we believe that jewelry is more than just an
                            accessory; it's a timeless expression of elegance and a
                            celebration of life's most precious moments. With a legacy
                            spanning over decades, our brand has become
                            synonymous with exceptional craftsmanship and
                            sophistication.
                        </p>
                    </div>

                    <div
                        className=" bg-[#e4e1d7] w-full h-[430px] rounded-tl-[60px] relative overflow-visible  "
                    >
                        {/* Positioned Image */}
                        <Image
                            src="/banners/models.png"
                            alt="Models"
                            width={500}
                            height={700}
                            className=" absolute center top-0 -translate-y-15  h-auto pointer-events-none select-none"
                        />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default About
