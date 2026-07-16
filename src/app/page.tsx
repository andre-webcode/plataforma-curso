import { Card } from "@/components/card/Card";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "CodarSe - Página inicial",
};

export default function Home() {
  return (
    <main className=''>
      <Card />
    </main>

  );
}
