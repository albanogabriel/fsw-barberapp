import { BarbershopItem } from "../_components/barbershop-item"
import { Header } from "../_components/header"
import { Search } from "../_components/search"
import { db } from "../_lib/prisma"

interface BarbershopPageProps {
  searchParams: {
    title?: string
    service?: string
  }
}

export default async function BarbershopsPage({
  searchParams,
}: BarbershopPageProps) {
  const barbershops = await db.barbershop.findMany({
    where: {
      OR: [
        searchParams?.title
          ? {
              name: {
                contains: searchParams.title,
                mode: "insensitive",
              },
            }
          : {},
        searchParams.service
          ? {
              services: {
                some: {
                  name: {
                    contains: searchParams.service,
                    mode: "insensitive",
                  },
                },
              },
            }
          : {},
      ],
    },
  })

  return (
    <div>
      <Header />

      <div className="my-6 px-5">
        <Search />
      </div>

      <div className="px-5">
        <h2 className="mb-3 mt-6 text-sm font-bold text-gray-400">
          Resultados para{" "}
          {`"${
            searchParams.title ? searchParams.title : searchParams.service
          }"`}
        </h2>
        <div>
          <div className="grid grid-cols-2 gap-4">
            {barbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
