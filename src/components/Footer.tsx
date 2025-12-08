import { Facebook, Instagram, Youtube } from "lucide-react";
import logo from "../components/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">

          {/* Logo + Title */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logo}
                alt="The Beatus Kids Academy Logo"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-xl">The Beatus Kids Academy</span>
            </div>

            <p className="text-gray-400 text-sm">
              come,see your child's foundation for future
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-blue-400 transition-colors">Programs</a></li>
              <li><a href="#curriculum" className="hover:text-blue-400 transition-colors">Curriculum</a></li>
              <li><a href="#gallery" className="hover:text-blue-400 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Contact Info</h4>
            <address className="space-y-2 text-sm text-gray-400 not-italic">
              <p>BDA layout 2nd cross, HAL 3rd stage, murugeshpalaya near carrymart</p>
              <p>Bengaluru, Karnataka 560017</p>
              <p><a href="tel:8092424599" className="hover:text-blue-400 transition-colors">8092424599</a>, <a href="tel:8050730719" className="hover:text-blue-400 transition-colors">8050730719</a></p>
              <p><a href="mailto:thebeatuskidsacademy22@gmail.com" className="hover:text-blue-400 transition-colors">thebeatuskidsacademy22@gmail.com</a></p>
            </address>
          </div>

          {/* Social Icons */}
          <div>
            <h4 className="mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/thebeatuskidsacademy1/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/thebeatuskidsacademy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://www.youtube.com/@thebeatuskidsacademy22"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; 2025 The Beatus Kids Academy. All rights reserved. | Kreedo Certified</p>
        </div>
      </div>
    </footer>
  );
}
