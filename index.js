function enrollAnimal() {
    const name = document.querySelector(`input[name="name"]`).value;
    const age = document.querySelector(`input[name="age"]`).value;
    const gender = document.querySelector(`input[name="gender"]`).value;

    let arr = JSON.parse(localStorage.getItem("animalVoList"));
    if (!arr) {
        arr = [];
    }
    const vo = { name, age, gender };
    arr.push(vo);

    localStorage.setItem("animalVoList", JSON.stringify(arr));
    alert("동물 등록 완료 !");


}

function selectAll() {
    const voListTable = document.querySelector("#voListTable");
    const tbody = voListTable.querySelector("tbody");
    let voList = JSON.parse(localStorage.getItem("animalVoList"));
    if (!voList) {
        voList = [];
    }


    let str = "";
    for (let i = 0; i < voList.length; ++i) {
        str += `
            <tr onclick="displayVoDetail(${i});">
                <td> ${i} </td>
                <td> ${voList[i].name} </td>
                <td onclick="event.stopPropagation();"><input type = "checkbox" value ="${i}"></td>
            </tr>
        `;
    }

    tbody.innerHTML = str;
}

function displayVoDetail(no) {
    const voList = JSON.parse(localStorage.getItem("animalVoList"));
    const vo = voList[no];

    document.querySelector("#todoDetailNo").innerHTML = no;
    document.querySelector("#todoDetailName").innerHTML = vo.name;
    document.querySelector("#todoDetailAge").innerHTML = vo.age;
    document.querySelector("#todoDetailGender").innerHTML = vo.gender;

    document.querySelector("#modal").classList.add("active");
}

window.onload = function () {
    selectAll();
}

function closeModal() {
    document.querySelector("#modal").classList.remove("active")
}

function f01(evt) {
    evt.stopPropagation();
}

function deleteAnimals() {
    const tbody = document.querySelector("#voListTable tbody");
    const trTagList = tbody.children;

    const targetNoArr = [];

    for (const trTag of trTagList) {
        const checkbox = trTag.children[2].children[0];
        if (checkbox.checked) {
            targetNoArr.push(Number(checkbox.value));
        }
    }
    let animalVoList = JSON.parse(localStorage.getItem("animalVoList"));
    if (!animalVoList) {
        return;
    }

    // 뒤에서부터 삭제 (index 깨짐 방지)
    targetNoArr.sort((a, b) => b - a);
    for (const no of targetNoArr) {
        animalVoList.splice(no, 1);
    }

    localStorage.setItem("animalVoList", JSON.stringify(animalVoList));
    selectAll();
}