// Cartinha de mesversário — iniciamos nossa história em 23/04/2024 ❤️
const inicioNamoro = new Date(2024, 3, 23); // meses começam em zero: 3 = abril
const hoje = new Date();

function calcularMesesJuntos(inicio, atual) {
  let meses = (atual.getFullYear() - inicio.getFullYear()) * 12;
  meses += atual.getMonth() - inicio.getMonth();

  // Só conta o novo mês quando o dia do mês já chegou.
  if (atual.getDate() < inicio.getDate()) meses--;

  return Math.max(0, meses);
}

const mesesJuntos = calcularMesesJuntos(inicioNamoro, hoje);
const plural = mesesJuntos === 1 ? "mês" : "meses";

document.querySelector("#headline").innerHTML =
  `Feliz nosso mesversário! <span>♥</span>`;
document.querySelector("#date-line").textContent =
  `${mesesJuntos} ${plural} de nós dois · desde 23/04/2024`;

// Um botão simples para transformar a declaração em uma pequena interação.
const frases = [
  "Compilado com sucesso: eu te amo. ❤️",
  "Nenhum bug encontrado no meu amor por você. 💗",
  "Status do sistema: completamente apaixonado. 💘",
  "Próxima atualização: mais memórias juntinhos. ✨"
];

const botao = document.querySelector("#love-button");
const saida = document.querySelector("#output");
const coracoes = document.querySelector("#hearts");

botao.addEventListener("click", () => {
  const frase = frases[Math.floor(Math.random() * frases.length)];
  saida.textContent = frase;
  criarCoracoes(18);
});

function criarCoracoes(quantidade) {
  for (let i = 0; i < quantidade; i++) {
    const coracao = document.createElement("span");
    coracao.className = "floating-heart";
    coracao.textContent = Math.random() > 0.25 ? "♥" : "♡";
    coracao.style.left = `${Math.random() * 100}%`;
    coracao.style.fontSize = `${12 + Math.random() * 22}px`;
    coracao.style.animationDuration = `${3 + Math.random() * 3}s`;
    coracao.style.animationDelay = `${Math.random() * 0.7}s`;
    coracoes.appendChild(coracao);
    coracao.addEventListener("animationend", () => coracao.remove());
  }
}
