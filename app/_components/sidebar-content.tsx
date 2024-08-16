import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
// import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"
import Image from "next/image"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"

export function SidebarContent() {
  return (
    <SheetContent className="overflow-x-auto">
      <SheetHeader className="space-y-0">
        <SheetTitle>Menu</SheetTitle>

        {/* AVATAR */}
        <div className="flex items-center justify-between gap-3 border-b border-solid py-5 text-left">
          <h2 className="text-left font-bold">Olá faça o seu login!</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <LogInIcon size={18} />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="w-[90%]">
                <DialogTitle>Faça login na plataforma</DialogTitle>
                <DialogDescription>
                  Contecte-se usando sua conta do Google.
                </DialogDescription>
              </DialogHeader>
              <Button variant={"outline"} className="gap-1">
                <Image
                  src={"/google.svg"}
                  alt="google"
                  width={18}
                  height={18}
                />
                Google
              </Button>
            </DialogContent>
          </Dialog>
          {/* <Avatar>
            <AvatarImage
              className="object-cover"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Avatar>
          <div>
            <p className="font-bold">Marina Andrade</p>
            <p className="text-xs">marina.andrade@gmail.com</p>
          </div> */}
        </div>

        <div className="flex flex-col gap-4 border-b border-solid py-4">
          <SheetClose asChild>
            {/* <SheetClose asChild> -> serve para fechar o modal ao clicar no button*/}
            <Button className="justify-start gap-2" variant={"ghost"} asChild>
              <Link href="/">
                <HomeIcon size={18} />
                Início
              </Link>
            </Button>
          </SheetClose>
          <Button className="justify-start gap-2" variant={"ghost"}>
            <CalendarIcon size={18} />
            Agendamentos
          </Button>
        </div>

        <div className="flex flex-col gap-4 border-b border-solid py-4">
          {quickSearchOptions.map((option) => {
            return (
              <Button
                key={option.title}
                className="justify-start gap-2"
                variant={"ghost"}
              >
                <Image
                  alt={option.title}
                  src={option.imgUrl}
                  height={18}
                  width={18}
                />
                {option.title}
              </Button>
            )
          })}
        </div>
        <div className="flex flex-col gap-2 border-b border-solid py-4">
          <Button variant={"ghost"} className="justify-start gap-2">
            <LogOutIcon size={18} />
            Sair da conta
          </Button>
        </div>
      </SheetHeader>
    </SheetContent>
  )
}
