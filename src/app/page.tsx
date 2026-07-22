import { Section } from "@/components/section/Section";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "CodarSe - Página inicial",
};

export default function Home() {
  return (
    <main className=''>
      <Section
       title="Veja mais cursos"
       variant="h-list"
        />

    </main>

  );
}
