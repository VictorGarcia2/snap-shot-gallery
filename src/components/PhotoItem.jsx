

 function PhotoItem(props) {
  let server = props.data.server
  let id = props.data.id
  let secret = props.data.secret
  let url = `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`
  return (
    <>
      <div className=" mt-8 ">
        <img className="object-cover  w-[222px] h-[165px]" src={url} alt={url} />
      </div>
    </>
  );
}
export {PhotoItem}