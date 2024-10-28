import React from 'react';
import Button from '../ui/Button';
import Photo from '../assets/Group.png'

const Hero = () => {
  return (
    <section className="pt-32 pb-16 gradient-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              FINANCE WITH <br />
              SECURITY AND <br />
              <span className="text-[#a3ff6b]">FLEXIBILITY</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              No-Free Checking Account with Cash Bank Rewardas. Enjoy Free-Fee Banking And Earn Cash Back On Your Everyday Purchase 
            </p>
            <Button 
              variant="primary" 
              className="text-base px-8 py-3 bg-[#05b993] hover:bg-[#05b993]/90"
            >
              Open Account
            </Button>
            
            <div className="flex flex-wrap items-center gap-8 mt-12">
              <img src="/api/placeholder/80/30" alt="Referrals" className="h-8" />
              <img src="/api/placeholder/80/30" alt="LinkedIn" className="h-8" />
              <img src="/api/placeholder/80/30" alt="VISA" className="h-8" />
              <img src="/api/placeholder/80/30" alt="Amazon Pay" className="h-8" />
              <img src="/api/placeholder/80/30" alt="PayPal" className="h-8" />
              <img src="/api/placeholder/80/30" alt="Money" className="h-8" />
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative z-10">
              <img 
                src={Photo}
                alt="Mobile app interface"
                className="relative rounded-3xl shadow-2xl"
              />
              <div className="absolute -right-4 -bottom-4 w-full h-full border-2 border-[#05b993] rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;