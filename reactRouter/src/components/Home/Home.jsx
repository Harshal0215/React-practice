import React from 'react'

import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Hello
                            <span className="hidden sm:block text-4xl"> This is <i>HARSHAL</i></span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-90"
                            to="/"
                        >
                             
                            &nbsp; Download my app
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-1/2" src="https://img.freepik.com/premium-vector/business-team-process-vector-illustration-company-employees-make-some-planning-calendar-schelude-time-management_109722-1521.jpg?w=996" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-2/3" src="https://th.bing.com/th/id/OIP.9AqcLgoMQJgkOGS2XQPAHwHaEO?w=700&h=400&rs=1&pid=ImgDetMain" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Welcome</h1>
        </div>
    );
}