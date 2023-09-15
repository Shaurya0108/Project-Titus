import { prisma } from "@/lib/prisma"

export default async function Home() {

  const user = await prisma.user.findFirst({
    where: {
      email: 'test@test.com'
    }
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello, {user?.name}!
    </main>
  )
}
