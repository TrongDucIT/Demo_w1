// Lấy tên người dùng từ local storage và hiển thị lên trang
const loggedInUserName = localStorage.getItem("loggedInUserName");
const loggedInUserNameSpan = document.getElementById("loggedInUserName");

if (loggedInUserName) {
    loggedInUserNameSpan.textContent = loggedInUserName;
}

document.addEventListener("DOMContentLoaded", function () {

    // Lắng nghe sự kiện click của nút Log Out
    document.getElementById('logoutButton').addEventListener('click', function () {
        document.getElementById('loggedInUserName').textContent = '';
        // // Thay đổi đường dẫn tới trang đăng xuất của bạn
        // window.location.href = "trangchu.html";
    });
    document.getElementById('loginButton').addEventListener('click', function () {
        // Thay đổi đường dẫn tới trang đăng nhập của bạn
        window.location = "../../login.html";
    });
});

