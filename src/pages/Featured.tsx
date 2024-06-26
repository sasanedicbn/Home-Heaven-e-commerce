
import HomeSectionWrapper from "./HomeSectionWrapper";


const Featured = () => {

    return(
        <HomeSectionWrapper title="" subTitle="">
        <section className="section-featured">
            <div className="container-featured-products">
             <h2 className="heading-featured">As featured in</h2>
             <div className="logos">
               <img src="public/Logos/usaToday.56382ee08e942ad7c93c.png" alt="logo"/>
               <img src="public/Logos/techCrunch.8e59ce33cdb22ba0b8dd.png" alt="logo"/>
               <img src="public/Logos/forbes.c9d98237f5d5f000eaad.png" alt="logo"/>
               <img src="public/Logos/businessInsider.a50839ce9f675fc574e6.png" alt="logo"/>
             </div>
            </div>
        </section>
     </HomeSectionWrapper>
    )
}
export default Featured;