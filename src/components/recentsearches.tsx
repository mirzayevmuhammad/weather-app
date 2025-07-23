const recentsearches = () => {
  return (
    <>
      <div className="w-[391px] h-[330px] bg-slate-100 rounded-xl p-[25px] gap-y-[17px] flex flex-col">
        <h1 className="text-xl">📜 Lasr Searched</h1>
        <div className="flex flex-col gap-y-[9px]">
          <button className="w-[341px] h-[52px] flex justify-between p-[12px_15px] bg-[#DBEDFE] rounded-xl font-[600] hover:bg-[#c2dbf3] hover:ml-[10px]">
            <h1 className="text-lg">Andijan</h1>
            <div className="flex gap-x-[10px]">
              <h1 className="text-sky-600 text-lg">23°C</h1>
              <h1 className="text-red-500">x</h1>
            </div>
          </button>
          <button className="w-[341px] h-[52px] flex justify-between p-[12px_15px] bg-[#DBEDFE] rounded-xl font-[600] hover:bg-[#c2dbf3] hover:ml-[10px]">
            <h1 className="text-lg">Fergana</h1>
            <div className="flex gap-x-[10px]">
              <h1 className="text-sky-600 text-lg">27°C</h1>
              <h1 className="text-red-500">x</h1>
            </div>
          </button>{" "}
          <button className="w-[341px] h-[52px] flex justify-between p-[12px_15px] bg-[#DBEDFE] rounded-xl font-[600] hover:bg-[#c2dbf3] hover:ml-[10px]">
            <h1 className="text-lg">Tashkent</h1>
            <div className="flex gap-x-[10px]">
              <h1 className="text-sky-600 text-lg">22°C</h1>
              <h1 className="text-red-500">x</h1>
            </div>
          </button>{" "}
          <button className="w-[341px] h-[52px] flex justify-between p-[12px_15px] bg-[#DBEDFE] rounded-xl font-[600] hover:bg-[#c2dbf3] hover:ml-[10px]">
            <h1 className="text-lg">Margilan</h1>
            <div className="flex gap-x-[10px]">
              <h1 className="text-sky-600 text-lg">26°C</h1>
              <h1 className="text-red-500">x</h1>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default recentsearches;
