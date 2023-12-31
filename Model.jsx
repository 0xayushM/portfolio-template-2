import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/model.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Node.geometry} material={materials['lambert2SG.001']} />
    </group>
  )
}

useGLTF.preload('/model.glb')
