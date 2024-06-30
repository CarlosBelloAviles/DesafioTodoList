
const btnTarea = document.querySelector("button")
let listaTareas = document.querySelector("#lista")
const tabla = document.querySelector("tbody")
let totalTarea = document.querySelector("#total")
const inputTarea = document.querySelector("input")
let tareaRealizada = document.querySelector("#realizadas")

const arrayTareas =[

    { id: Date.now(), nombre: "Comer bien", estado: false },
    { id: Date.now()+ 1, nombre: "Dormir bien", estado: false },
    { id: Date.now()+ 2, nombre: "Estudiar y practicar programacion y sobrevivir", estado: false }
]

btnTarea.addEventListener("click", () =>{
    const tareaInput = inputTarea.value
    if (tareaInput != '') {
        const nuevaTarea = {id: Date.now(), nombre:tareaInput, estado: false}
        arrayTareas.push(nuevaTarea) 
    } else{
         alert("ingrese tarea por favor")
    }
    
    inputTarea.value = ""
    render(arrayTareas)
    
})

              
function render(array) {
    let html =""
   for (let tarea of arrayTareas) {
    
       html+= ` <tr> 
                  <td style="color: ${tarea.estado ? 'blue' : 'black'}">${tarea.id}</td> 
                  <td class="centrado"  style="color: ${tarea.estado ? 'blue' : 'black'}" >${tarea.nombre}</td> 
                  <td><input class="checked" type="checkbox" ${tarea.estado ? "checked" : "" } onchange="realizadas(${tarea.id})"
                  </td>
                  <td><button class="eliminar" onclick="deleted(${tarea.id})">X</button> </td>
                </tr>  
                ` 
            }
     tabla.innerHTML= html
     totalTarea.innerHTML = array.length
     tareaRealizada.innerHTML= arrayTareas.filter(({ estado }) => estado).length
     
}


function realizadas(id) {
    const contador = arrayTareas.findIndex(tarea => tarea.id == id)
    arrayTareas[contador].estado = !arrayTareas[contador].estado
    render(arrayTareas)
   
}

function deleted(id){ 
     const index = arrayTareas.findIndex((ele) => ele.id == id)
     arrayTareas.splice(index,1) 
     render(arrayTareas)
    
}

render(arrayTareas)