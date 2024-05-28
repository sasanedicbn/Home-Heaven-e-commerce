import { useEffect, useState } from "react";
import HomeSectionWrapper from "./HomeSectionWrapper";
import operationsData from "./constants/constants";

const Operations = () => {
    const [operationData, setOperationData] = useState([]);
    const [activeTab, setActiveTab] = useState(null);

    useEffect(() => {
        setOperationData(operationsData);
    }, []);

    function showTabContent(id) {
        setActiveTab(id);
    }

    return (
        <HomeSectionWrapper title="OPERATIONS" subTitle="Where simplicity meets efficiency to bring your home to life.">
            <section className="section-operations">
                <div className="container-operations">
                    <div className="operations-btns">
                        {operationData.map((btn) => (
                            <button
                                className={`oparation-btn ${activeTab === btn.id ? 'activeOparations' : ''}`}
                                onClick={() => showTabContent(btn.id)}
                                key={btn.id}
                            >
                                {btn.button}
                            </button>
                        ))}
                    </div>
                    <div className="operations-tab-content">
                        {operationData.map((item) => (
                            activeTab === item.id && (
                                <div key={item.id} className={`operations-item`}>
                                    <div className="operations-icon">
                                        <item.icon />
                                    </div>
                                    <h3 className="operations-title">{item.title}</h3>
                                    <p className="operations-paragraph">{item.description}</p>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </section>
        </HomeSectionWrapper>
    );
}

export default Operations;
