import { Card } from "../card/Card"

type ISectionProps = {
    title: string;
    variant: 'grid' | 'h-list';
}
export const Section = ({ title, variant = 'grid' }: ISectionProps) => {
    return (
        <section className="flex flex-col gap-4 px-4">
            <h2 className="font-bold text-xl">
                {title}
            </h2>

            <ul
            data-variant={variant} 
            className="grid grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 data-[variant=h-list]:sm:grid-flow-col">
                <li data-variant={variant} className="w-full data-[variant=h-list]:sm:w-72">
                    <Card
                        description="Na primeira aula de API em Node e Typescript"
                        href=""
                        image='/node.png'
                        title='Curso de API'
                    />
                </li>
                <li data-variant={variant} className="w-full data-[variant=h-list]:sm:w-72">
                    <Card
                        description="Na primeira aula de API em Node e Typescript"
                        href=""
                        image='/node.png'
                        title='Curso de API'
                    />
                </li>
                <li data-variant={variant} className="w-full data-[variant=h-list]:sm:w-72">
                    <Card
                        description="Na primeira aula de API em Node e Typescript"
                        href=""
                        image='/node.png'
                        title='Curso de API'
                    />
                </li>
            </ul>
        </section>
    )
}
