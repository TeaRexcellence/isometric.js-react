// File: root/components/DraggingBoundaries.tsx
import React from 'react';
import {
  IsometricCanvas,
  IsometricGroup,
  IsometricRectangle,
  PlaneView
} from '@elchininet/isometric';

class DraggingBoundaries extends React.Component {
  containerRef = React.createRef<HTMLDivElement>();
  hasMounted = false;

  componentDidMount() {
    if (this.hasMounted) return;

    const container = this.containerRef.current;
    if (!container) return;

    const canvas = new IsometricCanvas({
      container,
      backgroundColor: '#CCC',
      scale: 20,
      width: 500,
      height: 320
    });

    const planeProps = { height: 6, width: 6, fillOpacity: 0.25 };
    const planeTop = new IsometricRectangle({ ...planeProps, planeView: PlaneView.TOP, fillOpacity: 1 });
    const planeRight = new IsometricRectangle({ ...planeProps, planeView: PlaneView.FRONT });
    const planeLeft = new IsometricRectangle({ ...planeProps, planeView: PlaneView.SIDE });

    const cubeProps = { height: 1, width: 1 };
    const cubeTop = new IsometricRectangle({ ...cubeProps, planeView: PlaneView.TOP, top: 1 });
    const cubeRight = new IsometricRectangle({ ...cubeProps, planeView: PlaneView.FRONT, right: 1 });
    const cubeLeft = new IsometricRectangle({ ...cubeProps, planeView: PlaneView.SIDE, left: 1 });

    const cube = new IsometricGroup();
    const bounds: [number, number] = [0, 5];
    cube.drag = 'TOP';
    cube.bounds = { top: bounds, right: bounds, left: bounds };

    planeTop.addEventListener('click', () => {
      cube.right = cube.left = cube.top = 0;
      planeTop.fillOpacity = planeRight.fillOpacity = planeLeft.fillOpacity = 0.25;
      planeTop.fillOpacity = 1;
      cube.drag = PlaneView.TOP;
    }, true);

    planeRight.addEventListener('click', () => {
      cube.right = cube.left = cube.top = 0;
      planeTop.fillOpacity = planeRight.fillOpacity = planeLeft.fillOpacity = 0.25;
      planeRight.fillOpacity = 1;
      cube.drag = PlaneView.FRONT;
    }, true);

    planeLeft.addEventListener('click', () => {
      cube.right = cube.left = cube.top = 0;
      planeTop.fillOpacity = planeRight.fillOpacity = planeLeft.fillOpacity = 0.25;
      planeLeft.fillOpacity = 1;
      cube.drag = PlaneView.SIDE;
    }, true);

    cube.addChildren(cubeTop, cubeRight, cubeLeft);
    canvas.addChildren(planeTop, planeRight, planeLeft, cube);

    this.hasMounted = true;
  }

  render() {
    return (
      <div ref={this.containerRef}>
        Dragging interaction with boundaries
      </div>
    );
  }
}

export default DraggingBoundaries;
