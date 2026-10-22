import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImageWithShimmer from "./ImageWithShimmer";
import SplitWords from "./SplitWords.jsx";
import Magnetic from "./Magnetic.jsx";
import { enter } from "../utils/motion.js";

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const bannerData = [
  {
    _id: 1,
    alt: "Shree Ansh Agarbatti collection",
    url: "https://res.cloudinary.com/dogqvcvs4/image/upload/f_auto,q_auto/v1/public/images/Banner/lo7ve0ksmzdvefoyrso3",
  },
  {
    _id: 2,
    alt: "Premium incense range",
    url: "https://res.cloudinary.com/dogqvcvs4/image/upload/f_auto,q_auto/v1/public/images/Banner/spy7hgroyqk8vblzaluc",
  },
  {
    _id: 3,
    alt: "Classic incense range",
    url: "https://res.cloudinary.com/dogqvcvs4/image/upload/f_auto,q_auto/v1/public/images/Banner/uimaptjkhfxeqnjerytp",
  },
  {
    _id: 4,
    alt: "Shree Ansh product showcase",
    url: "https://res.cloudinary.com/dogqvcvs4/image/upload/f_auto,q_auto/v1/public/images/Banner/b6btfj9tfatwsmjt5hll",
  },
];

/* Rising incense smoke - pure CSS, honors reduced motion via media query */
const SmokeWisps = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute bottom-[18%] left-[6%] hidden lg:block"
  >
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className="smoke-wisp absolute block h-24 w-24 rounded-full opacity-0"
        style={{
          left: `${i * 18}px`,
          background:
            "radial-gradient(circle, rgba(231,229,228,0.35) 0%, transparent 70%)",
          filter: "blur(14px)",
        }}
      />
    ))}
  </div>
);

const Hero = () => {
  const reduce = useReducedMotion();
  const sectionRef = useRef(null);

  /* Scroll-linked depth: visual drifts slower than the page */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 40]);
  const atmosphereOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-[92dvh] overflow-hidden bg-smoke-950 text-stone-100"
    >
      {/* Layered atmosphere, fades as you scroll past */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: atmosphereOpacity,
          background:
            "radial-gradient(ellipse 70% 55% at 78% 90%, rgba(240,176,63,0.22), transparent 65%), radial-gradient(ellipse 45% 40% at 10% 8%, rgba(233,46,55,0.14), transparent 70%), linear-gradient(180deg, rgba(23,20,18,0) 60%, rgba(23,20,18,0.6) 100%)",
        }}
      />
      {/* Fine hairline grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <SmokeWisps />

      <div className="relative mx-auto grid max-w-page grid-cols-1 items-center gap-12 px-6 pb-20 pt-14 sm:px-10 lg:min-h-[92dvh] lg:grid-cols-12 lg:gap-16 lg:px-14 lg:py-0">
        {/* Copy */}
        <motion.div style={{ y: copyY }} className="lg:col-span-5">
          <h1 className="font-display text-[clamp(3rem,7vw,5.5rem)] font-medium leading-[1.02] tracking-tight text-stone-50">
            <SplitWords text="The Fragrance" delay={0.1} />
            <br />
            <SplitWords
              text="of Devotion"
              delay={0.32}
              className="italic leading-[1.1] text-ember"
            />
          </h1>

          <motion.p
            {...enter(reduce, 0.55, 24)}
            className="mt-7 max-w-md text-base leading-relaxed text-stone-300/90 sm:text-lg"
          >
            Perfumed agarbatti handcrafted in Gorakhpur. 35+ varieties for
            prayer, calm and celebration.
          </motion.p>

          <motion.div
            {...enter(reduce, 0.7, 24)}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <Link
                to="/products"
                className="group relative inline-block overflow-hidden rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(233,46,55,0.55)] transition duration-300 hover:bg-brand-dark hover:shadow-[0_12px_36px_-8px_rgba(233,46,55,0.7)] active:scale-[0.97]"
              >
                Explore Products
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  &#8594;
                </span>
              </Link>
            </Magnetic>
            <Link
              to="/contact-us"
              className="rounded-full border border-white/20 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-stone-200 backdrop-blur-sm transition duration-300 hover:border-ember hover:bg-white/[0.07] hover:text-white active:scale-[0.97]"
            >
              Business With Us
            </Link>
          </motion.div>
        </motion.div>

        {/* Visual: tilted framed carousel with scroll parallax */}
        <motion.div style={{ y: visualY }} className="relative lg:col-span-7">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 40, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: reduce ? 0 : 1 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
          {/* Offset frame line behind */}
          <div
            aria-hidden="true"
            className="absolute -inset-3 hidden rounded-3xl border border-white/10 lg:block"
            style={{ transform: "rotate(-1.2deg)" }}
          />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_40px_120px_-32px_rgba(0,0,0,0.9)]">
            <Carousel
              swipeable
              draggable={false}
              responsive={responsive}
              infinite
              autoPlay={!reduce}
              autoPlaySpeed={4500}
              keyBoardControl
              arrows={false}
              showDots
              transitionDuration={800}
              containerClass="carousel-container"
            >
              {bannerData.map((image) => (
                <ImageWithShimmer
                  key={image._id}
                  src={image.url}
                  alt={image.alt}
                  width="100%"
                  height="480px"
                  borderRadius="0px"
                  objectFit="cover"
                />
              ))}
            </Carousel>
            {/* Soft vignette for dot legibility */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent"
            />
          </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
