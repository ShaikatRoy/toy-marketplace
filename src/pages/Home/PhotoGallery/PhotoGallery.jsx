import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
    "https://i.ibb.co/b71NjFr/star-lord-gallery-646655c5df909.jpg",
    "https://i.ibb.co/s9q4LWj/iron-man-mark-vii-marvel-gallery-5f7e14cfe1b10.jpg",
    "https://i.ibb.co/vjfpN50/the-mandalorian-and-grogu-deluxe-version-star-wars-gallery-63f79e57cd1ac.jpg",
    "https://i.ibb.co/Vwkp3J2/golden-armor-wonder-woman-deluxe-dc-comics-gallery-63d969c75b41a.jpg",
    "https://i.ibb.co/TrnM2S1/batmobile-dc-comics-gallery-63d960c9a7741.jpg/1000/1000",
    "https://i.ibb.co/f9gKw6G/captain-america-sam-wilson-closed-wings-version-marvel-gallery-61735d4309316.jpg",
];

const PhotoGallery = () => {
    return (
        <>
            <div className="p-5 mt-5 relative">
                <h2 className="text-3xl font-bold text-center my-5" data-aos="fade-right">Hot Collection</h2>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                    <Masonry gutter="20px">
                        {images.map((image, i) => (
                            <div className="group" key={i} data-aos="flip-left">
                                <img
                                    src={image}
                                    style={{ width: "90%", display: "block" }}
                                    alt=""
                                    className="hover:scale-105"
                                />
                            </div>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
                <div className="flex justify-center mt-5" data-aos="fade-up"
     data-aos-duration="1500">
                    <button className="btn btn-primary z-10 absolute bottom-48 px-20 py-3">Order Now</button>
                </div>
            </div>
        </>
    );
};

export default PhotoGallery;
