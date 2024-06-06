import { useParams } from "react-router-dom";

const SingleProductItem = () => {
    const {id} = useParams()
    console.log('5linija',id)
    return(
        <h2>SASA</h2>
    )
}

export default SingleProductItem;