import { Button } from "./_components/ui/button";

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <h1 className="px-5 text-red-500">Hello World</h1>

      <Button>Botão do Shadcn</Button>
    </div>
  );
}
