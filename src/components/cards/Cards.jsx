    import React from "react";
    import aboutData from "../../Data/dummy";
    const Cards = ({ headText, subText, img, className }) => (
    <section>
        <div className={`${className} flex flex-row-reverse items-center`}>
        <img src={img} alt='' />
        <div>
            <h1>{headText}</h1>
            <p className='text-gray-700 mt-2'>{subText}</p>
        </div>
        </div>
    </section>
    );

    export default Cards;
