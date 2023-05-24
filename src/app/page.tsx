import Avatar from "@/components/avatar";
import Icon from "@/components/icon";
import { Section, SectionItem, SectionTitle } from "@/components/section";
import { getProjects } from "@/lib/project";
import { spaces } from "@/utils/const";
import Link from "next/link";

export default async function Page() {
  const projects = await getProjects({ next: { revalidate: 60 } });

  return (
    <main className="max-w-sm w-full mx-auto">
      <Header />

      <Section>
        <h2>
          <SectionTitle>Projects</SectionTitle>
        </h2>

        {projects.map(({ title, link, slug, description }, index) => {
          const href = link || `/projects/${slug}`;

          return (
            <Link key={`project-${index}`} href={href}>
              <SectionItem>
                <div className="flex flex-col">
                  <span className="text-lg">{title}</span>
                  <span className="text-sm text-zinc-400">{description}</span>
                </div>
              </SectionItem>
            </Link>
          );
        })}
      </Section>

      <Section>
        <h2>
          <SectionTitle>Spaces</SectionTitle>
        </h2>

        {spaces.map(({ title, icon, href, handle }, index) => (
          <Link key={`spaces-item-${index}`} href={href}>
            <SectionItem>
              <span className="p-2 rounded-lg bg-zinc-100/5">
                <Icon icon={icon} className="h-6 w-6" />
              </span>
              <div className="flex flex-col ">
                <span className="text-lg">{title}</span>
                {handle ? (
                  <span className="text-sm text-zinc-400">{handle}</span>
                ) : null}
              </div>
            </SectionItem>
          </Link>
        ))}
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
