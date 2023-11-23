import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento) {
  evento.preventDefault();

  const dadosPesquisa = document.querySelector("[data-pesquisa]").value;
  const buscar = await conectaApi.buscarVideo(dadosPesquisa);

  const lista = document.querySelector("[data-lista]");

  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  buscar.forEach((elemento) =>
    lista.appendChild(
      constroiCard(
        elemento.titulo,
        elemento.descricao,
        elemento.url,
        elemento.imagem
      )
    )
  );
}

const botaoPesquisar = document.querySelector("[data-botao-pesquisa]");

botaoPesquisar.addEventListener("click", (evento) => buscarVideo(evento));
