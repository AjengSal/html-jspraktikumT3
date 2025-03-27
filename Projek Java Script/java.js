const content = document.getElementById('content');
const mentalHealthParagraphs = [
  "Kesehatan mental adalah kondisi di mana seseorang dapat berkembang secara fisik, mental, spiritual, dan sosial sehingga individu tersebut menyadari kemampuannya sendiri.",
  "Beberapa masalah kesehatan mental yang sering terjadi antara lain depresi, gangguan kecemasan, bipolar, dan skizofrenia.",
  "Menjaga kesehatan mental sama pentingnya dengan menjaga kesehatan fisik. Keduanya saling berkaitan dan memengaruhi kualitas hidup seseorang.",
  "Stres yang berkepanjangan dapat menyebabkan gangguan kesehatan mental. Penting untuk mengenali gejala stres sejak dini dan mencari cara untuk mengelolanya.",
  "Berbicara dengan orang terdekat atau mencari bantuan profesional seperti psikolog atau psikiater adalah langkah penting dalam menjaga kesehatan mental.",
  "Aktivitas fisik seperti berolahraga, meditasi, atau yoga dapat membantu meningkatkan suasana hati dan mengurangi stres.",
  "Mengatur pola tidur yang baik dan menjaga asupan nutrisi juga berperan penting dalam menjaga kesehatan mental.",
  "Tidak ada yang salah dengan meminta bantuan. Kesehatan mental adalah hak setiap orang dan penting untuk selalu dijaga.",
  "Lingkungan yang positif dan support system yang baik akan membantu seseorang terhindar dari berbagai masalah kesehatan mental.",
  "Mari kita bersama-sama meningkatkan kesadaran tentang pentingnya kesehatan mental dan saling mendukung satu sama lain."
];

for (let i = 0; i < 10; i++) {
  mentalHealthParagraphs.forEach((para, index) => {
    content.innerHTML += `<h3>Topik ${index + 1}</h3><p>${para}</p>`;
  });
}

const scrollBtn = document.getElementById('scrollToTopBtn');

window.onscroll = function () {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    scrollBtn.style.opacity = "0.6";
  } else {
    scrollBtn.style.opacity = "0";
  }
};

scrollBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
