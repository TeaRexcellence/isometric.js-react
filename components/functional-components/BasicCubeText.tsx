// File: root/components/BasicCubeText.tsx
import React, { useEffect, useRef } from 'react';
import {
  IsometricCanvas,
  IsometricRectangle,
  IsometricText,
  PlaneView
} from '@elchininet/isometric';

const BasicCubeText: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hasMounted = useRef<boolean>(false);

  useEffect(() => {
    if (hasMounted.current) return;

    const container = containerRef.current;
    if (!container) return;

    const cube = new IsometricCanvas({
        container,
        backgroundColor: '#CCC',
        scale: 120,
        width: 500,
        height: 320
    });

    const rectangleCommonProps = { height: 1, width: 1 };

    const textCommonProps = {
        fontSize: 15,
        fillColor: '#666',
        strokeWidth: 0,
        right: 0.5,
        left: 0.5,
        top: 0.5,
        selectable: false
    };

    const pieces = [PlaneView.TOP, PlaneView.FRONT, PlaneView.SIDE].map((view, index) => {
        return {
            face: new IsometricRectangle({...rectangleCommonProps, planeView: view}),
            label: new IsometricText({...textCommonProps, planeView: view}),
            property: ['top', 'right', 'left'][index] as 'top' | 'right' | 'left'
        };
    });

    pieces.forEach((piece) => {

        const { face, label, property } = piece;

        face[property] = 1;
        label[property] = 1;
        label.text = `${property.toUpperCase()} 0º`;

        face.addEventListener('click', () => {
            const rotation = label.rotation + 45;
            label.rotation = rotation === 360 ? 0 : rotation;
            label.text = label.text.replace(/\d+/, label.rotation.toString());
        });

        cube.addChild(piece.face);
        cube.addChild(piece.label);
    });

    hasMounted.current = true;
  }, []);

  return (
    <div ref={containerRef}>
      Basic example with interaction using text
    </div>
  );
};

export default BasicCubeText;
