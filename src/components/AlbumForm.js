import { useRef } from "react";
import { db } from "../firebase-init";

import { collection, addDoc } from "firebase/firestore";

export default function AlbumForm() {
	let albumNameInput = useRef("");

	async function createAlbumFireStore(album) {
		// Add a new document with a generated id.
		const docRef = await addDoc(collection(db, "albums"), {
			albumName: album,
		});
		albumNameInput.current.value = "";
		console.log("Document written with ID: ", docRef.id);
	}
	return (
		<>
			<div className="row justify-content-center ">
				<div className=" col-lg-7 col-md-10 col-xl-6 col-sm-8 ">
					<div className="createAlbumFormDiv row justify-content-between">
						<h3 className="col-10">Create an Album</h3>
						<input
							className="col-6"
							type="text"
							ref={albumNameInput}
							placeholder="Album Name"
						></input>
						<button className="butn"> Clear</button>
						<button
							className="butn"
							onClick={() => createAlbumFireStore(albumNameInput.current.value)}
						>
							Create
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
