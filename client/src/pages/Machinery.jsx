import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Seo from "../components/Seo.jsx";
import FaqAccordion from "../components/FaqAccordion.jsx";
import { reveal } from "../utils/motion.js";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";

const machines = [
  {
    Icon: PrecisionManufacturingOutlinedIcon,
    name: "Manual / Pedal Machines",
    tagline: "Start small, start right",
    points: [
      "Low investment, ideal for home businesses and startups",
      "Simple operation, minimal maintenance",
      "No electricity required",
    ],
  },
  {
    Icon: SettingsSuggestOutlinedIcon,
    name: "Semi-Automatic Machines",
    tagline: "Grow your production",
    points: [
      "Higher output with consistent stick quality",
      "Suited for small and mid-size units",
      "Easy to operate with basic training",
    ],
    featured: true,
  },
  {
    Icon: BoltOutlinedIcon,
    name: "Fully Automatic Machines",
    tagline: "Factory-scale output",
    points: [
      "High-speed continuous production",
      "Uniform sticks with minimal wastage",
      "Best for commercial manufacturing units",
    ],
  },
];

const support = [
  {
    Icon: HandymanOutlinedIcon,
    title: "Installation & setup",
    desc: "We help you install and commission your machine at your unit.",
  },
  {
    Icon: SchoolOutlinedIcon,
    title: "Operator training",
    desc: "Hands-on training so your team produces quality sticks from day one.",
  },
  {
    Icon: Inventory2OutlinedIcon,
    title: "Raw material guidance",
    desc: "Guidance on bamboo sticks, premix powder and perfuming.",
  },
  {
    Icon: SupportAgentOutlinedIcon,
    title: "After-sales support",
    desc: "Spare parts and service support from our Gorakhpur facility.",
  },
];

const faqs = [
  {
    q: "Where can I buy an agarbatti making machine in Gorakhpur?",
    a: "Shree Ansh Agarbatti Co. sells agarbatti making machines directly from Gola Bazar, Gorakhpur, Uttar Pradesh. We supply manual, semi-automatic and fully automatic machines across Gorakhpur, Uttar Pradesh and India. Call +91 98897 33153 for current pricing.",
  },
  {
    q: "Which agarbatti machine is best for starting a small business?",
    a: "For a home or small-scale business, a manual or semi-automatic agarbatti machine is the best starting point: lower investment with good output. As demand grows, you can upgrade to a fully automatic high-speed machine. We help you choose based on your budget and targets.",
  },
  {
    q: "Do you provide training and installation with the machine?",
    a: "Yes. Every machine purchase includes installation support and operator training. We also guide you on raw materials (bamboo sticks, premix powder and perfumes) and provide after-sales service from our Gorakhpur facility.",
  },
  {
    q: "What is the price of an agarbatti making machine?",
    a: "Pricing depends on the machine type (manual, semi-automatic or fully automatic) and its capacity. Contact us at +91 98897 33153 or through our contact form for a current quotation and recommendations for your production goals.",
  },
];

const machineryJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Agarbatti Making Machine",
      description:
        "Manual, semi-automatic and fully automatic agarbatti making machines sold in Gorakhpur, Uttar Pradesh by Shree Ansh Agarbatti Co., with installation, training and after-sales support.",
      brand: { "@type": "Brand", name: "Shree Ansh Agarbatti" },
      category: "Incense Making Machinery",
      offers: {
        "@type": "AggregateOffer",
        availability: "https://schema.org/InStock",
        priceCurrency: "INR",
        seller: { "@id": "https://www.shreeanshagarbatti.in/#business" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

const Machinery = () => {
  const reduce = useReducedMotion();

  return (
    <div>
      <Seo
        title="Agarbatti Making Machine in Gorakhpur: Manual, Semi & Fully Automatic | Shree Ansh"
        description="Buy agarbatti making machines in Gorakhpur: manual, semi-automatic and fully automatic. Installation, operator training, raw material guidance and after-sales support included. Call +91 98897 33153."
        path="/machinery"
        jsonLd={machineryJsonLd}
      />

      {/* Dark header */}
      <section className="relative overflow-hidden bg-smoke-950 py-24 text-stone-100">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 80% 100%, rgba(240,176,63,0.18), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-page px-6 sm:px-10 lg:px-14">
          <motion.h1
            {...reveal(reduce)}
            className="max-w-3xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-stone-50 sm:text-6xl lg:text-7xl"
          >
            Agarbatti making{" "}
            <span className="italic leading-[1.1] text-ember">machinery</span>
          </motion.h1>
          <motion.p
            {...reveal(reduce, 0.12)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-stone-300/90"
          >
            Start or scale your own incense business. We sell machines from our
            Gorakhpur facility, with installation, training and support.
          </motion.p>
          <motion.div {...reveal(reduce, 0.22)} className="mt-9">
            <Link
              to="/contact-us"
              className="inline-block rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(233,46,55,0.55)] transition duration-300 hover:bg-brand-dark active:scale-[0.97]"
            >
              Get a Quotation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Machine types */}
      <section className="mx-auto max-w-page px-6 py-24 sm:px-10 lg:px-14">
        <motion.div {...reveal(reduce)} className="max-w-2xl">
          <h2 className="font-display text-4xl font-medium tracking-tight text-stone-900 sm:text-5xl">
            Choose your scale
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            From a first machine at home to a full production line.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1fr_1.35fr_1fr]">
          {machines.map((m, i) => (
            <motion.div
              key={m.name}
              {...reveal(reduce, i * 0.1)}
              className={`flex flex-col rounded-3xl ring-1 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-20px_rgba(28,25,23,0.22)] ${
                m.featured
                  ? "bg-smoke-950 p-10 text-stone-100 ring-transparent lg:-my-4"
                  : "bg-white p-8 text-stone-900 ring-stone-200"
              }`}
            >
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                  m.featured
                    ? "bg-white/10 text-ember"
                    : "bg-stone-100 text-brand"
                }`}
              >
                <m.Icon />
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold">
                {m.name}
              </h3>
              <p
                className={`mt-1 text-sm font-medium ${
                  m.featured ? "text-ember" : "text-brand"
                }`}
              >
                {m.tagline}
              </p>
              <ul
                className={`mt-6 space-y-3 text-sm leading-relaxed ${
                  m.featured ? "text-stone-300" : "text-stone-600"
                }`}
              >
                {m.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${
                        m.featured ? "bg-ember" : "bg-brand"
                      }`}
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What's included */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-page px-6 sm:px-10 lg:px-14">
          <motion.h2
            {...reveal(reduce)}
            className="font-display text-4xl font-medium tracking-tight text-stone-900 sm:text-5xl"
          >
            Every machine comes with{" "}
            <span className="italic">our support</span>
          </motion.h2>
          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {support.map((s, i) => (
              <motion.div key={s.title} {...reveal(reduce, i * 0.08)}>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-100 text-brand">
                  <s.Icon fontSize="small" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-stone-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-page px-6 py-24 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <motion.div {...reveal(reduce)} className="lg:col-span-4">
            <h2 className="font-display text-4xl font-medium tracking-tight text-stone-900 sm:text-5xl">
              Machinery <span className="italic">questions</span>
            </h2>
            <p className="mt-4 text-stone-600">
              Buying your first machine? We&apos;ll guide you end to end.
            </p>
          </motion.div>
          <motion.div {...reveal(reduce, 0.1)} className="lg:col-span-8">
            <FaqAccordion faqs={faqs} />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-smoke-950 py-20 text-stone-100">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 60% at 50% 110%, rgba(233,46,55,0.22), transparent 70%)",
          }}
        />
        <div className="relative mx-auto flex max-w-page flex-col items-start gap-8 px-6 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14">
          <div>
            <h2 className="font-display text-4xl font-medium tracking-tight text-stone-50 sm:text-5xl">
              Ready to start your unit?
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-stone-400">
              Tell us your budget and production target. We&apos;ll recommend
              the right machine and get you running.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-4">
            <Link
              to="/contact-us"
              className="rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-brand-dark active:scale-[0.97]"
            >
              Get a Quotation
            </Link>
            <a
              href="tel:+919889733153"
              className="rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-stone-200 transition duration-300 hover:border-ember hover:text-white active:scale-[0.97]"
            >
              Call +91 98897 33153
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Machinery;
