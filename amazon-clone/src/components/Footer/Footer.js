import BottomFooter from "./BottomFooter/BottomFooter";
import MidFooter from "./MidFooter/MidFooter";
import UpperFooter from "./UpperFooter/UpperFooter";

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Footer(){
  return(
    <footer className="flex flex-col text-white">
      <div className="py-4 text-center bg-darkblue-600 hover:bg-darkblue-500 text-sm">
        <p>Voltar ao início</p>
      </div>
      <UpperFooter />
      <MidFooter />
      <BottomFooter />
    </footer>
  );
}