import { ReactNode } from "react";
import Header from "./components/Header";

export default function ({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div>
        {children}
      </div>
    </>
  );
}
