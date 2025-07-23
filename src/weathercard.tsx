const weathercard = () => {
  return (
    <>
      <div className="w-[783px] h-[642px] bg-slate-100 rounded-xl p-[40px] ">
        <div className="w-[703px] h-[32px] relative flex justify-between  mb-[70px]">
          <div className="flex flex-col mx-auto items-center ">
            <h1 className="text-4xl font-semibold">FERGANA</h1>
            <span className="bg-slate-100 opacity-50">Uzbekiston</span>
          </div>
          <div className="absolute right-0">
            <span className="w-[55px] h-[55px] flex items-center justify-center rounded-[50%] border-2  text-center  text-2xl shadow-xl cursor-pointer hover:bg-[#fd79a8] hober:w-[70px] hover:h-[60px]">
              ⭐
            </span>
          </div>
        </div>
        <div className="flex justify-center  items-center flex-col gap-y-[20px]">
          <span className="text-8xl ">☀️</span>
          <span className="text-2xl font-semibold">Sunny</span>
          <span className="text-6xl text-[#0984e3] font-semibold">25°C</span>
          <span className="bg-slate-100 opacity-50 mb-4">To Feel: 28°C </span>
        </div>
        <div className="   grid grid-cols-2 gap-4 font-[600]">
          <button className="w-[341px] h-[52px] bg-[#d1e3f5] rounded-xl  ">
            💧 Wet: 60%
          </button>
          <button className="w-[341px] h-[52px] bg-[#d1e3f5] rounded-xl  ">
            🌬️ Wind: 12km/h
          </button>
          <button className="w-[341px] h-[52px] bg-[#d1e3f5] rounded-xl  ">
            📊 Pressure: 1013 hPa
          </button>
          <button className="w-[341px] h-[52px] bg-[#d1e3f5] rounded-xl  ">
            👁️ See: 10km
          </button>
          <button className="w-[341px] h-[52px]  ">🌅 6:30</button>
          <button className="w-[341px] h-[52px]  ">🌇 19:45</button>
        </div>
      </div>
    </>
  );
};

export default weathercard;
