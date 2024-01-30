"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { IStaticMethods } from "preline/preline";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    import("preline/preline");
  }, []);

  if (typeof window !== "undefined") {
    useEffect(() => {
      setTimeout(() => {
        window.HSStaticMethods.autoInit();
      }, 100);
    }, [path, window.HSStaticMethods]);
  }

  return null;
}
