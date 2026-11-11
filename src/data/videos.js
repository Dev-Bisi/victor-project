export const videoCategories = ["All", "Cinematic", "Mobile"];

// Free sample clip, used only until real videos are added
const PLACEHOLDER =
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

/*
  HOW TO ADD A REAL VIDEO LATER
  - YouTube:     type: "youtube", src: "VIDEO_ID"   (the part after v= in the link)
  - Vimeo:       type: "vimeo",   src: "VIDEO_ID"   (the number at the end of the link)
  - Own file:    type: "file",    src: "/videos/my-film.mp4"  (put it in public/videos/)
  orientation: "horizontal" for normal videos, "vertical" for phone videos
*/

export const videos = [
  {
    id: 1,
    title: "The Wedding Film",
    category: "Cinematic",
    label: "Cinematic Wedding Film",
    year: "2026",
    thumbnail: "/images/videography/video-01.jpg",
    type: "file",
    src: PLACEHOLDER,
    orientation: "horizontal",
  },
  {
    id: 2,
    title: "Beyond the Moment",
    category: "Cinematic",
    label: "Cinematic Documentary",
    year: "2025",
    thumbnail: "/images/videography/video-02.jpg",
    type: "file",
    src: PLACEHOLDER,
    orientation: "horizontal",
  },
  {
    id: 3,
    title: "Brand Stories",
    category: "Cinematic",
    label: "Cinematic Brand Film",
    year: "2025",
    thumbnail: "/images/videography/video-03.jpg",
    type: "file",
    src: PLACEHOLDER,
    orientation: "horizontal",
  },
  {
    id: 4,
    title: "Love in Motion",
    category: "Mobile",
    label: "Mobile Love Story",
    year: "2026",
    thumbnail: "/images/videography/video-04.jpg",
    type: "file",
    src: PLACEHOLDER,
    orientation: "vertical",
  },
  {
    id: 5,
    title: "Event Highlights",
    category: "Mobile",
    label: "Mobile Event Highlights",
    year: "2025",
    thumbnail: "/images/videography/video-05.jpg",
    type: "file",
    src: PLACEHOLDER,
    orientation: "vertical",
  },
  {
    id: 6,
    title: "Lagos After Dark",
    category: "Mobile",
    label: "Mobile City Story",
    year: "2026",
    thumbnail: "/images/videography/video-06.jpg",
    type: "file",
    src: PLACEHOLDER,
    orientation: "vertical",
  },
];

export const videoFormats = [
  {
    title: "Cinematic Videography",
    text: "Shot with professional cameras, lenses and lighting, then carefully graded and edited. Best for weddings, brand films, documentaries and anything that deserves a big-screen feel.",
  },
  {
    title: "Mobile Videography",
    text: "Shot on the latest smartphones: vertical-first, fast and authentic. Best for social media, events and stories that need to be seen quickly on Instagram, TikTok and Reels.",
  },
];