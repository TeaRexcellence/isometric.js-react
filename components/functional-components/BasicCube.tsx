// File: root/components/BasicCube.tsx
import React, { useEffect, useRef } from 'react';
import {
  IsometricCanvas,
  IsometricRectangle,
  PlaneView
} from '@elchininet/isometric';

const BasicCube: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hasMounted = useRef<boolean>(false);

  useEffect(() => {
    if (hasMounted.current) return;

    const container = containerRef.current;
    if (!container) return;

    function toggleColor(this: IsometricRectangle) {
        this.fillColor = this.fillColor === 'white' ? '#EEE' : 'white';
    }

    const cube = new IsometricCanvas({
        container,
        backgroundColor: '#CCC',
        scale: 120,
        width: 500,
        height: 320
    });

    const commonProps = {height: 1, width: 1};
    const topPiece = new IsometricRectangle({...commonProps, planeView: PlaneView.TOP});
    const rightPiece = new IsometricRectangle({...commonProps, planeView: PlaneView.FRONT, right: 1});
    const leftPiece = new IsometricRectangle({...commonProps, planeView: PlaneView.SIDE, left: 1});

    topPiece.top = 1;
    topPiece.addEventListener('click', toggleColor, true);

    rightPiece.right = 1;
    rightPiece.addEventListener('click', toggleColor, true);

    leftPiece.left = 1;
    leftPiece.addEventListener('click', toggleColor, true);

    cube
        .addChild(topPiece)
        .addChild(rightPiece)
        .addChild(leftPiece);

    hasMounted.current = true;
  }, []);

  return (
    <div ref={containerRef}>
      Basic example with interaction
    </div>
  );
};

export default BasicCube;
