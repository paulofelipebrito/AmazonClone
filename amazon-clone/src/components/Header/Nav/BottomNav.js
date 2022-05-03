/* eslint-disable jsx-a11y/anchor-is-valid */
import {IoIosArrowBack} from 'react-icons/io'

export default function BottomNav(){
  return(
    <div className="flex text-black px-4 text-xs border-b border-gray-300 bg-gray-100 pt-1">
      <a href="#" className="flex items-center md:hidden py-2 font-bold">
        <IoIosArrowBack /> 
        Todos os Departamentos
      </a>
      <ul className="hidden md:flex">
        <li className="item-nav-inf">
          <a href="#">Livros</a>
        </li>
        <li className="item-nav-inf">
          <a href="#">Pesquisa avançada</a>
        </li>
        <li className="item-nav-inf">
          <a href="#">Mais vendidos</a>
        </li>
        <li className="item-nav-inf">
          <a href="#">Pré-venda e Lançamentos</a>
        </li>
        <li className="item-nav-inf">
          <a href="#">Livros em Ofertas</a>
        </li>
        <li className="item-nav-inf">
          <a href="#">Inglês e Outras Línguas</a>
        </li>
        <li className="item-nav-inf">
          <a href="#">Loja Geek</a> 
        </li>                 
        <li className="item-nav-inf">
          <a href="#">Universitários e Acadêmicos</a>
        </li>
        <li className="item-nav-inf">
          <a href="#">Didáticos e Escolares</a>
        </li>
        <li className="item-nav-inf">
          <a href="#">Loja Infantil</a>
        </li>
      </ul>
    </div>
  );
}