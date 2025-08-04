"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useAnimate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Lenis from "@studio-freight/lenis";
import CartButton from "./CartButton";
import CartDrawer from "./CartDrawer";
import { useAuth } from "./AuthContext";
import { useModal } from "./ModalProvider";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

// Animated Hamburger Menu component
const HamburgerMenu = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => {
  return (
    <motion.button
      className="block md:hidden text-gray-800 z-50 relative"
      onClick={toggle}
      aria-label="Toggle mobile menu"
      whileTap={{ scale: 0.97 }}
    >
      <div className="relative w-7 h-6">
        <motion.span
          className="absolute h-0.5 rounded-full bg-gray-800 block transform-gpu origin-center"
          initial={{ width: "100%", top: "0%" }}
          animate={{
            width: isOpen ? "100%" : "100%",
            top: isOpen ? "50%" : "0%",
            rotate: isOpen ? 45 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ originX: 0.5, originY: 0.5 }}
        />
        <motion.span
          className="absolute w-full h-0.5 rounded-full bg-gray-800 block top-1/2 transform-gpu -translate-y-1/2"
          initial={{ opacity: 1 }}
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute h-0.5 rounded-full bg-gray-800 block transform-gpu origin-center"
          initial={{ width: "100%", bottom: "0%" }}
          animate={{
            width: isOpen ? "100%" : "75%",
            bottom: isOpen ? "50%" : "0%",
            rotate: isOpen ? -45 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ originX: 0.5, originY: 0.5 }}
        />
      </div>
    </motion.button>
  );
};

// Canvas background component
const NavbarCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
    }[] = [];
    let animationFrameId: number;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = 50;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
        });
      }
    };

    const drawParticles = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size
        );
        gradient.addColorStop(0, "rgba(255, 87, 34, 0.3)");
        gradient.addColorStop(1, "rgba(255, 87, 34, 0)");

        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Update particle positions
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    drawParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10 opacity-30"
    />
  );
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const { showSignUpModal } = useModal();
  const pathname = usePathname(); // Use Next.js pathname hook
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const searchRef = useRef(null);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [searchScope, animate] = useAnimate();
  const animationCompleted = useRef(false);
  const activeBackgroundId = "activeNavBackground"; // Shared layoutId for smooth transitions

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // Use touch options that work with Lenis
      wheelMultiplier: 1,
      touchMultiplier: 2,
      orientation: "vertical",
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      lenis.destroy();
    };
  }, []);

  // GSAP animations - only run once on initial load
  useGSAP(() => {
    if (animationCompleted.current) return;

    const tl = gsap.timeline();

    tl.from(navRef.current, {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      duration: 1,
      ease: "power3.inOut",
    })
      .from(
        logoRef.current,
        {
          opacity: 0,
          y: -20,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      )
      .from(
        searchRef.current,
        {
          opacity: 0,
          y: -20,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      )
      .from(
        navLinksRef.current?.querySelectorAll("a") || [],
        {
          opacity: 0,
          y: -20,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      )
      .then(() => {
        animationCompleted.current = true;
      });
  }, []);

  // Search animation
  useEffect(() => {
    if (searchFocused) {
      animate("svg", { rotate: 90 }, { duration: 0.3, ease: "easeInOut" });
      animate(
        "input",
        { width: "250px" },
        { duration: 0.3, ease: "easeInOut" }
      );
    } else {
      animate("svg", { rotate: 0 }, { duration: 0.3, ease: "easeInOut" });
      animate(
        "input",
        { width: "150px" },
        { duration: 0.3, ease: "easeInOut" }
      );
    }
  }, [searchFocused, animate]);

  // Nav links with magnetic effect
  const NavLink = ({
    href,
    children,
    isMobile = false,
  }: {
    href: string;
    children: React.ReactNode;
    isMobile?: boolean;
  }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState(false);
    const isActive = pathname === href; // Use pathname from usePathname() hook

    // For magnetic effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springConfig = { damping: 12, stiffness: 150 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    // Handle magnetic effect directly
    useEffect(() => {
      const element = containerRef.current;
      if (!element || isMobile) return;

      const handleMouse = (e: MouseEvent) => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate distance from mouse to center
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        // Magnetic strength
        x.set(distanceX / 2);
        y.set(distanceY / 2);
      };

      const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
      };

      element.addEventListener("mousemove", handleMouse);
      element.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        element.removeEventListener("mousemove", handleMouse);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, [isMobile, x, y]);

    // Enhanced style for active link
    const linkClass = isMobile
      ? "relative text-gray-800 font-medium py-3 px-4 text-lg block w-full border-b border-gray-100"
      : `relative ${
          isActive ? "text-[#FF5722]" : "text-gray-800"
        } font-medium py-1 px-3 md:px-2 lg:px-3 text-sm xl:text-base inline-block transition-colors duration-300`;

    return (
      <motion.div
        ref={containerRef}
        className={
          isMobile ? "w-full" : "relative overflow-visible flex items-center"
        }
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        style={!isMobile ? { x: springX, y: springY } : undefined}
      >
        {!isMobile && !isActive && (
          <motion.div
            className="h-2 w-2 rounded-full bg-[#FF5722] absolute -left-3"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: hovered ? 1 : 0,
              opacity: hovered ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
          />
        )}

        <Link
          href={href}
          className={linkClass}
          onClick={() => {
            isMobile && setMobileMenuOpen(false);
          }}
        >
          {/* Modern, more visible active link styling */}
          {!isMobile && (
            <AnimatePresence>
              {isActive && (
                <motion.div
                  className="absolute inset-0 -mx-1 -my-0.5 rounded-lg bg-gradient-to-r from-[#FF5722]/10 to-[#FF9800]/10 z-[-1]"
                  layoutId={activeBackgroundId}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                >
                  {/* Corner accents */}
                  <motion.div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#FF5722] rounded-tl-md" />
                  <motion.div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#FF5722] rounded-tr-md" />
                  <motion.div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#FF5722] rounded-bl-md" />
                  <motion.div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#FF5722] rounded-br-md" />
                </motion.div>
              )}
            </AnimatePresence>
          )}

          <motion.span
            whileHover={{
              color: "#FF5722",
              x: isMobile ? 5 : undefined,
              transition: { duration: 0.2 },
            }}
          >
            {children}
          </motion.span>

          {/* Animated underline for hover state on non-active items */}
          {!isMobile && !isActive && (
            <motion.span
              className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#FF5722] to-[#FF9800]"
              initial={{ scaleX: 0, originX: 0 }}
              whileHover={{ scaleX: 1, transition: { duration: 0.3 } }}
              transition={{ ease: "easeInOut" }}
            />
          )}

          {/* Active state indicator - visible pill with 3D effect */}
          {!isMobile && (
            <AnimatePresence>
              {isActive && (
                <motion.div
                  className="absolute -bottom-3 left-1/2 transform -translate-x-1/2"
                  initial={{ y: 5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 5, opacity: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  layoutId={`${activeBackgroundId}-indicator`}
                >
                  <motion.div
                    className="h-1.5 w-4 rounded-full bg-gradient-to-r from-[#FF5722] to-[#FF9800] shadow-[0_0_4px_rgba(255,87,34,0.7)]"
                    animate={{
                      boxShadow: [
                        "0 0 4px rgba(255,87,34,0.3)",
                        "0 0 8px rgba(255,87,34,0.6)",
                        "0 0 4px rgba(255,87,34,0.3)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </Link>
      </motion.div>
    );
  };

  return (
    <>
      <motion.header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 shadow-md ${
          scrolled
            ? "py-2 backdrop-blur-lg bg-white/90 shadow-md"
            : "py-4 bg-white/80 backdrop-blur-sm"
        }`}
        initial={!animationCompleted.current ? { opacity: 0 } : { opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <NavbarCanvas />

        <div className="container mx-auto px-4 flex items-center justify-between relative">
          {/* Logo */}
          <motion.div
            ref={logoRef}
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" passHref>
              <div className="cursor-pointer">
                <motion.div
                  className="text-[#FF5722] text-xl sm:text-2xl font-bold"
                  initial={
                    !animationCompleted.current
                      ? { opacity: 0, rotateY: 90 }
                      : { opacity: 1, rotateY: 0 }
                  }
                  animate={{ opacity: 1, rotateY: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image src={logo} alt="oitijjho express" width={100} />
                </motion.div>
              </div>
            </Link>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            ref={searchScope}
            className="relative hidden md:block max-w-[250px]"
          >
            <div ref={searchRef} className="relative">
              <input
                type="text"
                placeholder="Search..."
                className={`bg-gray-100 text-gray-800 placeholder-gray-500 px-4 py-2 pr-10 rounded-full outline-none border border-gray-200 transition-all duration-300 focus:border-[#FF5722] focus:bg-white w-[150px]`}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute right-3 top-2.5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </motion.svg>
            </div>
          </motion.div>

          {/* Desktop Nav Links */}
          <div
            ref={navLinksRef}
            className="hidden md:flex items-center md:gap-1 lg:gap-6 xl:gap-8"
          >
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/articles">Articles</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>

            <div className="flex items-center gap-3">
              {/* Cart Button */}
              <CartButton />

              {/* User Profile / Sign In */}
              {isAuthenticated ? (
                <div className="flex items-center gap-3">
                  {/* User Avatar */}
                  {/* <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF5722] to-[#FF9800] flex items-center justify-center text-white text-sm font-semibold">
                      {user?.avatar ? (
                        <img 
                          src={user.avatar} 
                          alt={user.name} 
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      ) : (
                        user?.name?.charAt(0) || 'U'
                      )}
                    </div>
                    <span className="text-sm font-medium text-gray-700 hidden lg:block">
                      {user?.name}
                    </span>
                  </div> */}
                  
                  

                  {/* Logout Button */}
                  <motion.button
                    onClick={logout}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-full font-medium text-sm transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Logout
                  </motion.button>
                </div>
              ) : (
                <motion.button
                  onClick={showSignUpModal}
                  className="bg-gradient-to-r from-[#FF5722] to-[#FF9800] text-white py-2 md:px-3 lg:px-6 rounded-full font-medium whitespace-nowrap shadow-md shadow-[#FF5722]/20 relative overflow-hidden group cursor-pointer md:ml-1 lg:ml-2"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 20px 0 rgba(255, 87, 34, 0.5)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <span className="relative z-10">Sign In</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#FF9800] to-[#FF5722] rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{
                      scale: 1,
                      opacity: 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              )}
            </div>
          </div>

          {/* Hamburger Menu Button - Replaced with custom animated component */}
          <div className="md:hidden flex items-center gap-3">
            <CartButton />
            <HamburgerMenu
              isOpen={mobileMenuOpen}
              toggle={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              className="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-white z-40 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100vh", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="container h-full mx-auto px-4 py-20 flex flex-col justify-between">
                <div className="flex flex-col space-y-6">
                  {/* Mobile Search */}
                  <div className="py-6 border-b border-gray-100">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="w-full bg-gray-100 text-gray-800 placeholder-gray-500 px-4 py-3 rounded-xl outline-none border border-gray-200 transition-all duration-300 focus:border-[#FF5722] focus:bg-white"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 absolute right-4 top-3.5 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Mobile Nav Links */}
                  <motion.div
                    className="flex flex-col space-y-2"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={{
                      open: {
                        transition: {
                          staggerChildren: 0.07,
                          delayChildren: 0.2,
                        },
                      },
                      closed: {
                        transition: {
                          staggerChildren: 0.05,
                          staggerDirection: -1,
                        },
                      },
                    }}
                  >
                    {[
                      { href: "/", label: "Home" },
                      { href: "/products", label: "Products" },
                      { href: "/articles", label: "Articles" },
                      { href: "/about", label: "About" },
                      { href: "/contact", label: "Contact" },
                    ].map(link => (
                      <motion.div
                        key={link.href}
                        variants={{
                          open: {
                            y: 0,
                            opacity: 1,
                            transition: {
                              y: { stiffness: 1000, velocity: -100 },
                            },
                          },
                          closed: {
                            y: 50,
                            opacity: 0,
                            transition: {
                              y: { stiffness: 1000 },
                            },
                          },
                        }}
                      >
                        <NavLink href={link.href} isMobile>
                          {link.label}
                        </NavLink>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Sign In Button */}
                <motion.div
                  className="py-6"
                  variants={{
                    open: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.5 },
                    },
                    closed: {
                      opacity: 0,
                      y: 20,
                    },
                  }}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                                     <motion.button
                     onClick={showSignUpModal}
                     className="bg-gradient-to-r from-[#FF5722] to-[#FF9800] text-white py-3 px-6 rounded-full font-medium shadow-md shadow-[#FF5722]/20 w-full"
                     whileTap={{ scale: 0.97 }}
                   >
                     Sign In
                   </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Cart Drawer */}
      <CartDrawer />
    </>
  );
}
