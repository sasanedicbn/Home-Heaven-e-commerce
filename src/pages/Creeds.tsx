
import { FaStar, FaEye, FaBook } from 'react-icons/fa';
import CreedsItem from '../components/CreedsItem';
import HomeWrapper from './HomeWrapper';

const Creeds = () => {
    return(
        <HomeWrapper>
        <section className="section-creeds">
            <div className="container-creeds">
                <div className="creeds-header">
                    <h3 className="header-title">Creeds we live by</h3>
                    <h4 className="header-description-creeds">Elevate your home with our attitude of excellence and timeless style.</h4>
                </div>
                <div className="creeds-items">
                    <CreedsItem 
                        icon={FaStar}
                        title="Radiance"
                        description="Our commitment to providing sparkling solutions ensures every customer enjoys a shining, glowing experience with unmatched quality."
                    />
                    <CreedsItem 
                        icon={FaEye}
                        title="Clarity"
                        description="With clear vision and keen insight, we guide customers down the path to lasting success with exceptional service and anticipation."
                    />
                    <CreedsItem 
                        icon={FaBook}
                        title="Heritage"
                        description="As a trusted partner, we offer expert guidance, drawing on our deep wisdom and wealth of experience to ensure satisfaction and success."
                    />
                </div>
            </div>
        </section>
        </HomeWrapper>
    )
}

export default Creeds;
