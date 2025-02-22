const loadLocation = async (url, id) => {
  try {
    const res = await fetch(`${url}/${id}`);
    if (!res.ok) {
      throw new Error(`Erro ao carregar localização`);
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
  const baseUrl2 = "https://rickandmortyapi.com/api/location";
  try {
    const location = await loadLocation(baseUrl2, idParam);
    showLocation(location);
  } catch (error) {}
};
loadInfo();

const showLocation = (personagem) => {
  console.log(personagem.location);
};

