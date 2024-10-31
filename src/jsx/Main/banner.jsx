import React from 'react';
import { motion } from 'framer-motion';
import '../css/banner.css'

const AnimatedEllipse = () => {
	return (
		<motion.svg
		initial={{ scale: 0.5, opacity: 0 }}
		animate={{ scale: 1, opacity: 1 }}
		transition={{
			type: 'spring',
			stiffness: 100,
			damping: 10,
			duration: 1,
		}}
		>
			<motion.ellipse
				cx="50%"      // Координата X центра эллипса
				cy="50%"       // Координата Y центра эллипса
				rx="40%"       // Радиус по оси X
				ry="45%"       // Радиус по оси Y
				fill="blue"   // Цвет заливки
				stroke="black" // Цвет контура
				strokeWidth="2" // Толщина контура
			/>
		</motion.svg>
	);
};

export default AnimatedEllipse;
