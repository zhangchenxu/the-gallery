import React from 'react';
import {useLoader} from 'react-three-fiber';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {draco} from 'drei';
import {useToast} from '../../hooks/useToast';
import {TextureLoader} from 'react-three-fiber/components';

const Picture = ({
                   url,
                   info,
                   scale,
                   position,
                   rotation,
                   metalness,
                   roughness,
                 }) => {
  const {scene} = useLoader(GLTFLoader, url, draco('https://www.gstatic.com/draco/versioned/decoders/1.4.0/'));

  console.log(position);
  scene.traverse(function (child) {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.toneMapped = false;
      child.material.metalness = metalness;
      child.material.roughness = roughness;
    }
  });
  const {clearToast, showToast} = useToast()

  return (
    <primitive
      onPointerOver={(e) => {
        e.stopPropagation();
        showToast(info.name +info.price)
      }} // see note 1
      onPointerOut={(e) => {
        clearToast()

      }}
      scale={scale}
      position={position}
      rotation={rotation}
      object={scene}
      dispose={null}/>
  );
};

export default Picture;
