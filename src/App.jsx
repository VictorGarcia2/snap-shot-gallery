import { useEffect, useState } from "react";
import { FilterCategory } from "./components/FilterCategory";
import { GalleryPhotos } from "./components/GalleryPhotos";
import { InputSearch } from "./components/InputSearch";
function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("All");
  const defUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=3ddf08ff8583b8f20bd95ae4a7dd388b&tags=${filter}&tag_mode=all&per_page=&format=json&nojsoncallback=1`;
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
  }, [defUrl]);
  return (
    <>
      <div className="flex flex-col justify-center items-center  text-center mt-[4rem]">
        <h1 className="font-Lobster text-6xl md:text-[4rem] mb-9 mt-9 text-[#051C33]">SnapShot</h1>
        <InputSearch filter={filter} setFilter={setFilter} />
        <FilterCategory filter={filter} setFilter={setFilter} />
        <h2 className="font-Josefin font-400 text-6xl md:text-[2rem] text-[#051C33]">
          {filter}
        </h2>
        <GalleryPhotos data={data} />
      </div>
    </>
  );
}
export { App };
