import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image";

function UserAvatar({
  name,
  image,
  className
}: {
  // ? for optional
  name?: string | null;
  image?: string | null;
  className?: string;
}) {
  return (
    // cn for combine tailwind
    <Avatar className={cn('bg-white text-black', className)}>
      {image && (
        <Image
          src={image}
          alt={name || "Name"}
          width={40}
          height={40}
          className="rounded-full" />
      )}
        {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
        <AvatarFallback delayMs={500} className="dark:bg-white dark:text-black text-lg">
          {/* Get the first letter of first and last name */}
          {name
            ?.split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
    </Avatar>
  )
}

export default UserAvatar;