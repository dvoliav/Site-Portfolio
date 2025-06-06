function voltarAoTopo() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function rolarParaConteudo() {
  const conteudo = document.getElementById('conteudo');
  conteudo.scrollIntoView({ behavior: 'smooth' });
}
