import BannerImg from '../../../../assets/img/banner_promo.jpg'

export default function Banner(){
  return(
    <div className="hidden md:block my-6">
      <img src={BannerImg} alt="Promoções"/>
    </div>
  )
}