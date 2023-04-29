export default async function Page() {
  return (
    <div className="w-full max-w-4xl bg-red-500 mx-auto">
      <p>Page</p>

      <div className="grid grid-cols-3 bg-blue-500 gap-4">
        <div className="col-span-2 bg-green-500">col-span-2</div>
        <div className="bg-green-500">col-span-1</div>
        <div className="bg-green-500">col-span-1</div>
        <div className="col-span-2 bg-green-500">col-span-2</div>
      </div>
    </div>
  );
}
