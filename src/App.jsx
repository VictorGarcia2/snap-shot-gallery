import { useEffect, useState } from "react";
import { FilterCategory } from "./components/FilterCategory";
import { GalleryPhotos } from "./components/GalleryPhotos";
import { InputSearch } from "./components/InputSearch";
function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("Montain");
  const [suma, setSuma] = useState(10)
  const defUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=3ddf08ff8583b8f20bd95ae4a7dd388b&tags=${filter}&tag_mode=all&per_page=${suma}&page=1&format=json&nojsoncallback=1`;
  async function fetchData(url) {
    try {
      const response = await fetch(url);
      const rsJson = await response.json();
      return rsJson;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData(defUrl)
      .then((rs) => setData(rs.photos.photo))
      .catch((error) => console.error(error));
      setTimeout(() => {
        setLoading(false);
      }, 1600);
  }, [defUrl]);
  const [load, setLoading] = useState(true);

  const loader = () => {
    return (
      <>
        <div className="flex flex-col justify-center items-center  text-center sm:mt-[4rem]">
          <h1 className="font-Lobster text-6xl font-bold md:text-[4rem] mb-9  sm:mt-9 text-[#051C33]">
            SnapShot
          </h1>
          <InputSearch filter={filter} setFilter={setFilter} />
          <FilterCategory filter={filter} setFilter={setFilter} />
          <h2 className="font-Josefin font-400 text-4xl md:text-[2rem] text-[#051C33]">
            {filter} Pictures
          </h2>
          <img
            className="w-36 mt-20"
            src="/svg/load/Rolling@4x-1.0s-200px-200px.gif"
            alt=""
          />
        </div>
      </>
    );
  };
  if (load) {
    return loader();
  } else {
    return (
      <>
        <div className="flex flex-col justify-center items-center  text-center sm:mt-[4rem]">
          <h1 className="font-Lobster text-6xl font-bold md:text-[4rem] mb-9 mt-9 text-[#051C33]">
            SnapShot
          </h1>
          <InputSearch filter={filter} setFilter={setFilter} />
          <FilterCategory filter={filter} setFilter={setFilter} />
          <h2 className="font-Josefin font-400 text-4xl md:text-[2rem] text-[#051C33]">
            {filter} Pictures
          </h2>
          <GalleryPhotos data={data} />
          <button className="w-[365px] my-11 sm:w-[100px] h-[34px] bg-[#051B30] flex items-center justify-center rounded-md text-white" onClick={()=> setSuma(suma + 10) }>Cargar mas</button>
        </div>
      </>
    );
  }
}
export { App };
