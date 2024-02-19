export default function Album({ album, openAlbum }) {
	return (
		<>
			{" "}
			<div className="col-3 album-card" onClick={() => openAlbum(album)}>
				<div className="album-img">
					<img src="https://cdn-icons-png.flaticon.com/128/833/833281.png"></img>
				</div>
				<div className="album-name">{album.albumName}</div>
			</div>
		</>
	);
}
