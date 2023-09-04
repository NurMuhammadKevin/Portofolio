const menuToggle = document.getElementById('menuToggle');

// Tambahkan event listener untuk menangani klik tombol
menuToggle.addEventListener('click', function () {
  // Di sini Anda bisa menambahkan aksi apa yang ingin dilakukan saat tombol di-klik
  // Contoh aksi toggle class atau fungsi lainnya
  console.log('Tombol menu-toggle diklik!');
  menuToggle.classList.toggle('menu-toggle1');
});


const typed = new Typed('.multiple-text', {
  strings: ["Beginners", "Freelancer", "FullStack Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
  smartBackspace: true,
})


// let btn = document.querySelector('.btn-i1:nth-child(2)');
// btn.addEventListener('mouseover', e => {
//   let rect = e.target.getBoundingClientRect();
//   let x = e.clientX - rect.left;
//   btn.style.setProperty('--x', x + 'px');
// });

var mixer = mixitup('.portofolio-gallery', {
  selectors: {
    target: '.port-box'
  },
  animation: {
    duration: 500
  }
})

let MoverSpan = document.getElementById('targetMove');

MoverSpan.addEventListener('mousemove', mOver)
MoverSpan.addEventListener('mouseout', mOut)


const mOver = () => {
  MoverSpan.classList
}