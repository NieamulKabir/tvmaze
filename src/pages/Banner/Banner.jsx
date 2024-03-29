const Banner = () => {
  return (
    <div>
      <div
        className="hero md:h-[400px]"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold">Tv Maze Show</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-gray-800 hover:bg-gray-600 text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
