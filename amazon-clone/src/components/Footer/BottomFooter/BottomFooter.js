/* eslint-disable jsx-a11y/anchor-is-valid */
export default function BottomFooter(){
  return(
    <div class="flex flex-col items-center bg-darkblue-950 text-xs pt-8 md:pt-2">
        <div class="flex flex-col md:flex-row mb-10">
          <ul class="flex">
            <li class="px-2 border-none md:border-r text-center md:text-left border-gray-600 hover:underline">
              <a href="#">Condições de Uso</a>
            </li>
            <li class="px-2 border-none md:border-r text-center md:text-left border-gray-600 hover:underline">
              <a href="#">Notificação de Privacidade</a>
            </li>
            <li class="px-2 border-none md:border-r text-center md:text-left border-gray-600 hover:underline">
              <a href="#">Cookies</a>
            </li>
            <li class="px-2 border-none md:border-r text-center md:text-left border-gray-600 hover:underline">
              <a href="#">Anúncios Baseados em Interesses</a>
            </li>
          </ul>
          <span class="text-center md:text-left mt-8 md:mt-0 ml-4 text-gray-600">&copy; Amazon.com, Inc. ou suas afiliadas</span>
        </div>
        <p class="item-footer-inf">Amazon Serviços de Varejo do Brasil Ltda. | CNPJ 15.436.940/0001-03</p>
        <p class="item-footer-inf">Av. Juscelino Kubischeck, 2041, Torre E, 18º andar - São Paulo <a href="#" class="text-blue-800">Fale conosco</a></p>
        <p class="item-footer-inf">Formas de pagamento aceitas: cartões de crédito (Visa, Mastercard, Elo e American Express) e boleto.</p>
      </div>
  );
}