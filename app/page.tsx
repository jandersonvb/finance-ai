import { Button } from "./_components/ui/button"

const Home = () => {
  return (
    <div className="flex w-screen items-center justify-center flex-col gap-4 p-24">
      <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>

      <Button>Botão</Button>
    </div>
  )
}

export default Home