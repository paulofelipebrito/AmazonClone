import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdArrowDropdown} from 'react-icons/io'
import {BsCart} from 'react-icons/bs'

import Logo from '../../assets/img/amazon_logo.png'
import FormHeader from './FormHeader/FormHeader'; 
import UpperNav from './Nav/UpperNav';
import BottomNav from './Nav/BottomNav';

export default function Header(){
  return(
    <header>
      <div className="grid text-white">
        <div className="flex flex-wrap md:flex-no-wrap bg-darkblue-900 px-2 py-1 items-center">
          <div className="py-1 px-2 md:border border-gray-700 hover:border-white rounded">
            <GiHamburgerMenu />
          </div>
          <div className="flex mx-2 py-2 border border-transparent hover:border-white">
            <img src={Logo} alt="Amazon" className="h-7" />
            <span className="text-xs pl-1 pt-1">.com.br</span>
          </div>
          <div className="w-full md:w-auto flex-grow md:ml-3 mr:0 pt-1 order-2 md:order-none">
            <FormHeader />
          </div>
          <div className="hidden md:block ml-1 pb-1 text-xs border border-transparent hover:border-white rounded-sm p-2">
            <p className="leading-3">Olá, Faça seu login</p>
            <p className="font-extrabold">Contas e Listas <IoMdArrowDropdown /></p>
          </div>
          <div className="hidden md:block pb-1 text-xs border border-transparent hover:border-white rounded-sm p-2">
            <p className="leading-3">Devoluções</p>
            <p className="font-extrabold">e Pedidos</p>
          </div>
          <div className="hidden md:block pb-1 text-xs border border-transparent hover:border-white rounded-sm p-2">
            <p className="leading-3">Experimente</p>
            <p className="font-extrabold">Prime <IoMdArrowDropdown /></p>
          </div>
          <div className="p-2 border border-transparent hover:border-white rounded-sm absolute right-0 top-0 mr-2 mt-2 md:mr-0 md:t-0 md:relative order-1 md:order-none md:flex">
            <BsCart className="flex text-2xl md:mr-2" />
            <span className="bold text-gold-200 text-base absolute top-0 left-0 -mt-1 ml-4 text-center w-6 h-6 bg-darkblue-600 rounded-full">0</span>
            <span className="hidden md:flex text-xs font-extrabold">Carrinho</span>
          </div>
        </div>
        <UpperNav />
        <BottomNav />

      </div>
    </header>
  );
}