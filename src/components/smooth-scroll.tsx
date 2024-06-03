'use client'

import ReactLenis from "lenis/react";


export default function SmoothScoller({children}: any){
    return (
        <ReactLenis root options={{
        }}>
          {children}
        </ReactLenis>
      )
}