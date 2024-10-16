import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls, Scroll } from "@react-three/drei";
import { foodItems } from "./data";
import { Interface } from "./components/Interface";

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 4, 12], fov: 30 }}>
        <ScrollControls pages={foodItems.length + 1}>
          <Experience />
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
