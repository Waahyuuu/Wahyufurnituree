let closer = document.querySelector('#closer');

closer.onclick = () => {
    closer.style.display = 'none';
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    closer.style.display = "block";
    navbar.classList.toggle('active');
}

let contact = document.querySelector('#contact-btn');

document.querySelector('#contact-btn').onclick = () => {
    let phoneNumber = "6285340012806";
    let message = "Halo, saya ingin bertanya tentang produk Anda.";
    let contact = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(contact, "_blank");
}

let searchForm = document.querySelector('.header .search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
}

// slide
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".home .slides-container .slide");
    let currentIndex = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    // Tambahkan event listener untuk tombol Next dan Prev
    document.getElementById("slide-next").addEventListener("click", function () {
        nextSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    document.getElementById("slide-prev").addEventListener("click", function () {
        prevSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    // Tampilkan slide pertama saat halaman dimuat
    showSlide(currentIndex);
    startAutoSlide(); // Mulai auto-slide saat halaman dibuka
});


//   selengkapnya
document.querySelector(".read-more-btn").addEventListener("click", function () {
    let fullText = document.querySelector(".full-text");
    let btn = document.querySelector(".read-more-btn");

    if (fullText.style.display === "none" || fullText.style.display === "") {
        fullText.style.display = "block"; 
        btn.innerText = "<<Tampilkan Sedikit";
    } else {
        fullText.style.display = "none";
        btn.innerText = "Baca Selengkapnya >>";
    }
});

// email library
(function(){
    emailjs.init("ysf0pBtaG2quYX_su");
  })();

  function sendEmail(event) {
    event.preventDefault();

    let button = event.target.querySelector(".btn");
    button.innerHTML = `<div class="spinner"></div> Mengirim...`;
    button.disabled = true;

    emailjs.sendForm("service_nht9o0k", "template_mgfnies", event.target)
      .then(response => {
        alert("Pesan berhasil dikirim!");
        event.target.reset();
        button.innerHTML = "Kirim";
        button.disabled = false;
      })
      .catch(error => {
        alert("Gagal mengirim pesan.");
        button.innerHTML = "Kirim";
        button.disabled = false;
      });
  }



