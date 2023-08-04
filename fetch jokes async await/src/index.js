const bodyHtml = document.getElementById("app");

const fetchJokes = async () => {
  const cep = await fetch(`https://api.chucknorris.io/jokes/random`);

  const cepJSON = await cep.json()
  bodyHtml.innerHTML =`"${cepJSON.value}"`;
}

document.getElementById("next").addEventListener('click', () => fetchJokes())

fetchJokes()
