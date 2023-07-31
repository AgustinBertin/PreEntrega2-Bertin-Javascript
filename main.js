// Obtener calificaciones del alumno
function obtenerCalificacionesAlumno(nombreAlumno) {
    let calificaciones = [];
    let cantidadCalificaciones = parseInt(prompt(`Ingrese la cantidad de calificaciones para ${nombreAlumno}:`))
    while (isNaN(cantidadCalificaciones) || cantidadCalificaciones <= 0) {
        alert('Por favor, ingrese una cantidad válida y mayor a cero.');
        cantidadCalificaciones = parseInt(prompt(`Ingrese la cantidad de calificaciones para ${nombreAlumno}:`));
    }

    for (let i = 1; i <= cantidadCalificaciones; i++) {
        let nota;
        do {
            nota = parseFloat(prompt(`Ingrese la nota ${i} para ${nombreAlumno}:`));
        if (isNaN(nota) || nota < 0 || nota > 10) {
                alert('Por favor, ingrese una nota válida entre 0 y 10.');
            }
        }while (isNaN(nota) || nota < 0 || nota > 10);

        calificaciones.push(nota);
    }

    return calificaciones;
}

function calcularPromedio(calificaciones) {
    let sumaNotas = calificaciones.reduce((total, nota) => total + nota, 0);
    return Math.round(sumaNotas / calificaciones.length); 
}

// Solicitar al usuario la cantidad de alumnos
let cantidadAlumnos = parseInt(prompt('Ingrese la cantidad de alumnos:'));

// Verificar que la cantidad ingresada sea un número válido y mayor a cero
if (isNaN(cantidadAlumnos) || cantidadAlumnos <= 0) {
    alert('Por favor, ingrese una cantidad válida y mayor a cero.');
} 
else {
    let nombresAlumnos = [];
    let promedios = [];

    for (let i = 1; i <= cantidadAlumnos; i++) {
        let nombreAlumno = prompt(`Ingrese el nombre del Alumno ${i}:`).toLocaleUpperCase();
        nombresAlumnos.push(nombreAlumno);

        let calificaciones = obtenerCalificacionesAlumno(nombreAlumno);

        // Calcular el promedio de las calificaciones del alumno actual
        let promedioAlumno = calcularPromedio(calificaciones);
        promedios.push(promedioAlumno);
    }

    for (let i = 0; i < cantidadAlumnos; i++) {
        console.log(`El alumno ${nombresAlumnos[i]} tiene un promedio de ${promedios[i]}.`);
    }

    // Filtrar a los alumnos aprobados y desaprobados
    let alumnosAprobados = nombresAlumnos.filter((nombre, index) => promedios[index] >= 7);
    let alumnosDesaprobados = nombresAlumnos.filter((nombre, index) => promedios[index] < 7);
    
    let mensajeAprobados = "Alumnos Aprobados:\n" + alumnosAprobados.join("\n");
    let mensajeDesaprobados = "\nAlumnos Desaprobados:\n" + alumnosDesaprobados.join("\n");

    alert(mensajeAprobados + mensajeDesaprobados);
}
