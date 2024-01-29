// cách lưu trữ lên local
//kiểu dữ liệu JSON
//1.chuyển đổi kiểu dữ liệu javascript sang JSON
let user = {
    id: 1,
    name: "Hà Huyền Trang",
    age:  21,
}
let userJson = JSON.stringify(user);
console.log("sữ liệu sau khi chuyển đổi: ", userJson);

//2. chuyển đổi từ JSON sang javascript
let userJS = JSON.parse(userJson);
console.log("dữ liệu sau khi chuyển sang js: ", userJS);

//lưu trữ dữ liệu trong local
localStorage.setItem('user', userJson);


//lấy dữ liệu từ localStorage
let listUser = localStorage.getItem("user");
// let listUserParser = JSON.parse(listUser);
let listUserParser = localStorage.getItem("user");
console.log("listUser");



//xóa dữ liệu khỏi localStorage theo key
localStorage.removeItem("user");


//xóa tất cả dữ liệu khỏi localStorage
localStorage.clear();



//xây dựng ud todolist
//1.thêm mới công việc lên local và hiển thị danh sách ra ngoài giao diện
//2.khi click vào nút xóa thì hiển thị modal xác nhận xóa. cancel: không xóa. ok: xóa


// document.getElementById("addItem").addEventListener("click", function() {
//     var taskInput = document.getElementById("taskInput").value;
//     if (taskInput !== "") {
//         var li = document.createElement("li");
//         var span = document.createElement("span");
//         span.innerText = taskInput;
//         var editButton = document.createElement("button");
//         editButton.innerText = "sửa";
//         var deleteButton = document.createElement("button");
//         deleteButton.innerText = "xóa";

//         li.appendChild(span);
//         li.appendChild(editButton);
//         li.appendChild(deleteButton);

//         document.getElementById("taskList").appendChild(li);

//         document.getElementById("taskInput").value = ""; // Clear the input field
//     }
// });

let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
// let listJob = JSON.parse(localStorage.getItem(jobs)) // [];
let listJob = [];

function createJob(){
    let inputValue = $("#inputValue").value;
    console.log(inputValue);
    if(!inputValue){
        alert("tên cv không để trống");
    }else{
        const job ={
            id: Math.ceil(Math.random() *1000000),
            name: inputValue,
            status: false,
        };
        listJob.push(job);
        localStorage.setItem("jobs", JSON.stringify(listJob));
    }
}

$("#form").addEventListener("submit", (e)=>{
    e.preventDefault();
    createJob();
});


function render(){}
    let ulHtmls = listJob.map(function(job){
        return `
        <li>
            <span>${job.name}</span>
            <button>sửa</button>
            <button>xóa</button>
        </li>
        `;
    });
    //chuyển đang mảng thành html
    let ulHtml = ulHtmls.join("");
    console.log(ulHtml);
    //gắn dl vào DOM
    $("#listJob").innerHTML = ulHtml;

render();

function handlDelete(id){
    let newListJob = listJob.filter(function(job){
        return job.id !=id;
    });
    console.log(newListJob);
    localStorage.setItem("jobs", JSON.stringify(newListJob));
    //gọi hàm
}

//map(): dùng để lặp các ptu mảng, trả về mảng mới có sl ptu = sl ptu mảng cũ nhưng được thay đổi

let array = [1,2,3,4];
let newArray = []
for(let i = 0; i<array.length; i++){
    newArray.push(array[i] * 2);
}

let newNumber = array.map(function(number){
    return number * 2;
});
console.log("newArr", newArray);