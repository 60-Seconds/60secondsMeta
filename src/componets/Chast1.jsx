// './componets/Chast' 파일

import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useSetRecoilState } from "recoil";
import { Victim } from "../stores/Victim/victim.store";
import { target } from "../hook/useGetVictim";


export default function Chast1(props) {
  const { position, chastKey } = props;
  const setVictimName = useSetRecoilState(Victim);
  const { nodes, materials } = useGLTF('/chast.gltf');
  
  function clickHandler() {
    console.log("click");
    window.open("http://172.16.1.190:3000/Victim");
  }
  
  function enterHandler() {
    console.log(chastKey);
    if(target[chastKey] == undefined) setVictimName("<없음>");
    else setVictimName(target[chastKey].name + " (" + (target[chastKey].gender == 'M' ? "남" : "여") + ") " + target[chastKey].age);
    console.log("enter");
  }
  
  function leaveHandler() {
    setVictimName("");
    console.log("leave");
  }

  return (
    <group {...props} dispose={null}
      onClick={() => clickHandler()}
      onPointerEnter={() => enterHandler()}
      onPointerLeave={() => leaveHandler()}
    >
      <mesh geometry={nodes.Torus.geometry} material={materials.Material} scale={[1/4, 6.115/4, 1/4]} />
      <mesh geometry={nodes.Cylinder.geometry} material={nodes.Cylinder.material} position={[0, -1.274/4, 0]} scale={[1/4, 0.118/4, 1/4]} />
      <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.002']} position={[0, 1.004/4, 0]} scale={[1.175/4, 0.118/4, 1.175/4]} />
      <mesh geometry={nodes.Cylinder002.geometry} material={materials['Material.001']} position={[0, 1.347/4, 0]} scale={[1.05/4, 0.118/4, 1.05/4]} />
    </group>
  )
}
