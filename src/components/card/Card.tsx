import Image from "next/image"
import Link from "next/link"

export const Card = () => {
    return (
        <Link href='/cursos' className="hover:no-underline">
            <article className="flex flex-col gap-2 p-2 rounded sm:hover:bg-primary">
                <Image
                    src='/node.png'
                    alt='curso'
                    width={400}
                    height={400}
                    draggable={false}
                    className="aspect-video object-cover border-3 border-green-400 p-2 rounded"
                />

                <h4 className="font-extrabold text-lg">Curso de API</h4>
                <p className="line-clamp-3">Na primeira aula de API em Node e Typescript</p>
            </article>
        </Link>
    )
}