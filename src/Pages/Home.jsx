import Banner from "../Components/Banner";
import GetJob from "../Components/GetJob";
import HowWork from "../Components/Howwork";

const Home = () => {
    return (
        <div>
            <div>
                <Banner />
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