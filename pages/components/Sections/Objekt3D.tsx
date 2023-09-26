import { useRef, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { Mesh } from "three";

function MeshComponent() {
  const fileUrl = "/gem_pack.glb";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  const boundingBox = new THREE.Box3().setFromObject(gltf.scene);
  const center = boundingBox.getCenter(new THREE.Vector3());

  useEffect(() => {
    mesh.current.position.x = -center.x;
    mesh.current.position.y = -center.y;
    mesh.current.position.z = -center.z;
  }, [center]);

  useFrame(() => {
    mesh.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export function Shiba() {
  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{ width: "100%", height: "30vh" }}
    >
      <Canvas className="h-2xl w-2xl">
        <PerspectiveCamera makeDefault position={[0, 0, 250]} />
        <OrbitControls enableZoom={false}/>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <MeshComponent />
      </Canvas>
    </div>
  );
}

export default Shiba;
