import { Alumnos_lista } from "../components/Alumnos_Estudiante/Alumnos_lista";
import { Form_alumnos } from "../components/Alumnos_Estudiante/Form_alumnos";

export function Alumnos_interfaz() {
    return (
        <>
            <table>
                <td>
                    <Alumnos_lista />
                </td>
                <td></td>
                <td>
                    <Form_alumnos/>
                </td>
            </table>
        </>
    )
}
