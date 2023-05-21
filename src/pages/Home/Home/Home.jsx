import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import Banner from "../Banner/Banner";
import Category from "../ShopCategory/Category";



const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user)

    return (
        <div>
            <Banner></Banner>
            <Category></Category>
        </div>
    );
};

export default Home;