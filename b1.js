 // Kiểm tra xem local storage có hỗ trợ không
 if (typeof(Storage) !== "undefined") {
    // Nếu có, thực hiện các thao tác lưu trữ
    document.getElementById("personalInfoForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Ngăn chặn việc gửi dữ liệu form

        // Lấy thông tin từ các trường input
        var fullName = document.getElementById("fullName").value;
        var age = document.getElementById("age").value;
        var email = document.getElementById("email").value;

        // Tạo đối tượng thông tin cá nhân
        var personalInfo = {
            fullName: fullName,
            age: age,
            email: email
        };

        // Lưu đối tượng thông tin cá nhân vào local storage
        localStorage.setItem("personalInfo", JSON.stringify(personalInfo));

        // Hiển thị thông tin đã lưu
        displayPersonalInfo(personalInfo);
    });

    // Hiển thị thông tin đã lưu khi tải lại trang
    var savedPersonalInfo = localStorage.getItem("personalInfo");
    if (savedPersonalInfo !== null) {
        var parsedPersonalInfo = JSON.parse(savedPersonalInfo);
        displayPersonalInfo(parsedPersonalInfo);
    }
} else {
    // Nếu local storage không được hỗ trợ, thông báo lỗi
    document.getElementById("personalInfoDisplay").innerHTML = "Trình duyệt của bạn không hỗ trợ local storage.";
}

// Hiển thị thông tin cá nhân lên màn hình
function displayPersonalInfo(personalInfo) {
    var displayElement = document.getElementById("personalInfoDisplay");
    displayElement.innerHTML = "Họ tên: " + personalInfo.fullName + "<br>";
    displayElement.innerHTML += "Tuổi: " + personalInfo.age + "<br>";
    displayElement.innerHTML += "Email: " + personalInfo.email;
}