//Lấy dữ liệu từ localstorage xuống để so sánh
let a = [];
for (let i = 1; i <= localStorage.length; i++) {
    a = JSON.parse(localStorage.getItem(`artist`));
}

function xacDinh(e) {
    console.log(e.target.dataset.artistName);

    for (let i = 0; i < a.length; i++) {
        console.log(i)
        if (e.target.dataset.artistName === a[i].name) {
            localStorage.setItem(`clickedArtist`, i);
            window.location.href = "Detail-Artist.html";
        }
    }
}