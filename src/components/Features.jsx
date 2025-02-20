
import { cardData } from "../constant/carddata";
const Features = () => {


  return (
    <div className="w-full md:max-w-[1320px] p-2 md:p-6 mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 inline-block text-transparent bg-clip-text">
          Best Features We Provide
        </h1>
        <p className="text-gray-600 text-lg mt-2">
          Experience the best services with high standards and great reliability.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {cardData.map((item, index) => (
          <div
            key={index}
            data-aos={item.aos}
            className="p-6 bg-gradient-to-br from-[#f7b42c] to-[#fc575e] rounded-2xl shadow-lg text-white text-center hover:scale-105 transition-transform duration-300"
          >
            <img src={item.img} alt={item.title} className="w-20 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p className="text-md mt-2">{item.desc}</p>
            <div className="flex justify-center gap-4 mt-4 text-lg">
              <span>👍 {item.like}</span>
              <span>💬 {item.comment}</span>
              <span>🔄 {item.share}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
