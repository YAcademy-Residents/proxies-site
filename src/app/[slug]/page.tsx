"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function RedirectPage() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      let transformedPath = pathname;
      if (!transformedPath) return;
      if (transformedPath.startsWith("/pages/")) {
        transformedPath = transformedPath.replace("/pages/", "/").toLowerCase();
      } else {
        transformedPath = transformedPath.toLowerCase();
      }
      window.location.href = `https://research.yaudit.dev/proxies${transformedPath}`;
    }
  }, [pathname]);

  return (
  <></>
  );
}
