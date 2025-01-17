



function FilterCategory({
  setFilter
}) {  
  return (
    <>
      <div className="flex flex-col sm:flex-row mt-14 mb-14 gap-4 ">
        <div className="w-[365px] sm:w-[100px] h-[34px] bg-[#051B30] flex items-center justify-center rounded-md">
        <button 
        className=" text-white w-screen font-Josefin font-400" 
        onClick={(e)=> setFilter(e.target.textContent)}>Montain</button>
        </div>
        <div className="w-[365px] sm:w-[100px] h-[34px] bg-[#051B30] flex items-center justify-center rounded-md">
        <button className="  w-screen text-white font-Josefin font-400"
        onClick={(e)=> setFilter(e.target.textContent)}
        >Beaches</button>
        </div>
        <div className="w-[365px] sm:w-[100px] h-[34px] bg-[#051B30] flex items-center justify-center rounded-md">
        <button className=" text-white w-screen font-Josefin font-400"
        onClick={(e)=> setFilter(e.target.textContent)}
        >Birds</button>
        </div>
        <div className="w-[365px] sm:w-[100px] h-[34px] bg-[#051B30] flex items-center justify-center rounded-md">
        <button className=" text-white w-screen font-Josefin font-400"
        onClick={(e)=> setFilter(e.target.textContent)}
        >Food</button>
        </div>
      </div>
    </>
  );
}



export { FilterCategory}

