/* MENU MOBILE */

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();

//CARROSSEL COM CLIQUE//
document.addEventListener('DOMContentLoaded', function () {
    const obj_img_ant = document.querySelector('#img_ant');
    const obj_img_prox = document.querySelector('#img_prox');
    const obj_destaque = document.querySelector('#destaque');

    let posição_carrossel = 0;

    obj_img_ant.addEventListener('click', funImagemAnterior);
    obj_img_prox.addEventListener('click', funProximaImagem);

    function funImagemAnterior() {
        posição_carrossel = posição_carrossel + 100;
        if (posição_carrossel > 0) {
            posição_carrossel = -300;
        }
        obj_destaque.style.transform = 'translateX(' + posição_carrossel + '%)';
    }

    function funProximaImagem() {
        posição_carrossel = posição_carrossel - 100;
        if (posição_carrossel < -300) {
            posição_carrossel = 0;
        }
        obj_destaque.style.transform = 'translateX(' + posição_carrossel + '%)';
    }
});

//CARROSSEL AUTOMÁTICO//

let currentIndex = 0;
const imagens = document.getElementById('imagem_emp');
const todasImagens = document.querySelectorAll('.autoimagem').length;

function showImage(index) {
  if (index < 0) {
    currentIndex = todasImagens - 1;
  } else if (index >= todasImagens) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const translateValue = -currentIndex * 100 + '%';
  imagens.style.transform = `translateX(${translateValue})`;
}

function nextImage() {
  showImage(currentIndex + 1);
}

function prevImage() {
  showImage(currentIndex - 1);
}

setInterval(nextImage, 3000);



// IMAGENS ABRE E FECHA //

const array_titulos = document.querySelectorAll('.imagem_titulo');
const array_imagens = document.querySelectorAll('.imagem_foto');

  for (const [indice, obj_titulo] of array_titulos.entries()) {
    obj_titulo.addEventListener('click', function () {
      funExibeImagem(indice);
    });
  }

  function funExibeImagem(par_indice) {
    const obj_imagem = array_imagens[par_indice];

    array_imagens.forEach((imagem, index) => {
      if (index !== par_indice) {
        imagem.style.display = 'none';
      }
    });

    if (obj_imagem.style.display === 'flex') {
      obj_imagem.style.display = 'none';
    } else {
      obj_imagem.style.display = 'flex';
    }
  }