import type { LucideIcon } from "lucide-react";
import {
  Shirt,
  WashingMachine,
  Truck,
  Sofa,
  Home,
  Briefcase,
  Sparkles,
  Leaf,
  Smile,
  Heart,
  Award,
  HandHeart,
  Clock,
  Target,
  Tag,
} from "lucide-react";

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const laundryServices: ServiceItem[] = [
  {
    icon: Shirt,
    title: "Laundry & Dry Cleaning",
    description: "Professional care for everyday clothing and delicate garments.",
  },
  {
    icon: WashingMachine,
    title: "Wash & Fold",
    description: "Fresh, clean, and neatly folded laundry, ready when you need it.",
  },
  {
    icon: Truck,
    title: "Pickup & Delivery",
    description: "Convenient laundry pickup and delivery, designed to save you time.",
  },
];

export const cleaningServices: ServiceItem[] = [
  {
    icon: Sofa,
    title: "Sofa & Upholstery Cleaning",
    description: "Professional cleaning for sofas, upholstery, and fabric surfaces.",
  },
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Reliable cleaning that keeps homes fresh, comfortable, and well maintained.",
  },
  {
    icon: Briefcase,
    title: "Office Cleaning",
    description: "Professional cleaning for offices and workspaces of every size.",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Detailed cleaning for spaces that need extra attention and care.",
  },
];

export interface TrustItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const trustItems: TrustItem[] = [
  { icon: Leaf, title: "Quality Care", description: "For your fabrics and spaces." },
  { icon: Smile, title: "Trusted Service", description: "Professional and reliable." },
  { icon: Heart, title: "Attention to Detail", description: "Because every clean matters." },
];

export interface WhyItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const whyChooseUs: WhyItem[] = [
  {
    icon: Award,
    title: "Quality & Professional Service",
    description: "We take pride in delivering dependable, professional results.",
  },
  {
    icon: HandHeart,
    title: "Careful Handling",
    description: "Your clothes and belongings deserve careful attention.",
  },
  {
    icon: Clock,
    title: "Reliable & Convenient",
    description: "We make keeping things clean easier and more convenient.",
  },
  {
    icon: Target,
    title: "Attention to Detail",
    description: "We don't overlook the small things.",
  },
  {
    icon: Tag,
    title: "Affordable Premium Service",
    description: "Professional care without unnecessary complexity.",
  },
  {
    icon: Heart,
    title: "Customer Satisfaction",
    description: "Your satisfaction is always our priority.",
  },
];

export interface Testimonial {
  initials: string;
  color: string;
  name: string;
  copy: string;
}

// NOTE: These are clearly-labeled placeholder testimonials for layout purposes.
// Swap in real customer reviews once they're available.
export const testimonials: Testimonial[] = [
  {
    initials: "SA",
    color: "#5C7F5B",
    name: "Sarah A.",
    copy: "My clothes always come back fresh and perfectly folded. Pickup was right on time.",
  },
  {
    initials: "TM",
    color: "#8A9E76",
    name: "Tunde M.",
    copy: "The pickup and delivery option is a game changer. Super convenient and reliable.",
  },
  {
    initials: "CE",
    color: "#B08A5A",
    name: "Chioma E.",
    copy: "Professional, friendly, and detail-oriented. You can tell they care about quality.",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const CONTACT_EMAIL = "thelaundrycafeco@gmail.com";

export const SERVICE_TYPE_OPTIONS = {
  "Laundry Services": [
    "Laundry & Dry Cleaning",
    "Wash & Fold",
    "Pickup & Delivery",
  ],
  "Cleaning Services": [
    "Sofa & Upholstery Cleaning",
    "Residential Cleaning",
    "Office Cleaning",
    "Deep Cleaning",
  ],
};
