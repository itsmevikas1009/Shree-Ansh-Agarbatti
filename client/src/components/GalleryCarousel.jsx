const GalleryCarousel = ({ gallery }) => {
  return (
    <div className="flex flex-col justify-center items-center md:mx-[16px] hover:cursor-pointer rounded-lg my-4 mx-8 ">
      <img
        className="w-[320px] h-[228px] rounded-lg "
        src={gallery?.imgURL}
        alt="Shree200"
      />
    </div>
  );
};

export default GalleryCarousel;
