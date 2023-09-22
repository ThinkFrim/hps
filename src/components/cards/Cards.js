import React from 'react';


const Cards = ({aboutData}) => (
    <section>
        <div className="bg-white shadow-md rounded-md p-4 mx-4 my-4 w-72">
            <h2 className="text-xl font-semibold">{aboutData}</h2>
            <p className="text-gray-700 mt-2">{aboutData}</p>
        </div>

    </section>
  )

export default Cards