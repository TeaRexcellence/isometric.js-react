// File: root/components/BasicCubeAnimated.tsx
import React from 'react';
import {
  IsometricCanvas,
  IsometricPath,
  IsometricRectangle,
  PlaneView
} from '@elchininet/isometric';

class BasicCubeAnimated extends React.Component {
  containerRef = React.createRef<HTMLDivElement>();
  hasMounted = false; // Add a flag to check if component has already mounted

  componentDidMount() {
    if (this.hasMounted) return; // If component has already mounted, return early

    const container = this.containerRef.current;
    if (!container) return;

    const cube = new IsometricCanvas({
        container,
        backgroundColor: '#CCC',
        scale: 120,
        width: 500,
        height: 320
    });

    const commonProps = {height: 1, width: 1};

    const duration = 3;

    const rectangleAnimationProps = {
        property: 'height' as const,
        duration,
        values: [1, 0.5, 1]
    };

    const colorAnimationProps = {
        property: 'fillColor' as const,
        duration,
        values: ['#FFF', '#DDD', '#FFF']
    };

    const topPiece = new IsometricPath();
    const rightPiece = new IsometricRectangle({...commonProps, planeView: PlaneView.FRONT, right: 1});
    const leftPiece = new IsometricRectangle({...commonProps, planeView: PlaneView.SIDE, left: 1});

    topPiece
        .moveTo(0, 0, 1)
        .lineTo(1, 0, 1)
        .lineTo(1, 1, 1)
        .lineTo(0, 1, 1);

    topPiece
        .addAnimation({
            property: 'path' as const,
            duration,
            values: [
                'M0 0 1 L1 0 1 L1 1 1 L0 1 1',
                'M0 0 0.5 L1 0 0.5 L1 1 0.5 L0 1 0.5',
                'M0 0 1 L1 0 1 L1 1 1 L0 1 1'
            ]
        })
        .addAnimation(colorAnimationProps);

    rightPiece
        .addAnimation(rectangleAnimationProps)
        .addAnimation(colorAnimationProps);

    leftPiece
        .addAnimation(rectangleAnimationProps)
        .addAnimation(colorAnimationProps);

    cube.addEventListener('click', function(this: IsometricCanvas) {
        if (this.animated) {
            this.pauseAnimations();
        } else {
            this.resumeAnimations();
        }
    });

    cube.addChildren(topPiece, rightPiece, leftPiece);

    this.hasMounted = true; // Set the flag to true after the first mount
  }

  render() {
    return (
      <div ref={this.containerRef}>
        Basic example with interaction and animations
      </div>
    );
  }
}

export default BasicCubeAnimated;
