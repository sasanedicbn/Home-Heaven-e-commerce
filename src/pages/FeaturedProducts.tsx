import React from 'react';
import FeaturedItem from "../components/FeaturedItem";
import HomeSectionWrapper from './HomeSectionWrapper';

const FeaturedProducts = React.forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <HomeSectionWrapper title="FEATURED PRODUCTS" subTitle="The art of modern living unlocked.">
        <section className="section-featured-products" ref={ref}>
            <div className="container-featured-products">
                <div className="feturedItem">
                    <FeaturedItem name="Sofa Set" price="$1,299.99" img="public/FeturedProducts/product-1.jpeg" />
                    <FeaturedItem name="Utopia Sofa" price="$799.99" img="public/FeturedProducts/product-16.jpeg" />
                    <FeaturedItem name="Suede Armchair" price="$159.99" img="public/FeturedProducts/product-17.jpeg" />
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
});

export default FeaturedProducts;
