import Sheet from "@/app/_components/Sheet"
import Hero from "../_components/Hero"

export const metadata = {
  title: "メンバー"
}


type Props = {
  children: React.ReactNode;
}

export default function Layout({children}: Props) {
  return (
    <>
      <Hero title="Members" sub="メンバー" />
      <Sheet>{children}</Sheet>
    </>
  )
}
