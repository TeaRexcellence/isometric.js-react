import DraggingBoundaries from '../components/class-components/DraggingBoundaries';
import BasicCube from '../components/class-components/BasicCube';
import BasicCubeAnimated from '../components/class-components/BasicCubeAnimated';
import IsometricPathDrawCommands from '../components/class-components/IsometricPathDrawCommands';
import IsometricPathCurves from '../components/class-components/IsometricPathCurves';
import IsometricTextures from '../components/class-components/IsometricTextures';
import BasicCubeText from '../components/class-components/BasicCubeText';
import IsometricPathDrawMethods from '../components/class-components/IsometricPathDrawMethods';

const Index = () => {
  return (
    <>
    <h2>Class Components</h2>
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
