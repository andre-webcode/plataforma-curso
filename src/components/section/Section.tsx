import { Card } from "../card/Card"

export const Section = () => {
    return (
        <section className="flex flex-col gap-4 px-4">
            <h2 className="font-bold text-xl">Todos os cursos</h2>

            <ul className="flex flex-col gap-2">
                <li>
                    <Card
                        description="Na primeira aula de API em Node e Typescript"
                        href=""
                        image='/node.png'
                        title='Curso de API'
                    />
                </li>
                <li>
                    <Card
                        description="Na primeira aula de API em Node e Typescript"
                        href=""
                        image='/node.png'
                        title='Curso de API'
                    />
                </li>
                <li>
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