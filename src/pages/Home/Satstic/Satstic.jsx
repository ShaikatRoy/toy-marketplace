const Satstic = () => {
  return (
    <div className="flex justify-center items-center my-10" data-aos="flip-left">
      <div className="stats shadow flex flex-wrap">
        <div className="stat place-items-center w-full sm:w-1/2 md:w-1/3">
          <div className="stat-title">Sells</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">From January to February </div>
        </div>

        <div className="stat place-items-center w-full sm:w-1/2 md:w-1/3">
          <div className="stat-title">Products</div>
          <div className="stat-value text-amber-600">4,200</div>
          <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>

        <div className="stat place-items-center w-full sm:w-1/2 md:w-1/3">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default Satstic;
