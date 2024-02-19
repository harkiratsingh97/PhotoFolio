export default function Image({ image }) {
	return (
		<>
			<div className="image-div col-5 ">
				<img alt={image.title} src={image.url}></img>
				<div className="image-title">{image.title}</div>
			</div>
		</>
	);
}
