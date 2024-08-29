let input = document.querySelector('input');
let ul = document.querySelector('ul');
let btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let task = document.createElement('li')
    task.innerHTML = input.value;
    let dlt = document.createElement('button');
    let update = document.createElement('button');
    dlt.classList.add("delete")
    dlt.innerText = "delete";
    update.classList.add("update")
    update.innerText = "update";
    task.appendChild(dlt)
    task.appendChild(update)
    ul.appendChild(task)
    // ul.appendChild(task)
    input.value = "";
  
})
ul.addEventListener('click',function(event){
    if(event.target.nodeName=="BUTTON"){
        let del=event.target.parentElement;
        del.remove();
    }
})
