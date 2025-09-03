import Text from "@/components/ui/text";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <main className="max-w-xl mx-auto space-y-8">
      <section className="my-20">
        <Text
          variant="lead"
          className="flex flex-row items-center justify-center gap-2"
        >
          <span className="text-teal-600 font-bold">$</span>
          <span>Dev. Keebs. Coffee.</span>
          <span className="h-5 w-0.5 bg-neutral-50 inline-block relative animate-caret-blink" />
        </Text>
      </section>
      <section className="space-y-2">
        <Text variant="h2">Projects</Text>

        <ul className="grid grid-cols-1 gap-2">
          <li>
            <ProjectCard
              title="Pick'Em"
              description="Predict top 30, compete on leaderboards!"
              link="/projects/pickems"
              image="/images/thumbnails/pickem-thumb.png"
            />
          </li>
          <li>
            <ProjectCard
              title="AI Assistant"
              description="Real time speech-to-speech conversations"
              link="/projects/pickems"
            />
          </li>
          <li>
            <ProjectCard
              title="Words Per Minute"
              description="Test your typing speed and accuracy"
              link="/projects/pickems"
              image="/images/thumbnails/wpm-thumb.png"
            />
          </li>
        </ul>
      </section>

      <section>
        <Text variant="h2" className="">
          Keyboards
        </Text>
      </section>
    </main>
  );
}

function ProjectCard({
  title,
  description,
  link,
  image,
}: {
  title: string;
  description: string;
  link: string;
  image?: string;
}) {
  return (
    <Link
      href={link}
      className="relative flex justify-end h-32 overflow-hidden flex-col gap-1 p-2 md:p-4 bg-neutral-900 border border-neutral-700 rounded-xl w-full"
    >
      <span className="text-lg z-10">{title}</span>
      <span className="text-xs text-muted-foreground z-10">{description}</span>

      {image ? (
        <Image
          src={image}
          alt={title}
          width={576}
          height={128}
          className="absolute flex-1 object-cover h-full right-0 top-0 mask-l-from-5%"
        />
      ) : null}
    </Link>
  );
}
