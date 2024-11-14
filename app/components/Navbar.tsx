import Image from "next/image";
import Link from "next/link";
import { AuthModel } from "./AuthModel";

export function Navbar() {
  return (
    <div className="flex py-5 items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <Image src="" alt="logo" className="size-10" />

        <h4 className="text-3xl font-semibold">
          TIME<span className="text-blue-500">KEEPER</span>
        </h4>
      </Link>

      <AuthModel />
    </div>
  );
}
