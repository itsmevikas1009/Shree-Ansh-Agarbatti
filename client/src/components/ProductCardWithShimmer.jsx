import { useState } from "react";

const ProductCardWithShimmer = ({ img }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="w-[228px] h-[264px] m-auto my-4">
            <div className="h-[80%] overflow-hidden p-4 relative rounded-lg">
                {/* Shimmer placeholder */}
                {!loaded && (
                    <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
                )}
                <img
                    className={`h-full w-full object-contain transition-opacity duration-700 ease-in-out ${loaded ? "opacity-100" : "opacity-0"
                        }`}
                    src={img?.imgURL}
                    alt={img?.alt}
                    loading="lazy"
                    onLoad={() => setLoaded(true)}
                />
            </div>
            <div className="product-details py-3 px-4 rounded bg-[#e92e37] text-white my-4">
                <h3 className="text-center overflow-hidden font-semibold">{img?.name}</h3>
            </div>
        </div>
    );
};

export default ProductCardWithShimmer;
