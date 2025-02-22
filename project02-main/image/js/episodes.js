const loadEpisode = async (url, id) => {
    try {
      const res = await fetch(`${url}/${id}`);
      if (!res.ok) {
        throw new Error(`Erro ao carregar episode`);
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  const loadInfo = async () => {
    const urlParams = new URLSearchParams(window.episode.search);
    console.log(urlParams);
    const idParam = urlParams.get("id");
    console.log(idParam);
  
    if (!idParam) {
      //direcionar o usuário para o index
      console.log("EP não encontrado");
      return;
    }
  
    const baseUrl = "https://rickandmortyapi.com/api/episode";
    try {
      const episode = await loadEpisodes(baseUrl, idParam);
      showEpisode(episode);
    } catch (error) {}
  };
  loadInfo();
  
  const showEpisode = (Episodes) => {
    console.log(Episodes.personagem);
  };