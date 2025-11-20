"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      let transformedPath = pathname;
      if (transformedPath.startsWith("/pages/")) {
        transformedPath = transformedPath.replace("/pages/", "/").toLowerCase();
      } else {
        transformedPath = transformedPath.toLowerCase();
      }
      const newUrl = `https://research.yaudit.dev/proxies${transformedPath}`;
      window.location.href = newUrl;
    }
  }, [pathname]);

  return (
    <></>
  );
}
