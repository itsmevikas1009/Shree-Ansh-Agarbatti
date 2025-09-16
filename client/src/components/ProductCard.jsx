const ProductCard = ({ img }) => {
  return (
    <div className="w-[228px] h-[264px] m-auto my-4">
      <div className="h-[80%] overflow-hidden p-4 rounded-lg">
        <img
          className="h-full w-full object-contain"
          src={img?.imgURL}
          alt={img?.alt}
          loading="lazy"
        />
      </div>
      <div className="product-details py-3 px-4 rounded bg-[#e92e37] text-white my-4">
        <h3 className="text-center overflow-hidden font-semibold">{img?.name}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
