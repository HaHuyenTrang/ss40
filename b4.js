// Hiển thị tất cả các giá trị đã lưu trong localStorage
function displayLocalStorage() {
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key);
      console.log(key + ': ' + value);
    }
  }
  
  // Gọi hàm để hiển thị giá trị đã lưu trong localStorage
  displayLocalStorage();