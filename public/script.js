$(document).ready(function () {
  const searchButton = document.getElementById("searchButton");
  const wordInput = document.getElementById("wordInput");
  const resultContainer = document.getElementById("resultContainer");

  searchButton.addEventListener("click", function () {
    const word = wordInput.value.trim();
    if (word !== "") {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((response) => response.json())
        .then((data) => {
          resultContainer.innerHTML = "";
          data.forEach((entry) => {
            const wordMeaning = entry.meanings[0].definitions[0].definition;
            const wordExample = entry.meanings[0].definitions[0].example;
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
              <h2>${word}</h2>
              <p>Meaning: ${wordMeaning}</p>
              <p>Example: ${wordExample}</p>
            `;
            resultContainer.appendChild(card);
          });
        })
        .catch((error) => {
          resultContainer.innerHTML = "Error occurred while fetching data.";
        });
    }
  });
});
