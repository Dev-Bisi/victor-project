// Free sample clip, used only until real videos are added
const PLACEHOLDER =
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

/*
  HOW TO ADD A REAL VIDEO LATER
  - YouTube:   type: "youtube", src: "VIDEO_ID"
  - Vimeo:     type: "vimeo",   src: "VIDEO_ID"
  - Own file:  type: "file",    src: "/videos/my-film.mp4"
  orientation: "horizontal" for normal videos, "vertical" for phone videos
*/

export const projects = [
  {
    id: 1,
    category: "Wedding Films",
    title: "The Olu & Amara Story",
    year: "2026",
    image: "/images/videography/project-01.jpg",
    link: "/portfolio",
    format: "Cinematic",
    description:
      "A two-day celebration told as a short film: quiet morning preparations, a joyful ceremony and a reception that ran until sunrise.",
    services: ["Wedding Film", "Highlight Reel", "Same-Day Teaser"],
    type: "file",
    src: PLACEHOLDER,
    orientation: "horizontal",
  },
  {
    id: 2,
    category: "Mobile Stories",
    title: "Lagos After Dark",
    year: "2026",
    image: "/images/videography/project-02.jpg",
    link: "/portfolio",
    format: "Mobile",
    description:
      "A vertical, phone-shot portrait of the city's nightlife, made for Instagram and TikTok and edited within the same week.",
    services: ["Mobile Videography", "Social Media Content"],
    type: "file",
    src: PLACEHOLDER,
    orientation: "vertical",
  },
  {
    id: 3,
    category: "Brand Films",
    title: "The Atelier Film",
    year: "2025",
    image: "/images/videography/project-03.jpg",
    link: "/portfolio",
    format: "Cinematic",
    description:
      "A two-minute brand film that follows a fashion atelier from the first sketch to the finished garment.",
    services: ["Brand Film", "Commercial Production"],
    type: "file",
    src: PLACEHOLDER,
    orientation: "horizontal",
  },
  {
    id: 4,
    category: "Event Highlights",
    title: "Night of Lights",
    year: "2025",
    image: "/images/videography/project-04.jpg",
    link: "/portfolio",
    format: "Mobile",
    description:
      "Fast-turnaround highlights from a product launch, delivered online before the party was over.",
    services: ["Mobile Event Coverage", "Social Media Content"],
    type: "file",
    src: PLACEHOLDER,
    orientation: "vertical",
  },
  {
    id: 5,
    category: "Documentary",
    title: "Beyond the Moment",
    year: "2025",
    image: "/images/videography/project-05.jpg",
    link: "/portfolio",
    format: "Cinematic",
    description:
      "A character-driven short documentary about the people behind a community project.",
    services: ["Documentary Film", "Interviews", "Colour Grade"],
    type: "file",
    src: PLACEHOLDER,
    orientation: "horizontal",
  },
];