let index = 0;
const slides = document.querySelectorAll(".carousel-slide");

function pauseAllVideos() {
  const videos = document.querySelectorAll("video");
  videos.forEach(video => video.pause());
}

function showSlide(i) {
  pauseAllVideos();
  slides.forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");

  // Dá play no vídeo se existir no slide atual
  const video = slides[i].querySelector("video");
  if (video) {
    video.play().catch(err => {
      // Alguns navegadores ainda podem bloquear se não estiver muted
      console.warn("Autoplay bloqueado:", err);
    });
  }
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}
const carousels = {};

document.querySelectorAll('.carousel').forEach(carousel => {
  const id = carousel.id;
  const slides = carousel.querySelectorAll('.carousel-slide');
  carousels[id] = {
    index: 0,
    slides: slides
  };
});

function changeSlide(carouselId, direction) {
  const carousel = carousels[carouselId];
  const slides = carousel.slides;

  // Pausa vídeos antes de trocar slide
  slides[carousel.index].querySelectorAll('video').forEach(v => v.pause());

  slides[carousel.index].classList.remove('active');
  carousel.index = (carousel.index + direction + slides.length) % slides.length;
  slides[carousel.index].classList.add('active');

  // Dá play no vídeo, se houver
  const video = slides[carousel.index].querySelector('video');
  if (video) video.play().catch(() => {});
}
// Garante que apenas um vídeo toque por vez
document.querySelectorAll('video').forEach(video => {
  video.addEventListener('play', () => {
    document.querySelectorAll('video').forEach(otherVideo => {
      if (otherVideo !== video) {
        otherVideo.pause();
      }
    });
  });
});

// ===========================================
// LÓGICA DO CARROSSEL DO LOGO (logo-carousel)
// Este código faz as imagens do seu logo alternarem automaticamente.
// ===========================================
let logoIndex = 0;
const logoSlides = document.querySelectorAll(".logo-carousel .logo-slide");

function showNextLogo() {
    // Verifica se há slides de logo para evitar erros
    if (!logoSlides || logoSlides.length === 0) {
        console.warn("Nenhum slide de logo encontrado para o carrossel.");
        return;
    }

    // Remove a classe 'active' do slide de logo atual para escondê-lo
    logoSlides[logoIndex].classList.remove("active");

    // Calcula o índice do próximo slide (volta ao primeiro se for o último)
    logoIndex = (logoIndex + 1) % logoSlides.length;

    // Adiciona a classe 'active' ao novo slide de logo para exibi-lo
    logoSlides[logoIndex].classList.add("active");
}

// Inicia a troca automática dos logos se houver mais de um slide
if (logoSlides.length > 1) { // Só faz sentido se tiver mais de uma imagem para alternar
    setInterval(showNextLogo, 4000); // Troca a cada 4 segundos (4000 milissegundos)
} else if (logoSlides.length === 1) {
    // Se houver apenas um logo, certifique-se de que ele esteja visível
    logoSlides[0].classList.add("active");
}


// ===========================================
// LÓGICA DO CARROSSEL DO BANNER PRINCIPAL (banner-entrada-carousel)
// Este código faz as imagens do seu banner principal alternarem automaticamente.
// ===========================================
let bannerIndex = 0;
const bannerSlides = document.querySelectorAll(".banner-entrada-carousel .slide");

function showNextBanner() {
    // Verifica se há slides de banner para evitar erros
    if (!bannerSlides || bannerSlides.length === 0) {
        console.warn("Nenhum slide de banner encontrado para o carrossel principal.");
        return;
    }

    // Remove a classe 'active' do slide de banner atual para escondê-lo
    bannerSlides[bannerIndex].classList.remove("active");

    // Calcula o índice do próximo slide (volta ao primeiro se for o último)
    bannerIndex = (bannerIndex + 1) % bannerSlides.length;

    // Adiciona a classe 'active' ao novo slide de banner para exibi-lo
    bannerSlides[bannerIndex].classList.add("active");
}

// Inicia a troca automática dos banners se houver mais de um slide
if (bannerSlides.length > 1) { // Só faz sentido se tiver mais de uma imagem para alternar
    setInterval(showNextBanner, 4000); // Troca a cada 4 segundos (4000 milissegundos)
} else if (bannerSlides.length === 1) {
    // Se houver apenas um banner, certifique-se de que ele esteja visível
    bannerSlides[0].classList.add("active");
}




