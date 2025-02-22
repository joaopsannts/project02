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
    const limitData = data.results.slice(0, 9);
    return { results: limitData };
  } catch (error) {
    console.log("error: ", error);
  }
};

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
  //showLocation(location.results)
  //showEpisode(episode.results)
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

        <span class="origin"> Origin </span>
        <a class="character-link" href="${character.origin.url}"> ${character.origin.name} >
        </article>
      `;
    divCharacter.classList.add("character-box");
    characterContainer.appendChild(divCharacter);
    divCharacter.addEventListener("click", () => {
      characterDetails(character.id);
    });
  });
};

const characterDetails = (id) => {
  window.location.href = `./pages/character.html?id=${id}`;
};

loadAllWithPromise();

const showLocation = (locations) => {
  console.log(locations);
  const locationSession = document.getElementById("location-session");
  locations.map((location) => {
    const divLocation = document.createElement("div");
    divLocation.id = `location-${location.id}`;
    divLocation.innerHTML = `
        <img id="img-location" src="${location.image}" > </img>
        <article class="location-info"> 
        <h3>${location.name}</h3>
        <span class="${location.type}"> ${location.type} - ${location.species}</span>

        <span class="location"> location </span>
        <a class="location-link" href="${location.dimension.url}"> ${location.dimension.name}</a>

        <span class="origin"> Origin </span>
        <a class="location-link" href="${location.residents.url}"> ${location.residents.name} >
        </article> 
      `;
    divLocation.classList.add("location-box");
    locationSession.appendChild(divLocation);
    divLocation.addEventListener("click", () => {
      locationDetails(location.id);
    });
  });
  const locationDetails = (id) => {
    window.location.href = `./pages/indexLocation.html?id=${id}`;
}};

// loadAllWithPromise();

// const showEpisode = (Episodes) => {
//   console.log(Episodes);
//   const episodeSession = document.getElementById("episode-session");
//   Episodes.map((episode) => {
//     const divEpisode = document.createElement("div");
//     divEpisode.id = `Episode-${episode.id}`;
//     divEpisode.innerHTML = `
//         <img id="img-episoder" src="${episode.image}" > </img>
//         <article class="episode-info"> 
//         <h3>${episode.name}</h3>
//         <span class="${episode.episode}"> ${episode.episode} - ${episode.species}</span>

//         <span class="episode"> Episode </span>
//         <a class="episode-link" href="${episode.air_date.url}"> ${episode.air_date.name}</a>

//         <span class="origin"> Origin </span>
//         <a class="episode-link" href="${episode.characters.url}"> ${episode.characters.name} >
//         </article> 
//       `;
//     divEpisode.classList.add("episode-box");
//     episodeSession.appendChild(divEpisode);
//     divEpisode.addEventListener("click", () => {
//       episodeDetails(episode.id);
//     });
//   });
//   const episodeDetails = (id) => {
//     window.location.href = `./pages/indexEpisode.html?id=${id}`;
// }};