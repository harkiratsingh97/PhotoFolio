import ImageCarousel from "./ImageCarousel";
import Image from "./image";
import { useState } from "react";
export default function ImageList({
	album,
	showAddImage,
	setShowAddImage,
	goBackToAlbums,
}) {
	const [showCarousel, setShowCarousel] = useState(0);

	return (
		<>
			{/* <button
				type="button"
				class="btn btn-primary"
				data-toggle="modal"
				data-target=".bd-example-modal-lg"
			>
				Large modal
			</button> */}

			<div
				className="modal fade bd-example-modal-lg"
				tabindex="-1"
				role="dialog"
				aria-labelledby="myLargeModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-lg">
					<div className="modal-content">
						<div
							id="carouselExampleControls"
							className="carousel slide "
							data-ride="carousel"
						>
							<div className="carousel-inner">
								{album.images &&
									album.images.map((image, index) => (
										<div
											className={`carousel-item ${
												index === showCarousel ? "active" : showCarousel
											}`}
										>
											<img
												className="d-block carousel-img w-100"
												src={image.url}
												alt="First slide"
												onError={(e) => {
													e.target.onerror = null;
													e.target.src =
														"https://mellow-seahorse-fc9268.netlify.app/assets/warning.png";
												}}
											/>
										</div>
									))}
							</div>
							<a
								className="carousel-control-prev"
								href="#carouselExampleControls"
								role="button"
								data-slide="prev"
							>
								<span
									className="carousel-control-prev-icon"
									aria-hidden="true"
								></span>
								<span className="sr-only">Previous</span>
							</a>
							<a
								className="carousel-control-next"
								href="#carouselExampleControls"
								role="button"
								data-slide="next"
							>
								<span
									className="carousel-control-next-icon"
									aria-hidden="true"
								></span>
								<span className="sr-only">Next</span>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="images-titlebar row justify-content-between">
				<button className="back-btn" onClick={goBackToAlbums}>
					back
				</button>
				<div className="album-name-images col-6">
					Images in {album.albumName}
				</div>
				<button
					className="cancel-btn"
					onClick={() => setShowAddImage(!showAddImage)}
				>
					{showAddImage ? "Cancel" : "Add Image"}
				</button>
			</div>
			<div className="albumsContainer row justify-content-around">
				{album.images &&
					album.images.map((img, index) => (
						<Image
							setShowCarousel={setShowCarousel}
							index={index}
							image={img}
						></Image>
					))}
			</div>
		</>
	);
}
