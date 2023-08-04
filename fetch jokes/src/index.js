const bodyHtml = document.getElementById("app");

const mycep = (item) => {
  const cep = fetch(`https://viacep.com.br/ws/${item}/json/`);

  cep.then((res) => res.json())
  .then((body) => bodyHtml.innerHTML = body.logradouro);
}

mycep(24030091)