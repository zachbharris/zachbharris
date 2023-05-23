import Image from "next/image";

type AvatarProps = {
  className?: string;
};

export default function Avatar({ className = "" }: AvatarProps) {
  return (
    <Image
      src="https://github.com/zachbharris.png"
      height={48}
      width={48}
      alt="Zach Harris Profile"
      className={`h-12 w-12 rounded-full ${className}`}
    />
  );
}
