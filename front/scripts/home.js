// Importação da base de dados e das funçoes

import { database } from "./database.js";
import { getProdId, loadProducts} from "./functions.js";

// -------- Variaveis do projeto ------------------------
const sectionNovidades = document.querySelector("#section-novidades .carrousel")
const sectionMaisVendidos = document.querySelector("#section-maisvendidos .carrousel")
const sectionPromocoes = document.querySelector("#section-promocoes .carrousel")


const response = await fetch("http://127.0.0.1:8000/api/produtos");
const produtos = await response.json();

//Fitros
let filtroCategoriaNovidades = produtos.filter(produto => produto.classificacaoProduto === "Novidades" && produto.exibirHome == true )
let filtroMaisVendidos = produtos.filter(produto => produto.classificacaoProduto === "Mais_Vendidos" && produto.exibirHome == true )
let filtroPromocoes = produtos.filter(produto => produto.classificacaoProduto === "Promocoes" && produto.exibirHome == true )


//Funçoes com parametros
loadProducts(produtos,sectionNovidades);
loadProducts(produtos,sectionMaisVendidos);
loadProducts(produtos,sectionPromocoes);
getProdId()



// ------- carrousel de imagens home -------------------

document.querySelectorAll('.section-product').forEach( carrousel => {
const productCarousel = carrousel.querySelector('.carrousel');
const prevBtn = carrousel.querySelector('.prev');
const nextBtn = carrousel.querySelector('.next');

let scrollAmount = 0;

nextBtn.addEventListener('click', () => {
  scrollAmount += 340; // Largura do produto + margem
  if (scrollAmount > productCarousel.scrollWidth - carrousel.offsetWidth) {
    scrollAmount = productCarousel.scrollWidth - carrousel.offsetWidth;
  }
  productCarousel.style.transform = `translateX(-${scrollAmount}px)`;
});

prevBtn.addEventListener('click', () => {
  scrollAmount -= 340; // Largura do produto + margem
  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
  productCarousel.style.transform = `translateX(-${scrollAmount}px)`;
});
})