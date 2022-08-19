const btnSave = document.getElementById('save')
const tablepembelian = document.getElementById('table-pembelian')
const riwayat = document.getElementById('riwayat')
const containertable = document.getElementById('containertable')

function reply_click(clicked_id)
{
    const formFilm = document.getElementById("form-nama-film")
    formFilm.value = clicked_id
}

btnSave.onclick = function () {
    const alertInsertEL = document.getElementById('alert-insert-data');
    alertInsertEL.hidden = false;
    setTimeout(function () {
        alertInsertEL.hidden = true;
    }, 2500);
    tablepembelian.hidden = false;
    riwayat.hidden = false;
    containertable.hidden = false;
    fillForm();
    renderTableData();
}

output = []

function renderTableData() {
    const tbody = document.getElementById('tbody');
    if (tbody.children.length > 0) {
        tbody.innerHTML = '';
    }
    for (let i = 0; i < output.length; i++) {
        const {film, durasi, nama, email} = output[i];
        fillTable(film, durasi, nama, email);
    }
}

function fillForm(){
    const film = document.getElementById("form-nama-film").value;
    const durasi = document.getElementById("form-durasi").value
    const nama = document.getElementById("form-nama").value
    const email = document.getElementById("form-email").value
    output.push({
        film,
        durasi,
        nama,
        email
    })
}



function fillTable(film,durasi,nama,email){
    const tr = document.createElement('tr')
    const film1 = document.createElement('td')
    const durasi1 = document.createElement('td')
    const nama1 = document.createElement('td')
    const email1 = document.createElement('td')
    const cancel = document.createElement('td')

    const btnDelete = document.createElement('button');
    btnDelete.className = "btn btn-outline-danger";
    btnDelete.style = "margin-right: 50px;";
    btnDelete.innerText = "Delete"
    btnDelete.onclick = function () {
        if (tbody.children.length === 1) {
            tablepembelian.hidden = true;
            riwayat.hidden = true
        }
        tr.remove();
        for (let i = 0; i < output.length; i++) {
            if (output[i].idx === idx) {
                output.splice(i, 1);
            }
        }

    }

    

    cancel.appendChild(btnDelete)

    film1.innerText = film
    durasi1.innerText = durasi
    nama1.innerText = nama
    email1.innerText = email

    tr.appendChild(film1)
    tr.appendChild(durasi1)
    tr.appendChild(nama1)
    tr.appendChild(email1)
    tr.appendChild(cancel)
    const tbody = document.getElementById('tbody')
    tbody.appendChild(tr)
}



