const Banner = () => {
  return (
    <div className="image-full bg-white relative pb-4">
      <img
        className="opacity-10"
        src="https://i.ibb.co/x1KRTKb/Rectangle-4281.png?fbclid=IwAR1zPuOA5Ioj_PXVV0m6W3RePq6ztA95VmG8hR-ajA6xUChd2gd-ktH63bo"
        alt=""
      />
      <div className="ml-96">
        <div className="absolute -mt-56 text-center">
          <h2 className="text-4xl font-bold -mt-16">
            I Grow By Helping People In Need
          </h2>
          <div className="mt-8">
            <input className="w-64 h-11 border-2 rounded-lg mt-1" type="text" />
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
