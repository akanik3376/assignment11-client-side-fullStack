import Banner from "../Components/Banner";
import Catagories from "../Components/Catagories";
import GetJob from "../Components/GetJob";
import HowWork from "../Components/Howwork";

const Home = () => {
    return (
        <div>
            <div>
                <Banner />
            </div>
            <div>
                <Catagories></Catagories>
            </div>
            <div>
                <HowWork></HowWork>
            </div>
            <div>
                <GetJob></GetJob>
            </div>
        </div>
    );
};

export default Home;