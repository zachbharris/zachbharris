import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

const WorkPageLayout = ({ children }: Props) => {
  return (
    <div>
      <Link href="/work">Back</Link>
      <br />
      {children}
    </div>
  );
};

export default WorkPageLayout;
