import React from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
export const Header = () => {
  return (
    <div className="flex justify-between items-center p-6 md:px-20 shadow-md">
      <h2 className="text-xl text-primary font-semibold">FOODIE</h2>
      <div className="flex border p-2 rounded-xl bg-gray-200 w-96">
        <input
          type="text"
          className="pl-3 bg-transparent w-full outline-none"
          placeholder="Search Food Here..."
        />
        <Search />
      </div>

      <div className="flex gap-5">
        <SignInButton>
          <Button variant="outline">Login</Button>
        </SignInButton>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
};
