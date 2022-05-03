import Banner from "./Banner/Banner";
import Catalog from "./Catalog/Catalog";
import Categories from "./Categories/Categories";
import Promo from "./Promo/Promo";

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function MainContent(){
  return(
    <div className="col-span-6 md:col-span-5 p-2">
        <div className="flex flex-col">
          <Categories />
          <Banner />
          <div className="flex flex-col md:flex-row items-center my-8 py-1">
            <p className="font-bold md:w-3/4 text-center md:border-r-2 border-gray-300 leading-5 pr-2 mt-10 md:mt-0">Assine o Amazon Prime para ter benefícios de leitura com o Prime Reading, frete GRÁTIS sem valor mínimo de compra e muito mais. Apenas R$ 9,90/mês.</p>
            <a href="#" className="btn-amazon-prime">Teste GRÁTIS por 30 dias</a>
          </div>
          <Promo />
          <Catalog />
        </div>
      </div>
  );
}