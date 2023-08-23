import React from "react";
import Avatar from "../assets/Images/avatar.jpg";
import Invasion from "../assets/Images/invasion.jpg";
const DisneyCard = () => {
  return (
    <>

      <section className="container-xl p-5  bg-[#030C40] pb-[5rem]">
        <div className="text-center text-5xl mb-[3rem] mt-[3rem] ">
          What's new to Disney+
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-md ">

          <div className="card">
            <div className=" bg-[#0B2C66] ">
              <img
                src={Avatar}
                className="rounded-md rounded-b-none object-cover bg-cover bg-center  w-100"
                alt=""
              />
              <div className="p-4">
                <h2 className="font-semibold text-white text-lg py-4 ps-3">
                  Avatar: The Way of Water
                </h2>
                <hr className="mt-2" />
                <p className=" mt-2 mb-1 text-white p-3 text-sm">
                  Set a decade plus after the events of the first film, it tells
                  the story of the Sully family and introduces audiences to the
                  majestic ocean tulkun.
                </p>
              </div>
                <h2 className="text-white underline pb-10 ps-7">Stream Now</h2>
            </div>
          </div>

          <div className="card">
            <div className=" bg-[#0B2C66] ">
              <img
                src={Invasion}
                className="rounded-md rounded-b-none object-cover bg-cover bg-center"
                alt=""
              />
              <div className="p-4">
                <h2 className="font-semibold text-white text-lg ps-3 py-4">
                  Avatar: The Way of Water
                </h2>
                <hr className="mt-2" />
                <p className=" mt-2 mb-1 text-white p-3 text-sm">
                  Set a decade plus after the events of the first film, it tells
                  the story of the Sully family and introduces audiences to the
                  majestic ocean tulkun.
                </p>
              </div>
                <h2 className="text-white underline pb-10 ps-7">Stream Now</h2>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default DisneyCard;
