import { useEffect } from "react";
import { site } from "../data/site";

// Used when a page doesn't give its own sharing image
const DEFAULT_IMAGE = "/images/videography/hero.jpg";

// Finds a <meta> tag in the page head, or creates it, then sets its content
function setTag(attr, key, content) {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export default function Seo({ title, description, image = DEFAULT_IMAGE }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${site.name}`
      : `${site.name} | Videography`;
    const imageUrl = new URL(image, window.location.origin).href;

    document.title = fullTitle;
    setTag("name", "description", description);

    setTag("property", "og:title", fullTitle);
    setTag("property", "og:description", description);
    setTag("property", "og:type", "website");
    setTag("property", "og:url", window.location.href);
    setTag("property", "og:image", imageUrl);
    setTag("name", "twitter:card", "summary_large_image");
  }, [title, description, image]);

  return null;
}
