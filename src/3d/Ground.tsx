import React, { useEffect } from 'react';
import { Vector3 } from 'three';

interface Props {}

export const Ground: React.FC<Props> = props => {
	useEffect(() => {
		console.log(this);
	}, []);

	return (
		<mesh
			rotation={[-Math.PI / 2, 0, 0]}
			position={new Vector3(0, 0, 0)}
			scale={200}
		>
			<planeBufferGeometry attach="geometry" />
			<meshLambertMaterial attach="material" color="rgb(100,90,100)" />
		</mesh>
	);
};
