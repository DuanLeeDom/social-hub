document.addEventListener('DOMContentLoaded', () => {
  fetch('./scripts/redes.json')
    .then(response => response.json())
    .then(redes => {
      const container = document.querySelector('.network-list');
      
      redes.forEach((rede, index) => {
        const link = document.createElement('a');
        link.href = rede.url;
        link.target = '_blank';
        link.className = 'rede animar';

        link.style.animationDelay = `${index * 0.05}s`;

        const img = document.createElement('img');
        img.src = rede.icon;
        img.alt = rede.nome;
        img.width = 32;
        img.height = 32;
        img.className = 'icone';

        const texto = document.createElement('span');
        texto.textContent = rede.nome;

        link.appendChild(img);
        link.appendChild(texto);
        container.appendChild(link);
      });
    })
    .catch(erro => {
      console.error('Erro ao carregar o JSON:', erro);
    });
});

function copiarURL() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    const tooltip = document.getElementById('tooltip');
    tooltip.classList.add('mostrar');

    setTimeout(() => {
      tooltip.classList.remove('mostrar');
    }, 1500); // desaparece depois de 2 segundos
  });
}