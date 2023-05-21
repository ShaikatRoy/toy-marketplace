import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import Banner from "../Banner/Banner";
import Category from "../ShopCategory/Category";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import Satstic from "../Satstic/Satstic";
import Brands from "../Brands/Brands";



const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user)

    return (
        <div>
            <Banner></Banner>
            <PhotoGallery></PhotoGallery>
            <Brands></Brands>
            <Category></Category>
            <Satstic></Satstic>
        </div>
    );
};

export default Home;