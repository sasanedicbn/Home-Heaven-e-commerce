import { useEffect, useState } from "react";
import HomeSectionWrapper from "./HomeSectionWrapper";
import operationsData from "./constants/constants";

const Operations = () => {
    const [operationData, setOperationData] = useState([])

    useEffect(() => {
        setOperationData(operationsData)
    }, [])

    return (
        <HomeSectionWrapper title="OPERATIONS" subTitle="Where simplicity meets efficiency to bring your home to life.">
            <section className="section-operations">
                <div className="container-operations">
                    <div className="operations-btns">
                        {operationData.map((btn) => (
                            <button className="oparation-btn" key={btn.id}>{btn.button}</button>
                        ))}
                    </div>
                    <div className="operations-tab-content">
                        {operationData.map((item) => (
                            <div key={item.id} className="operations-item">
                                <div className="operations-icon">
                                    <item.icon />
                                </div>
                                <h3 className="operations-title">{item.title}</h3>
                                <p className="operations-paragraph">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </HomeSectionWrapper>
    );
}
export default Operations;
