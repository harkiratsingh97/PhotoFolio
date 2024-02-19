import Image from "./Image";

export default function ImageList({
	album,
	showAddImage,
	setShowAddImage,
	goBackToAlbums,
}) {
	return (
		<>
			<div className="images-titlebar row">
				<button className="back-btn col-lg-1" onClick={goBackToAlbums}>
					back
				</button>
				<div className="col-lg-10">Images in {album.albumName}</div>
				<button
					className="col-lg-1"
					onClick={() => setShowAddImage(!showAddImage)}
				>
					{showAddImage ? "Cancel" : "Add Image"}
				</button>
			</div>
			<div className="albumsContainer row justify-content-around">
				{album.images && album.images.map((img) => <Image image={img}></Image>)}
			</div>
		</>
	);
}
