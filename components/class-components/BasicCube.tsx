// File: root/components/BasicCube.tsx
import React from 'react';
import {
  IsometricCanvas,
  IsometricRectangle,
  PlaneView
} from '@elchininet/isometric';

class BasicCube extends React.Component {
  containerRef = React.createRef<HTMLDivElement>();
  hasMounted = false; // Add a flag to check if component has already mounted

  componentDidMount() {
    if (this.hasMounted) return; // If component has already mounted, return early

    const container = this.containerRef.current;
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

    this.hasMounted = true; // Set the flag to true after the first mount
  }

  render() {
    return (
      <div ref={this.containerRef}>
        Basic example with interaction
      </div>
    );
  }
}

export default BasicCube;
