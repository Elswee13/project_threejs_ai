import React from 'react'
import { easing } from 'maath';
import { useSnapshot } from 'valtio/esm/react';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';

const Shirt = () => {

    const snap = useSnapshot(state);
    cosnt {nodes, materials} = useGLTF('/shirt_baked.glb')

  return (
    <div>Shirt</div>
  )
}

export default Shirt