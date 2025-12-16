import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "/#about", scrollTo: "about" },
  { name: "Experience", href: "/experience", scrollTo: null },
  { name: "Education", href: "/education", scrollTo: null },
  { name: "Skills", href: "/#skills", scrollTo: "skills" },
  { name: "Portfolio", href: "/#portfolio", scrollTo: "portfolio" },
  { name: "Contact", href: "/#contact", scrollTo: "contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (link: typeof navLinks[0]) => {
    setIsOpen(false);
    
    // For Experience and Education, scroll to top
    if (link.href === "/experience" || link.href === "/education") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    // For section links
    if (link.scrollTo) {
      if (location.pathname === "/") {
        // Already on homepage, just scroll
        const element = document.getElementById(link.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to homepage first, then scroll
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(link.scrollTo!);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  };

  // Handle hash navigation when coming from another page
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const elementId = location.hash.slice(1);
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display text-xl tracking-tight text-foreground hover:text-primary transition-colors duration-300"
          >
            Sophie Roach
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => {
                  if (link.scrollTo) {
                    e.preventDefault();
                  }
                  handleNavClick(link);
                }}
                className="nav-link text-sm font-body tracking-wide uppercase"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-fade-in">
            <div className="flex flex-col py-6 px-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => {
                    if (link.scrollTo) {
                      e.preventDefault();
                    }
                    handleNavClick(link);
                  }}
                  className="nav-link text-lg font-body py-2"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};