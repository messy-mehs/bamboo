import React from 'react';
import { BsFileEarmarkBarGraph } from 'react-icons/bs';
import { PiWindowsLogoLight } from 'react-icons/pi';
import { LuCircleDollarSign } from 'react-icons/lu';

function Sidepane() {
  return (
    <aside className="bg-gray-800 p-4 rounded-full">
      <ul className="space-y-4">
        <li className="text-white hover:text-gray-200">
        <BsFileEarmarkBarGraph className="text-white mr-2" />        
        </li>

        <li className="text-white hover:text-gray-200">
        <PiWindowsLogoLight className="text-white mr-2" />
        </li>
       
        <li className="text-white hover:text-gray-200">
        <BsFileEarmarkBarGraph className="text-white mr-2" />        
        </li>
        
        <li className="text-white hover:text-gray-200">
        <PiWindowsLogoLight className="text-white mr-2" />
        </li>
        <li className="text-white hover:text-gray-200">
        <BsFileEarmarkBarGraph className="text-white mr-2" />        
        </li>
        
        <li className="text-white hover:text-gray-200">
        <PiWindowsLogoLight className="text-white mr-2" />
        </li>
        <li className="text-white hover:text-gray-200">
        <BsFileEarmarkBarGraph className="text-white mr-2" />        
        </li>
        
        <li className="text-white hover:text-gray-200">
        <PiWindowsLogoLight className="text-white mr-2" />
        </li>
        <li className="text-white hover:text-gray-200">
        <BsFileEarmarkBarGraph className="text-white mr-2" />        
        </li>
        
        <li className="text-white hover:text-gray-200">
        <PiWindowsLogoLight className="text-white mr-2" />
        </li>
        <li className="text-white hover:text-gray-200">
        <BsFileEarmarkBarGraph className="text-white mr-2" />        
        </li>
        
        <li className="text-white hover:text-gray-200">
        <LuCircleDollarSign className="text-white mr-2" />
        </li>
      </ul>
    </aside>
  );
}

export default Sidepane;