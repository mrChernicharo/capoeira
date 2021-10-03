import React, { Suspense, useRef } from 'react';
import { Canvas, Vector3 } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Abe from './3d/CapoeiraAbe';
import { Ground } from './3d/Ground';

import './index.css';

export default function App() {
	return (
		<>
			<h1>Hello Capoeira</h1>

			<Canvas>
				<OrbitControls position={[0, -40, 0]} />
				<directionalLight intensity={0.5} />
				<pointLight intensity={1} position={[10, 10, -20]} />
				<ambientLight intensity={0.4} />
				<Suspense fallback={'...Loading'}>
					<Stars />
					<Abe />
					<Ground />
				</Suspense>
			</Canvas>
		</>
	);
}
