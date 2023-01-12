export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center">
      <div className="flex p-4 w-full max-w-lg flex-col">
          {children}
      </div>
    </div>
  );
}
