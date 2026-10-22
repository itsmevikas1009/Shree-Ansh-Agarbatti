import { motion, useReducedMotion } from "framer-motion";
import Seo from "../components/Seo.jsx";
import { reveal } from "../utils/motion.js";

const AboutUs = () => {
  const reduce = useReducedMotion();

  return (
    <div className="mx-auto max-w-page px-6 py-16 sm:px-10 lg:px-14">
      <Seo
        title="About Us | Agarbatti Manufacturer in Gorakhpur | Shree Ansh Agarbatti"
        description="The story of Shree Ansh Agarbatti, a trusted agarbatti manufacturer in Gorakhpur, Uttar Pradesh, crafting 35+ varieties of perfumed incense with modern machinery and traditional care."
        path="/about-us"
      />
      {/* Intro */}
      <motion.div {...reveal(reduce)} className="max-w-3xl">
        <h1 className="font-display text-5xl font-medium tracking-tight text-stone-900 sm:text-6xl">
          A fragrance born in <span className="italic">Gorakhpur</span>
        </h1>
        <div className="mt-8 space-y-5 leading-relaxed text-stone-600">
          <p>
            Shree Ansh Agarbatti is known for manufacturing perfumed agarbatti.
            It is a name that has earned respect, growing in strength and
            market reach to rank among the finest agarbatti manufacturers in
            India. With state-of-the-art manufacturing facilities located at
            Gorakhpur, we produce a vast range of perfumed incense, with our
            premium flagship collection being the most loved by customers.
          </p>
          <p>
            To make incense more pleasurable and long-lasting, we set out to
            create and supply incense with magnificent, mild aromas at an
            affordable price.
          </p>
          <p>
            We understand what our customers demand and expect. We are a
            customer-driven brand that believes in the spirit of innovation and
            creativity. Each incense stick is created with utmost care, with the
            objective of delivering nothing but the best: currently 35
            varieties across floral, oriental, premium, woody, cosmetic and
            florabatti undertones.
          </p>
        </div>
      </motion.div>

      {/* Founder */}
      <motion.div
        {...reveal(reduce)}
        className="mt-16 overflow-hidden rounded-2xl bg-smoke-950 text-stone-200"
      >
        <div className="flex flex-col items-center gap-8 px-8 py-12 sm:flex-row sm:px-12">
          <img
            src="/images/founder.png"
            alt="Late Mr. Anup Chaurasia, founder of Shree Ansh Agarbatti"
            className="h-32 w-32 shrink-0 rounded-full object-cover ring-2 ring-white/20"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ember">
              In loving memory
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-stone-50">
              Late Mr. Anup Chaurasia
            </h2>
            <p className="mt-3 max-w-xl leading-relaxed text-stone-400">
              Our founder, whose hard work, dedication and dynamism made Shree
              Ansh one of the most trusted and popular agarbatti brands.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Vision + Heritage */}
      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <motion.div
          {...reveal(reduce)}
          className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-stone-200 sm:p-10"
        >
          <h2 className="font-display text-3xl font-semibold text-stone-900">
            Our Vision
          </h2>
          <p className="mt-4 leading-relaxed text-stone-600">
            We envision a future where every Indian household uses Shree Ansh
            Agarbatti to make their prayers more pure and divine. Incense not
            only sanctifies your prayers. It uplifts your mood, calms you down
            and even increases concentration.
          </p>
        </motion.div>

        <motion.div
          {...reveal(reduce)}
          className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-stone-200 sm:p-10"
        >
          <h2 className="font-display text-3xl font-semibold text-stone-900">
            An Ancient Tradition
          </h2>
          <p className="mt-4 leading-relaxed text-stone-600">
            Incense sticks have a long and ancient history. In Hinduism,
            agarbatti is an integral part of most rituals, introducing pleasant
            fragrance and cleansing the air of negative energy. Across homes and
            temples in India, incense is used for worship, aromatherapy,
            meditation and more.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
