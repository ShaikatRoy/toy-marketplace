const Banner = () => {
    return (
        <div className="carousel w-full ">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src="https://i.ibb.co/Jn90f5R/banner.jpg" className="w-full h-72 md:h-full" />
                <div className="absolute text-center flex flex-col items-center justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <div className="text-white sm:mt-32">
                        <h2 className="text-2xl font-bold sm:text-5xl">WHO’S LAUGHING NOW?</h2>
                        <p className="my-8 text-xs md:text-base  sm:my-8">All jokes aside, this Bat-Family will have you in stitches. Pre-order the Batman <br /> Who Laughs Diorama by Quantum Mechanix today!</p>
                        <button className="btn btn-primary px-8 py-2 btn-xs sm:btn-sm md:btn-md lg:btn-lg">order now</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/Jzzw5Tt/banner2.jpg" className="w-full h-72 md:h-full" />
                <div className="absolute text-center flex flex-col items-center justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <div className="text-white mt-8 sm:mt-32">
                        <h2 className="text-2xl font-bold sm:text-5xl">BY MJOLNIR’S MIGHT!</h2>
                        <p className="my-8 text-xs md:text-base  sm:my-8">Verily, the Son of Asgard is here! Pre-order the Thor: Breaker <br /> of Brimstone Premium Format Figure for your collection today.</p>
                        <button className="btn btn-primary px-8 py-2 btn-xs sm:btn-sm md:btn-md lg:btn-lg">order now</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/9qdyfQy/banner3.jpg" className="w-full h-72 md:h-full" />
                <div className="absolute text-center flex flex-col items-center justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <div className="text-white mt-8 sm:mt-32">
                        <h2 className="text-2xl font-bold sm:text-5xl">SHAKE YOUR GROOT THING</h2>
                        <p className="my-8 text-xs md:text-base  sm:my-8">He always lends a hand (and arm) to friends. Bring home Hot Toys’ Groot <br /> Sixth Scale Figure from Guardians of the Galaxy Vol. 3!</p>
                        <button className="btn btn-primary px-8 py-2 btn-xs sm:btn-sm md:btn-md lg:btn-lg">order now</button>
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
