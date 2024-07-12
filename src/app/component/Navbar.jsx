import React from 'react';
import sipnplayLogo from '../../../public/sipnplay.png'; // Import your image file
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
  return (
    
    <header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a href="/heroSection" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image src={sipnplayLogo} alt="Sip&Play Logo" className="w-20 h-20 rounded-full" />
            <span className="ml-3 text-xl">Sip&Play</span>
    </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a href="/about" className="mr-5 hover:text-gray-900">About Us</a>
        <a href ="/menu" className="mr-5 hover:text-gray-900">Menu</a>
        <a href="/boardgame" className="mr-5 hover:text-gray-900">Game Board</a>
        <a href="/eventscalendar" className="mr-5 hover:text-gray-900">Events</a>
        <a href="/news" className="mr-5 hover:text-gray-900">News</a>
        <a href="/contact" className="mr-5 hover:text-gray-900">Contact Us</a>
      </nav>
      <Link href="/reservations">
        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Make Reservations
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </Link>
    </div>
  </header>
  );
}

export default Navbar;
