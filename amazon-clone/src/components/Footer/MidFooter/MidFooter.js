/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from '../../../assets/img/amazon_logo.png'

export default function MidFooter(){
  return(
    <div class="hidden md:flex flex-col items-center bg-darkblue-700 border-t border-gray-700 pt-6 pb-4">
        <img src={Logo} alt="Amazon" class="w-20" />
        <ul class="flex flex-wrap justify-center text-xs pt-4 text-gray-400 w-3/4">
          <li class="px-2 border-r border-gray-600 hover:underline">
            <a href="#">Austrália</a>
          </li>
          <li class="px-2 border-r border-gray-600 hover:underline">
            <a href="#">Alemanha</a>
          </li>
          <li class="px-2 border-r border-gray-600 hover:underline">
            <a href="#">Canadá</a>
          </li>
          <li class="px-2 border-r border-gray-600 hover:underline">
            <a href="#">China</a>
          </li>
          <li class="px-2 border-r border-gray-600 hover:underline">
            <a href="#">Cingapura</a>
          </li>
          <li class="px-2 border-r border-gray-600 hover:underline">
            <a href="#">Espanha</a>
          </li>
          <li class="px-2 border-r border-gray-600 hover:underline">
            <a href="#">Estados Unidos</a>
          </li>
          <li class="px-2 border-r border-gray-600 hover:underline">
            <a href="#">França</a>
          </li>
          <li class="px-2 border-r border-gray-600 hover:underline">
            <a href="#">Holanda</a>
          </li>
          <li class="px-2 border-r border-gray-600 hover:underline">
            <a href="#">Índia</a>
          </li>
          <li class="px-2 border-r border-gray-600 hover:underline">
            <a href="#">Itália</a>
          </li>
          <li class="px-2 border-r border-gray-600 hover:underline">
            <a href="#">Japão</a>
          </li>
          <li class="px-2 border-r border-gray-600 hover:underline">
            <a href="#">México</a>
          </li>
          <li class="px-2 border-r border-gray-600 hover:underline">
            <a href="#">Emirados Árabes Unidos</a>
          </li>
          <li class="px-2 border-r border-gray-600 hover:underline">
            <a href="#">Reino Unido</a>
          </li>
          <li class="px-2 border-r border-gray-600 hover:underline">
            <a href="#">Turquia</a>
          </li>
        </ul>
        <div class="flex text-xs">
          <span class="text-gray-600 mr-2">E não esqueça:</span>
          <a href="#" class="text-gray-400 hover:underline">Amazon Web Services</a>
        </div>
      </div>
  );
}