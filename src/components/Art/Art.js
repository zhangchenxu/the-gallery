import React, {useEffect, useState} from 'react';
import * as imageConfig from '../../config';
import Image from '../Picture/Image';
import {notification} from 'antd';

notification.config({
  maxCount: 1,
  placement: 'bottomRight',
  duration: 0
});
const Art = () => {
  const [currentInfo, setCurrentInfo] = useState(null);
  const showToast = (info) => {
    setCurrentInfo(info);
    notification.open({
      key: "nft",
      message: info.name + "  Price: " + info.price,
      description:
        'Press E to trade'
    });

  };
  const clearToast = () => {
    setCurrentInfo(null);
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.code) {
        case 'KeyE':
          currentInfo && window.open(currentInfo.url, '__blank');
          break;
        default:
          console.log(1);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentInfo]);

  const onPointerEnter = (info) => {
    console.log('over');
    showToast(info);
  };
  const onPointerLeave = () => {
    console.log('out');
    clearToast();
    notification.destroy()
  }
  return (
    <>
      {
        imageConfig.imageOnWallC.map((nft, idx) => {
            return <Image
              onPointerEnter={onPointerEnter}
              onPointerLeave={onPointerLeave}
              key={idx}
              info={nft}
              url={nft.image}
              position={[-34.9, 10, -5 + 12 * idx]}
              bgPosition={[-35, 10, -5 + 12 * idx]}
              rotation={[Math.PI / 2, Math.PI / 2, -Math.PI / 2]}
              metalness={0}
              roughness={0.3}
            />;
          }
        )
      }

      {
        imageConfig.imageOnWallA.map((nft, idx) => <Image
          url={nft.image}
          key={idx}
          info={nft}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          position={[-25 + 12 * idx, 10, 39.9]}
          bgPosition={[-25 + 12 * idx, 10, 40]}
          rotation={[0, Math.PI, 0]}
          metalness={0}
          roughness={0.3}
        />)
      }


      {
        imageConfig.imageOnWallC.map((nft, idx) => <Image
          url={nft.image}
          key={idx}
          info={nft}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          position={[34.8, 10, -5 + 12 * idx]}
          bgPosition={[34.9, 10, -5 + 12 * idx]}
          rotation={[Math.PI / 2, -Math.PI / 2, Math.PI / 2]}
          metalness={0}
          roughness={0.3}
        />)
      }

      {/* liam portrait */}

      {/*<Display position={[20, 5, 0]} size={[1, 18, 11]} />*/}

      {/* creation of adam */}
      {

      }
      {/*<Picture*/}
      {/*  url={'assets/3D/Wilson 2/scene.gltf'}*/}
      {/*  scale={[2, 2, 2]}*/}

      {/*  metalness={0.7}*/}
      {/*  roughness={0.8}*/}
      {/*/>*/}

      {/*<Picture*/}
      {/*  url={'assets/3D/Wilson/scene.gltf'}*/}
      {/*  scale={[2, 2, 2]}*/}
      {/*  //34.5*/}
      {/*  position={[34.5, 10, 20]}*/}
      {/*  rotation={[Math.PI / 2, -Math.PI, 0]}*/}
      {/*  metalness={0.7}*/}
      {/*  roughness={0.8}*/}
      {/*/>*/}


      {/*/!* wedding *!/*/}

      {/* <Display position={[20, 5, 25]} size={[1, 18, 11]} />*/}

      {/*/!* wilson portrait *!/*/}
      {/*<Image*/}
      {/*  url={'https://lh3.googleusercontent.com/NGOnVLbW7nrlw4UkpFf6EOirpIGlcW4lPcKrUIjtlRjXIcHEPBWl1g7yAk4tF7-cQ9TgpuGm3tGGpuFdH4OZ03KaaseCLDXFvpWXOg=w600'}*/}
      {/*  scale={[2.5, 2.5, 2.5]}*/}
      {/*  position={[-35, 10, 0]}*/}
      {/*  rotation={[Math.PI / 2, Math.PI / 2, -Math.PI / 2]}*/}
      {/*  metalness={0}*/}
      {/*  roughness={0.3}*/}
      {/*/>*/}
      {/* <Display position={[-20, 5, 0]} size={[1, 18, 11]} />*/}

      {/*/!* old man portrait *!/*/}
      {/*<Picture*/}
      {/*    url={"assets/3D/Wilson/scene.gltf"}*/}
      {/*    scale={[4, 4, 4]}*/}
      {/*    position={[-19.4, 7, 25]}*/}
      {/*    rotation={[0, 0, 0]}*/}
      {/*    metalness={0.9}*/}
      {/*    roughness={0.9}*/}
      {/*/>*/}
      {/* <Display position={[-20, 5, 25]} size={[1, 18, 11]} />*/}

      {/* /!* girl portrait *!/*/}
      {/* <Picture*/}
      {/*    url={"assets/3D/Wilson/scene.gltf"}*/}
      {/*    scale={[6.5, 6.5, 6.5]}*/}
      {/*    position={[-34.6, 10, 12]}*/}
      {/*    rotation={[-Math.PI / 2, 0, 0]}*/}
      {/*    metalness={0.7}*/}
      {/*    roughness={0.8}*/}
      {/*/>*/}

    </>
  );
};

export default Art;
