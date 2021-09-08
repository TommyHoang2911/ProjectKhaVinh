var parentContent = document.getElementById("list-product");
var productItem = parentContent.getElementsByClassName("btnAddBag");

var listBag = [];

// Vòng lặp class 'btnAddBag' 3 sản phẩm <=> 3 vòng lặp
for (let index = 0; index < productItem.length; index++) {
    const element = productItem[index];

    // Bắt sự kiện khi click vào class 'btnAddBag'[index] thứ 'index'
    element.addEventListener("click", function(event) {

        // Dòng này sẽ ngăn cho người dùng click lần nữa khi đã click roài
        productItem[index].classList.add('addedBag');

        //Put data vào localStorage
        listBag.push(index);
        localStorage.setItem("selected", JSON.stringify(listBag));
        var selected = JSON.parse(localStorage.getItem("selected"));
        if (selected != null) {
            console.log(selected);
        }
    });
}

// Bắt sự kiện click button thêm vào giỏ hàng, có thể sử để cập nhập UI 
function addToBag() {

    console.log("Clicked !!");
}

var checkBag = document.getElementById("checkBag");

// Khi click Button thanh toán sẽ đưa danh sách đã chọn từ localStorage vào Cookie
checkBag.addEventListener("click", function(event) {
    var list = JSON.parse(localStorage.getItem("selected"));

    appendProduct(list);

    console.log("CLicked check bag :" + list.length);
})