import { createContext, useContext } from "react";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { Button } from "@/components/ui/button";
import socials from "@/content/socials/index.json";

type NavbarProps = {
  url: URL;
};

const NavbarURLContext = createContext<URL>(null!);

export default function Navbar({ url }: NavbarProps) {
  return (
    <header className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-border lg:h-screen flex flex-col gap-4 p-4">
      <section className="flex flex-row gap-4 items-center">
        <ProfilePhoto className="lg:block hidden" />
        <span className="hidden lg:flex flex-col">
          <span className="font-bold">Zach Harris</span>
          <span className="text-muted-foreground text-sm">
            Software Engineer
          </span>
        </span>
        <a href="/" className="flex lg:hidden font-bold">zachbharris</a>
      </section>

      <hr className="border-border lg:block hidden" />

      <section className="lg:flex flex-col gap-2 hidden">
        <NavbarURLContext.Provider value={url}>
          <NavbarLink href="/" title="Home" icon="/icons/command.svg" />
          <NavbarLink href="/blog" title="Blog" icon="/icons/pen-line.svg" />
          <NavbarLink
            href="/projects"
            title="Projects"
            icon="/icons/folder-open.svg"
          />
          <NavbarLink
            href="/keyboards"
            title="Keyboards"
            icon="/icons/keyboard.svg"
          />
        </NavbarURLContext.Provider>
      </section>

      <hr className="border-border lg:block hidden" />

      <section className="hidden lg:flex flex-col gap-2">
        {socials.map((social) => {
          return (
            <ExternalLink
              key={social.name}
              title={social.name}
              icon={social.icon}
              href={social.url}
            />
          );
        })}
      </section>
    </header>
  );
}

type NavbarLinkProps = {
  href: string;
  title: string;
  icon: string;
};

function NavbarLink({ href, title, icon }: NavbarLinkProps) {
  const url = useContext(NavbarURLContext);
  const isActive = url.pathname === href;

  return (
    <Button asChild variant={isActive ? "secondary" : "ghost"} role="menuitem">
      <a href={href} className="flex flex-row gap-2 items-center">
        <span
          role="img"
          style={{
            maskImage: `url(${icon})`,
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
          }}
          className="h-4 w-4 bg-primary"
        />
        <span className="flex-1">{title}</span>
        <span></span>
      </a>
    </Button>
  );
}

type ExternalLinkProps = {
  href: string;
  title: string;
  icon: string;
};

function ExternalLink({ href, title, icon }: ExternalLinkProps) {
  return (
    <Button asChild variant="ghost">
      <a
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        className="flex flex-row gap-2 items-center"
      >
        <span
          role="img"
          style={{
            maskImage: `url(${icon})`,
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
          }}
          className="h-4 w-4 bg-primary"
        />
        <span className="flex-1">{title}</span>
        <span
          style={{
            maskImage: "url(/icons/arrow-up-right.svg)",
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
          }}
          className="h-3.5 w-3.5 bg-primary"
        />
      </a>
    </Button>
  );
}
