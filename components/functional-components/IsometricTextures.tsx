// File: root/components/IsometricTextures.tsx
import React, { useEffect, useRef } from 'react';
import { IsometricCanvas, IsometricPath, IsometricRectangle, PlaneView, Axis } from '@elchininet/isometric';

const IsometricTextures: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hasMounted = useRef<boolean>(false);

  useEffect(() => {
    if (hasMounted.current) return;

    const container = containerRef.current;
    if (!container) return;

    const isometric = new IsometricCanvas({
      container,
      backgroundColor: '#8AAA3F',
      scale: 120,
      width: 500,
      height: 320,
    });

    const commonTextureProps = { height: 1, width: 1, pixelated: true };
    const textureSides = { url: '/images/block_side.png', ...commonTextureProps };
    const textureTop = {
      url: '/images/block_top.png',
      planeView: PlaneView.TOP,
      rotation: { axis: Axis.LEFT, value: 26.565 },
      ...commonTextureProps,
    };

    const side = new IsometricPath({
      texture: { planeView: PlaneView.SIDE, ...textureSides },
    });
    const front = new IsometricRectangle({
      planeView: PlaneView.FRONT,
      height: 0.5,
      width: 1,
      texture: textureSides,
    });
    const chop = new IsometricPath({
      texture: textureTop,
    });

    side.draw('M1 1 0 L1 1 0.5 L0 1 1 L0 1 0');
    chop.draw('M1 1 0.5 L0 1 1 L0 0 1 L1 0 0.5');

    (side as any).left = 1;
    (front as any).right = 1;

    isometric.addChildren(side, front, chop);

    hasMounted.current = true;
  }, []);

  return (
    <div ref={containerRef}>
      Using textures
    </div>
  );
};

export default IsometricTextures;
