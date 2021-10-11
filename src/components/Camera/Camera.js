import React, { useRef, useEffect } from 'react';
import { useThree } from 'react-three-fiber';

const Camera = (props) => {
    const ref = useRef();
    const { setDefaultCamera } = useThree();

    useEffect(() => {
        console.log(ref.current);
        setDefaultCamera(ref.current)
    }, [setDefaultCamera])

    return (
        <perspectiveCamera ref={ref} {...props} />
    )
}

export default Camera;
