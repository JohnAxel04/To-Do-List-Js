const inps = document.getElementById("Addinput");
const upd = document.getElementById("Uptbtn");
const add = document.getElementById("Addbtn");
const dlt = document.getElementById("dltbtn");
const uls = document.getElementById("uls");
let tasks = JSON.parse(localStorage.getItem("store")) || [];
let select = [];

function show(){
    tasks.forEach(tsk => {
        const createTask = document.createElement("li");
    
        const checks = document.createElement("input");
        checks.type = "checkbox";
        checks.checked = tsk.box;

        if(tsk.box == true){
            createTask.style.textDecoration = "line-through";
            select.push(tsk);
        }
        
        createTask.appendChild(checks);
        createTask.append(tsk.taskss);

        uls.appendChild(createTask);

        checks.addEventListener("change",() => {
            tsk.box = checks.checked;
            
            if(tsk.box == true){
                createTask.style.textDecoration = "line-through";
                select.push(tsk)
            }
            else{
                createTask.style.textDecoration = "";
                select = select.filter(item => item !== tsk);
            }

            localStorage.setItem("store",JSON.stringify(tasks));
        })

    })
}

function adds(){
    const createTask = document.createElement("li");
    
    const checks = document.createElement("input");
    checks.type = "checkbox";

    const alltask = {
        taskss : inps.value,
        box: false
    };

    tasks.push(alltask);
    localStorage.setItem("store",JSON.stringify(tasks));

    createTask.appendChild(checks);
    createTask.append(alltask.taskss);

    uls.appendChild(createTask);

}

function delt(){
    if(select[0] == undefined){
        alert("Select first to Delete Task")
    }
    tasks = tasks.filter(task => !select.includes(task));

    localStorage.setItem("store",JSON.stringify(tasks));

    location.reload();
}

function updat(){
    if(select[0] == undefined){
        alert("Select first to Update Tasks")
    }

    select.forEach(task => {
        task.taskss = inps.value;
    });

    localStorage.setItem("store",JSON.stringify(tasks));

    location.reload()
}

show()
console.log(select)