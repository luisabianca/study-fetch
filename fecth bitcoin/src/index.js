const bodyHtml = document.getElementById("app");

const fetchBitcoin = () => {
  const bitcoin = fetch(`https://www.blockchain.com/pt/ticker`);

  bitcoin
    .then((res) => res.json())
    .then(
      (res) =>
        (bodyHtml.innerText = `Preço do bitcoin: ${res.BRL.buy.toLocaleString(
          "pt-br",
          { style: "currency", currency: "BRL" }
        )}`)
    );
};

fetchBitcoin()

// setInterval(fetchBitcoin, 10000);