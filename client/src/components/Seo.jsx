import { useEffect } from "react";

const SITE_URL = "https://www.shreeanshagarbatti.in";

const upsertMeta = (selector, attrs) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
};

const upsertLink = (rel, href) => {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

/**
 * Lightweight per-route SEO manager for the SPA.
 * Updates title, description, canonical, OG/Twitter tags and
 * optionally injects page-specific JSON-LD structured data.
 */
const Seo = ({ title, description, path = "/", jsonLd = null }) => {
  useEffect(() => {
    document.title = title;
    const url = `${SITE_URL}${path}`;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: description,
    });
    upsertLink("canonical", url);

    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: url });
    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: title,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });

    // Page-specific structured data
    const SCRIPT_ID = "seo-page-jsonld";
    document.getElementById(SCRIPT_ID)?.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      document.getElementById(SCRIPT_ID)?.remove();
    };
  }, [title, description, path, jsonLd]);

  return null;
};

export default Seo;
