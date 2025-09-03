export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="max-w-xl w-full mx-auto m-2 mt-8">
      <span className="text-sm text-muted-foreground">
        &copy; {year} Zach Harris.
      </span>
    </footer>
  );
}
