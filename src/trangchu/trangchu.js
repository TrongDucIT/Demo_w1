const menubarBtn = document.querySelector('.header-bar i');
menubarBtn.addEventListener("click", function () {
    document.querySelector('.header-bar ul').classList.toggle('active')
})

var imgFeature = document.querySelector('.img-feature');
var imgList = document.querySelectorAll('.list-img img');
var preBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');
var slideWrapper = document.querySelector('.slide-wrapper');

var currentIndex = 0;

function updateImageByIndex(index) {
    currentIndex = index;
    imgFeature.src = imgList[index].getAttribute('src');
    imgList.forEach(item => {
        item.parentElement.classList.remove('activee');
    });
    imgList[index].parentElement.classList.add('activee');
    slideWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

imgList.forEach((imgElement, index) => {
    imgElement.addEventListener('click', e => {
        updateImageByIndex(index);
    });
});

preBtn.addEventListener('click', e => {
    currentIndex = (currentIndex - 1 + imgList.length) % imgList.length;
    updateImageByIndex(currentIndex);
});

nextBtn.addEventListener('click', e => {
    currentIndex = (currentIndex + 1) % imgList.length;
    updateImageByIndex(currentIndex);
});

// Tự động chuyển slide sau mỗi 5 giây
var intervalId = setInterval(function () {
    currentIndex = (currentIndex + 1) % imgList.length;
    updateImageByIndex(currentIndex);
}, 3000);

// Dừng tự động chuyển slide khi người dùng tương tác
document.querySelector('.slider-container').addEventListener('mouseenter', function () {
    clearInterval(intervalId);
});

document.querySelector('.slider-container').addEventListener('mouseleave', function () {
    intervalId = setInterval(function () {
        currentIndex = (currentIndex + 1) % imgList.length;
        updateImageByIndex(currentIndex);
    }, 3000);
});

updateImageByIndex(0);
