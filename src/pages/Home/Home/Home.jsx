import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import Banner from "../Banner/Banner";
import Category from "../ShopCategory/Category";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import Satstic from "../Satstic/Satstic";
import Brands from "../Brands/Brands";
import useTitle from "../../../hocks/useTitle";
import TopChoice from "../TopChoice/TopChoice";




const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user)
    useTitle("figure-mania");

    return (
        <div>
            <Banner></Banner>
            <PhotoGallery></PhotoGallery>
            <Brands></Brands>
            <Category></Category>
            <TopChoice></TopChoice>
            <Satstic></Satstic>
        </div>
    );
};

export default Home;