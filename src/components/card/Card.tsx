import Image from "next/image"
import Link from "next/link"


type CardPros = {
    href: string;
    image: string;
    title: string;
    description: string;
}
export const Card = ({ href, image, title, description }: CardPros) => {
    return (
        <Link href='/cursos' className="hover:no-underline">
            <article className="flex flex-col gap-2 p-2 rounded sm:hover:bg-primary">
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={400}
                    draggable={false}
                    className="aspect-video object-cover border-3 border-green-400 p-2 rounded"
                />

                <h4 className="font-extrabold text-lg">{title}</h4>
                <p className="line-clamp-3">{description}</p>
            </article>
        </Link>
    )
}