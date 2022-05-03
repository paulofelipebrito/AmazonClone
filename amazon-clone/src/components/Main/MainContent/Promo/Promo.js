/* eslint-disable jsx-a11y/anchor-is-valid */
import cat1 from '../../../../assets/img/cat1.jpg';
import cat2 from '../../../../assets/img/cat2.jpg';
import cat3 from '../../../../assets/img/cat3.jpg';
import cat4 from '../../../../assets/img/cat4.jpg';
import cat5 from '../../../../assets/img/cat5.jpg';
import cat6 from '../../../../assets/img/cat6.jpg';
import cat7 from '../../../../assets/img/cat7.jpg';
import cat8 from '../../../../assets/img/cat8.jpg';
import cat9 from '../../../../assets/img/cat9.jpg';

export default function Promo(){
  return(
    <div className="flex flex-col px-6 pb-8 border-b border-gray-400">
            <h3 className="text-center md:text-left text-xl font-bold mb-4">Encontre ofertas por categoria</h3>
            <ul className="flex flex-wrap md:flex-no-wrap px-2 text-xs font-bold">
              <li className="text-center mx-3 mb-4 md:mb-0">
                <img src={cat1} alt="Todas as Ofertas" className="rounded w-full md:w-75px mb-2 mx-auto"/>
                <a href="#">Todas as Ofertas</a>
              </li>
              <li className="text-center mx-3 mb-4 md:mb-0">
                <img src={cat2} alt="Ofertas Relâmpago" className="rounded w-full md:w-75px mb-2 mx-auto"/>
                <a href="#">Ofertas Relâmpago</a>
              </li>
              <li className="text-center mx-3 mb-4 md:mb-0">
                <img src={cat3} alt="Literatura" className="rounded w-full md:w-75px mb-2 mx-auto"/>
                <a href="#">Literatura</a>
              </li>
              <li className="text-center mx-3 mb-4 md:mb-0">
                <img src={cat4} alt="HQs e Mangás" className="rounded w-full md:w-75px mb-2 mx-auto"/>
                <a href="#">HQs e Mangás</a>
              </li>
              <li className="text-center mx-3 mb-4 md:mb-0">
                <img src={cat5} alt="Ficção" className="rounded w-full md:w-75px mb-2 mx-auto"/>
                <a href="#">Ficção</a>
              </li>
              <li className="text-center mx-3 mb-4 md:mb-0">
                <img src={cat6} alt="Inglês e outras línguas" className="rounded w-full md:w-75px mb-2 mx-auto"/>
                <a href="#">Inglês e outras línguas</a>
              </li>
              <li className="text-center mx-3 mb-4 md:mb-0">
                <img src={cat7} alt="Autoajuda" className="rounded w-full md:w-75px mb-2 mx-auto"/>
                <a href="#">Autoajuda</a>
              </li>
              <li className="text-center mx-3 mb-4 md:mb-0">
                <img src={cat8} alt="Infantil" className="rounded w-full md:w-75px mb-2 mx-auto"/>
                <a href="#">Infantil</a>
              </li>
              <li className="text-center mx-auto mb-4 md:mb-0">
                <img src={cat9} alt="Negócios" className="rounded w-full md:w-75px mb-2 mx-auto"/>
                <a href="#">Negócios</a>
              </li>
            </ul>
          </div>
  );
}