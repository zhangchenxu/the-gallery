import * as THREE from 'three';
import React, {useState} from 'react';
import {useLoader} from 'react-three-fiber';


function Image ({url, info, bgPosition, position, rotation, onPointerEnter, onPointerLeave}) {
  const texture = useLoader(THREE.TextureLoader, url || 'https://lh3.googleusercontent.com/yOvAGj1XFb4cQsQ2nl4bP-havEqXKlUKJquzc0fX6ELE8kFnOQa1dVh1GauJb4uN9mOUexCmc6tE20iCVH89Ta44FkuIKQc2_ACuyA=w600');
  const [color, setColor] = useState('#000');
  return (
    <mesh>
      <mesh rotation={rotation} position={position} onPointerLeave={() => {
        setColor('#000');
        onPointerLeave()
      }} onPointerEnter={() => {
        setColor('#d8caca');
        onPointerEnter(info);
      }}>
        <planeBufferGeometry attach="geometry" args={[8, 8]}/>
        <meshBasicMaterial attach="material" map={texture}/>
      </mesh>
      <mesh
        position={bgPosition} rotation={rotation}>
        <planeBufferGeometry attach="geometry" args={[8.3, 8.3]}/>
        <meshBasicMaterial attach="material" color={color}/>
      </mesh>
    </mesh>
  );
}

export default Image;
