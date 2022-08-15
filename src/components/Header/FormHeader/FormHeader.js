import {FaSearch} from 'react-icons/fa'

export default function FormHeader(){
  return(
    <form action="" className="flex">
      <select name="" id="" className="hidden md:block p-2 text-xs text-gray-700 bg-gray-100 hover:bg-gray-300 rounded-tl rounded-bl border-r border-gray-500">
        <option value="">Livros</option>
      </select>
      <input type="text" className="p-2 flex-grow rounded-l md:rounded-none"/>
      <button className="px-4 bg-gold-100 hover:bg-gold-200 rounded-tr rounded-br">
        <FaSearch className="text-darkblue-900 text-xl mt-1" />
      </button>
    </form>
  );
}