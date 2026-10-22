import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useInView,
  animate,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import "react-multi-carousel/lib/styles.css";
import Hero from "../components/Hero.jsx";
import Seo from "../components/Seo.jsx";
import GalleryCarousel from "../components/GalleryCarousel.jsx";
import ProductCardWithShimmer from "../components/ProductCardWithShimmer.jsx";
import ImageWithShimmer from "../components/ImageWithShimmer.jsx";
import FaqAccordion from "../components/FaqAccordion.jsx";
import { reveal } from "../utils/motion.js";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { productData } from "../utils/data.js";

/* ---------- Count-up stat ---------- */
const CountUp = ({ to, suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, reduce]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

const stats = [
  { to: 35, suffix: "+", label: "Incense varieties" },
  { to: 6, suffix: "", label: "Fragrance undertones" },
  { to: 3, suffix: "", label: "Signature collections" },
  { word: "Gola Bazar", label: "Our home in Gorakhpur" },
];

const categoryCopy = {
  Premium: "Our flagship range, the most loved by customers.",
  Classic: "Timeless fragrances for daily prayer and ritual.",
  Standard: "Everyday incense at an honest price.",
};

const undertones = [
  "Floral",
  "Oriental",
  "Woody",
  "Premium",
  "Cosmetic",
  "Florabatti",
];

const faqs = [
  {
    q: "Which is the best agarbatti brand in Gorakhpur?",
    a: "Shree Ansh Agarbatti is one of the most trusted agarbatti brands in Gorakhpur, Uttar Pradesh. Manufactured locally at Gola Bazar with 35+ varieties of perfumed incense sticks, our premium collection is loved by households and retailers across the region.",
  },
  {
    q: "Where can I buy Shree Ansh Agarbatti in Gorakhpur?",
    a: "You can buy Shree Ansh Agarbatti directly from us at Gola Bazar, Gorakhpur (Uttar Pradesh 273408), or from retailers across Gorakhpur and Uttar Pradesh. Call +91 98897 33153 or use our contact form for availability near you.",
  },
  {
    q: "Do you sell agarbatti making machines in Gorakhpur?",
    a: "Yes. Along with incense sticks, Shree Ansh Agarbatti Co. sells agarbatti making machinery in Gorakhpur: manual, semi-automatic and fully automatic machines, with installation, operator training and after-sales support. Visit our Machinery page or call +91 98897 33153 for a quotation.",
  },
  {
    q: "How is your agarbatti manufactured in Gorakhpur?",
    a: "Our incense sticks are produced at a state-of-the-art manufacturing facility in Gorakhpur using modern agarbatti machinery combined with traditional perfuming techniques, ensuring consistent quality, mild aroma and long-lasting fragrance.",
  },
  {
    q: "Can I become a Shree Ansh Agarbatti distributor or buy wholesale?",
    a: "Yes. We welcome distributors, wholesalers and retailers across India. We offer wholesale pricing and reliable supply. Reach out via our contact page or call +91 98897 33153 to discuss distribution in your region.",
  },
  {
    q: "What varieties of incense sticks do you offer?",
    a: "We currently offer 35+ varieties across three collections (Classic, Premium and Standard) spanning floral, oriental, woody, premium, cosmetic and florabatti fragrance undertones.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const testimonials = [
  {
    quote:
      "The Shree Royal fragrance fills the whole house during morning aarti. We haven't switched brands in years.",
    name: "Sunita Devi",
    role: "Homemaker, Gorakhpur",
    featured: true,
  },
  {
    quote:
      "Mild, long-lasting and never overpowering. Customers at my store ask for Shree Ansh by name.",
    name: "Rajesh Gupta",
    role: "Retailer, Lucknow",
  },
  {
    quote: "Their premium collection is my go-to for gifting every Diwali.",
    name: "Meera Shah",
    role: "Customer, Varanasi",
  },
];

const Home = () => {
  const reduce = useReducedMotion();
  const railRef = useRef(null);
  const craftRef = useRef(null);

  /* Scroll-linked parallax inside the craft image frame */
  const { scrollYProgress: craftProgress } = useScroll({
    target: craftRef,
    offset: ["start end", "end start"],
  });
  const craftY = useTransform(
    craftProgress,
    [0, 1],
    reduce ? [0, 0] : [-36, 36]
  );

  const premium = productData.find((c) => c.category === "Premium");
  const classic = productData.find((c) => c.category === "Classic");
  const standard = productData.find((c) => c.category === "Standard");
  const bestsellers = premium ? premium.img.slice(1) : [];

  const scrollRail = (dir) => {
    railRef.current?.scrollBy({ left: dir * 520, behavior: "smooth" });
  };

  return (
    <div id="Home">
      <Seo
        title="Shree Ansh Agarbatti | Best Agarbatti Brand & Manufacturer in Gorakhpur"
        description="Shree Ansh Agarbatti is the best agarbatti brand and manufacturer in Gorakhpur. 35+ varieties of premium perfumed incense sticks. Buy in Gorakhpur at Gola Bazar or become a distributor."
        path="/"
        jsonLd={faqJsonLd}
      />
      <Hero />

      {/* ---------- Trust stats ---------- */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto grid max-w-page grid-cols-2 divide-stone-200 px-6 py-14 sm:px-10 lg:grid-cols-4 lg:divide-x lg:px-14">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              {...reveal(reduce, i * 0.08)}
              className="px-4 py-4 text-center lg:py-0"
            >
              <div className="font-display text-5xl font-semibold text-stone-900 lg:text-6xl">
                {s.word ? (
                  <span className="text-4xl italic lg:text-5xl">{s.word}</span>
                ) : (
                  <CountUp to={s.to} suffix={s.suffix} />
                )}
              </div>
              <div className="mt-2 text-[13px] font-medium text-stone-500">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- Collections ---------- */}
      <section
        id="Category"
        className="mx-auto max-w-page px-6 py-24 sm:px-10 lg:px-14"
      >
        <motion.div {...reveal(reduce)} className="max-w-2xl">
          <h2 className="font-display text-4xl font-medium tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
            Our Collections
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Three ranges, one promise: magnificent, mild aromas that last.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr]">
          {/* Featured: Premium */}
          <motion.div {...reveal(reduce)} className="md:row-span-2">
            <Link
              to="/products"
              className="group relative flex h-full min-h-[460px] flex-col overflow-hidden rounded-3xl bg-gradient-to-b from-stone-100 to-stone-200/70 ring-1 ring-stone-200 transition-all duration-500 hover:shadow-[0_32px_64px_-24px_rgba(28,25,23,0.25)] hover:ring-stone-300"
            >
              <span className="absolute left-7 top-6 font-display text-xl italic text-stone-400">
                01
              </span>
              <span className="absolute right-6 top-6 rounded-full bg-brand px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white">
                Flagship
              </span>
              <div className="flex flex-1 items-center justify-center p-12 pt-16">
                <img
                  src={premium?.img?.[0]?.imgURL}
                  alt="Premium collection"
                  loading="lazy"
                  className="max-h-[320px] w-auto object-contain drop-shadow-xl transition-transform duration-700 ease-out group-hover:scale-[1.06] group-hover:-rotate-1"
                />
              </div>
              <div className="flex items-end justify-between bg-white/70 px-8 py-7 backdrop-blur-sm">
                <div>
                  <h3 className="font-display text-3xl font-semibold text-stone-900">
                    Premium
                  </h3>
                  <p className="mt-1.5 text-sm text-stone-500">
                    {categoryCopy.Premium}
                  </p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone-900 text-white transition-all duration-300 group-hover:bg-brand">
                  <ArrowForwardIcon fontSize="small" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Classic + Standard */}
          {[classic, standard].map((cat, i) => (
            <motion.div key={cat?.id} {...reveal(reduce, 0.1 + i * 0.1)}>
              <Link
                to="/products"
                className="group relative flex h-full items-center gap-7 overflow-hidden rounded-3xl bg-white p-7 ring-1 ring-stone-200 transition-all duration-500 hover:shadow-[0_24px_48px_-20px_rgba(28,25,23,0.2)] hover:ring-stone-300"
              >
                <span className="absolute left-7 top-5 font-display text-lg italic text-stone-300">
                  0{i + 2}
                </span>
                <div className="flex h-40 w-40 shrink-0 items-center justify-center rounded-2xl bg-stone-100 p-4 transition-colors duration-500 group-hover:bg-stone-200/70">
                  <img
                    src={cat?.img?.[0]?.imgURL}
                    alt={`${cat?.category} collection`}
                    loading="lazy"
                    className="max-h-full w-auto object-contain transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                  />
                </div>
                <div className="min-w-0 pt-4">
                  <h3 className="font-display text-2xl font-semibold text-stone-900 sm:text-3xl">
                    {cat?.category}
                  </h3>
                  <p className="mt-1.5 text-sm text-stone-500">
                    {categoryCopy[cat?.category]}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    View range
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                      &#8594;
                    </span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- Craft story ---------- */}
      <section id="About" className="overflow-hidden bg-white py-24">
        <div className="mx-auto grid max-w-page grid-cols-1 items-center gap-14 px-6 sm:px-10 lg:grid-cols-12 lg:px-14">
          <motion.div
            ref={craftRef}
            {...reveal(reduce)}
            className="relative lg:col-span-6"
          >
            {/* Offset frame */}
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-3xl border-2 border-stone-200 lg:block"
            />
            <div className="relative">
              <div className="h-[440px] overflow-hidden rounded-3xl">
                <motion.div style={{ y: craftY }} className="-my-10">
                  <ImageWithShimmer
                    src="https://res.cloudinary.com/dogqvcvs4/image/upload/f_auto,q_auto/v1/public/images/Gallery/nkd5jtsotg182nq8efl2"
                    alt="Inside the Shree Ansh workshop"
                    width="100%"
                    height="520px"
                    borderRadius="0px"
                    objectFit="cover"
                  />
                </motion.div>
              </div>
              {/* Floating craft badge */}
              <div className="absolute -bottom-6 left-6 rounded-2xl bg-smoke-950 px-6 py-5 shadow-2xl sm:left-10">
                <div className="font-display text-xl font-semibold italic text-ember">
                  Handcrafted
                </div>
                <div className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.16em] text-stone-400">
                  Gola Bazar &middot; Gorakhpur
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...reveal(reduce, 0.15)} className="lg:col-span-6 lg:pl-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Our craft
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
              Crafted the way{" "}
              <span className="italic leading-[1.1]">tradition</span> intended
            </h2>
            <p className="mt-7 max-w-[58ch] text-lg leading-relaxed text-stone-600">
              Shree Ansh Agarbatti manufactures perfumed incense at our
              state-of-the-art facility in Gorakhpur. Each stick is rolled with
              utmost care, created to make every prayer more pure and divine.
            </p>
            <Link
              to="/about-us"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-stone-900 px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-brand active:scale-[0.97]"
            >
              Our Story
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                &#8594;
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ---------- Fragrance undertones marquee ---------- */}
      <section
        aria-label="Fragrance undertones"
        className="overflow-hidden border-y border-stone-200 bg-stone-50 py-10"
      >
        <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
          {[...undertones, ...undertones, ...undertones, ...undertones].map(
            (note, i) => (
              <span key={i} className="flex items-center gap-10">
                <span className="font-display text-4xl font-medium italic text-stone-800 sm:text-5xl">
                  {note}
                </span>
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-brand/60"
                />
              </span>
            )
          )}
        </div>
      </section>

      {/* ---------- Bestsellers rail ---------- */}
      <section className="mx-auto max-w-page px-6 py-24 sm:px-10 lg:px-14">
        <motion.div
          {...reveal(reduce)}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <h2 className="font-display text-4xl font-medium tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
              Customer Favourites
            </h2>
            <p className="mt-3 text-lg text-stone-600">
              The premium picks our customers come back for.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollRail(-1)}
              aria-label="Scroll favourites left"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-stone-700 ring-1 ring-stone-300 transition hover:bg-stone-900 hover:text-white hover:ring-stone-900 active:scale-95"
            >
              <ArrowBackIcon fontSize="small" />
            </button>
            <button
              onClick={() => scrollRail(1)}
              aria-label="Scroll favourites right"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-stone-700 ring-1 ring-stone-300 transition hover:bg-stone-900 hover:text-white hover:ring-stone-900 active:scale-95"
            >
              <ArrowForwardIcon fontSize="small" />
            </button>
          </div>
        </motion.div>

        <div
          ref={railRef}
          className="no-scrollbar -mx-2 mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-2 pb-4"
        >
          {bestsellers.map((img, i) => (
            <motion.div
              key={img.id}
              {...reveal(reduce, Math.min(i * 0.07, 0.35))}
              className="w-[248px] shrink-0 snap-start"
            >
              <ProductCardWithShimmer img={img} />
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:gap-3"
          >
            Explore Products <span>&#8594;</span>
          </Link>
        </div>
      </section>

      {/* ---------- Testimonials ---------- */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-page px-6 sm:px-10 lg:px-14">
          <motion.h2
            {...reveal(reduce)}
            className="font-display text-4xl font-medium tracking-tight text-stone-900 sm:text-5xl lg:text-6xl"
          >
            Loved across <span className="italic">India</span>
          </motion.h2>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Featured quote */}
            <motion.figure
              {...reveal(reduce)}
              className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-smoke-950 p-10 text-stone-100 lg:col-span-7"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 50% at 85% 10%, rgba(240,176,63,0.15), transparent 70%)",
                }}
              />
              <FormatQuoteIcon
                className="rotate-180 text-ember"
                sx={{ fontSize: 44 }}
              />
              <blockquote className="relative mt-5 font-display text-2xl font-medium leading-snug text-stone-50 sm:text-3xl">
                {testimonials[0].quote}
              </blockquote>
              <figcaption className="relative mt-8 flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand font-display text-lg font-semibold text-white">
                  {testimonials[0].name.charAt(0)}
                </span>
                <div>
                  <div className="text-sm font-semibold text-stone-100">
                    {testimonials[0].name}
                  </div>
                  <div className="text-xs text-stone-400">
                    {testimonials[0].role}
                  </div>
                </div>
              </figcaption>
            </motion.figure>

            {/* Two stacked quotes */}
            <div className="grid gap-6 lg:col-span-5">
              {testimonials.slice(1).map((t, i) => (
                <motion.figure
                  key={t.name}
                  {...reveal(reduce, 0.12 + i * 0.1)}
                  className="flex flex-col justify-between rounded-3xl bg-stone-50 p-8 ring-1 ring-stone-200"
                >
                  <blockquote className="text-base leading-relaxed text-stone-700">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3.5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-900 font-display text-base font-semibold text-white">
                      {t.name.charAt(0)}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-stone-900">
                        {t.name}
                      </div>
                      <div className="text-xs text-stone-500">{t.role}</div>
                    </div>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Gallery ---------- */}
      <section id="Gallery" className="py-24">
        <div className="mx-auto max-w-page px-6 sm:px-10 lg:px-14">
          <motion.div
            {...reveal(reduce)}
            className="flex flex-wrap items-end justify-between gap-4"
          >
            <h2 className="font-display text-4xl font-medium tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
              From Our World
            </h2>
          </motion.div>
        </div>
        <div className="mt-10">
          <GalleryCarousel />
        </div>
      </section>

      {/* ---------- Machinery teaser ---------- */}
      <section className="mx-auto max-w-page px-6 pb-24 sm:px-10 lg:px-14">
        <motion.div
          {...reveal(reduce)}
          className="relative overflow-hidden rounded-3xl bg-smoke-950 px-8 py-14 text-stone-100 sm:px-12 lg:px-16"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 50% 70% at 95% 50%, rgba(240,176,63,0.18), transparent 70%)",
            }}
          />
          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember">
                Start your own business
              </p>
              <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-stone-50 sm:text-5xl">
                We also sell agarbatti{" "}
                <span className="italic leading-[1.1] text-ember">
                  making machines
                </span>
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-stone-400">
                Manual, semi-automatic and fully automatic machines from our
                Gorakhpur facility, with installation, training and
                after-sales support included.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link
                to="/machinery"
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(233,46,55,0.55)] transition duration-300 hover:bg-brand-dark active:scale-[0.97]"
              >
                Explore Machinery
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  &#8594;
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-page grid-cols-1 gap-12 px-6 sm:px-10 lg:grid-cols-12 lg:px-14">
          <motion.div {...reveal(reduce)} className="lg:col-span-4">
            <h2 className="font-display text-4xl font-medium tracking-tight text-stone-900 sm:text-5xl">
              Common <span className="italic">questions</span>
            </h2>
            <p className="mt-4 text-stone-600">
              Everything about buying, stocking and burning Shree Ansh
              Agarbatti.
            </p>
          </motion.div>
          <motion.div {...reveal(reduce, 0.1)} className="lg:col-span-8">
            <FaqAccordion faqs={faqs} />
          </motion.div>
        </div>
      </section>

      {/* ---------- B2B CTA band ---------- */}
      <section className="relative overflow-hidden bg-smoke-950 py-24 text-stone-100">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 60% at 50% 110%, rgba(233,46,55,0.25), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-page px-6 text-center sm:px-10 lg:px-14">
          <motion.h2
            {...reveal(reduce)}
            className="mx-auto max-w-3xl font-display text-4xl font-medium tracking-tight text-stone-50 sm:text-5xl lg:text-6xl"
          >
            Bring Shree Ansh to{" "}
            <span className="italic leading-[1.1] text-ember">your shelves</span>
          </motion.h2>
          <motion.p
            {...reveal(reduce, 0.1)}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-stone-400"
          >
            Wholesale pricing, reliable supply and a range your customers
            already trust.
          </motion.p>
          <motion.div {...reveal(reduce, 0.2)} className="mt-10">
            <Link
              to="/contact-us"
              className="inline-block rounded-full bg-brand px-10 py-4 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(233,46,55,0.6)] transition duration-300 hover:bg-brand-dark hover:shadow-[0_12px_40px_-8px_rgba(233,46,55,0.8)] active:scale-[0.97]"
            >
              Business With Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
