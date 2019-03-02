const returnHome = document.querySelector("#return-home");
const selectedLetter = document.querySelector("#selected-letter");
const typeMenu = document.querySelector("#type-menu");
const weaknessesMenu = document.querySelector("#weaknesses-menu");
const weaknessesBtn = document.querySelector("#weaknesses-btn");
const srcBar = document.querySelector("#src-bar");
const srcBtn = document.querySelector("#src-btn");

const resultHeader = document.querySelector("#result-header")
const resultAll = document.querySelector("#show-all-cards");
const searchResult = document.querySelector("#search-result");


let pokemons = POKEMON.pokemon.map((pokemon) => pokemon);


function showAllCards() {
  resultAll.innerHTML = `
  ${pokemons.map((pokemon) => `
    <div class="pokemon-card">
      <img src="${pokemon["img"]}"></img>
    </div>
    <div class="pokemon-name">
    <h3>${pokemon["name"]}</h3>
    </div>
    <div class="pokemon-info">
      <ul>
        <li>Tipo: ${pokemon["type"]}</li>
        <li>Altura: ${pokemon["height"]}</li>
        <li>Peso: ${pokemon["weight"]}</li>
        <li>Egg: ${pokemon["egg"]}</li>
        <li>Spaw chance: ${pokemon["spawn_chance"]}</li>
        <li>AVG Spawns: ${pokemon["avg_spawns"]}</li>
        <li>Spawns time: ${pokemon["spawn_time"]}</li>
        <li>Fraquezas: ${pokemon["weaknesses"]}</li>
      </ul>
    </div>
  `).join("")}
  `
}

function filterFirstLetter() {
  let getFirstLetter = selectedLetter.value;
  let totalFirstLetter = [];

  pokemons.forEach(function (pokemon) {
    if (pokemon.name[0] === getFirstLetter) {
      totalFirstLetter.push(pokemon.name);

      let newArticle = document.createElement("article");
        
      newArticle.innerHTML = 
      `
      <div class="pokemon-card">
        <img src="${pokemon["img"]}"></img>
      </div>
      <div class="pokemon-name">
      <h3>${pokemon["name"]}</h3>
      </div>
      <div class="pokemon-info">
        <ul>
          <li>Tipo: ${pokemon["type"]}</li>
          <li>Altura: ${pokemon["height"]}</li>
          <li>Peso: ${pokemon["weight"]}</li>
          <li>Egg: ${pokemon["egg"]}</li>
          <li>Spaw chance: ${pokemon["spawn_chance"]}</li>
          <li>AVG Spawns: ${pokemon["avg_spawns"]}</li>
          <li>Spawns time: ${pokemon["spawn_time"]}</li>
          <li>Fraquezas: ${pokemon["weaknesses"]}</li>
        </ul>
      </div>
    `
      searchResult.appendChild(newArticle); 
    }
  })

  let total = totalFirstLetter.length;
  let newH = document.createElement("h1");
  newH.innerHTML = `Resultado da Pesquisa: ${total} pokemons compatíveis.`
  resultHeader.appendChild(newH);
}

function findType() {
  let requiredType = typeMenu.value;
  let totalType = 0;

  pokemons.forEach(function(pokemon) {
    pokemon.type.forEach(function(type) {
      if (type.toUpperCase() === requiredType.toUpperCase()) {
        totalType++;

        let newArticle = document.createElement("article");
        
        newArticle.innerHTML = 
        `
        <div class="pokemon-card">
          <img src="${pokemon["img"]}"></img>
        </div>
        <div class="pokemon-name">
        <h3>${pokemon["name"]}</h3>
        </div>
        <div class="pokemon-info">
          <ul>
            <li>Tipo: ${pokemon["type"]}</li>
            <li>Altura: ${pokemon["height"]}</li>
            <li>Peso: ${pokemon["weight"]}</li>
            <li>Egg: ${pokemon["egg"]}</li>
            <li>Spaw chance: ${pokemon["spawn_chance"]}</li>
            <li>AVG Spawns: ${pokemon["avg_spawns"]}</li>
            <li>Spawns time: ${pokemon["spawn_time"]}</li>
            <li>Fraquezas: ${pokemon["weaknesses"]}</li>
          </ul>
        </div>
      `
        searchResult.appendChild(newArticle);
      }
    })
  })

  let total = totalType;
  let newH = document.createElement("h1");
  newH.innerHTML = `Resultado da Pesquisa: ${total} pokemons compatíveis.`
  resultHeader.appendChild(newH);
}



function findWeakness() {
  let requiredWeakness = weaknessesMenu.value;
  let totalWeaknesses = 0;
  
  pokemons.forEach(function(pokemon) {
    pokemon.weaknesses.forEach(function(weaknesses) {
      if (weaknesses.toUpperCase() === requiredWeakness.toUpperCase()) {
        totalWeaknesses++;

        let newArticle = document.createElement("article");
        
        newArticle.innerHTML = 
        `
        <div class="pokemon-card">
          <img src="${pokemon["img"]}"></img>
        </div>
        <div class="pokemon-name">
        <h3>${pokemon["name"]}</h3>
        </div>
        <div class="pokemon-info">
          <ul>
            <li>Tipo: ${pokemon["type"]}</li>
            <li>Altura: ${pokemon["height"]}</li>
            <li>Peso: ${pokemon["weight"]}</li>
            <li>Egg: ${pokemon["egg"]}</li>
            <li>Spaw chance: ${pokemon["spawn_chance"]}</li>
            <li>AVG Spawns: ${pokemon["avg_spawns"]}</li>
            <li>Spawns time: ${pokemon["spawn_time"]}</li>
            <li>Fraquezas: ${pokemon["weaknesses"]}</li>
          </ul>
        </div>
        `
        searchResult.appendChild(newArticle);
      }
    })
  })
  let total = totalWeaknesses;
  let newH = document.createElement("h1");
  newH.innerHTML = `Resultado da Pesquisa: ${total} pokemons compatíveis.`
  resultHeader.appendChild(newH);
}

// function findName() {
//   let requiredName = srcBar.value;

//   let filteredName = pokemons.filter((pokemon) => pokemon["name"].toUpperCase() === requiredName.toUpperCase());

//   console.log(filteredName);
//   // console.log(filteredName["type"]);
  
//   if (filteredName !== undefined) {
//     let newArticle = document.createElement("article");
        
//     newArticle.innerHTML = `
//     <div class="pokemon-card">
//       <img src="${filteredName["img"]}"></img>
//     </div>
//     <div class="pokemon-name">
//     <h3>${filteredName["name"]}</h3>
//     </div>
//     <div class="pokemon-info">
//       <ul>
//       <li>Tipo: ${filteredName["type"]}</li>
//       <li>Altura: ${filteredName["height"]}</li>
//       <li>Peso: ${filteredName["weight"]}</li>
//       <li>Egg: ${filteredName["egg"]}</li>
//       <li>Spaw chance: ${filteredName["spawn_chance"]}</li>
//       <li>AVG Spawns: ${filteredName["avg_spawns"]}</li>
//       <li>Spawns time: ${filteredName["spawn_time"]}</li>
//       <li>Fraquezas: ${filteredName["weaknesses"]}</li>
//       </ul>
//       </div>
//       `
//       searchResult.appendChild(newArticle); 
//   } else {
//     let newArticle = document.createElement("article");
//     newArticle.innerHTML = `<p>:/ Pokemon não encontrado...</p>`
//     searchResult.appendChild(newArticle); 
//   }
// }

// srcBtn.addEventListener("click", findName);
returnHome.addEventListener("click", showAllCards);

selectedLetter.addEventListener("change", () => {
  searchResult.innerHTML = "";
  resultHeader.innerHTML = "";
  filterFirstLetter()});

typeMenu.addEventListener("change", () => {
  searchResult.innerHTML = "";
  resultHeader.innerHTML = "";
  findType();
});

weaknessesMenu.addEventListener("change", () => {
  resultHeader.innerHTML = "";
  searchResult.innerHTML = "";
  findWeakness()});