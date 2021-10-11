import React, {useEffect, useRef} from 'react';
import {extend, useThree} from 'react-three-fiber';
import {PointerLockControls as PointerLockControlsExt} from 'three/examples/jsm/controls/PointerLockControls';

extend({PointerLockControlsExt});

const PointerLockControls = (props) => {
  const {camera, gl} = useThree();
  const controls = useRef();

  useEffect(() => {
    document.addEventListener('click', (e) => {
      console.log(e.target.className);
      if (e.target.className.includes("start_control")) {
        controls.current.lock();
      }
    });
  }, []);

  return (
    <pointerLockControlsExt
      ref={controls}
      args={[camera, gl.domElement]}
      {...props}
    />
  );
};

export default PointerLockControls;
