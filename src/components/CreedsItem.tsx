import { IconType } from "react-icons";


const CreedsItem = ({ icon: Icon, title, description }:{icon: IconType, title:string, description: string}) => {
    return(
        <div className="creeds-cards">
            <article className="creed-article">
                <div className="creed-icon">
                    <span><Icon /></span>
                </div>
                <h3 className="creed-article-heading">{title}</h3>
                <p className="creed-article-paragraph">{description}</p>
            </article>
        </div>
    )
}

export default CreedsItem;
