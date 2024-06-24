import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>Hsh</h2>
      <Button>ABhijeet</Button>

      <UserButton afterSignOutUrl="/"/>
    </div>
  );
}
