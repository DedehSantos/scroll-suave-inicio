// Identificar o clique no menu
// Verificar o item que foi clicado e fazer referência com o alvo
// Verificar a distância entre o alvo e o topo
// Animar o scroll até o alvo

const menuItens = document.querySelectorAll('.menu a');
menuItens.forEach(item =>{
 item.addEventListener('click', scrollToIdOnclick);
});

function scrollToIdOnclick(event){
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute('href');
  const to = document.querySelector(id).offsetTop


  window.scroll({
    top: to - 80,
    behavior: 'smooth'
    
  })
}