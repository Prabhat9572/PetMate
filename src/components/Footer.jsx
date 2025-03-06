import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "../Style/Footer.css"; // Import CSS
import videologo from "../assets/videologo.mp4"; // Correct import

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Branding */}
        <div className="footer-brand">
          <video autoPlay loop muted className="footer-logo">
            <source src={videologo} type="video/mp4" />  {/* Correct usage */}
            Your browser does not support the video tag.
          </video>
          <h2>PetMate</h2>
          <p>Caring for Pets, Connecting Hearts. Your One-Stop Pet Companion.</p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/adopt">🐶 Adopt a Pet</a></li>
            <li><a href="/services">🩺 Pet Services</a></li>
            <li><a href="/shop">🛒 Pet Store</a></li>
            <li><a href="/lost-found">🔍 Lost & Found</a></li>
            <li><a href="/contact">📞 Contact Us</a></li>
          </ul>
        </div>

        {/* Right Section - Newsletter & Social Media */}
        <div className="footer-newsletter">
          <h3>Join Our Community</h3>
          <p>Subscribe to get pet care tips, adoption updates, and exclusive discounts.</p>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} PetMate. All Rights Reserved.</p>
        <p>🐾 Made with ❤️ for Pet Lovers Everywhere.</p>
      </div>
    </footer>
  );
};

export default Footer;
