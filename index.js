function enrollAnimal(){
    const name =document.querySelector(`input[name="name"]`).value;
    const age =document.querySelector(`input[name="age"]`).value;
    const gender =document.querySelector(`input[name="gender"]`).value;

    let arr = JSON.parse(localStorage.getItem("animalVoList"));
    if (!arr) {
        arr = [];
    }
    const vo = { name, age , gender };
    arr.push(vo);

    localStorage.setItem("animalVoList", JSON.stringify(arr));
    alert("동물 등록 완료 !");

    
}

function selectAll(){
    const arr = JSON.parse(document.querySelector("animalVoList"));
    const animalListDiv = document.querySelector("#animalList");
    let tableStr = "";
    tableStr += `<table border="1">`;
    for (const x of arr) {
        tableStr += `
            <tr>
                <td>${x.name}</td>
                <td>${x.age}</td>
                <td>${x.gender}</td>
            </tr>
            `;
    }
    tableStr += `</table>`;``
    bookListDiv.innerHTML = tableStr;
}
