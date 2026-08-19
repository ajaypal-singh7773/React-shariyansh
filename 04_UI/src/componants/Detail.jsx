const Detail = ({ number, image, description, label }) => {
  return (
    <div className="relative h-[600px] overflow-hidden rounded-3xl">

      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute top-5 left-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl">
        {number}
      </div>

      <p className="absolute bottom-32 left-8 right-8 text-xl leading-relaxed text-white">
        {description}
      </p>

      <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between rounded-full bg-blue-500 px-5 py-3 text-white">
        <span>{label}</span>

        <span className="flex h-8 w-8 items-center justify-center rounded-full text-2xl">
          →
        </span>
      </div>

    </div>
  );
};

export default Detail;