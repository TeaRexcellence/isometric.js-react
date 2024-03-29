// File: root/components/IsometricPathCurves.tsx
import React from 'react';
import {
  IsometricCanvas,
  IsometricPath
} from '@elchininet/isometric';

class IsometricPathCurves extends React.Component {
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

    const under = new IsometricPath({ fillColor: '#EEE' });
    const top = new IsometricPath();
    const right = new IsometricPath();
    const left = new IsometricPath();

    under
        .mt(0, 0, 1)
        .mt(0.25, 0, 1).ct(0.5, 0, 0.75, 0.75, 0, 1).lt(1, 0, 1)
        .lt(1, 0, 0.75).ct(0.75, 0, 0.5, 1, 0, 0.25).lt(1, 0, 0)
        .lt(1, 0.25, 0).ct(0.75, 0.5, 0, 1, 0.75, 0).lt(1, 1, 0)
        .lt(0.75, 1, 0).ct(0.5, 0.75, 0, 0.25, 1, 0).lt(0, 1, 0)
        .lt(0, 1, 0.25).ct(0, 0.75, 0.5, 0, 1, 0.75).lt(0, 1, 1)
        .lt(0, 0.75, 1).ct(0, 0.5, 0.75, 0, 0.25, 1).lt(0, 0, 1);

    top
        .mt(0, 0, 1)
        .lt(0.25, 0, 1).ct(0.5, 0.25, 1, 0.75, 0, 1).lt(1, 0, 1)
        .lt(1, 0.25, 1).ct(0.75, 0.5, 1, 1, 0.75, 1).lt(1, 1, 1)
        .lt(0.75, 1, 1).ct(0.5, 0.75, 1, 0.25, 1, 1).lt(0, 1, 1)
        .lt(0, 0.75, 1).ct(0.25, 0.5, 1, 0, 0.25, 1).lt(0, 0, 1);

    right
        .mt(1, 0, 1)
        .lt(1, 0, 0.75).ct(1, 0.25, 0.5, 1, 0, 0.25).lt(1, 0, 0)
        .lt(1, 0.25, 0).ct(1, 0.5, 0.25, 1, 0.75, 0).lt(1, 1, 0)
        .lt(1, 1, 0.25).ct(1, 0.75, 0.5, 1, 1, 0.75).lt(1, 1, 1)
        .lt(1, 0.75, 1).ct(1, 0.5, 0.75, 1, 0.25, 1).lt(1, 0, 1);

    left
        .mt(1, 1, 1)
        .lt(1, 1, 0.75).ct(0.75, 1, 0.5, 1, 1, 0.25).lt(1, 1, 0)
        .lt(0.75, 1, 0).ct(0.5, 1, 0.25, 0.25, 1, 0).lt(0, 1, 0)
        .lt(0, 1, 0.25).ct(0.25, 1, 0.5, 0, 1, 0.75).lt(0, 1, 1)
        .lt(0.25, 1, 1).ct(0.5, 1, 0.75, 0.75, 1, 1).lt(1, 1, 1);

    cube.addChildren(under, top, right, left);

    this.hasMounted = true; // Set the flag to true after the first mount
  }

  render() {
    return (
      <div ref={this.containerRef}>
        IsometricPath using curves
      </div>
    );
  }
}

export default IsometricPathCurves;
