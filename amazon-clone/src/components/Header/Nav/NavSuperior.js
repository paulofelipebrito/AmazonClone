/* eslint-disable jsx-a11y/anchor-is-valid */
import {BiMap} from 'react-icons/bi'

export default function NavSuperior(){
  return(
    <div className="flex bg-darkblue-600 text-sm px-2 py-1 items-center">
      <div className="address-container">
        <div className="mr-1">
          <BiMap className="text-xl"></BiMap>
        </div>
        <div className="flex md:block leading-tight text-xs">
          <p className="mx-1 md:mx-0">Olá</p>
          <p className="font-bold">Selecione o endereço</p>
        </div>
      </div>
      <div className="hidden md:block">
        <nav>
          <ul className="flex ml-10 text-sm">
            <li className="item-nav-mid">
              <a href="#">Mais Vendidos</a>
            </li>
            <li className="item-nav-mid">
              <a href="#">Livros</a>
            </li>
            <li className="item-nav-mid">
              <a href="#">Ofertas do Dia</a>
            </li>
            <li className="item-nav-mid">
              <a href="#">Atendimento ao Cliente</a>
            </li>
            <li className="item-nav-mid">
              <a href="#">Eletrônicos</a>
            </li>
            <li className="item-nav-mid">
              <a href="#">Ideias para Presente</a>
            </li>
          </ul>
        </nav>
      </div>
    </div> 
  );
}