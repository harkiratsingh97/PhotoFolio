export default function Image({ image, index, setShowCarousel }) {
	return (
		<>
			<div
				className="image-div col-md-5 col-12 "
				data-toggle="modal"
				data-target=".bd-example-modal-lg"
				onClick={() => setShowCarousel(index)}
			>
				<div className="imgDiv">
					<img
						alt={image.title}
						src={image.url}
						onError={(e) => {
							e.target.onerror = null;
							e.target.src =
								"https://mellow-seahorse-fc9268.netlify.app/assets/warning.png";
						}}
					/>
				</div>
				<div className="image-title">{image.title}</div>
			</div>
		</>
	);
}
