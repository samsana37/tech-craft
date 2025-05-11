import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/logo.jpg"

export default function Home() {
  return (
    <div className="container h-full mx-auto flex flex-col justify-center py-12 px-4 md:py-16">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <Image
          src={logo}
          alt="TechCraft Logo"
          width={320}
          height={320}
          className="rounded-full"
        />
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-10">
          TECHCRAFT
        </h1>
        <p className="text-xl text-muted-foreground mt-3">
          A Student&apos;s Portfolio
        </p>
        <Link href="/colleges" className="mt-10">
          <Button size="lg">View Colleges</Button>
        </Link>
      </div>
    </div>
  )
}
