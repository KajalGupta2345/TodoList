let btn = document.querySelector('button');
let inp = document.querySelector('input');
let ul = document.querySelector('ul');
let inpstartTime = document.querySelector('#startTime');
let inpendTime = document.querySelector('#endTime');
console.dir(inpstartTime);
btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;
    let startTimeBtn = document.createElement('inpstartTime');
    startTimeBtn.innerText = inpstartTime.value;
    item.appendChild(startTimeBtn);
    let endTimeBtn = document.createElement('inpendTime');
    endTimeBtn.innerText = inpendTime.value;
    item.appendChild(endTimeBtn);
    let delBtn = document.createElement('button');
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = " ";
    inpstartTime.value = " ";
    inpendTime.value = " ";
});
ul.addEventListener("click", function (event) { // Event Delegation - bubbling
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});