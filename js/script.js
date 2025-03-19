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

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

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