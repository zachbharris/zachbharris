type FooterLink = {
  href: string;
  label: string;
};

export default function Footer() {
  const links: FooterLink[] = [
    { href: "https://read.cv/zachbharris", label: "CV" },
    { href: "https://github.com/zachbharris", label: "Github" },
    { href: "https://twitter.com/zachbharris", label: "Twitter" },
    { href: "https://linkedin.com/in/zachbharris", label: "LinkedIn" },
  ];
  return (
    <footer className="w-full max-w-sm mx-auto mt-auto">
      <hr className="border-zinc-700 my-4" />
      <section className="flex gap-2 justify-center">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            className="italic text-zinc-400 bg-transparent hover:bg-zinc-800 transition-colors ease-in-out rounded-lg px-2 py-1"
          >
            {link.label}
          </a>
        ))}
      </section>
    </footer>
  );
}
