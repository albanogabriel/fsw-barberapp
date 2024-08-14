import { SearchIcon } from "lucide-react"
import { Header } from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { db } from "./_lib/prisma"
import { BarbershopItem } from "./_components/barbershop-item"
import { quickSearchOptions } from "./_constants/search"
import { BookingItem } from "./_components/booking-item"

const Home = async () => {
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  return (
    <div>
      {/* header */}
      <Header />

      <div className="p-5">
        {/* TITLE AND TEXT */}
        <h2 className="text-xl font-bold">Olá, Gabriel</h2>
        <p>Segunda-feira, 05 de agosto</p>

        {/* SEARCH INPUT */}
        <div className="mt-6 flex flex-row gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* QUICK SEARCH */}
        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => {
            return (
              <Button key={option.title} className="gap-2" variant="secondary">
                <Image
                  src={option.imgUrl}
                  alt={option.title}
                  width={16}
                  height={16}
                />
                {option.title}
              </Button>
            )
          })}
        </div>

        {/* BANNER */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="banner agende"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* SCHEDULING ITEM */}
        <BookingItem />

        {/* recomendados */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        {/* Popular */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Popular
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

      <footer>
        <Card className="rounded-none">
          <CardContent className="px-5 py-6">
            <p className="text-xs text-gray-400">
              2023 Copyright <span className="font-bold">FSW Barber</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}

export default Home
