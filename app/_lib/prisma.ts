// With that code we guarantees when we save our application and that refresh our app:
// exemple:
// ✓ Compiled in 137ms (446 modules)
// ✓ Compiled in 451ms (446 modules)
//
// when we recompile, we do not open multiple database connections

import { PrismaClient } from "@prisma/client"

declare global {
  // eslint-disable-next-line no-unused-vars
  var cachedPrisma: PrismaClient
}

let prisma: PrismaClient
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient()
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient()
  }
  prisma = global.cachedPrisma
}

export const db = prisma
