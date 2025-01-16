import {PhotoItem} from "./PhotoItem";

 function GalleryPhotos({data}) {
  return (
    <>
    {<div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 mb-5">
      {
      data&&
      data.map(dt =>(
          <PhotoItem data={dt}/>
      ))}
    </div>}
    </>
  )
}

export {GalleryPhotos}