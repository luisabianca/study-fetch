const bodyHtml = document.getElementById("app");
const btnNext = document.getElementById("next")

const fetchJokes = async () => {
  try {
    const cep = await fetch(`https://api.chucknorris.io/jokes/random`);
    const cepJSON = await cep.json();
  
    bodyHtml.innerHTML =`"${cepJSON.value}"`;
  } catch (erro) {
    bodyHtml.innerHTML = erro;
    btnNext.style.display = "none";
  }
}

btnNext.addEventListener('click', () => fetchJokes());

fetchJokes();
