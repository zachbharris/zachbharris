import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Text from "./ui/text";
import { Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="w-full flex flex-row items-center max-w-xl mx-auto justify-between">
      <Button variant="link" className="p-0" asChild>
        <Link href="/">
          <Text className="font-semibold">zachbharris</Text>
        </Link>
      </Button>

      <section className="relative inline-block">
        <ul className="flex flex-row gap-1 items-center">
          <li>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://github.com/zachbharris"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://linkedin.com/in/zachbharris"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </Link>
            </Button>
          </li>
        </ul>
      </section>
    </header>
  );
}
