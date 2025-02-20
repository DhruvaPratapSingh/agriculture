import "aos/dist/aos.css";

const Home = () => {

  return (
    <div className="w-full md:max-w-[1320px] md:p-6 mx-auto">
      <div className="flex flex-col gap-8 md:flex-row w-full items-center justify-around p-6 bg-gradient-to-br from-[#a8ff78] via-[#78ffd6] to-[#1e9600] rounded-2xl shadow-2xl backdrop-blur-md">
        <div className="w-[90%] md:w-[45%] p-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg"
          data-aos="fade-right">
          <h1 className="text-4xl font-bold text-green-900 mb-4">Farmers</h1>
          <p className="text-lg text-gray-800">
            Agriculture plays a crucial role in the economy, ensuring food security and sustainability.
          </p>
          <ul className="mt-4 text-lg text-gray-900">
            <li className="flex items-center gap-2">✅ 24hrs safety crop</li>
            <li className="flex items-center gap-2">✅ Insects free</li>
          </ul>
        </div>
        <div className="w-[90%] md:w-[45%] relative overflow-hidden rounded-lg shadow-lg"
          data-aos="zoom-in">
          <img
            src="/former.webp"
            alt="Farmer"
            className="w-full h-auto object-cover rounded-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
