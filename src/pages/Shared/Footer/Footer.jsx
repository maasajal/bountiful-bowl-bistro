import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 text-center mt-10">
          <div className="bg-[#1F2937] py-20">
            <h6 className="text-2xl font-semibold mb-5">CONTACT US</h6>
            <address className="leading-8">
              Hameankatu, Tampere, Finland <br />
              +88 123456789 <br />
              Mon - Fri: 08:00 - 22:00 <br />
              Sat - Sun: 10:00 - 23:00
            </address>
          </div>
          <div className="bg-[#111827] py-20 space-y-5">
            <h6 className="text-2xl font-semibold">Follow US</h6>
            <p>Join us on social media</p>
            <div className="flex justify-center gap-4">
              <a href="/">
                <FaFacebookF />
              </a>
              <a href="/">
                <FaInstagram />
              </a>
              <a href="/">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <footer className="footer footer-center bg-[#151515] p-4">
          <aside>
            <p>
              Copyright © 2024 - All right reserved by
              <a href="/"> Bountiful Bowl Bistro </a>
            </p>
          </aside>
        </footer>
      </footer>
    </>
  );
};
export default Footer;
