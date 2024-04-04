"use client"
import { ReactLenis } from '@studio-freight/react-lenis'

function Smoothscroll({children}) {
//   const lenis = useLenis(({ scroll }) => {
//     // called every scroll
//   })

  return (
    <ReactLenis root options={{
        lerp :0.1,

    }}>
      { children }
    </ReactLenis>
  )
}
export default Smoothscroll