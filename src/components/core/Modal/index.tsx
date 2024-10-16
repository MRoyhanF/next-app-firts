"use client";
import { useRouter } from "next/navigation";
import { MouseEventHendler, useRef, ReactNode } from "react";

export default function Modal({ children }: { children: ReactNode }) {
  const overlay = useRef(null);
  const router = useRouter();

  const close: MouseEventHendler = (e) => {
    if (e.target === overlay.current) {
      router.back();
    }
  };

  return (
    <div ref={overlay} className="fixed z-10 right-0 top-0 bottom-0 mx-auto bg-black/60" onClick={close}>
      <div className="absolute top-1/2 left-1/2 -translate-x1/2 -translate-y-1/2 p-6 bg-white rounded-lg">{children}</div>
    </div>
  );
}
