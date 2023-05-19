
const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/Jn90f5R/banner.jpg" className="w-full" />
                <div className="absolute text-center flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                   <div className="text-white mt-32">
                    <h2 className="text-4xl font-bold ">WHO’S LAUGHING NOW?</h2>
                    <p className="my-4">All jokes aside, this Bat-Family will have you in stitches. Pre-order the Batman <br /> Who Laughs Diorama by Quantum Mechanix today!</p>
                    <button className="btn btn-primary">order now</button>
                   </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/Jzzw5Tt/banner2.jpg" className="w-full" />
                <div className="absolute text-center flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                   <div className="text-white mt-32">
                    <h2 className="text-4xl font-bold ">BY MJOLNIR’S MIGHT!</h2>
                    <p className="my-4">Verily, the Son of Asgard is here! Pre-order the Thor: Breaker <br /> of Brimstone Premium Format Figure for your collection today.</p>
                    <button className="btn btn-primary">order now</button>
                   </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/9qdyfQy/banner3.jpg" className="w-full" />
                <div className="absolute text-center flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                   <div className="text-white mt-32">
                    <h2 className="text-4xl font-bold ">SHAKE YOUR GROOT THING</h2>
                    <p className="my-4">He always lends a hand (and arm) to friends. Bring home Hot Toys’ Groot <br /> Sixth Scale Figure from Guardians of the Galaxy Vol. 3!</p>
                    <button className="btn btn-primary">order now</button>
                   </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;