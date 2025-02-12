// "characters": "https://rickandmortyapi.com/api/character",
// "locations": "https://rickandmortyapi.com/api/location",
// "episodes": "https://rickandmortyapi.com/api/episode"

const page = 5;
const baseUrl = "https://rickandmortyapi.com/api";

const loadCharacter = async () => {
  try {
    const res = await fetch(`${baseUrl}/character?page=${page}`);
    if (!res.ok) {
      throw new Error("Erro ao buscar characteres");
    }
    const data = await res.json();
    const limitData = data.results.slice(3, 9);
    return { results: limitData };
  } catch (error) {
    console.log("error: ", error);
  }
};

loadCharacter();

const loadLocation = async () => {
  try {
    const res = await fetch(`${baseUrl}/location`);
    if (!res.ok) {
      throw new Error("Erro ao buscar localizações");
    }
    const data = await res.json();
    const limitData = data.results.slice(0, 10);
    return { results: limitData };
  } catch {
    console.log("error: ", error);
  }
};

const loadEpisode = async () => {
  try {
    const res = await fetch(`${baseUrl}/episode`);
    if (!res.ok) {
      throw new Error("Erro ao buscar Episodes");
    }
    const data = await res.json();
    const limitData = data.results.slice(0, 10);
    return { results: limitData };
  } catch {
    console.log("error: ", error);
  }
};

const loadAllWithPromise = async () => {
  const [character, location, episode] = await Promise.all([
    loadCharacter(),
    loadLocation(),
    loadEpisode(),
  ]);

  showCharacter(character.results);
  //   console.log(location);
  //   console.log(episode);
};

loadAllWithPromise();

const showCharacter = (characteres) => {
  console.log(characteres);
  const characterContainer = document.getElementById("character-container");
  characteres.map((character) => {
    const divCharacter = document.createElement("div");
    divCharacter.id = `character-${character.id}`;
    divCharacter.innerHTML = `
        <img id="img-character" src="${character.image}" > </img>
        <article class="character-info"> 
        <h3>${character.name}</h3>
        <span class="${character.status}"> ${character.status} - ${character.species}</span>

        <span class="location"> location </span>
        <a class="character-link" href="${character.location.url}"> ${character.location.name}</a>

        <span class="location"> Origin </span>
        <a class="character-link" href="${character.origin.url}"> ${character.origin.name} >
        </article>
      `;
    characterContainer.appendChild(divCharacter);
  });
};
