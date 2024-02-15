import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import planeScene from "../assets/3d/seagull.glb";

// 3D Model from: https://sketchfab.com/3d-models/stylized-ww1-plane-c4edeb0e410f46e8a4db320879f0a1db
const Seagull = ({ isRotating, ...props }) => {
  const ref = useRef();
  // Load the 3D model and its animations
  const { scene, animations } = useGLTF(planeScene);
  // Get animation actions associated with the plane
  const { actions } = useAnimations(animations, ref);
  console.log({ actions });
  // Use an effect to control the plane's animation based on 'isRotating'
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() => {
    actions["ArmatureAction.006"].play();

    if (isRotating) {
      actions["ArmatureAction.006"].play();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};
export default Seagull;
