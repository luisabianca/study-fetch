const bodyHtml = document.getElementById("app");

const fetchJokes = () => {
  const cep = fetch(`https://api.chucknorris.io/jokes/random`);

  cep.then((res) => res.json())
  .then((body) => bodyHtml.innerHTML =`"${body.value}"`);
}

document.getElementById("next").addEventListener('click', () => fetchJokes())

fetchJokes()
