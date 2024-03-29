import DraggingBoundaries from '../components/functional-components/DraggingBoundaries';
import BasicCube from '../components/functional-components/BasicCube';
import BasicCubeAnimated from '../components/functional-components/BasicCubeAnimated';
import IsometricPathDrawCommands from '../components/functional-components/IsometricPathDrawCommands';
import IsometricPathCurves from '../components/functional-components/IsometricPathCurves';
import IsometricTextures from '../components/functional-components/IsometricTextures';
import BasicCubeText from '../components/functional-components/BasicCubeText';
import IsometricPathDrawMethods from '../components/functional-components/IsometricPathDrawMethods';

const Index = () => {
  return (
    <>
    <h2>Functional Components</h2>
      <BasicCube />
      <BasicCubeAnimated />
      <BasicCubeText />
      <IsometricPathDrawMethods />
      <IsometricPathDrawCommands />
      <IsometricPathCurves />
      <DraggingBoundaries />
      <IsometricTextures />
    </>
  );
}

export default Index;
