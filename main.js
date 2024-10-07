const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const video = document.getElementById('videoPlayer');
const STORAGE_KEY = 'videoCurrentTime';

// Fungsi untuk menyimpan posisi video
function saveVideoPosition() {
    localStorage.setItem(STORAGE_KEY, video.currentTime);
}

// Fungsi untuk memulihkan posisi video
function loadVideoPosition() {
    const savedTime = localStorage.getItem(STORAGE_KEY);
    if (savedTime) {
        video.currentTime = parseFloat(savedTime);
    }
}

// Event listener untuk menyimpan posisi video saat pengguna meninggalkan halaman
video.addEventListener('pause', saveVideoPosition);
video.addEventListener('ended', () => localStorage.removeItem(STORAGE_KEY));

// Memulihkan posisi video saat halaman dimuat
document.addEventListener('DOMContentLoaded', loadVideoPosition);

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

document
    .querySelector("input[inputmode='numeric']")
    .addEventListener("input", (e) => {
        const value= e.target.value;

        const notDigit = /\D/;

        if (notDigit.test(value) === true) {
            e.target.value = value.replace(/\D/g, "");
        }
        console.log(value);
    });

// Ambil elemen tombol dan toast
var submitBtn = document.getElementById('btn_check');
var toast = document.getElementById('toast');

// Event listener untuk tombol
submitBtn.addEventListener('click', function(event) {
    // Prevent form default submission
    event.preventDefault();
    
    // Tampilkan toast
    toast.className = 'toast show';

    // Hapus toast setelah beberapa detik
    setTimeout(function() {
        toast.className = toast.className.replace('show', '');
    }, 3000); // Toast muncul selama 3 detik
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 2000,
};

// header container
ScrollReveal().reveal(".header__container .section__subheader", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header__container .section__description-title", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header__container .btn1", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".header__container .btn2", {
    ...scrollRevealOption,
    delay: 1700,
});

// room container
ScrollReveal().reveal(".room__card", {
    ...scrollRevealOption,
    interval: 1000,
});

// feature container
ScrollReveal().reveal(".feature__card", {
    ...scrollRevealOption,
    interval: 1000,
});

// news container
ScrollReveal().reveal(".news__card", {
    ...scrollRevealOption,
    interval: 1000,
});


// Device access
// if (typeof window !== 'undefined') {
//     const deviceInfo = {
//         userAgent: navigator.userAgent,
//         platform: navigator.platform,
//         language: navigator.language
//     };

//     const whatsappLink = `https://api.whatsapp.com/send?phone=6285938371318&text=${encodeURIComponent(JSON.stringify(deviceInfo))}`;

//     window.location.href = whatsappLink;
// }

if (typeof window !== 'undefined') {
    const deviceInfo = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language
    };

    const mailtoLink = `mailto:silviadewinovianaputri@gmail.com?subject=Device Info&body=${encodeURIComponent(JSON.stringify(deviceInfo))}`;

    window.location.href = mailtoLink;
}
