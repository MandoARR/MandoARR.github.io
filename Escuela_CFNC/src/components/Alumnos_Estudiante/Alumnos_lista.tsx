import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteStudent } from '../../services/studets-services';
import { IEstudiantes } from '../../store/IEstudiantes';
import { getOneStudent } from '../../sections/Estudiante_interfaz';
import Card from '@mui/joy/Card';
import { AspectRatio, CardContent, Chip, Link, Typography } from '@mui/joy';
import { Button } from '@mui/material';

const url = "https://backend-subs-control.onrender.com/api/alumno"

export function Alumnos_lista() {
    const [alumnos, setAlumnos] = useState<IEstudiantes[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setAlumnos(data);
            })
            .catch(error => console.error('Error fetching:', error));
    }, []);

    const handleDelete = (id: string) => {
        deleteStudent(id)
            .then(() => {
                setAlumnos(alumnos.filter((alumno) => alumno.id != id))
            })
    }

    // Se realizara una interfaz para el alumno cuando se le entregue su UUID
    const handleIAlumno = (alumno: IEstudiantes) => {
        getOneStudent(alumno.id)
    }

    const handleUpdate = (alumno: IEstudiantes) => {
        navigate('/admin/alumnos/' + alumno.id, { state: { alumno } })
    }

    return (
        <div>
            {alumnos.map((alumno) => (
                <Card
                key={alumno.id}
                    variant="outlined"
                    orientation="horizontal"
                    sx={{
                        width: 340,
                        marginBottom: '1rem',
                        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
                    }}
                >
                    <AspectRatio ratio=".7" sx={{ width: 85 }}>
                        <img src='https://4.bp.blogspot.com/-GTW2sJcVLuc/WL3UQSsTqZI/AAAAAAAAWeo/MQP8gaix9IUXO0sY9KDhZzL_mHVv9zdYwCLcB/s1600/20160401_135211.jpg'
                        />
                    </AspectRatio>
                    <CardContent>
                        <Typography level="title-lg" id="card-description">
                            {`${alumno.nombre} ${alumno.apellido}`}
                        </Typography>
                        <Typography level="body-sm" aria-describedby="card-description" mb={1}>
                            <Link
                                overlay
                                underline="none"
                                onClick={() => handleUpdate(alumno)}
                                sx={{ color: 'text.tertiary' }}
                            >
                                {alumno.id}
                            </Link>
                        </Typography>
                        <Chip
                            variant="outlined"
                            color="primary"
                            size="sm"
                            sx={{ pointerEvents: 'none' }}
                        >
                            {alumno.uuid}
                        </Chip>
                        <Button onClick={() => handleDelete(alumno.id)}>Eliminar</Button>
                    </CardContent>
                    
                </Card>
            ))}
        </div>
    )
}