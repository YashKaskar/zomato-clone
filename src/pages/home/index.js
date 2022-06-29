import Header from "../../components/common/header";
import TabOptions from "../../components/common/tabOption";
import Footer from "../../components/common/footer";
import { useState } from "react";
import Delivery from "../../components/delivery";
import DiningOut from "../../components/diningout"
import NightLife from "../../components/nightlife"



const getCorrectScreen = (tab) => {   
    switch (tab) {
        case 'Delivery':
            return <Delivery />
        case 'Dining Out':
            return <DiningOut />
        case 'Nightlife':
            return <NightLife />
        default:
            return <Delivery />
            
    }
}

const HomePage = () => {

    const [activeTab, setActiveTab] = useState('Delivery')
    return (    
        <div>
            <Header />
            <TabOptions activeTab={activeTab} setactiveTab={setActiveTab} />
            {getCorrectScreen(activeTab)}
            <Footer /> 
        </div>
    );
}
 
export default HomePage;