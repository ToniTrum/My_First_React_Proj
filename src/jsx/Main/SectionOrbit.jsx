import '../../css/Main/SectionOrbit.css'

const SectionOrbit = () => {
	return (
		<section className='section-orbit'>
			<svg>
				<ellipse
					cx="50%"  // Координата X центра эллипса
					cy="50%"  // Координата Y центра эллипса
					rx="40%"  // Радиус по оси X
					ry="45%"  // Радиус по оси Y
				/>
			</svg>

		</section>
	);
};

export default SectionOrbit;
