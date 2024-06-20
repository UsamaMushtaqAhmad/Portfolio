import React from 'react'

const Skills = () => {
  return (
  <>
    <div className="w-screen min-h-screen">

      <div className="h-20 font-bold w-full bg-green-200 flex items-center justify-center text-3xl">
        <h1 className="underline">Expertise</h1>
      </div>

      <div className="services-box flex flex-col md:flex-row justify-between items-start md:items-center flex-wrap px-4 md:px-8 py-10 gap-6">

        {/* Service 1 */}
        <div className="box border shadow-xl p-4 w-full sm:w-72 h-auto bg-green-200 hover:bg-green-100">
          <i className="text-2xl fa-brands fa-css3-alt text-blue-500" aria-hidden="true"></i>
          <h1 className="text-2xl font-bold mt-2 text-blue-500">CSS</h1>
          <p className="font-light mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ex facere iusto quia deleniti laboriosam dolorum eius sit aliquid vel?
          </p>
          <button className="bg-orange-500 rounded py-2 px-4 font-semibold mt-4 shadow-lg hover:bg-orange-300 border">Hire Now</button>
        </div>

        {/* Service 2 */}
        <div className="box border shadow-xl p-4 w-full sm:w-72 h-auto bg-green-200 hover:bg-green-100">
          <i className="text-2xl fa-brands fa-html5 text-orange-500" aria-hidden="true"></i>
          <h1 className="text-2xl font-bold mt-2 text-orange-500">HTML</h1>
          <p className="font-light mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ex facere iusto quia deleniti laboriosam dolorum eius sit aliquid vel?
          </p>
          <button className="bg-orange-500 rounded py-2 px-4 font-semibold mt-4 shadow-lg hover:bg-orange-300 border">Hire Now</button>
        </div>

        {/* Service 3 */}
        <div className="box border shadow-xl p-4 w-full sm:w-72 h-auto bg-green-200 hover:bg-green-100">
          <i className="text-2xl fa-brands fa-js text-yellow-400" aria-hidden="true"></i>
          <h1 className="text-2xl font-bold mt-2 text-yellow-400">JavaScript</h1>
          <p className="font-light mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ex facere iusto quia deleniti laboriosam dolorum eius sit aliquid vel?
          </p>
          <button className="bg-orange-500 rounded py-2 px-4 font-semibold mt-4 shadow-lg hover:bg-orange-300 border">Hire Now</button>
        </div>

        {/* Service 4 */}
        <div className="box border shadow-xl p-4 w-full sm:w-72 h-auto bg-green-200 hover:bg-green-100">
          <i className="text-2xl fa-brands fa-react text-blue-600" aria-hidden="true"></i>
          <h1 className="text-2xl font-bold mt-2 text-blue-600">React JS</h1>
          <p className="font-light mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ex facere iusto quia deleniti laboriosam dolorum eius sit aliquid vel?
          </p>
          <button className="bg-orange-500 rounded py-2 px-4 font-semibold mt-4 shadow-lg hover:bg-orange-300 border">Hire Now</button>
        </div>

        {/* Service 5 */}
        <div className="box border shadow-xl p-4 w-full sm:w-72 h-auto bg-green-200 hover:bg-green-100">
          <i className="text-2xl fa fa-cog text-blue-500" aria-hidden="true"></i>
          <h1 className="text-2xl font-bold mt-2 text-blue-600">Tailwind CSS</h1>
          <p className="font-light mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ex facere iusto quia deleniti laboriosam dolorum eius sit aliquid vel?
          </p>
          <button className="bg-orange-500 rounded py-2 px-4 font-semibold mt-4 shadow-lg hover:bg-orange-300 border">Hire Now</button>
        </div>

        {/* Service 6 */}
        <div className="box border shadow-xl p-4 w-full sm:w-72 h-auto bg-green-200 hover:bg-green-100">
          <i className="text-2xl fa-brands fa-bootstrap text-orange-400" aria-hidden="true"></i>
          <h1 className="text-2xl font-bold text-orange-400 mt-2">Bootstrap</h1>
          <p className="font-light mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ex facere iusto quia deleniti laboriosam dolorum eius sit aliquid vel?
          </p>
          <button className="bg-orange-500 rounded py-2 px-4 font-semibold mt-4 shadow-lg hover:bg-orange-300 border">Hire Now</button>
        </div>
        
      </div>
    </div>
  </>
  )
}

export default Skills
