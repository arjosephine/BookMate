import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* About Us */}
          <div>
            <h4 className="text-lg font-bold mb-4">About Us</h4>
            <p className="text-gray-400">
              BookMate is a platform where book lovers can share and discover books.
            </p>
          </div>

          {/* Privacy Policy */}
          <div>
            <h4 className="text-lg font-bold mb-4">Privacy Policy</h4>
            <ul>
              <li>
                <a href="/privacy-policy" className="text-gray-400 hover:underline">
                  View our Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p className="text-gray-400">Email: support@bookmate.com</p>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <ul className="flex space-x-4">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <img src="/path-to-facebook-icon.png" alt="Facebook" className="w-6" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <img src="/path-to-twitter-icon.png" alt="Twitter" className="w-6" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <img src="/path-to-instagram-icon.png" alt="Instagram" className="w-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8 text-gray-500 text-sm">
          © 2024 BookMate. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
