import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://wpvip.edutopia.org/wp-content/uploads/2022/10/iStock-467142812_master.jpg?w=2880&quality=85"
                          alt="image" className='rounded-lg backdrop-invert'
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h4 className="text-2xl text-gray-900 font-bold md:text-3xl ">
                      Hi... this is Harshal   
                      </h4>
                      <p className="mt-6 text-gray-600">
                          
                      </p>
                      <p className="mt-4 text-gray-600">
                      I’m currently pursuing Masters in Computer Science at Shivaji Science College. My unique combination of disciplines allows me to bridge the gap between hardware and software, providing a comprehensive approach to problem-solving. 
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}