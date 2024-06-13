import { useState, FormEvent } from "react"

interface IlistAdd{
    something: string
}

export function List_add() {
    const [list, setList] = useState<IlistAdd[]>([])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const textAdd = formData.get("textAdd") as string

        setList([...list, {something:textAdd}])
    }

    const handleDelete = (data) => {
        data = null
    }

    return (
        <section className="secForm">
            <div className="secEncabezado">
                <h1>Hola</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="textAdd"></input>
                    <button type="submit">ADD</button>
                </form>
            </div>
            <div>
                <ul>
                    {list.map((element) => (
                        <>
                            <li>
                                {element.something}
                                <button onClick={() => handleDelete(element.something)}>X</button>
                            </li>
                        </>
                    ))}
                </ul>
            </div>
        </section>
    )
}