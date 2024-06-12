import { useState } from "react"

export function List_add() {
    const [list, setList] = useState<[]>([])

    return (
        <section className="secForm">
            <form>
                <input></input>
                <button>ADD</button>
            </form>
        </section>
    )
}