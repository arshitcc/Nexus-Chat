"use client";

import Image from "next/image";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import CreateServerModal from "@/components/create-server-modal";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className=" px-8 py-4 rounded-xl flex gap-4 items-center">
        <UserButton />
        <div className="outline-none">
          <ThemeToggle />
        </div>
        <div className="bg-gray-800 px-8 py-4 rounded-xl text-white">
          <SignOutButton />
        </div>
        <Link href="/sign-in">
          <button className="bg-gray-800 px-8 py-4 rounded-xl text-white">
            Sign-in
          </button>
        </Link>
        <Link href="/sign-up">
          <button className="bg-gray-800 px-8 py-4 rounded-xl text-white">
            Sign-up
          </button>
        </Link>
      </div>
      <CreateServerModal/>
    </div>
  );
}
