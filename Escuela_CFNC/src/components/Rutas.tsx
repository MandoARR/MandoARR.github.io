import { Route, Routes } from 'react-router-dom'
import { Admin_interfaz } from '../sections/Admin_interfaz'
import { ProteccionRouter } from './ProteccionRouter'
import { Alumnos_interfaz } from '../sections/Alumnos_interfaz'
import { Suscripciones_interfaz } from '../sections/Suscripciones_interfaz'
import Clases_interfaz from '../sections/Clases_interfaz'
import Login from '../sections/Login'
import { Estudiante_interfaz } from '../sections/Estudiante_interfaz'
import { Pagos_interfaz } from '../sections/Pagos_interfaz'
import { AlumnosDetalles } from './Alumnos_Estudiante/AlumnosDetalles'
import { Admin_layout } from './Admin_layout'
import { AlumnosLayout } from './Alumnos_Estudiante/AlumnosLayout'
import { AlumnosNavigate } from './Alumnos_Estudiante/AlumnosNavigate'
import { ClasesNavigate } from './Clases/ClasesNavigate'

export function Rutas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route element={<ProteccionRouter />}>
                    <Route path="/admin" element={<Admin_interfaz />} />
                    <Route path="/admin/AlumnosNav" element={<AlumnosNavigate/>} />
                    <Route path="/admin/ClasesNav" element={<ClasesNavigate />} />

                    <Route element={<Admin_layout />}>
                        <Route path="/admin/alumnos" element={<Alumnos_interfaz />} />
                        <Route path="/admin/clases" element={<Clases_interfaz />} />
                        <Route path="/admin/suscripciones" element={<Suscripciones_interfaz />} />
                        <Route path="/admin/pagos" element={<Pagos_interfaz />} />
                    </Route>

                    <Route element={<AlumnosLayout />}>
                        <Route path="/admin/alumnos/:id" element={<AlumnosDetalles />} />
                    </Route>
                </Route>
                <Route path="/:uuid" element={<Estudiante_interfaz />} />
                <Route path="*" element={<h1>404 Error de Ruta</h1>} />
            </Routes>
        </>
    )
}