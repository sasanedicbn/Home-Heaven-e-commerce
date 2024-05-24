import HomeWrapper from "./HomeWrapper";

const Header = ({onLearnMoreClick}:{onLearnMoreClick:() => void}) => {
    return(
      <HomeWrapper>
        <section className="section-header">
          <div className="container header-container">
            <div className="header-description">
             <div className="header-title">
                <h1>Discover stylish furniture to transform your home.</h1>
                <p className="header-paragraph">Create your perfect space with our designs.</p>
             </div>
             <div>
                <a href="/">
                    <button className="btn btn-header-explore">Explore products</button>
                </a>
                <button className="btn btn-header-about" onClick={onLearnMoreClick}>Learn more 🠣</button>
             </div>
            </div>
            <div className="header-photo">
             <img src="./public/header-main-photo.png" alt="sofa-photo" />
            </div>
          </div>
        </section>
      </HomeWrapper>
    )
}
export default Header;






