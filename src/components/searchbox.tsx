const searchbox = () => {
  return (
    <>
      <div className="flex  items-center  rounded-xl w-[1200px] h-[100px] bg-slate-200 p-[10px_20px] gap-x-[15px]">
        <input
          type="search"
          placeholder="Enter the city name..."
          className="w-[996px] h-[52px] p-[15px_20px]  flex border-2 rounded-lg focus:border-sky-500 focus:outline focus:outline-sky-500 "
        />

        <button className="w-[138px] h-[49px] bg-sky-500 rounded-lg text-slate-50 cursor-pointer hover:bg-[#74B9FF] hover:mb-1 ">
          🔍 Search
        </button>
      </div>
    </>
  );
};

export default searchbox;
