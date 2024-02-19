import { useRef } from "react";
import { db } from "../firebase-init";

import { getDoc, doc, updateDoc } from "firebase/firestore";

export default function ImageForm({ album }) {
	let imageNameInput = useRef("");
	let imageUrlInput = useRef("");
	async function createImageFireStore(img) {
		const albumDocRef = doc(db, "albums", album.id);
		const albumDocSnapshot = await getDoc(albumDocRef);

		if (albumDocSnapshot.exists()) {
			// Get the existing images array from the document data
			const albumData = albumDocSnapshot.data();
			const existingImages = albumData.images || [];

			// Append the new image to the existing images array
			const updatedImages = [...existingImages, img];

			// Update the document with the modified images array
			await updateDoc(albumDocRef, { images: updatedImages });
		} else {
			console.error("Album document does not exist:", album.id);
		}
		imageNameInput.current.value = "";
		imageUrlInput.current.value = "";

	}
	return (
		<>
			<div className="createImageFormDiv row justify-content-between ">
				<h3>Add an Image</h3>
				<input
					className="col-lg-4 col-md-3 col-sm-3 "
					type="text"
					ref={imageNameInput}
					placeholder="Title"
				></input>
				<input
					className="col-lg-4 col-md-3 col-sm-3 "
					type="text"
					ref={imageUrlInput}
					placeholder="Image URL"
				></input>
				<button className="butn"> Clear</button>
				<button
					className="butn"
					onClick={() =>
						createImageFireStore({
							title: imageNameInput.current.value,
							url: imageUrlInput.current.value,
						})
					}
				>
					Create
				</button>
			</div>
		</>
	);
}
