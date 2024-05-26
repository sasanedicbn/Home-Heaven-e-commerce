import HomeSectionWrapper from './HomeSectionWrapper';
import { useRefs } from './constants/constants';

const Header = () => {
  const { targetRef, heroRef } = useRefs();

  const handleLearnMoreClick = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <HomeSectionWrapper title="" subTitle="">
      <section className="section-header" ref={heroRef}>
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
              <button className="btn btn-header-about" onClick={handleLearnMoreClick}>Learn more 🠣</button>
            </div>
          </div>
          <div className="header-photo">
            <img src="./public/header-main-photo.png" alt="sofa-photo" />
          </div>
        </div>
      </section>
    </HomeSectionWrapper>
  );
};

export default Header;





