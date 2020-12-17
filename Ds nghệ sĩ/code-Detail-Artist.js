

// Lấy dữ liệu từ localStorage
let a = [];
a = JSON.parse(localStorage.getItem(`artist`));

a = a[localStorage.getItem('clickedArtist')];


// 17-12-2020 quick fix ~ add artist data to this 

let artist = [
    {
        'name': 'Sơn Tùng M-TP',
        'tenThat': 'Nguyễn Thanh Tùng',
        'sinhNhat': '05/07/1994',
        'nation': 'Việt Nam',
        'inFor': '<p> Sinh ra và lớn lên tại một vùng quê của tỉnh Thái Bình. Vốn sở hữu “gen di truyền” từ người mẹ của mình, một nghệ sĩ biểu diễn hát chèo tại Nhà hát Thái Bình nên Tùng đã bộc lộ khả năng âm nhạc của mình ngay từ khi còn là một cậu bé mới chập chững những bước đi đầu tiên. <p>Năm 2012, Sơn Tùng quyết định thi tuyển vào Nhạc viện TPHCM, một trong những ngôi trường có tỉ lệ chọi vô cùng “khốc liệt”.Mặc dù giọng hát của Sơn Tùng không có một chút kỹ thuật nào nhưng chỉ với một tháng luyện thi chăm chỉ, quên cả việc ăn ngủ, Sơn Tùng đã đỗ thủ khoa Nhạc viện TPHCM chuyên ngành Thanh nhạc với số điểm 25,5.</p >Ít năm sau, những sản phẩm âm nhạc liên tiếp được chàng trai gốc Thái Bình tung ra thị trường như “Em của ngày hôm qua”, “Chạy ngay đi”, “Lạc trôi”, … đã trở thành những sản phẩm đình đám nhất của thị trường âm nhạc Việt Nam, ngoài ra những sản phẩm này cũng lan tỏa sang cả một số quốc gia khác trên thế giới.</p > ',
        'image': '<img src="https://i.imgur.com/hg6ukiT.jpg" class="rounded" id="singer1-ava-boder" />',
        'anhBackGround': '<img src="https://i.imgur.com/fQFDONx.jpg" class="rounded" id="singer1-cover-boder" />',
        'videoId': [],
        'thumbnail': [],
    },
    // 'j__Q13iAxNk'
    {
        'name': 'Soobin Hoàng Sơn',
        'tenThat': 'Nguyễn Hoàng Sơn',
        'sinhNhat': '10/09/1992',
        'nation': 'Việt Nam',
        'inFor': '<p>Soobin Hoàng Sơn (tên thật Nguyễn Hoàng Sơn, sinh ngày 10/09/1992) là một ca sỹ, nhạc sỹ,rapper ở Việt Nam.Sau khi đoạt ngôi á quân Ngôi sao Việt 2014 và để lại dấu ấn riêng với giải Bạc chung cuộc tại The Remix mùa hai, Soobin Hoàng Sơn bắt đầu tập trung cho con đường ca hát chuyên nghiệp.<p>Từ trước đến nay, giọng ca sinh năm 1992 theo đuổi dòng nhạc RnB và có chỗ đứng nhất định trên thị trường nhạc Việt. Dù vậy, phải đợi đến khi rẽ lối hát pop ballad, vào tháng 10/2016, anh mới có ca khúc hit đầu tiên trong sự nghiệp, Phía sau một cô gái, do nhạc sĩ Tiên Cookie sáng tác. Ca khúc nhanh chóng tạo được cơn sốt và được cộng đồng đón nhận, hưởng ứng nhiệt tình.</p>Tiếp nối thành công của bản hot Phía Sau Một Cô Gái, Soobin tiếp tục cho ra mắt thêm những sản phẩm âm nhạc đầy chất lượng trong năm 2017: Đi Để Trở Về, Đi Và Yêu, Anh Đã Quen Với Cô Đơn.</p>',
        'image': '<img src="https://i.imgur.com/teNUyBC.jpg" class="rounded" id="singer1-ava-boder" />',
        'anhBackGround': '<img src="https://i.imgur.com/hU3tZ6l.jpg" class="rounded" id="singer1-cover-boder" />',
        'videoId': [],
        'thumbnail': [],
    },

    // '7kP8Qnu2TJ8', 'HK31DrqpztM&bpctr=1572624414'
    // {
    //     'name': 'Amee',
    //     'tenThat': 'Trần Huyền My',
    //     'sinhNhat': '20/03/2000',
    //     'nation': 'Việt Nam',
    //     'inFor': '<p> Cô tên thật Trần Huyền My, đã xuất hiện trong một số MV với vai trò diễn viên, nổi bật nhất là Hongkong1. Trong MV Hongkong1, giọng ca sinh năm 2000 nhận được lời khen cho vẻ ngoài xinh xắn, dễ thương.  <p>Trong sản phẩm Ex’s Hate Me, cô không chỉ tham gia mà còn khoe giọng. Màn ra mắt với tư cách ca sĩ của cô đang gây sốt trên các trang mạng xã hội. Cùng sự lan tỏa của Ex’s Hate Me, thông tin về AMee cũng được tìm kiếm. Ngoại hình xinh xắn, đồng thời, cô chinh phục khán giả với giọng hát trong trẻo, luyến láy ngọt ngào.</p></p>',
    //     'image': '<img src="https://i.imgur.com/rF04dOv.jpg" class="rounded" id="singer1-ava-boder" />',
    //     'anhBackGround': '<img src="https://i.imgur.com/sA8NePp.jpg" class="rounded" id="singer1-cover-boder" />',
    //     'videoId': [],
    //     'thumbnail': [], 
    // },

    {
        'name': 'Binz',
        'tenThat': 'Lê Nguyễn Trung Đan',
        'sinhNhat': '24/05/1988',
        'nation': 'Việt Nam',
        'inFor': '<p> Tham gia cộng đồng underground Việt từ năm 2008, Binz đã từng là artist của một số diễn đàn rap như Midsiderap, GVR. Được biết tới rộng rãi hơn trong năm 2010 với mixtape ”M-da Legend” & những sản phẩm  đáng chú ý kết hợp với rapper Cá Chép của Vietdreamerz, người nghe rap nhớ tới Binz là một artist trẻ  miền Trung có giọng hát ngọt ngào, kĩ thuật tốt và luôn mới mẻ.  <p>  Các album của anh: Nếu Như Là Định Mệnh - Bin, Hoài Lâm; Sau Mỗi Đêm Dài - JC Hưng, Binz (2017);  Cơn Mưa Cuối (Single) Hoa Hồng Dại - Binz, KanDy, Ken Tamz; Tết Này Con Về - Isaac Thái, Binz; Chỉ Còn Mình Anh (Single) (2016); Tát Nước Đầu Đình (Single); Điều Bí Mật (Single)-ItsLee, Binz;  Những Bài Hát Hay Nhất Của Binz(2015); Bâng Khuâng (Rap Version); (Single) - JustaTee, Binz (2014);   Crying Over You (Single) JustaTee, Binz (2013); Nếu Như Là Định Mệnh - Hoài Lâm ft. Binz (2017);  HOA HỒNG DẠI - Binz(2017). </p> Năm 2018, Binz cùng Khổng Tú Quỳnh cho ra mắt Single "Sẽ Không Ngốc Nưa", ca khúc đánh dấu sự trở lại của Khổng Tú Quỳnh trên đường đua V-Pop.</p>',
        'image': '<img src="https://i.imgur.com/BkgVMki.jpg" class="rounded" id="singer1-ava-boder" />',
        'anhBackGround': '<img src="https://i.imgur.com/YIG2aav.jpg" class="rounded" id="singer1-cover-boder" />',
        'videoId': [],
        'thumbnail': [],
    },
    {
        'name': 'Đức Phúc',
        'tenThat': 'Nguyễn Đức Phúc',
        'sinhNhat': '15/10/1996',
        'nation': 'Việt Nam',
        'inFor': '<p> Đức Phúc tên đầy đủ là Nguyễn Đức Phúc. Anh là quán quân Giọng hát Việt mùa 3, đang hoạt động nghệ thuật với vai trò ca sĩ do công ty Mỹ Tâm Entertainment quản lý. <p> Sau khi tham gia Giọng hát Việt 2015, Đức Phúc được công chúng yêu thích vì  giọng hát ngọt ngào, cao vút qua những ca khúc như: Ánh Nắng Của Anh, Cũng Đành Thôi, Em Là Tất Cả...  Nhưng anh chàng vẫn tự ti về ngoại hình của mình, ngay sau đó, nam ca sĩ phải nỗ lực rất nhiều để giảm cân. Từ một chàng trai mũm mĩm, sau thời gian cố gắng anh đã sở hữu được thân hình như mong muốn. </p>  Nhưng vẫn chưa dừng lại, Đức Phúc quyết tâm "lột xác" để có vẻ ngoài hoàn hảo hơn.  Sau khi trải qua một cuộc phẫu thuật thẩm mĩ, Đức Phúc đã trở nên lột xác ngoạn mục với hình ảnh điển trai. </p>',
        'image': '<img src="https://i.imgur.com/znRXM2u.jpg" class="rounded" id="singer1-ava-boder" />',
        'anhBackGround': '<img src="https://i.imgur.com/ak15OW6.jpg" class="rounded" id="singer1-cover-boder" />',
        'videoId': [],
        'thumbnail': [],
    },
];

// Đẩy dữ liệu lên localstorage
localStorage.clear();
localStorage.setItem('artist', JSON.stringify(artist));



document.getElementById("name").innerHTML = a.name;
document.getElementById("real-name").innerHTML = 'Tên thật: ' + '' + a.tenThat;
document.getElementById("birthday").innerHTML = 'Sinh nhật: ' + '' + a.sinhNhat;
document.getElementById("nation").innerHTML = 'Quốc gia: ' + '' + a.nation;
document.getElementById("singer1-cover-boder").innerHTML = a.anhBackGround;
document.getElementById("singer1-ava-boder").innerHTML = a.image;
document.getElementById("infor").innerHTML = a.inFor;


if (a.name === 'Sơn Tùng M-TP') {
    document.getElementById('ds-bai-hat').innerHTML =
        '<iframe src="https://www.youtube.com/embed/knW7-x7Y7RE" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/embed/FN7ALfpGxiI" width="350" height="200" frameborder="0"allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/embed/Llw9Q6akRo4" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/embed/qGRU3sRbaYw" width="350" height="200" frameborder="0"allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/embed/32sYGCOYJUM" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/embed/LCyo565N_5w" width="350" height="200"  frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/embed/5Jm9g0YdGDU" width="350" height="200"  frameborder="0"  class="spacing" allowfullscreen></iframe>' +
        '<iframe src="https://www.youtube.com/embed/-vtBgNxMyZI" width="350" height="200" frameborder="0"  allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/embed/Thf6-faRGI4" width="350" height="200"  frameborder="0" class="spacing" allowfullscreen></iframe>'
}

else if (a.name === 'Amee') {
    document.getElementById('ds-bai-hat').innerHTML =
        '<iframe src="https://www.youtube.com/watch?v=YXkp77tR9vw" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/watch?v=-mDjSuS-Fiw" width="350" height="200" frameborder="0"allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/watch?v=I3RICWXA_3U" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/watch?v=ZwDxaM5VBJM" width="350" height="200" frameborder="0"allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/watch?v=95ahbau-rJk" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe  src="https://www.youtube.com/watch?v=iE52-XXnQqs" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/watch?v=_UCb4U82tTk"  width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/watch?v=30KI5SuECuc" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/watch?v=8oa9i2_p7K4" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>'
}

else if (a.name === 'Soobin Hoàng Sơn') {
    document.getElementById('ds-bai-hat').innerHTML =
        '<iframe width="350" height="200" src="https://www.youtube.com/embed/7kP8Qnu2TJ8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"class="spacing" allowfullscreen></iframe>' +
        '<iframe width="350" height="200" src="https://www.youtube.com/embed/dOZ1gK5YFBI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"class="spacing" allowfullscreen></iframe>' +
        '<iframe width="350" height="200" src="https://www.youtube.com/embed/wnSNyE2hVu4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"class="spacing" allowfullscreen></iframe>' +
        '<iframe width="350" height="200" src="https://www.youtube.com/embed/j__Q13iAxNk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" class="spacing" allowfullscreen></iframe>' +
        '<iframe width="350" height="200" src="https://www.youtube.com/embed/z5Jc7KiTLbs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"class="spacing" allowfullscreen></iframe>' +
        '<iframe width="350" height="200" src="https://www.youtube.com/embed/nIjreHymcWU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"class="spacing" allowfullscreen></iframe>' +
        '<iframe width="350" height="200" src="https://www.youtube.com/embed/X7sSE3yCNLI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"class="spacing" allowfullscreen></iframe>' +
        '<iframe width="350" height="200" src="https://www.youtube.com/embed/Mtiz26WdeKA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"class="spacing" allowfullscreen></iframe>' +
        '<iframe width="350" height="200" src="https://www.youtube.com/embed/G6towqFgoZ4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"class="spacing" allowfullscreen></iframe>'
}




