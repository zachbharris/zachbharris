import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type ProfilePhotoProps = {
  className?: string;
}

export function ProfilePhoto({ className }: ProfilePhotoProps) {
  return (
    <Avatar className={className}>
      <AvatarImage
        src="https://github.com/zachbharris.png"
        alt="@zachbharris"
      />
      <AvatarFallback>ZH</AvatarFallback>
    </Avatar>
  );
}
