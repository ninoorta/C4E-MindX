var list8 = []

let imgStore = [
    '../Artist-Image/Ed.jpg',
    '../Artist-Image/us.jpg',
    '../Artist-Image/hq.jpg',
    '../Artist-Image/hq2.png',
    '../Artist-Image/noo.jpg',
    '../Artist-Image/sontung.jpg',
    '../Artist-Image/soobin.jpg',
    '../Artist-Image/vn.jpg',
    'https://i.imgur.com/6mPrJXc.jpg',
    'https://i.imgur.com/ihRWbsw.jpg',
    'https://i.imgur.com/54UMbqu.jpg',
    'https://i.imgur.com/DQZDIJj.jpg',
    'https://i.imgur.com/9Y4MjKV.jpg',
    'https://i.imgur.com/DxiXZbO.jpg',
    'https://i.imgur.com/nLn7ODH.jpg',
    'https://i.imgur.com/T4KFHrM.jpg',
    'https://i.imgur.com/U9lUcds.jpg',
    'https://i.imgur.com/z4RsVsR.jpg',
]

let i = Math.round(Math.random()*10)

    document.getElementById('img-1').src = imgStore[i]
    document.getElementById('img-2').src = imgStore[i+2]
    document.getElementById('img-3').src = imgStore[i+3]
    document.getElementById('img-4').src = imgStore[i+4]
    document.getElementById('img-5').src = imgStore[i+5]
    document.getElementById('img-6').src = imgStore[i+6]
    document.getElementById('img-7').src = imgStore[i+7]
    document.getElementById('img-8').src = imgStore[i+8]



getJson()



let API = ['AIzaSyA0EXoz8yj9TA8GzYy_60N8umR-c2I6PI4', 'AIzaSyA2CtshEJSj7JJBOQfV9vB1RlsXhT_lXpc',
    'AIzaSyDIADyJhBWUko8a2-BdK_Ihmpslc7DpUnM','AIzaSyBesyg5lnTECss_yHw5HrrpcqDi_rexyRI']
let j = Math.round(Math.random() * 3)

//function bang xep hang
function getJson() {
    let xhr = new XMLHttpRequest();
    let url = "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=8&regionCode=vn&key=AIzaSyBesyg5lnTECss_yHw5HrrpcqDi_rexyRI";

    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            showTrend(this.responseText);

        }
    }
    xhr.send();
}



function showTrend(json) {
    let trend = JSON.parse(json);
    let item = trend.items;

    for (let i = 0; i < item.length; i++) {
        let bai = item[i];
        let snippet = bai.snippet;
        let thumbnails = snippet.thumbnails;
        let defthumb = thumbnails.high;
        let url = defthumb.url;
        list8.push(url);
    }
    displayInfo();
}


function displayInfo() {
    let n = -1;
    for (i = 100; i < 108; i++) {
        n += 1;

        let string = i.toString();
        string += " "
        document.getElementById(string).src = list8[n];

    }

}

//function cam xuc


function showFunEmo(keyWord, callback) {
    let kq;
    let xhr = new XMLHttpRequest();
    let link = `https://www.googleapis.com/youtube/v3/search?part=id&maxResults=40&q=${keyWord}
    &regionCode=vn&key=AIzaSyBesyg5lnTECss_yHw5HrrpcqDi_rexyRI`



    xhr.open("get", link);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            kq = getEmoMusic(this.responseText);
            callback(kq);
        }

    }

}

function getEmoMusic(json) {
    let json1 = JSON.parse(json);
    let arrayItems = json1.items;
    let videoId;
    while (typeof videoId == "undefined") {
        let item = arrayItems[Math.floor(Math.random() * arrayItems.length)];
        let id = item.id;
        videoId = id.videoId
    }
    return videoId;
}

//phuong thuc cua popup
//neu clicked = 1 thi k show popup
$(document).ready(function () {
    if (localStorage.getItem("clicked") == 1) {
        document.getElementsByClassName("pUCV")[0].style.display = "none";
    }
    $(document).on("click", "#popUp", function () {
        $(".pUCV").fadeOut();
        localStorage.setItem("clicked", 1)
    })
})


//function bat modal
function batModal(id) {
    $("#myModal").modal()
    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function (e) {

        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr('src', "https://www.youtube.com/embed/" + id + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    });



    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function (e) {
        // a poor man's stop video


        $("#video").attr('src', id);


    });
}
//phan phoi modal vao cac emoticon

let listEmo = ["angry music", "sad music", "love music", "emo music", "cool high music", "edm music", "music for baby", "funny music"]

function emo1() {
    showFunEmo(listEmo[0], batModal);
}

function emo2() {
    showFunEmo(listEmo[1], batModal);
}

function emo3() {
    showFunEmo(listEmo[2], batModal);
}

function emo4() {
    showFunEmo(listEmo[3], batModal);
}

function emo5() {
    showFunEmo(listEmo[4], batModal);
}

function emo6() {
    showFunEmo(listEmo[5], batModal);
}

function emo7() {
    showFunEmo(listEmo[6], batModal);
}

function emo8() {
    showFunEmo(listEmo[7], batModal);
}

//function cua button
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//function cua searchbox
let input = document.getElementById("searchBox");
input.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {   // enter thì kết thúc nhập
        localStorage.setItem("keyWord", JSON.stringify(input.value));
        document.getElementById("searchBox").value = '';
        window.open("../Trang tìm kiếm/page_search.html", '_blank')
    }
})