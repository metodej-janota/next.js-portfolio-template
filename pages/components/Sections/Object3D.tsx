import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { Mesh } from "three";
import { Spinner, Center } from "@chakra-ui/react";

function MeshComponent() {
  const fileUrl = "/robot.glb";
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

export function Objekt() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{ width: "100%", height: "30vh" }}
    >
      {isLoading ? (
        <Center height={"100%"}>
          <Spinner size="xl" color="teal" thickness="4px" />
        </Center>
      ) : (
        <Canvas className="h-2xl w-2xl">
          <PerspectiveCamera makeDefault position={[0, 20, 20]} />
          <OrbitControls
            enableZoom={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <directionalLight
            position={[0, 10, 0]}
            intensity={10}
            castShadow={true}
          />
          <MeshComponent />
        </Canvas>
      )}
    </div>
  );
}

export default Objekt;
