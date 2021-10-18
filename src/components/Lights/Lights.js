import React from 'react';
import SpotLight from '../SpotLight/Spotlight';
import PointLight from '../PointLight/PointLight';
import Spotlight from '../SpotLight/Spotlight';
import * as config from '../../config';

const Lights = ({night, performance}) => {

  return (
    <>
            <ambientLight intensity={night ? 0.07 : 0.2}/>
      {/* moon/sunlight */}
      {/*<DirectionalLight*/}
      {/*  position={[29, 50, -60]}*/}
      {/*  target={[-5, -3, 50]}*/}
      {/*  intensity={night ? 0.2 : 0.3}*/}
      {/*  color={night ? 'skyblue' : 'lightgoldenrodyellow'}*/}
      {/*  shadowCamBot={-30}*/}
      {/*  shadowCamTop={30}*/}
      {/*  shadowCamL={53}*/}
      {/*  shadowCamR={-53}*/}
      {/*/>*/}
      {/* moon light */}
      {night ? <Spotlight
        position={[0, 80, -120]}
        target={[80, 150, -200]}
        intensity={0.5}
        penumbra={0.5}
        sNormalBias={0}
        sBias={0}
        angle={-Math.PI}
        decay={2}
      /> : null}

      <PointLight
        intensity={performance ? 0.25 : 0.6}
        position={[0, 19, 13]}
      />
      {performance ?
        <>
          {/*<SpotLight*/}
          {/*  key={''}*/}
          {/*  position={[-32, 18, 12]}*/}
          {/*  target={[-35, 10, 12]}*/}
          {/*  intensity={2}*/}
          {/*  penumbra={0.5}*/}
          {/*  sNormalBias={0}*/}
          {/*  sBias={-0.001}*/}
          {/*  angle={Math.PI / 2}*/}
          {/*  decay={10}*/}
          {/*/>*/}
          <SpotLight
            key={''}
            position={[-32, 18, 25]}
            target={[-35, 12, 25]}
            intensity={2}
            penumbra={0.5}
            sNormalBias={0}
            sBias={-0.001}
            angle={Math.PI / 2}
            decay={10}
          />
          <SpotLight
            key={''}
            position={[-32, 18, 0]}
            target={[-35, 12, 0]}
            intensity={2}
            penumbra={0.5}
            sNormalBias={0}
            sBias={-0.001}
            angle={Math.PI / 2}
            decay={10}
          />
          {
            config.imageOnWallA.map((img, idx) => {
              return <SpotLight
                position={[-25 + 12 * idx, 18, 36]}
                target={[-25 + 12 * idx, 8, 46]}
                intensity={1}
                penumbra={0.5}
                sNormalBias={0}
                sBias={-0.001}
                angle={Math.PI / 4}
                decay={10}
              />;
            })
          }
          {/*{*/}
          {/*    config.imageOnWallA.map((img, idx) => {*/}
          {/*      return <SpotLight*/}
          {/*        position={[-32, 24, -10 + 5 * idx]}*/}
          {/*        target={[-35, 10, -10 + 5 * idx]}*/}
          {/*        intensity={1}*/}
          {/*        penumbra={0.5}*/}
          {/*        sNormalBias={0}*/}
          {/*        sBias={-0.001}*/}
          {/*        angle={Math.PI / 12}*/}
          {/*        decay={10}*/}
          {/*      />;*/}
          {/*    })*/}

          <SpotLight
            position={[32, 18, 0]}
            target={[32, 10, 0]}
            intensity={2}
            penumbra={0.5}
            sNormalBias={0}
            sBias={-0.001}
            angle={Math.PI / 2}
            decay={10}
          />;
          <SpotLight
            position={[32, 18, 20]}
            target={[32, 10, 20]}
            intensity={2}
            penumbra={0.5}
            sNormalBias={0}
            sBias={-0.001}
            angle={Math.PI / 2}
            decay={10}
          />
          </>
        :
        null
      }

        </>
  );

};

export default Lights;
