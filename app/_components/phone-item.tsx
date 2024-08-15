"use client"

import { SmartphoneIcon } from "lucide-react"
import { Button } from "./ui/button"
import { toast } from "sonner"

interface PhoneItemProps {
  phone: string
}

function handleCopyPhoneClick(phone: string) {
  navigator.clipboard.writeText(phone)
  toast.success("telefone copiado com sucesso", {
    closeButton: true,
    richColors: false,
  })
}

export function PhoneItem({ phone }: PhoneItemProps) {
  return (
    <div key={phone} className="flex justify-between">
      {/* LEFT */}
      <div className="flex items-center gap-2">
        <SmartphoneIcon />
        <p>{phone}</p>
      </div>
      {/* RIGHT */}
      <Button
        variant={"outline"}
        size={"sm"}
        onClick={() => handleCopyPhoneClick(phone)}
      >
        Copiar
      </Button>
    </div>
  )
}
