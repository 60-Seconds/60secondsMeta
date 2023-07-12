import './App.css';
import { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import { Physics, usePlane } from "@react-three/cannon";
import { Player } from "./componets/Player";
import { FPV } from "./componets/FPV";
import LightController from './LightController';
import { Floor } from "./componets/Floor"
import { Wall } from './componets/Wall';
import { useGetVictim } from './hook/useGetVictim';
import Chast1 from './componets/Chast1';
import { useRecoilValue } from 'recoil';
import { Victim } from './stores/Victim/victim.store';

function App() {
  useGetVictim();
  const victimName = useRecoilValue(Victim);
  return (
    <>
      <Canvas>
        <LightController/>
        <Suspense>
          <FPV/>
          <Chast1 chastKey={0} position={[-1, 1.55, 17.5]}/>
          <Chast1 chastKey={1} position={[-1, 1.55, 14.5]}/>
          <Chast1 chastKey={2} position={[-1, 1.55, 11.5]}/>
          <Chast1 chastKey={3} position={[-1, 1.55, 8.5]}/>
          <Chast1 chastKey={4} position={[-1, 1.55, -8.5]}/>
          <Chast1 chastKey={5} position={[-1, 1.55, -11.5]}/>
          <Chast1 chastKey={6} position={[-1, 1.55, -14.5]}/>
          <Chast1 chastKey={7} position={[-1, 1.55, -17.5]}/>

          <Chast1 chastKey={8} position={[9.8, 1.55, 17.5]}/>
          <Chast1 chastKey={9} position={[9.8, 1.55, 14.5]}/>
          <Chast1 chastKey={10} position={[9.8, 1.55, 11.5]}/>
          <Chast1 chastKey={11} position={[9.8, 1.55, 8.5]}/>
          <Chast1 chastKey={12} position={[9.8, 1.55, -8.5]}/>
          <Chast1 chastKey={13} position={[9.8, 1.55, -11.5]}/>
          <Chast1 chastKey={14} position={[9.8, 1.55, -14.5]}/>
          <Chast1 chastKey={15} position={[9.8, 1.55, -17.5]}/>
          
          <Physics>
              <Floor/>
              <Wall/>
              <Player/>
          </Physics>
        </Suspense>
      </Canvas>
      <div className="absolute centered cursor">+</div>
      <div className='absolute info'>{victimName}</div>
    </>
  );
}

export default App;