
import { FaStar, FaEye, FaBook } from 'react-icons/fa';
import CreedsItem from '../components/CreedsItem';
import HomeSectionWrapper from './HomeSectionWrapper';
import { useRefs } from './Refs/RefsProvider';

const Creeds = () => {
    const {creedsRef} = useRefs()
    return(
        <HomeSectionWrapper title="CREEDS WE LIVE BY" subTitle='Elevate your home with our attitude of excellence and timeless style.'>
        <section className="section-creeds" ref={creedsRef}>
            <div className="container-creeds">
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
        </HomeSectionWrapper>
    )
}

export default Creeds;
