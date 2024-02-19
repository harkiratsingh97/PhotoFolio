import Album from "./Album";

export default function AlbumList({
	albums,
	setShowCreateAlbum,
	showCreateAlbum,
	openAlbum,
}) {
	return (
		<>
			<div className="row justify-content-center">
				<div className="albums-titlebar row col-8 justify-content-between">
					<div className="album-name-images col-6">Your Albums</div>
					<button
						className="butn"
						onClick={() => setShowCreateAlbum(!showCreateAlbum)}
					>
						{showCreateAlbum ? "Cancel" : "Add Album"}
					</button>
				</div>
				<div className="albumsContainer row justify-content-between col-8">
					{albums.map((album) => (
						<Album key={album.id} openAlbum={openAlbum} album={album}></Album>
					))}
				</div>
			</div>
		</>
	);
}