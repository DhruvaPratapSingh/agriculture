import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { successData } from "../constant/succesdata";
const Success = () => {
  useEffect(() => {
    AOS.init({ duration: 3000, once: false });
  }, []);

  return (
    <div className="w-full md:max-w-[1320px] p-2 md:p-6 mx-auto">
      {successData.map((data, index) => (
        <>
          {index % 2 === 0 ? (
            <div  key={index}
           className={`flex flex-col gap-8 md:flex-row w-full items-center justify-around p-6 bg-gradient-to-br ${data.gradient} rounded-2xl shadow-2xl backdrop-blur-md mb-8`}>
              <div
                className={`w-[90%] md:w-[45%] p-6 ${data.imgBg} rounded-lg shadow-lg`}
            data-aos="fade-right"
              >
                <h1 className="text-4xl font-bold text-white mb-4">{data.title}</h1>
                <p className="text-lg text-gray-200">{data.desc}</p>
                <ul className="mt-4 text-lg text-white">
                  {data.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2">{point}</li>
                  ))}
                </ul>
              </div>
              <div
                className="w-[90%] md:w-[45%] relative overflow-hidden rounded-lg shadow-lg"
                data-aos="zoom-in"
              >
                <img
                  src={data.img}
                  alt="Success"
                  className="w-full h-auto object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          ) : (
            <div  key={index}
           className={`flex flex-col gap-8 md:flex-row w-full items-center justify-around p-6 bg-gradient-to-br ${data.gradient} rounded-2xl shadow-2xl backdrop-blur-md mb-8`}>
              <div
                className="w-[90%] md:w-[45%] relative overflow-hidden rounded-lg shadow-lg"
                data-aos="zoom-in"
              >
                <img
                  src={data.img}
                  alt="Success"
                  className="w-full h-auto object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div
                 className={`w-[90%] md:w-[45%] p-6 ${data.imgBg} rounded-lg shadow-lg`}
            data-aos="fade-right"
              >
                <h1 className="text-4xl font-bold text-white mb-4">{data.title}</h1>
                <p className="text-lg text-gray-200">{data.desc}</p>
                <ul className="mt-4 text-lg text-white">
                  {data.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default Success;
