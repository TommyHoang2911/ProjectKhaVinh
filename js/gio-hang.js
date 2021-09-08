// Khởi tạo dữ liệu
products = [{
        "id": 0,
        "namepd": "Áo Lv 1",
        "price": "50.000 vnđ"
    },
    {
        "id": 1,
        "namepd": "Áo Lv 2",
        "price": "100.000 vnđ"
    },
    {
        "id": 2,
        "namepd": "Áo Lv 3",
        "price": "32.000.000 vnđ"
    }
];

// Get cookie 'listpd' (Loại bỏ dấu phẩy ',') : danh sách sản phẩm đã chọn
let listpd = getCookie("listpd").split(',');
console.log("List pd :" + listpd);

listBag = []

// Thêm danh sách đã lấy từ cookie chèn vào mảng
for (let index = 0; index < listpd.length; index++) {
    listBag.push(products[listpd[index]]);
}

var listPdTb = document.getElementById("listPdTb");

//temp value
var index = 1;
if (listpd == 'null') {
    alert("Chưa có sản phẩm được thêm vào");
} else {

    /*
    Sử dụng vòng lặp mảng 'listBag' để gán giá trị cho bảng giỏ hàng
    */
    listBag.forEach(function(item) {

        var row = listPdTb.insertRow(index);
        var cellsort = row.insertCell(0);
        var cellname = row.insertCell(1);
        var cellprice = row.insertCell(2);

        cellsort.innerHTML = index;
        Object.keys(item).forEach(function(key) {
            cellname.innerHTML = item["namepd"];
            cellprice.innerHTML = item["price"];
        });
        index++;
    });
    // Xóa các phần tử sau khi đã gán giá trị cho table
    listBag.splice(0, listBag.length);
}

console.log(products);
console.log("List Bag : " + JSON.stringify(listBag));