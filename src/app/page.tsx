import Avatar from "@/components/avatar";
import Icon from "@/components/icon";
import { Section, SectionItem, SectionTitle } from "@/components/section";
import { spaces, projects } from "@/utils/const";
import { Metadata } from "next";

const githubAvatarURL = "https://github.com/zachbharris.png";

export const metadata: Metadata = {
  openGraph: {
    type: "profile",
    images: [
      { url: githubAvatarURL, width: 48, height: 48, alt: "Zach Harris" },
    ],
  },
};

export default async function Page() {
  return (
    <main className="max-w-sm w-full mx-auto">
      <Header />

      <Section>
        <h2>
          <SectionTitle>Projects</SectionTitle>
        </h2>

        {projects.map(({ title, href, description, icon }, index) => {
          return (
            <SectionItem key={`project-${index}`} href={href}>
              <span className="p-2 rounded-lg bg-zinc-100/5">
                <Icon icon={icon} className="h-6 w-6" />
              </span>
              <div className="flex flex-col ">
                <span className="text-lg">{title}</span>
                <span className="text-sm text-zinc-400">{description}</span>
              </div>
            </SectionItem>
          );
        })}
      </Section>

      <Section>
        <h2>
          <SectionTitle>Spaces</SectionTitle>
        </h2>

        {spaces.map(({ title, icon, href, handle }, index) => (
          <SectionItem key={`spaces-item-${index}`} href={href}>
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
        ))}
      </Section>
    </main>
  );
}

const Header = () => {
  return (
    <div className="text-zinc-400">
      <div className="flex flex-row gap-4 items-center">
        <Avatar src={githubAvatarURL} />

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
