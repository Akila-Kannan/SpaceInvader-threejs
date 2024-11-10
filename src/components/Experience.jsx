import { Canvas } from "@react-three/fiber";

function Experience(){
  return (
    <Canvas>
        <mesh>
            <boxGeometry>
                <meshBasicMaterial></meshBasicMaterial>
            </boxGeometry>
        </mesh>
    </Canvas>
  )
}
export default Experience;