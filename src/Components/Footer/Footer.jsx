import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black">
      <footer className="max-w-300 w-[95%] lg:[w-75%] mx-auto text-white py-30">
        <div className="top-footer grid grid-cols-1 gap-10 lg:grid-cols-[35%_45%_20%]">
          <div className="footer-start">
            <h1 className="text-4xl font-bold mb-3">Digitools</h1>
            <p>
              Premium digital tools for creators, <br /> professionals, and
              businesses. Work smarter <br /> with our suite of powerful tools.
            </p>
          </div>

          <div className="footer-middle grid grid-cols-3">
            <div className="middle-start">
              <h3 className="text-xl">Product</h3>
              <ul className="space-y-2 mt-3">
                <li>Features</li>
                <li>Pricing</li>
                <li>Templates</li>
                <li>Integrations</li>
              </ul>
            </div>
            <div className="middle-middle">
              <h3 className="text-xl">Company</h3>
              <ul className="space-y-2 mt-3">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            <div className="middle-end">
              <h1 className="text-xl">Resources</h1>
              <ul className="space-y-2 mt-3">
                <li>Documentation</li>
                <li>Help Center</li>
                <li>Community</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>

          <div className="footer-end">
            <h3>Social Links</h3>
            <div className="links flex gap-3 mt-2">
              <AiFillInstagram />
              <FaFacebookSquare />
              <FaXTwitter />
            </div>
          </div>
        </div>
        <hr className="border-[#FAFAFA] mt-20" />
        <div className="bottom-footer flex flex-col md:flex-row gap-2 justify-between mt-10">
          <p>© 2026 Digitools. All rights reserved.</p>
          <ul className="flex gap-8">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookies</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
