 // Đăng ký người dùng
 function registerUser(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var user = {
      name: name,
      email: email,
      password: password
    };

    // Lấy danh sách người dùng từ localStorage
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Thêm người dùng mới vào danh sách
    users.push(user);

    // Lưu danh sách người dùng vào localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Xóa nội dung các trường input
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

    // Hiển thị thông báo đăng ký thành công
    alert("Đăng ký thành công!");
  }