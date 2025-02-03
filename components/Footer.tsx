const Footer = () => {
  return (
    <footer className="bg-white text-[#096036] py-8 px-6 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        {/* Logo & Links */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
          <img src="/images/t4.png" alt="AfriFarma Logo" className="h-10" />
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">Linkedln</a>
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">Facebook</a>
          </div>
        </div>
        <div className="text-center md:text-right">
          <div className="flex flex-col md:flex-row justify-center md:justify-end mt-2 space-y-2 md:space-y-0 md:space-x-2">
            <input type="email" placeholder="Enter your email address" className="px-4 py-2 outline-none border border-[#096036] rounded-full" />
            <button className="bg-[#096036] text-white px-4 py-2 rounded-full">Subscribe</button>
          </div>
          <p className="text-sm mt-2">By subscribing you agree to our <a href="#" className="text-[#096036] underline">Privacy Policy</a></p>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="border-t border-[#096036] mt-6 pt-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 text-center md:text-left">
        {/* Privacy Links */}
        <div className="flex justify-center md:justify-start space-x-6">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Cookies Settings</a>
          <a href="#" className="hover:underline">FAQ</a>
        </div>
        {/* Copyright */}
        <div className="mt-2 md:mt-0 text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} AfriFarma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
