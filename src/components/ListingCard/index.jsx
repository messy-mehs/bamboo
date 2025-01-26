import React from 'react';

function ListingCard({ plan, heading, price, features, subHeading, color }) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 text-white">
      <div className={`p-4 rounded-top-lg ${color} flex flex-col justify-between custom-height`}> 
        <div> 
            <h2 className="text-base font-bold mb-3">{plan}</h2>
            <h4 className="text-sm mb-2">{heading}</h4>
        </div>
        <div> 
            <p className="text-xl font-bold mb-3"><span className='text-5xl'>${price}</span>/month</p>
            <h4 className="text-sm mb-4">{subHeading}</h4>
        </div>
        <button className="text-sm w-full px-6 py-2 border border-white rounded-full text-white bg-transparent">
            Choose Plan
        </button>
        </div>


      <ul className="space-y-4 rounded-lg-more p-4 bg-gray-700">
  {features.map((feature) => (
    <li key={feature} className="flex items-center border-b border-white pb-2" >
      <span className="mr-2 text-lg">•</span> {/* Bullet character */}
      <span className="text-xs">{feature}</span>
    </li>
  ))}
</ul>

    </div>
  );
}

export default ListingCard;

