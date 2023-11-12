const url = "https://jsonplaceholder.typicode.com/users";

const obtenerUsuarios = async () => {
    let response = await fetch(url);
    if (!response.ok) {
        throw new Error("Ocurrió un error");
    }

    let data = await response.json();
    pintarUsuarios(data);
};

const pintarUsuarios = (data) => {
    let body = "";
    for (let i = 0; i < data.length; i++) {
        body += `<tr>`;
        body += `<td>${data[i].id}</td>`;
        body += `<td>${data[i].name}</td>`;
        body += `<td>${data[i].email}</td>`;
        body += `</tr>`;
    }

    document.getElementById("data").innerHTML = body;
};

obtenerUsuarios();
