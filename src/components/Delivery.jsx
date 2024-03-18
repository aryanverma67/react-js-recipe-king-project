import React from "react";

const Delivery = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h3 className="text-orange-500  font-bold text-2xl text-center">
        {" "}
        Fast Delivery App
      </h3>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[550px] mx-auto my-4"
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a]  font-bold">Get The App</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Fastest Delivery Services
          </h1>
          <p>
            The Fast Delivery App, aptly dubbed "Recipe King," revolutionizes
            the way we receive goods by seamlessly connecting consumers with a
            diverse range of products and services at their fingertips. With the
            user-friendly interface and intuitive features of Recipe King, users
            can explore an extensive catalog of ingredients, kitchen tools, and
            ready-to-cook meals, placing orders with a few taps and enjoying
            expedited delivery to their doorstep, often within a matter of
            hours. Real-time tracking and notifications provided by Recipe King
            keep users informed about their order's status, enhancing
            transparency and trust in the culinary journey. Leveraging advanced
            logistics and smart route optimization, Recipe King ensures prompt
            and efficient delivery, catering to the increasing demand for quick
            and reliable services in our fast-paced world of culinary
            exploration.
          </p>
          <button className="bg-black text-[#f3d83e] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 sm:hover:text-[#00d9fa]">
            {" "}
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
