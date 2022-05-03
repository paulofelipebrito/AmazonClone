/* eslint-disable jsx-a11y/anchor-is-valid */
export default function NavInferior(){
  return(
    <div class="flex text-black px-4 text-xs border-b border-gray-300 bg-gray-100 pt 1">
      <a href="#" class="block md:hidden py-2 font-bold">
        <i class="fas fa-chevron-left"></i> Todos os Departamentos
      </a>
      <ul class="hidden md:flex">
        <li class="item-nav-inf">
          <a href="#">Livros</a>
        </li>
        <li class="item-nav-inf">
          <a href="#">Pesquisa avançada</a>
        </li>
        <li class="item-nav-inf">
          <a href="#">Mais vendidos</a>
        </li>
        <li class="item-nav-inf">
          <a href="#">Pré-venda e Lançamentos</a>
        </li>
        <li class="item-nav-inf">
          <a href="#">Livros em Ofertas</a>
        </li>
        <li class="item-nav-inf">
          <a href="#">Inglês e Outras Línguas</a>
        </li>
        <li class="item-nav-inf">
          <a href="#">Loja Geek</a> 
        </li>                 
        <li class="item-nav-inf">
          <a href="#">Universitários e Acadêmicos</a>
        </li>
        <li class="item-nav-inf">
          <a href="#">Didáticos e Escolares</a>
        </li>
        <li class="item-nav-inf">
          <a href="#">Loja Infantil</a>
        </li>
      </ul>
    </div>
  );
}