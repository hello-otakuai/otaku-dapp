import React from "react";
import Logo from "@src/components/Logo";
import { UserCircleIcon } from "@heroicons/react/24/outline";
export default function Header() {
  return (
    <div className="flex justify-between items-center px-4 py-8">
      <Logo />
      <div className="bg-secondary px-4 py-3 rounded-lg color-secondary flex gap-4">
        <UserCircleIcon className="text-white size-6" />
        <div>Ghnd3GHjbsZ....f3D</div>
      </div>
    </div>
  );
}
