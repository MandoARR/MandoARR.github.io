import { useState, FormEvent } from "react"

export function List_add() {
    const [list, setList] = useState<[]>([])

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        //const bodyData = 
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
        </section>
    )
}