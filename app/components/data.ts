import { IconType } from "react-icons";
import {
  FaYoutube,
  FaVideo,
  FaLayerGroup,
  FaUserCircle,
  FaHistory,
  FaList,
  FaClock,
  FaThumbsUp,
  FaFire,
  FaShoppingBag,
  FaMusic,
  FaFilm,
  FaBroadcastTower,
  FaGamepad,
  FaNewspaper,
  FaBasketballBall,
  FaGraduationCap,
  FaTshirt,
  FaPodcast,
  FaCog,
  FaFlag,
  FaQuestionCircle,
  FaCommentAlt,
  FaChild,
} from "react-icons/fa";
import { SiYoutubetv, SiYoutubemusic } from "react-icons/si";

interface SidebarItem {
  icon: IconType;
  text: string;
  className?: string;
}

interface Subscription {
  name: string;
  logo: string;
  status?: string;
}

export const mainNavigation: SidebarItem[] = [
  { icon: FaYoutube, text: "YouTube", className: "text-red-600 text-2xl" },
  { icon: FaVideo, text: "Shorts" },
  { icon: FaLayerGroup, text: "Subscriptions" },
];

export const youSection: SidebarItem[] = [
  { icon: FaUserCircle, text: "Your channel" },
  { icon: FaHistory, text: "History" },
  { icon: FaList, text: "Playlists" },
  { icon: FaVideo, text: "Your videos" },
  { icon: FaClock, text: "Watch later" },
  { icon: FaThumbsUp, text: "Liked videos" },
];

export const subscriptions: Subscription[] = [
  {
    name: "Chelsea Football...",
    logo: "https://placehold.co/24x24",
    status: "text-red-600",
  },
  {
    name: "TapSwap Official",
    logo: "https://placehold.co/24x24",
    status: "text-red-600",
  },
  { name: "OOP", logo: "https://placehold.co/24x24", status: "text-blue-500" },
  { name: "Patrick Spiegel", logo: "https://placehold.co/24x24" },
  {
    name: "Greg Isenberg",
    logo: "https://placehold.co/24x24",
    status: "text-blue-500",
  },
  { name: "Fabrizio Romano", logo: "https://placehold.co/24x24" },
  {
    name: "ElhadjTv",
    logo: "https://placehold.co/24x24",
    status: "text-blue-500",
  },
];

export const exploreSection: SidebarItem[] = [
  { icon: FaFire, text: "Trending" },
  { icon: FaShoppingBag, text: "Shopping" },
  { icon: FaMusic, text: "Music" },
  { icon: FaFilm, text: "Movies & TV" },
  { icon: FaBroadcastTower, text: "Live" },
  { icon: FaGamepad, text: "Gaming" },
  { icon: FaNewspaper, text: "News" },
  { icon: FaBasketballBall, text: "Sports" },
  { icon: FaGraduationCap, text: "Courses" },
  { icon: FaTshirt, text: "Fashion & Beauty" },
  { icon: FaPodcast, text: "Podcasts" },
  { icon: FaGamepad, text: "Playables" },
];

export const moreFromYoutube: SidebarItem[] = [
  { icon: FaYoutube, text: "YouTube Premium", className: "text-red-600" },
  { icon: FaVideo, text: "YouTube Studio", className: "text-red-600" },
  { icon: SiYoutubetv, text: "YouTube TV", className: "text-red-600" },
  { icon: SiYoutubemusic, text: "YouTube Music", className: "text-red-600" },
  { icon: FaChild, text: "YouTube Kids", className: "text-red-600" },
];

export const settingsSection: SidebarItem[] = [
  { icon: FaCog, text: "Settings" },
  { icon: FaFlag, text: "Report history" },
  { icon: FaQuestionCircle, text: "Help" },
  { icon: FaCommentAlt, text: "Send feedback" },
];

export const footerInfo: string[] = [
  "About Press Copyright",
  "Contact us Creators",
  "Advertise Developers",
  "Terms Privacy Policy & Safety",
  "How YouTube works",
  "Test new features",
  "NFL Sunday Ticket",
  "© 2024 Google LLC",
];

// ... (existing code)

interface Video {
  thumbnail: string;
  title: string;
  channel: string;
  views: string;
  uploadTime: string;
}

export const videos: Video[] = [
  {
    thumbnail: "https://i.ytimg.com/vi/1nB6M6h37yM/maxresdefault.jpg",
    title: "Most Entertaining Games Under Thomas Tuchel | Part 2",
    channel: "RDC Productions",
    views: "187K",
    uploadTime: "1 year ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/K_0q9p-0r58/maxresdefault.jpg",
    title: "How to become a solopreneur (3 $1M+ startup ideas)",
    channel: "Greg Isenberg",
    views: "15K",
    uploadTime: "2 days ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/kL0OqD38q0w/maxresdefault.jpg",
    title:
      "Build a File Storage App with Role Based Authorization (Next.js, Shadcn, Typescript)",
    channel: "Web Dev Cody",
    views: "166K",
    uploadTime: "6 months ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/1nB6M6h37yM/maxresdefault.jpg",
    title: "Most Entertaining Games Under Thomas Tuchel | Part 2",
    channel: "RDC Productions",
    views: "187K",
    uploadTime: "1 year ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/K_0q9p-0r58/maxresdefault.jpg",
    title: "How to become a solopreneur (3 $1M+ startup ideas)",
    channel: "Greg Isenberg",
    views: "15K",
    uploadTime: "2 days ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/kL0OqD38q0w/maxresdefault.jpg",
    title:
      "Build a File Storage App with Role Based Authorization (Next.js, Shadcn, Typescript)",
    channel: "Web Dev Cody",
    views: "166K",
    uploadTime: "6 months ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/1nB6M6h37yM/maxresdefault.jpg",
    title: "Most Entertaining Games Under Thomas Tuchel | Part 2",
    channel: "RDC Productions",
    views: "187K",
    uploadTime: "1 year ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/K_0q9p-0r58/maxresdefault.jpg",
    title: "How to become a solopreneur (3 $1M+ startup ideas)",
    channel: "Greg Isenberg",
    views: "15K",
    uploadTime: "2 days ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/kL0OqD38q0w/maxresdefault.jpg",
    title:
      "Build a File Storage App with Role Based Authorization (Next.js, Shadcn, Typescript)",
    channel: "Web Dev Cody",
    views: "166K",
    uploadTime: "6 months ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/1nB6M6h37yM/maxresdefault.jpg",
    title: "Most Entertaining Games Under Thomas Tuchel | Part 2",
    channel: "RDC Productions",
    views: "187K",
    uploadTime: "1 year ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/K_0q9p-0r58/maxresdefault.jpg",
    title: "How to become a solopreneur (3 $1M+ startup ideas)",
    channel: "Greg Isenberg",
    views: "15K",
    uploadTime: "2 days ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/kL0OqD38q0w/maxresdefault.jpg",
    title:
      "Build a File Storage App with Role Based Authorization (Next.js, Shadcn, Typescript)",
    channel: "Web Dev Cody",
    views: "166K",
    uploadTime: "6 months ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/1nB6M6h37yM/maxresdefault.jpg",
    title: "Most Entertaining Games Under Thomas Tuchel | Part 2",
    channel: "RDC Productions",
    views: "187K",
    uploadTime: "1 year ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/K_0q9p-0r58/maxresdefault.jpg",
    title: "How to become a solopreneur (3 $1M+ startup ideas)",
    channel: "Greg Isenberg",
    views: "15K",
    uploadTime: "2 days ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/kL0OqD38q0w/maxresdefault.jpg",
    title:
      "Build a File Storage App with Role Based Authorization (Next.js, Shadcn, Typescript)",
    channel: "Web Dev Cody",
    views: "166K",
    uploadTime: "6 months ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/1nB6M6h37yM/maxresdefault.jpg",
    title: "Most Entertaining Games Under Thomas Tuchel | Part 2",
    channel: "RDC Productions",
    views: "187K",
    uploadTime: "1 year ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/K_0q9p-0r58/maxresdefault.jpg",
    title: "How to become a solopreneur (3 $1M+ startup ideas)",
    channel: "Greg Isenberg",
    views: "15K",
    uploadTime: "2 days ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/kL0OqD38q0w/maxresdefault.jpg",
    title:
      "Build a File Storage App with Role Based Authorization (Next.js, Shadcn, Typescript)",
    channel: "Web Dev Cody",
    views: "166K",
    uploadTime: "6 months ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/1nB6M6h37yM/maxresdefault.jpg",
    title: "Most Entertaining Games Under Thomas Tuchel | Part 2",
    channel: "RDC Productions",
    views: "187K",
    uploadTime: "1 year ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/K_0q9p-0r58/maxresdefault.jpg",
    title: "How to become a solopreneur (3 $1M+ startup ideas)",
    channel: "Greg Isenberg",
    views: "15K",
    uploadTime: "2 days ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/kL0OqD38q0w/maxresdefault.jpg",
    title:
      "Build a File Storage App with Role Based Authorization (Next.js, Shadcn, Typescript)",
    channel: "Web Dev Cody",
    views: "166K",
    uploadTime: "6 months ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/1nB6M6h37yM/maxresdefault.jpg",
    title: "Most Entertaining Games Under Thomas Tuchel | Part 2",
    channel: "RDC Productions",
    views: "187K",
    uploadTime: "1 year ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/K_0q9p-0r58/maxresdefault.jpg",
    title: "How to become a solopreneur (3 $1M+ startup ideas)",
    channel: "Greg Isenberg",
    views: "15K",
    uploadTime: "2 days ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/kL0OqD38q0w/maxresdefault.jpg",
    title:
      "Build a File Storage App with Role Based Authorization (Next.js, Shadcn, Typescript)",
    channel: "Web Dev Cody",
    views: "166K",
    uploadTime: "6 months ago",
  },
];
