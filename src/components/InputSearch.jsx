function InputSearch({ filter, setFilter }) {
   const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target) 
    const searchValue = formData.get("search");  
    setFilter(searchValue)
  } 

  return (
    <>
    <form action="" onSubmit={handleSubmit}>
      <div className="bg-[#edeff0] flex items-center  w-[365px] h-[50px]  rounded-md border-4 border-[#D7DBDF]">
        <input
          className=" font-Josefin font-400 bg-transparent px-4 w-full"
          type="text"
          name="search"
          placeholder="Search..."
          onChange={(e) => handleSubmit(e.target.value)}
        />
        <button type="submit" className="bg-[#051C33] w-[73px] h-[50px] -mx-2 rounded-e-md items-center flex justify-center ">
          <svg height="32" width="32" >
            <path
              d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
              fill="white"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </form>
    </>
  );
}
//Hola
export { InputSearch };
