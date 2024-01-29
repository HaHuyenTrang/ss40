        // Hiển thị danh sách cầu thủ khi tải lại trang
        window.onload = function() {
            displayPlayers();
        };

        // Xóa cầu thủ
        function deletePlayer() {
            var playerId = document.getElementById("playerId").value;
            if (playerId.trim() !== "") {
                // Xóa cầu thủ khỏi local storage
                localStorage.removeItem(playerId);

                // Hiển thị danh sách cầu thủ
                displayPlayers();

                // Xóa nội dung ô nhập ID cầu thủ
                document.getElementById("playerId").value = "";
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

                // Tạo phần tử li để hiển thị tên cầu thủ và ID
                var playerItemElement = document.createElement("li");
                playerItemElement.textContent = "ID: " + playerId + " - Tên: " + playerName;

                playerListElement.appendChild(playerItemElement);
            }
        }
