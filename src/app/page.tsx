export default async function Page() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-0 mt-8">
      <section>
        <h2 className="text-2xl font-bold mt-6 mb-4">Work</h2>

        <div className="grid grid-cols-4 gap-2">
          <div className="h-40 max-w-full rounded-lg bg-zinc-100 col-span-4 md:col-span-2"></div>
          <div className="h-40 max-w-full rounded-lg bg-zinc-100 col-span-2"></div>
          <div className="h-40 max-w-full rounded-lg bg-zinc-100 col-span-2"></div>
          <div className="h-40 max-w-full rounded-lg bg-zinc-100 col-span-3"></div>
          <div className="h-40 max-w-full rounded-lg bg-zinc-100 col-span-1"></div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mt-6 mb-4">Blog</h2>

        <div className="grid grid-cols-4 gap-2">
          <div className="h-40 max-w-full rounded-lg bg-zinc-100 col-span-4 md:col-span-2"></div>
          <div className="h-40 max-w-full rounded-lg bg-zinc-100 col-span-2"></div>
          <div className="h-40 max-w-full rounded-lg bg-zinc-100 col-span-2"></div>
          <div className="h-40 max-w-full rounded-lg bg-zinc-100 col-span-3"></div>
          <div className="h-40 max-w-full rounded-lg bg-zinc-100 col-span-1"></div>
        </div>
      </section>
    </div>
  );
}
