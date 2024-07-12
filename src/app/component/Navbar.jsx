import React from 'react';
import Logo from '@/src/app/component/common/logo'
import Button from '@/src/app/component/common/Button';
import SpecialButton from './common/specialButton';


export default function Navbar()  {
  return (
    <header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Logo/>
        <nav class="md:ml-auto flex flex-wrap items-center space-x-5 text-base justify-center">
          <Button url="/about" title="About Us" />
          <Button url="/menu" title="Menu" />
          <Button url="/boardgames" title="Boardgames" />
          <Button url="/events" title="Events" />
          <Button url="/contact" title="Contact Us" />
          <SpecialButton url="/reservations" className="flex items-center bg-[#DEE9D3] border py-2 px-3 font-semibold focus:outline-none hover:scale-105 hover:bg-[#BFEE90] rounded-md text-base" >
            <p>Make Reservation</p>
          </SpecialButton>
      </nav>
    </div>
  </header>
  );
}
