import Button from "../components/atoms/Button";

export default async function Page() {
  return (
    <div className="flex flex-col max-w-2xl w-full mx-auto items-center p-4">
      <Button href="https://twitter.com/zachbharris" fluid>Twitter</Button>
      <Button href="https://github.com/zachbharris" fluid>GitHub</Button>
    </div>
  )
}