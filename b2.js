 // Hiển thị danh sách cầu thủ khi tải lại trang
 window.onload = function() {
    displayPlayers();
};

// Thêm cầu thủ mới
function addPlayer() {
    var playerName = document.getElementById("playerName").value;
    if (playerName.trim() !== "") {
        // Tạo một id ngẫu nhiên cho cầu thủ mới
        var playerId = generateId();

        // Lưu cầu thủ vào local storage
        localStorage.setItem(playerId, playerName);

        // Hiển thị danh sách cầu thủ
        displayPlayers();

        // Xóa nội dung ô nhập tên cầu thủ
        document.getElementById("playerName").value = "";
    }
}

// Hiển thị danh sách cầu thủ
function displayPlayers() {
    var playerListElement = document.getElementById("playerList");
    playerListElement.innerHTML = "";

    // Duyệt qua tất cả các cặp key-value trong local storage
    for (var i = 0; i < localStorage.length; i++) {
        var playerId = localStorage.key(i);
        var playerName = localStorage.getItem(playerId);

        // Tạo phần tử li để hiển thị tên cầu thủ
        var playerItemElement = document.createElement("li");
        playerItemElement.textContent = playerName;

        playerListElement.appendChild(playerItemElement);
    }
}

// Tạo một id ngẫu nhiên
function generateId() {
    return  + (Math.floor(Math.random() * 100) + 1);
}