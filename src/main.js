const returnHome = document.querySelector("#return-home");
const sortMenu = document.querySelector("#sort-menu");
const letterMenu = document.querySelector("#selected-letter");
const typeMenu = document.querySelector("#type-menu");
const weaknessesMenu = document.querySelector("#weaknesses-menu");


const srcBar = document.querySelector("#src-bar");
const srcBtn = document.querySelector("#src-btn");

const resultHeader = document.querySelector("#result-header");
const resultInfo = document.querySelector("#result-info");
const srcResult = document.querySelector("#search-result");

let pokemons = POKEMON.pokemon.map((pokemon) => pokemon);

function showAllCards() {
  resultHeader.textContent = "Todos os pokemons:";

  pokemons.forEach(function(pokemon) {
    let newArticle = document.createElement("article");

    newArticle.innerHTML = `
    <div class="pokemon-card">
      <img src="${pokemon["img"]}"></img>
      <h3>${pokemon["name"]}</h3>
      <ul class="info-list">
        <li>Tipo: ${pokemon["type"]}</li>
        <li>Altura: ${pokemon["height"]}</li>
        <li>Peso: ${pokemon["weight"]}</li>
        <li>Egg: ${pokemon["egg"]}</li>
        <li>Spaw chance: ${pokemon["spawn_chance"]}</li>
        <li>AVG Spawns: ${pokemon["avg_spawns"]}</li>
        <li>Spawns time: ${pokemon["spawn_time"]}</li>
        <li>Fraquezas: ${pokemon["weaknesses"]}</li>
      </ul>
    </div>`

    srcResult.appendChild(newArticle);
  })
}

function findSort() {
  let sortPokemons = sortMenu.value;

  if (sortPokemons === "az") {
    sortAZ();
  } else {
    sortZA();
  }
}

function sortAZ() {
  resultHeader.textContent = `Pokemons ordenados de A a Z`;

  let namesAZ = [...pokemons].sort(function (a, b) {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  
  namesAZ.forEach(function(pokemon) {
    let newArticle = document.createElement("article");

      newArticle.innerHTML =
      `<div class="pokemon-card">
        <img src="${pokemon["img"]}"></img>
        <h3>${pokemon["name"]}</h3>
        <ul class="info-list">
          <li>Tipo: ${pokemon["type"]}</li>
          <li>Altura: ${pokemon["height"]}</li>
          <li>Peso: ${pokemon["weight"]}</li>
          <li>Egg: ${pokemon["egg"]}</li>
          <li>Spaw chance: ${pokemon["spawn_chance"]}</li>
          <li>AVG Spawns: ${pokemon["avg_spawns"]}</li>
          <li>Spawns time: ${pokemon["spawn_time"]}</li>
          <li>Fraquezas: ${pokemon["weaknesses"]}</li>
        </ul>
      </div>`
    srcResult.appendChild(newArticle);
  })  
  let total = 151;
  let newH = document.createElement("h1");
  newH.innerHTML = `Resultado da Pesquisa: ${total} pokemons.`
  resultInfo.appendChild(newH);
}

function sortZA() {
  resultHeader.textContent = `Pokemons ordenados de Z a A`;

  let namesAZ = [...pokemons].sort(function (a, b) {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA > nameB) {
      return -1;
    }
    if (nameA < nameB) {
      return 1;
    }
    return 0;
  });
  
  namesAZ.forEach(function(pokemon) {
    let newArticle = document.createElement("article");

      newArticle.innerHTML =
      `<div class="pokemon-card">
        <img src="${pokemon["img"]}"></img>
        <h3>${pokemon["name"]}</h3>
        <ul class="info-list">
          <li>Tipo: ${pokemon["type"]}</li>
          <li>Altura: ${pokemon["height"]}</li>
          <li>Peso: ${pokemon["weight"]}</li>
          <li>Egg: ${pokemon["egg"]}</li>
          <li>Spaw chance: ${pokemon["spawn_chance"]}</li>
          <li>AVG Spawns: ${pokemon["avg_spawns"]}</li>
          <li>Spawns time: ${pokemon["spawn_time"]}</li>
          <li>Fraquezas: ${pokemon["weaknesses"]}</li>
        </ul>
      </div>`
    srcResult.appendChild(newArticle);
  })  
  let total = 151;
  let newH = document.createElement("h1");
  newH.innerHTML = `Resultado da Pesquisa: ${total} pokemons.`
  resultInfo.appendChild(newH);
}

function filterFirstLetter() {
  let getFirstLetter = letterMenu.value;
  let totalFirstLetter = [];
  
  resultHeader.textContent = `Pokemons que começam com a letra ${getFirstLetter}`;

  pokemons.forEach(function (pokemon) {
    if (pokemon.name[0] === getFirstLetter) {
      totalFirstLetter.push(pokemon.name);

      let newArticle = document.createElement("article");

      newArticle.innerHTML =
      `
      <div class="pokemon-card">
        <img src="${pokemon["img"]}"></img>
        <h3>${pokemon["name"]}</h3>
        <ul class="info-list">
          <li>Tipo: ${pokemon["type"]}</li>
          <li>Altura: ${pokemon["height"]}</li>
          <li>Peso: ${pokemon["weight"]}</li>
          <li>Egg: ${pokemon["egg"]}</li>
          <li>Spaw chance: ${pokemon["spawn_chance"]}</li>
          <li>AVG Spawns: ${pokemon["avg_spawns"]}</li>
          <li>Spawns time: ${pokemon["spawn_time"]}</li>
          <li>Fraquezas: ${pokemon["weaknesses"]}</li>
        </ul>
      </div>`
      srcResult.appendChild(newArticle);
    }
  })

  let total = totalFirstLetter.length;
  let newH = document.createElement("h1");
  newH.innerHTML = `Resultado da Pesquisa: ${total} pokemons compatíveis.`
  resultInfo.appendChild(newH);
}

function findType() {
  let requiredType = typeMenu.value;
  let totalType = 0;

  resultHeader.textContent = `Pokemons do tipo: ${requiredType}`;

  pokemons.forEach(function (pokemon) {
    pokemon.type.forEach(function (type) {
      if (type === requiredType) {
        totalType++;

        let newArticle = document.createElement("article");

        newArticle.innerHTML =
          `
          <div class="pokemon-card">
            <img src="${pokemon["img"]}"></img>
            <h3>${pokemon["name"]}</h3>
            <ul class="info-list">
              <li>Tipo: ${pokemon["type"]}</li>
              <li>Altura: ${pokemon["height"]}</li>
              <li>Peso: ${pokemon["weight"]}</li>
              <li>Egg: ${pokemon["egg"]}</li>
              <li>Spaw chance: ${pokemon["spawn_chance"]}</li>
              <li>AVG Spawns: ${pokemon["avg_spawns"]}</li>
              <li>Spawns time: ${pokemon["spawn_time"]}</li>
              <li>Fraquezas: ${pokemon["weaknesses"]}</li>
            </ul>
          </div>`
        srcResult.appendChild(newArticle);
      }
    })
  })

  let total = totalType;
  let newH = document.createElement("h1");
  newH.innerHTML = `Resultado da Pesquisa: ${total} pokemons compatíveis.`
  resultInfo.appendChild(newH);
}

function findWeakness() {
  let requiredWeakness = weaknessesMenu.value;
  let totalWeaknesses = 0;

  resultHeader.textContent = `Pokemons com fraqueza: ${requiredWeakness}`;

  pokemons.forEach(function (pokemon) {
    pokemon.weaknesses.forEach(function (weaknesses) {
      if (weaknesses === requiredWeakness) {
        totalWeaknesses++;

        let newArticle = document.createElement("article");

        newArticle.innerHTML = `  
        <div class="pokemon-card">
          <img src="${pokemon["img"]}"></img>
          <h3>${pokemon["name"]}</h3>
          <ul class="info-list">
            <li>Tipo: ${pokemon["type"]}</li>
            <li>Altura: ${pokemon["height"]}</li>
            <li>Peso: ${pokemon["weight"]}</li>
            <li>Egg: ${pokemon["egg"]}</li>
            <li>Spaw chance: ${pokemon["spawn_chance"]}</li>
            <li>AVG Spawns: ${pokemon["avg_spawns"]}</li>
            <li>Spawns time: ${pokemon["spawn_time"]}</li>
            <li>Fraquezas: ${pokemon["weaknesses"]}</li>
          </ul>
        </div>`
        srcResult.appendChild(newArticle);
      }
    })
  })
  let total = totalWeaknesses;
  let newH = document.createElement("h1");
  newH.innerHTML = `Resultado da Pesquisa: ${total} pokemons compatíveis.`
  resultInfo.appendChild(newH);
}

function findName() {
  let requiredName = srcBar.value;

  resultHeader.textContent = `Pokemons com o nome ${requiredName.toUpperCase()}`;

  let names = pokemons.map((pokemon) => pokemon.name);
  let match = names.filter((name) => name.toUpperCase() === requiredName.toUpperCase());

  if (match.length !== 0) {
    for (item of match) {
      pokemons.forEach(function(pokemon) {
        if (pokemon.name === item) {
          let newArticle = document.createElement("article");

          newArticle.innerHTML = `
          <div class="pokemon-card">
            <img src="${pokemon["img"]}"></img>
            <h3>${pokemon["name"]}</h3>
            <ul class="info-list">
              <li>Tipo: ${pokemon["type"]}</li>
              <li>Altura: ${pokemon["height"]}</li>
              <li>Peso: ${pokemon["weight"]}</li>
              <li>Egg: ${pokemon["egg"]}</li>
              <li>Spaw chance: ${pokemon["spawn_chance"]}</li>
              <li>AVG Spawns: ${pokemon["avg_spawns"]}</li>
              <li>Spawns time: ${pokemon["spawn_time"]}</li>
              <li>Fraquezas: ${pokemon["weaknesses"]}</li>
            </ul>
          </div>` 
          srcResult.appendChild(newArticle);
        }
      })
    }
  } else {
    let newArticle = document.createElement("article");
    newArticle.innerHTML = `<p>Ops! Não encontramos nenhum resultado...</p>`
    srcResult.appendChild(newArticle);
  }
}


returnHome.addEventListener("click", () => {
  resultInfo.innerHTML = "";
  srcResult.innerHTML = "";
  sortMenu.selectedIndex = "sort";
  letterMenu.selectedIndex = "select-letter";
  weaknessesMenu.selectedIndex = "type";
  typeMenu.selectedIndex = "type";
  srcBar.value = "";
  showAllCards()
});

sortMenu.addEventListener("change", () => {
  resultInfo.innerHTML = "";
  srcResult.innerHTML = "";
  letterMenu.selectedIndex = "select-letter";
  weaknessesMenu.selectedIndex = "type";
  typeMenu.selectedIndex = "type";
  srcBar.value = "";
  findSort()
});

letterMenu.addEventListener("change", () => {
  srcResult.innerHTML = "";
  resultInfo.innerHTML = "";
  sortMenu.selectedIndex = "sort";
  weaknessesMenu.selectedIndex = "type";
  typeMenu.selectedIndex = "type";
  srcBar.value = "";
  filterFirstLetter()
});

typeMenu.addEventListener("change", () => {
  srcResult.innerHTML = "";
  resultInfo.innerHTML = "";
  sortMenu.selectedIndex = "sort";
  letterMenu.selectedIndex = "select-letter";
  weaknessesMenu.selectedIndex = "type";
  srcBar.value = "";
  findType();
});

weaknessesMenu.addEventListener("change", () => {
  resultInfo.innerHTML = "";
  srcResult.innerHTML = "";
  sortMenu.selectedIndex = "sort";
  letterMenu.selectedIndex = "select-letter";
  typeMenu.selectedIndex = "type";
  srcBar.value = "";
  findWeakness()
});

srcBtn.addEventListener("click", () => {
  resultInfo.innerHTML = "";
  srcResult.innerHTML = "";
  sortMenu.selectedIndex = "sort";
  letterMenu.selectedIndex = "select-letter";
  weaknessesMenu.value = "type";
  typeMenu.value = "type";
  findName()
});