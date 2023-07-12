/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.7 test.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { AmbientLight } from 'three'

export function Model(props) {
  const { nodes, materials } = useGLTF('/test.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} position={[0, 0.137, 0]} scale={[3.17, 1, 1]} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.001']} position={[0, 0.137, 0]} scale={[3.17, 1, 1]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials['Material.002']} position={[0, 1.908, 0]} rotation={[-0.784, -1.536, 0]} scale={[3.17, 1, 1]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials['Material.003']} position={[0, 1.908, 0]} rotation={[-0.784, -1.536, 0]} scale={[3.17, 1, 1]} />
      <mesh geometry={nodes.Cube004.geometry} material={materials['Material.004']} position={[0, 0.942, 0]} rotation={[-2.144, -1.025, -0.574]} scale={[3.17, 1, 1]} />
    </group>
  )
}

useGLTF.preload('/test.gltf')