import "../../assets/css/style.css";

import "../../assets/css/tailwind.css";

import React, { ReactNode } from "react";
import logoUrl from "../../assets/logo.svg";


export default function ({ children }: { children: ReactNode }) {
  return <>{children}</>
}