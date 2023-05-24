import { Icons } from "@/components/icon";

export type Space = {
  title: string;
  icon: Icons;
  href: string;
  handle?: string;
}

export const spaces: Space[] = [
  {
    title: "GitHub",
    icon: "github",
    href: "https://github.com/zachbharris",
    handle: "@zachbharris",
  },
  {
    title: "Twitter",
    icon: "twitter",
    href: "https://twitter.com/zachbharris",
    handle: "@zachbharris",
  },
  {
    title: "Read.cv",
    icon: "readcv",
    href: "https://read.cv/zachbharris",
    handle: "/zachbharris",
  },
  {
    title: "LinkedIn",
    icon: "linkedin",
    href: "https://linkedin.com/in/zachbharris",
    handle: "/in/zachbharris",
  },
  {
    title: "Twitch",
    icon: "twitch",
    href: "https://twitch.tv/Trobleton",
    handle: "@Trobleton",
  },
];