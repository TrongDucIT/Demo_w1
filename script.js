const menubarBtn = document.querySelector('.header-bar i');
menubarBtn.addEventListener("click", function () {
    document.querySelector('.header-bar ul').classList.toggle('active')
})
// mã bưu chính
async function fetchAddress() {
    const id = document.getElementById("inputId").value;
    const response = await fetch(`http://localhost:3000/adress/${id}`);
    const data = await response.json();

    if (response.ok) {
        document.getElementById("outputName").textContent = data.name;
    } else {
        document.getElementById("outputName").textContent = "ID not found";
    }
}

function onInputChange() {
    fetchAddress();
}

// Login

document.addEventListener('DOMContentLoaded', function () {
    const phoneNumberInput = document.getElementById('phoneNumber');
    const submitButton = document.getElementById('submitButton');

    submitButton.addEventListener('click', function () {
        const phoneNumber = phoneNumberInput.value;
        window.location.href = `login.html?phoneNumber=${phoneNumber}`;
    });
});

//contact
document.addEventListener("DOMContentLoaded", function () {
    // Lắng nghe sự kiện click của nút "Send"
    document.getElementById('sendButton').addEventListener('click', function () {
        // Lấy giá trị từ các trường nhập liệu
        var name = document.querySelector('.contact-content-item input[type="text"]').value;
        var email = document.querySelector('.contact-content-item input[type="email"]').value;
        var phone = document.querySelector('.contact-content-item input[type="tel"]').value;
        var postalCode = document.getElementById('inputId').value;
        const addresss = document.getElementById("outputName").textContent;
        var content = document.querySelector('.contact-content-bottom textarea').value;

        // Hiển thị thông tin người dùng đã nhập
        var summary = `
            <p><strong>Tên:</strong> ${name}</p>
            <p><strong>Số điện thoại:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mã bưu chính:</strong> ${postalCode}</p>
            <p><strong>Địa chỉ:</strong> ${addresss}</p>
            <p><strong>Nội dung:</strong> ${content}</p>
        `;

        document.getElementById('summary').innerHTML = summary;
        outputNameElement.style.display = 'inline'; // Hiển thị thẻ <span>
    });
});

function validatePhoneNumber() {
    const phoneNumberInput = document.getElementById("inputPhone");
    const phoneNumber = phoneNumberInput.value.replace(/\D/g, ""); // Loại bỏ tất cả các ký tự không phải số

    if (phoneNumber.length > 10) {
        phoneNumberInput.value = phoneNumber.slice(0, 10); // Giới hạn độ dài số điện thoại
    }
}
validatePhoneNumber()

// --------------------------------------------------------------