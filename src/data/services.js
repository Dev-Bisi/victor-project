import {
  Heart,
  Calendar,
  Briefcase,
  Film,
  Video,
  Share2,
  Zap,
  Smartphone,
} from "lucide-react";

export const serviceGroups = [
  {
    id: "cinematic",
    label: "Professional cameras",
    title: "Cinematic Videography",
    intro:
      "Shot with professional cameras, lenses and lighting for productions that deserve a big-screen feel.",
    services: [
      {
        title: "Wedding Films",
        text: "Your day told as a film, from the quiet moments to the loudest celebrations.",
        icon: Heart,
      },
      {
        title: "Event Videography",
        text: "Conferences, launches, concerts and celebrations captured from every important angle.",
        icon: Calendar,
      },
      {
        title: "Brand Films",
        text: "Stories that show people who your brand is and why it matters.",
        icon: Briefcase,
      },
      {
        title: "Documentary Films",
        text: "Honest, character-driven films that give real stories room to breathe.",
        icon: Film,
      },
      {
        title: "Commercial Video Production",
        text: "Polished adverts and promotional videos, from concept to final edit.",
        icon: Video,
      },
    ],
  },
  {
    id: "mobile",
    label: "Shot on mobile",
    title: "Mobile Videography",
    intro:
      "Vertical-first, fast and authentic films shot on the latest smartphones, made for social media and real-time storytelling.",
    services: [
      {
        title: "Social Media Content",
        text: "Reels, TikToks and Shorts that look great and are ready to post.",
        icon: Share2,
      },
      {
        title: "Mobile Event Coverage",
        text: "Quick-turnaround highlights while the moment is still buzzing.",
        icon: Zap,
      },
      {
        title: "Mobile Brand Stories",
        text: "Natural, behind-the-scenes style stories that feel real and personal.",
        icon: Smartphone,
      },
    ],
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    text: "We understand your vision, story and expectations.",
  },
  {
    number: "02",
    title: "Plan",
    text: "We develop the creative direction and production plan.",
  },
  {
    number: "03",
    title: "Create",
    text: "We capture your moments with intention and precision.",
  },
  {
    number: "04",
    title: "Deliver",
    text: "We carefully edit and deliver your final visual story.",
  },
];