
const TopChoice = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 py-8 px-4 rounded-lg shadow-lg mt-16">
      <h2 className="text-4xl font-bold text-white mb-4">Top Choice</h2>
      <div className="flex items-center justify-center px-10">
        <div className="w-2/5 overflow-hidden rounded-lg bg-white shadow-md mr-4">
          <img src="https://i.ibb.co/7rbbd2V/armorized-deadpool-marvel-gallery-60ef41f90afe5.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-lg font-semibold text-white">ARMORIZED DEADPOOL</p>
          <p className="text-sm text-white opacity-75">Deadpool is an expert marksman, a master of various martial arts, and mostly seen with using katanas, but who knows if he also owns a set of heavily weaponized armors? </p>
        </div>
      </div>
      <button className="mt-6 px-6 py-3 bg-white text-purple-500 text-sm font-semibold rounded-full shadow-md hover:bg-purple-500 hover:text-white transition-colors duration-300">
        Learn More
      </button>
    </div>
  );
};

export default TopChoice;
