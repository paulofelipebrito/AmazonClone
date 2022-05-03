/* eslint-disable jsx-a11y/anchor-is-valid */
export default function NavSuperior(){
  return(
    <div class="flex bg-darkblue-600 text-sm px-2 py-1 items-center">
      <div class="address-container">
        <div class="mr-1">
          <i class="fas fa-map-marker-alt text-xl"></i>
        </div>
        <div class="flex md:block leading-tight text-xs">
          <p class="mx-1 md:mx-0">Olá</p>
          <p class="font-bold">Selecione o endereço</p>
        </div>
      </div>
      <div class="hidden md:block">
        <nav>
          <ul class="flex ml-10 text-sm">
            <li class="item-nav-mid">
              <a href="#">Mais Vendidos</a>
            </li>
            <li class="item-nav-mid">
              <a href="#">Livros</a>
            </li>
            <li class="item-nav-mid">
              <a href="#">Ofertas do Dia</a>
            </li>
            <li class="item-nav-mid">
              <a href="#">Atendimento ao Cliente</a>
            </li>
            <li class="item-nav-mid">
              <a href="#">Eletrônicos</a>
            </li>
            <li class="item-nav-mid">
              <a href="#">Ideias para Presente</a>
            </li>
          </ul>
        </nav>
      </div>
    </div> 
  );
}