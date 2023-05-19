import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import Banner from "../Banner/Banner";



const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user)

    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;