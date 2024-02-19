import "./App.css";
import AlbumList from "./components/AlbumList";
import AlbumForm from "./components/AlbumForm";
import Navbar from "./components/navbar";
import { db } from "./firebase-init";
import { collection, query, onSnapshot } from "firebase/firestore";

import { useEffect, useState } from "react";
import SelectedAlbum from "./components/SelectedAlbum";

function App() {
	const [albums, setAlbums] = useState([]);

	const [selectedAlbum, setSelectedAlbum] = useState(false);
	const [showCreateAlbum, setShowCreateAlbum] = useState(false);
	const [showAlbums, setShowAlbums] = useState(true);

	useEffect(() => {
		async function getAlbumsFromFireStore() {
			const q = query(collection(db, "albums"));
			const unsubscribe = onSnapshot(
				q,
				(querySnapshot) => {
					const albumss = [];
					querySnapshot.forEach((doc) => {
						albumss.push({ id: doc.id, ...doc.data() });
					});
					setAlbums(albumss);
				},
				(error) => {
					console.error("Error fetching albums:", error);
				}
			);
		}
		getAlbumsFromFireStore();
	}, []);

	useEffect(() => {
		if (selectedAlbum) {
			for (let al of albums) {
				if (al.id === selectedAlbum.id) {
					setSelectedAlbum(al);
					break;
				}
			}
		}
	}, [albums]);

	const openAlbum = (album) => {
		setSelectedAlbum(album);
		setShowAlbums(false);
		setShowCreateAlbum(false);
	};

	const goBackToAlbums = () => {
		setSelectedAlbum(false);
		setShowAlbums(true);
	};

	return (
		<div className="App container-fluid">

			<Navbar />
			{showCreateAlbum && <AlbumForm />}

			{showAlbums && (
				<AlbumList
					openAlbum={openAlbum}
					albums={albums}
					showCreateAlbum={showCreateAlbum}
					setShowCreateAlbum={setShowCreateAlbum}
				/>
			)}

			{selectedAlbum && (
				<SelectedAlbum goBackToAlbums={goBackToAlbums} album={selectedAlbum} />
			)}
		</div>
	);
}

export default App;
