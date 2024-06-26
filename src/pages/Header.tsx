import { Link } from 'react-router-dom';
import HomeSectionWrapper from './HomeSectionWrapper';
import { useRefs } from './Refs/RefsProvider';

const Header = () => {
  const { featuredRef } = useRefs();

  const handleLearnMoreClick = () => {
    if (featuredRef.current) {
      featuredRef.current.scrollIntoView({
        behavior: 'smooth',
      });
      window.scrollBy({
        top: 1220, 
        behavior: 'smooth'
      });
    }
  };

  return (
    <HomeSectionWrapper title="" subTitle="">
      <section className="section-header">
        <div className="container header-container">
          <div className="header-description">
            <div className="header-title">
              <h1>Discover stylish furniture to transform your home.</h1>
              <p className="header-paragraph">Create your perfect space with our designs.</p>
            </div>
            <div>
              <Link to="/products">
                <button className="btn btn-header-explore">Explore products</button>
              </Link>
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
