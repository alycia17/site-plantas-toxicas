fetch('plantas/index.json')
  .then(res => res.json())
  .then(plantas => {
    const container = document.getElementById('lista-plantas');
    plantas.forEach(planta => {
      const div = document.createElement('div');
      div.className = 'planta';
      div.innerHTML = `
        <h3>${planta.nome}</h3>
        <p><strong>Nome Científico:</strong> ${planta.nome_cientifico}</p>
        <p><strong>Efeitos:</strong> ${planta.efeitos}</p>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => {
    document.getElementById('lista-plantas').innerHTML = "<p>Erro ao carregar plantas. Verifique o CMS.</p>";
    console.error(err);
  });