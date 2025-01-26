import React from 'react';
import ListingSection from '../Listings';
import Header from '../../components/Header';
import Sidepane from '../../components/Sidepane';
import SubHeader from '../../components/SubHeader';

function Home() {

  return (
     <div className="flex flex-col min-h-screen bg-gray-900"> 
<Header /> 
<div className="flex flex-grow"> 
  <Sidepane />
  <div className="flex-grow p-4"> 
  <SubHeader />
  <ListingSection />
  </div>
</div>
</div>
  );
}

export default Home;