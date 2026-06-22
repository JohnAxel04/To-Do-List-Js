const inps = document.getElementById("Addinput");
const upd = document.getElementById("Uptbtn");
const add = document.getElementById("Addbtn");
const dlt = document.getElementById("dltbtn");
const uls = document.getElementById("uls");
let tasks = [];
let select = null;
function adds(){
    const createTask = document.createElement("li");
    
    const checks = document.createElement("input");
    checks.type = "checkbox";

    tasks.push(inps.value);
    localStorage.setItem("store",JSON.stringify(tasks));

    createTask.appendChild(checks);
    createTask.append(tasks[0]);

    document.querySelector("#uls").appendChild(createTask);

    createTask.addEventListener("click",() => {
        document.querySelectorAll("#uls li").forEach(lis => {
            lis.classList.remove("selected")
        })
        createTask.classList.add("selected")

        
    })
    
}

