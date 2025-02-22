const loadCharacter = async (url, id) => {
  try {
    const res = await fetch(`${url}/${id}`);
    if (!res.ok) {
      throw new Error(`Erro ao carregar personagem`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const loadInfo = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  console.log(urlParams);
  const idParam = urlParams.get("id");
  console.log(idParam);

  if (!idParam) {
    //direcionar o usuário para o index
    console.log("ID não encontrado");
    return;
  }

  const baseUrl = "https://rickandmortyapi.com/api/character";
  try {
    const character = await loadCharacter(baseUrl, idParam);
    showCharacter(character);
  } catch (error) {}
};
loadInfo();

const showCharacter = (personagem) => {
  console.log(personagem);
};