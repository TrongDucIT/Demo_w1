
$(document).ready(function () {
    $('.form-group .eye').click(function () {
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if ($(this).hasClass('open')) {
            $(this).prev().attr('type', 'text');
        } else {
            $(this).prev().attr('type', 'password');
        }
    })
})

// document.addEventListener("DOMContentLoaded", function () {
//     const loginForm = document.getElementById("form-login");

//     loginForm.addEventListener("submit", function (event) {
//         event.preventDefault();

//         const emailInput = document.getElementById("email");
//         const passwordInput = document.getElementById("password");

//         const email = emailInput.value;
//         const password = passwordInput.value;

//         // Gửi yêu cầu kiểm tra email và mật khẩu đến API
//         fetch(`http://localhost:3000/mk`)
//             .then(response => response.json())
//             .then(data => {
//                 const user = data.find(item => item.email === email);

//                 if (user && user.mk === password) {
//                     //
//                     alert("Thông tin đúng. Truy cập được cho phép.");
//                     // Đợi 5 giây trước khi chuyển đến trang mới
//                     setTimeout(function () {
//                         const name = user.name;
//                         window.location.href = `src/trangchu/trangchu.html?name=${encodeURIComponent(name)}`;
//                     }, 3000); // 3000ms = 5 giây
//                 } else {
//                     alert("Thông tin không hợp lệ. Vui lòng thử lại.");
//                 }
//             })
//             .catch(error => {
//                 console.error("Lỗi khi gửi yêu cầu kiểm tra thông tin:", error);
//             });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("form-login");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");

        const email = emailInput.value;
        const password = passwordInput.value;


        // URL là "http://localhost:3000/mk")
        fetch(`http://localhost:3000/mk`)
            .then(response => response.json())
            .then(data => {
                const user = data.find(item => item.email === email);

                if (user && user.mk === password) {
                    localStorage.setItem("loggedInUserName", user.name);
                    window.location.href = "src/trangchu/trangchu.html";
                } else {
                    alert("Thông tin không hợp lệ. Vui lòng thử lại.");
                }
            })
            .catch(error => {
                console.error("Lỗi khi gửi yêu cầu kiểm tra thông tin:", error);
            });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const phoneNumberDisplay = document.getElementById('phoneNumberDisplay');

    const urlParams = new URLSearchParams(window.location.search);
    const phoneNumber = urlParams.get('phoneNumber');

    if (phoneNumber) {
        phoneNumberDisplay.textContent = phoneNumber;
    } else {
        phoneNumberDisplay.textContent = 'Không có số điện thoại nào được nhập.';
    }
});

const iconBack = document.getElementById("iconBack");

iconBack.addEventListener("click", function () {
    // Sử dụng phương thức window.history để quay về trang trước
    window.history.back();
});