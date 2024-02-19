import ImageForm from "./ImageForm";
import { useState } from "react";
import ImageList from "./ImageList";

export default function SelectedAlbum({ album, goBackToAlbums }) {
	const [showAddImage, setShowAddImage] = useState(false);

	return (
		<>
			<div className="row justify-content-center">
				<div className="col-xl-8 col-lg-8 col-md-8 col-12 ">
					<div className="row justify-content-between">
						{showAddImage && <ImageForm album={album} />}
						<ImageList
							album={album}
							goBackToAlbums={goBackToAlbums}
							setShowAddImage={setShowAddImage}
							showAddImage={showAddImage}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
