const GalleryCarousel = ({ gallery }) => {
  return (
    <div className="flex flex-col justify-center items-center md:mx-[16px] hover:cursor-pointer rounded-lg my-4 mx-8 ">
      <img
        className="lg:w-[288px] md:w-[240px] w-[240px] lg:h-[200px] md:h-[200px] h-[200px] rounded-lg "
        src={gallery?.imgURL}
        alt="Shree200"
      />
    </div>
  );
};

export default GalleryCarousel;
