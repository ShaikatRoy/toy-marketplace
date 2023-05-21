import Marquee from "react-fast-marquee";

const Brands = () => {
    return (
        <div>
            <h2 className="text-center text-4xl font-bold my-4">Our Brands</h2>
            <Marquee className="my-5">
            
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/ft71vpM/brands-starwars.png" alt="Shoes" /></figure>
            </div>
            <div className="card w-64 bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/gjkrGxw/brands-critical-role-244x244.jpg" alt="Shoes" /></figure>
            </div>
            <div className="card w-64 bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/QFZSnDP/brands-hottoys.png" alt="Shoes" /></figure>
            </div>
            <div className="card w-64 bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/BqYXTZL/brands-disney.png" alt="Shoes" /></figure>
            </div>
            <div className="card w-64 bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/WkKxL0c/dcomics.jpg" alt="Shoes" /></figure>
            </div>
            <div className="card w-64 bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/FnfXNBY/transfomers.jpg" alt="Shoes" /></figure>
            </div>
            <div className="card w-64 bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/vdFSx7r/marvel.jpg" alt="Shoes" /></figure>
            </div>
        
        </Marquee>
        </div>
        
        
    );
};

export default Brands;