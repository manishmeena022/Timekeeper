"use client";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useFormStatus } from "react-dom";

export function GoogleAuthButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className="w-full">
          <Loader2 className="size-4 mr-2 animate-spin" />
          Please wait
        </Button>
      ) : (
        <Button variant="outline" className="w-full">
          <Image src="" alt="google logo" className="size-4 mr-2" />
          Sign in with Google
        </Button>
      )}
    </>
  );
}

export function GithubAuthButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className="w-full">
          <Loader2 className="size-4 mr-2 animate-spin" />
          Please wait
        </Button>
      ) : (
        <Button variant="outline" className="w-full">
          <Image src="" alt="github  logo" className="size-4 mr-2" />
          Sign in with Github
        </Button>
      )}
    </>
  );
}
