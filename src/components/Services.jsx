import React from "react";

const Services = () => {
  return (
    <div className="services-main min-h-screen  ">
      <div className="header h-20 bg-green-200 flex justify-center items-center text-3xl font-bold underline">
        Services
      </div>
      <div className="services-box flex flex-col md:flex-row py-10 gap-7 justify-between items-start md:items-center md:flex-wrap px-4 md:px-8  ">
        {/* Service 1 */}
        <div className=" gap-y-3 box border shadow-xl py-4 px-4 w-full md:w-72 h-auto md:h-72 bg-green-200 hover:bg-green-100 mb-4 md:mb-0 md:mr-4">
          <i className="text-2xl ml-4 md:ml-28 fa fa-globe" aria-hidden="true"></i>
          <h1 className="text-2xl font-bold mt-2 md:mt-0">Frontend Web Development</h1>
          <p className="font-light mt-2 md:mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ex facere iusto quia deleniti laboriosam dolorum eius sit aliquid vel?
          </p>
          <button className="bg-orange-500 rounded py-1 px-1 font-semibold mt-3 md:mt-7 shadow-lg hover:bg-orange-300 border">Hire Now</button>
        </div>

        {/* Service 2 */}
        <div className="box border shadow-xl py-4 px-4 w-full md:w-72 h-auto md:h-72 bg-green-200 hover:bg-green-100 mb-4 md:mb-0 md:mr-4">
          <i className="text-2xl ml-4 md:ml-28 fa fa-server" aria-hidden="true"></i>
          <h1 className="text-2xl font-bold mt-2 md:mt-0">Back-End Development</h1>
          <p className="font-light mt-2 md:mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ex facere iusto quia deleniti laboriosam dolorum eius sit aliquid vel?
          </p>
          <button className="bg-orange-500 rounded py-1 px-1 font-semibold mt-3 md:mt-7 shadow-lg hover:bg-orange-300 border">Hire Now</button>
        </div>

        {/* Service 3 */}
        <div className="box border shadow-xl py-4 px-4 w-full md:w-72 h-auto md:h-72 bg-green-200 hover:bg-green-100 mb-4 md:mb-0 md:mr-4">
          <i className="text-2xl ml-4 md:ml-28 fa fa-globe" aria-hidden="true"></i>
          <h1 className="text-2xl font-bold mt-2 md:mt-0">Web Management</h1>
          <p className="font-light mt-2 md:mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ex facere iusto quia deleniti laboriosam dolorum eius sit aliquid vel?
          </p>
          <button className="bg-orange-500 rounded py-1 px-1 font-semibold mt-3 md:mt-7 shadow-lg hover:bg-orange-300 border">Hire Now</button>
        </div>

        {/* Service 4 */}
        <div className="box border shadow-xl py-4 px-4 w-full md:w-72 h-auto md:h-72 bg-green-200 hover:bg-green-100 mb-4 md:mb-0">
          <i className="text-2xl ml-4 md:ml-28 fa fa-cog" aria-hidden="true"></i>
          <h1 className="text-2xl font-bold mt-2 md:mt-0">Web Testing</h1>
          <p className="font-light mt-2 md:mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ex facere iusto quia deleniti laboriosam dolorum eius sit aliquid vel?
          </p>
          <button className="bg-orange-500 rounded py-1 px-1 font-semibold mt-3 md:mt-7 shadow-lg hover:bg-orange-300 border">Hire Now</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
