import LeftGrid from "./LeftGrid/LeftGrid";
import MainContent from "./MainContent/MainContent";

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Main(){
  return(
    <main>
      <div className="grid grid-cols-6">
        <LeftGrid />
        <MainContent />
      </div>
  </main>
  );
}