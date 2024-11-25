document.getElementById("registration-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    // Kiểm tra username trùng lặp (giả lập)
    if (username === "バカあほ") {
        document.getElementById("username-error").style.display = "block";
    } else {
        document.getElementById("username-error").style.display = "none";
    }

    // Kiểm tra mật khẩu xác nhận
    if (password !== confirmPassword) {
        alert("パスワードが一致していません");
    } else {
        // Gửi dữ liệu tới server (giả lập)
        alert("登録が完了しました");
    }
});
