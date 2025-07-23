const header = () => {
  return (
    <>
      <div className="flex justify-between items-center  rounded-xl w-[1200px] h-[100px] bg-slate-100 p-[10px_20px] ">
        <div className="flex  items-center w-full w-350">
          <img src="/src/assets/icons/images.png" alt="" className="w-12 " />
          <h2 className="text-2xl">Weather App</h2>
        </div>
        <div className=" flex w-[311px] flex-col pl-20px">
          <h3 className="font-bold text-right text-lg">15:02:25</h3>
          <span className="opacity-45 text-right ">2025-Year 15 February Saturday</span>
          <span className="text-left text-xs text-sky-500">📍 Fergana Uzbekistan</span>
        </div>
      </div>
    </>
  );
};

export default header;
