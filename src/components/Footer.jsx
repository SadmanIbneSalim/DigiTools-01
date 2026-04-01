import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#101727] mt-10' >
            <footer className="footer max-w-300 sm:footer-horizontal  p-10 text-white mx-auto">
  <aside>
    <h1 className='text-3xl font-bold' >DigiTools</h1>
    <p className='text-white/60' >
      Premium digital tools for <br /> creators, professionals, and <br />businesses. Work smarter <br />    with our suite of powerful tools.
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Product</h6>
    <a className="link link-hover">Features</a>
    <a className="link link-hover">Pricing</a>
    <a className="link link-hover">Templates</a>
    <a className="link link-hover">Integrations</a>
  </nav>
  <nav>
    <h6 className="footer-title">About</h6>
    <a className="link link-hover">Blog</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Press </a>
  </nav>
  <nav>
    <h6 className="footer-title">Resources</h6>
    <a className="link link-hover">Documentation</a>
    <a className="link link-hover">Help Center</a>
    <a className="link link-hover">Community</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <div>
    <p>Social Links</p>

  </div>
  
</footer>
            
        </div>
    );
};

export default Footer;