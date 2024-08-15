import React from "react"
import { Card, CardContent } from "./ui/card"

export function Footer() {
  return (
    <footer>
      <Card className="rounded-none">
        <CardContent className="px-5 py-6">
          <p className="text-xs text-gray-400">
            2023 Copyright <span className="font-bold">FSW Barber</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}
