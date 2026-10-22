import { HashLink } from "react-router-hash-link";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const quickLinks = [
  { label: "Home", to: "/#Home" },
  { label: "Products", to: "/products#top" },
  { label: "Machinery", to: "/machinery#top" },
  { label: "About", to: "/about-us#top" },
  { label: "Gallery", to: "/#Gallery" },
  { label: "Contact Us", to: "/contact-us#top" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/SHREE-ANSH-Agarbatti-Co/100065174973492/",
    Icon: FacebookOutlinedIcon,
  },
  { label: "X", href: "https://x.com/AnshAgarbatti", Icon: XIcon },
  {
    label: "Instagram",
    href: "https://www.instagram.com/shree_ansh_agarbatti/",
    Icon: InstagramIcon,
  },
  {
    label: "Email",
    href: "mailto:shreeansh26@gmail.com",
    Icon: EmailOutlinedIcon,
  },
];

const Footer = () => {
  return (
    <footer className="bg-smoke-950 text-stone-300">
      <div className="mx-auto max-w-page px-6 py-14 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <img
              src="https://res.cloudinary.com/dogqvcvs4/image/upload/f_auto,q_auto/v1/public/ricozf6dzsn37q76ckwa"
              alt="Shree Ansh Agarbatti"
              className="h-[56px] w-auto"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-stone-400">
              Perfumed agarbatti and agarbatti making machinery from Gorakhpur,
              crafted to make every prayer more pure and divine.
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-stone-300 transition hover:border-ember hover:text-ember"
                  >
                    <Icon fontSize="small" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-100">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <HashLink
                    className="text-stone-400 transition hover:text-white"
                    to={link.to}
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                  >
                    {link.label}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-100">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-stone-400">
              <li>
                Shree Ansh Agarbatti Co., Gola Bazar, Gorakhpur,
                <br />
                Uttar Pradesh 273408, India
              </li>
              <li>
                <a href="tel:+919889733153" className="transition hover:text-white">
                  +91 98897 33153
                </a>
              </li>
              <li>
                <a
                  href="mailto:shreeansh26@gmail.com"
                  className="transition hover:text-white"
                >
                  shreeansh26@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Giant serif signature */}
      <div
        aria-hidden="true"
        className="select-none overflow-hidden px-6 sm:px-10 lg:px-14"
      >
        <div className="mx-auto max-w-page">
          <div className="translate-y-[0.32em] whitespace-nowrap font-display text-[clamp(3.5rem,11vw,10rem)] font-semibold leading-none tracking-tight text-white/[0.05]">
            Shree Ansh
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-page flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-stone-500 sm:flex-row sm:px-10 lg:px-14">
          <span>
            &#169; 2024-2027 Shree Ansh Agarbatti. All rights reserved.
          </span>
          <span>Made with care in India</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
