"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }: any) {
  return (
    <ReactLenis root options={{ lerp: 0.02, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
