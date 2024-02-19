export default function ImageCarousel({ images }) {
	console.log(images);
	return (
		<>
			<div
				id="carouselExampleControls"
				className="carousel slide "
				data-ride="carousel"
			>
				<div className="carousel-inner">
					{images.map((image, index) => (
						<div className={`carousel-item ${index === 5 ? "active" : ""}`}>
							<img
								className="d-block w-100"
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
		</>
	);
}
