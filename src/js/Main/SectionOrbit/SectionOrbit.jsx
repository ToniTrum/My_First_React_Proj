import { useRef } from 'react';
import '../../../css/Main/SectionOrbit/SectionOrbit.css'
import Satellites from './Satellites.jsx';

const SectionOrbit = () => {
	/* useRef -- позволяет сохранить некоторый объект, который можно 
	   изменять и который хранится в течение всей жизни компонента. */
	const ellipseRef = useRef("ellipse")

	return (
		<section className='section-orbit'>
			<svg>
				<ellipse
					ref={ellipseRef}
					cx="50%"  // Координата X центра эллипса
					cy="50%"  // Координата Y центра эллипса
					rx="40%"  // Большая полуось
					ry="45%"  // Малая полуось
				/>
			</svg>
			<Satellites ellipseRef={ellipseRef} />
		</section>
	);
};

export default SectionOrbit;
