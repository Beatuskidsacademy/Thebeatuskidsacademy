import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import logo from "../components/assets/logo.png";

 // LOGO IMPORT

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "Daycare", href: "#daycare" },
    { label: "Tuitions", href: "#tuitions" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
    { label: "Join us", href: "#join-us" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* LOGO + BRAND NAME */}
          <motion.a
            href="#main-content"
            className="flex items-center gap-3"
            aria-label="The Beatus Kids Academy Home"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
           <img
  src={logo}
  alt="The Beatus Kids Academy Logo"
  className="w-12 h-12 object-contain"
  loading="lazy"
/>

            <span className="text-2xl font-semibold text-gray-800">
              The Beatus Kids Academy
            </span>
          </motion.a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors relative"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              
            </motion.div>
          </div>

          {/* MOBILE NAVIGATION */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <motion.div whileTap={{ scale: 0.9 }} className="md:hidden">
                <Button variant="ghost" size="icon" aria-label="Open mobile menu">
                  <Menu className="w-6 h-6" />
                </Button>
              </motion.div>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="text-left text-lg text-gray-700 hover:text-blue-600 transition-colors py-2 px-4 hover:bg-blue-50 rounded-lg"
                  >
                    {item.label}
                  </button>
                ))}

               
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
