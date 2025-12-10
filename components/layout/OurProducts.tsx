'use client';

import { CategoryProduct } from '@/types/category';
import Link from 'next/link';

const OurProducts = () => {

    const categoryProducts: CategoryProduct[] = [
        { id: 1, images: '/ourproducts/afsanaear.webp', category: 'Earrings' },
        { id: 2, images: '/ourproducts/afsananecklace.webp', category: 'Necklace' },
        { id: 3, images: '/ourproducts/afsanabangle.webp', category: 'Bangle' },
        { id: 4, images: '/ourproducts/afsanaring.webp', category: 'Ring' }
    ];

    return (
        <section className="">
            {/* Title */}
            <div className="text-5xl text-center py-15 tracking-wider bg-[var(--sb-color)]">
                <h2 className="text-[var(--banner-color-1)] text-3xl md:text-[12.5rem] tracking-wider my-[-50px] font-crl">
                    Our Products
                </h2>
            </div>

            {/* Products Grid */}
            <div className="flex flex-wrap items-center w-full text-[var(--main-color)]">
                {categoryProducts.map(product => (
                    <div
                        key={product.id}
                        className="flex flex-col items-center justify-center relative basis-[50%]">
                        {/* Dynamic Background Image */}
                        <div
                            className="bg-cover bg-center h-[100vh] w-full flex items-end justify-center"

                            style={{ backgroundImage: `url(${product.images})` }}>
                        </div>

                        <div className='absolute top-0 left-[50%] w-[80%] -translate-x-[50%]'>
                            <Link href="#">
                                <div className="flex  items-center justify-between">
                                    <p className="leading-none tracking-[3px] text-6xl font-crl mb-2 pt-5">
                                        {product.category}

                                    </p>
                                    <p className="text-[28px] font-light leading-none">⟶</p>
                                </div>
                            </Link>
                            <div className="border-t-2 border-[var(--main-color)]"></div>

                        </div>



                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurProducts;
