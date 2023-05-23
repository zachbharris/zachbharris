import Avatar from "@/components/avatar";
import Icon, { Icons } from "@/components/icon";
import { getProjects } from "@/lib/project";
import Link from "next/link";

export default async function Page() {
  const projects = await getProjects({ next: { revalidate: 60 } });

  return (
    <main className="max-w-sm w-full mx-auto">
      <Header />

      <Section title="Projects">
        <div className="flex flex-col gap-4 my-4">
          {projects.map((project, index) => {
            const target = project.link ? "_blank" : undefined;
            const href = project.link || `/projects/${project.slug}`;

            return (
              <Link
                key={`project-${index}`}
                href={href}
                target={target}
                className="p-4 bg-zinc-800/25 hover:bg-zinc-800 rounded-lg transition-all"
              >
                <h3>{project.title}</h3>
                <span className="text-zinc-400">{project.description}</span>
              </Link>
            );
          })}
        </div>
      </Section>
    </main>
  );
}

const Header = () => {
  return (
    <div className="text-zinc-400">
      <div className="flex flex-row gap-4 items-center">
        <Avatar />

        <span className="flex flex-col">
          <h1 className="font-bold text-lg text-zinc-50">Zach Harris</h1>
          <span className="text-sm font-normal">est. 1994</span>
        </span>
      </div>

      <section className="block text-lg my-4">
        <p>
          Software Engineer by day, keyboard builder by night, and coffee
          connoisseur all the time. Proud dad to a dog and cat who don&apos;t
          care about my React skills.
        </p>
      </section>

      <section className="flex flex-row items-center gap-2 my-8">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <p>Available for new opportunities.</p>
      </section>
    </div>
  );
};

function Section({
  title,
  link,
  linkText = "View All",
  linkIcon,
  children,
}: {
  title: string;
  link?: string;
  linkText?: string;
  linkIcon?: Icons;
  children: React.ReactNode;
}) {
  return (
    <section className="my-8">
      <h2 className="text-2xl flex justify-between items-center font-bold">
        <span>{title}</span>
        {link ? (
          <Link
            href={link}
            className="text-base font-normal flex flex-row items-center gap-2"
          >
            <span>{linkText}</span>
            {linkIcon ? <Icon icon={linkIcon} /> : null}
          </Link>
        ) : null}
      </h2>

      {children}
    </section>
  );
}
