import FeaturedItem from '../components/FeaturedItem';
import HomeSectionWrapper from './HomeSectionWrapper';
import { useRefs } from './Refs/RefsProvider';

const FeaturedProducts = () => {
  const { featuredRef } = useRefs();

  return (
    <HomeSectionWrapper title="FEATURED PRODUCTS" subTitle="The art of modern living unlocked.">
      <section ref={featuredRef} className="section-featured-products section-hidden">
        <div className="container-featured-products">
          <div className="featuredItem">
            <FeaturedItem name="Sofa Set" price="$1,299.99" img="public/FeaturedProducts/product-1.jpeg" />
            <FeaturedItem name="Utopia Sofa" price="$799.99" img="public/FeaturedProducts/product-16.jpeg" />
            <FeaturedItem name="Suede Armchair" price="$159.99" img="public/FeaturedProducts/product-17.jpeg" />
          </div>
          <div className="featured-btn-container">
            <a href="/">
              <button className="btn btn-featured">All Products</button>
            </a>
          </div>
        </div>
      </section>
    </HomeSectionWrapper>
  );
};

export default FeaturedProducts;
