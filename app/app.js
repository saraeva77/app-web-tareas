const app = new ToDo ();
/** vistas */

const  FormNewTask =() => {
    let container = document.getElementById("my-app");
    let row = `
    <div class= "row">
        <div class = " col-6 offset-3 shadow bg-white rounded mt-2">
            <div class = " form m-2 ">
                <div class = " form-group "
                    <label for="task"> Tarea: </label>
                    <input type = "text" id = "task" class = "form-control">
                </div>
                <button type = "button" onClick = "nueva_tarea()" class= "btn btn-primary btn-block">
                Guardar
                </button>
            </div>
        </div>
    </div>
    `;
    container.innerHTML = row;
}
const PrintTaskComplete = () => {
    let container = document.getElementById("my-app");
    let row = `<div class = 'row'>`;
    let data = app.show_done();
    data.forEach(element =>{
        row += `
        <div class = "col-sm-4 mt-2">
            <div class = "card shadow bg-white rounded">
                <div class = "card-header">
                    <h5> Tarea ID ${element.id} </h5>
                </div>
                <div class = "card-body">
                    <p> ${element.task} </p>
                </div>
                <div class = "card-footer text-center">
                    </button>
                    <button type = "button" onClick= "elimina_tarea(${element.id})" class = "btn btn-danger"> 
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
        `;
    });
    row += "</div>";
    container.innerHTML = row;
}

const PrintaskActive = () => {
    // Muestra tareas activas
    let container = document.getElementById("my-app");
    let row = `<div class = 'row'>`;
    let data = app .show_active();
    data.forEach(element =>{
        row += `
        <div class = "col-sm-4 mt-2">
            <div class = "card shadow bg-white rounded">
                <div class = "card-header">
                    <h5> Tarea ID ${element.id} </h5>
                </div>
                <div class = "card-body">
                    <p> ${element.task} </p>
                </div>
                <div class = "card-footer text-center">
                    <button type = "button"  onClick ="completa_tarea(${element.id})" class = "btn btn-info"> 
                        Completar
                    </button>
                    <button type = "button" onClick= "elimina_tarea(${element.id})" class = "btn btn-danger"> 
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
        `;
    });
    row += "</div>";
    container.innerHTML = row;

}
/** Funciones */
function completa_tarea(id=0){
        app.complete_id(id);
        PrintaskActive();
}
function elimina_tarea(id=0) {
    let opt = confirm("Desea quitar este elemento? ");
    if (opt === true) {
        app.delete_id(id);
        PrintaskActive();
    }
}
function nueva_tarea() {
    let task = document.getElementById("task").value;
    app.new_task(task);
    PrintaskActive();
    console.log(app.show_active());
}


/** Inicio */


document.addEventListener("DOMContentLoaded", (success) => {
    console.log("Carga completa:  " + success);
    let nuevo = document.getElementById("new_task");
    let activas = document.getElementById("show_active");
    let completas = document.getElementById("show_completed");
    nuevo.addEventListener("click", ()=>{
        FormNewTask();
    });
    activas.addEventListener("click", ()=>{
        PrintaskActive();
    });
    completas.addEventListener("click", () =>{
        PrintTaskComplete();
    });
});
