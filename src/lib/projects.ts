import { images, playStoreLinks } from "@/lib/images";

export const projects = [
  {
    id: "femtrack",
    name: "FemTrack",
    tagline: "Women's Health & Cycle Tracking",
    platform: ["Flutter", "iOS"],
    status: "Live",
    impact: "Empowering 1000+ women",
    color: "#ec4899",
    gradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
    image: images.femtrack,
    problem:
      "Women lacked a unified, privacy-first app to track menstrual cycles, symptoms, and health trends with meaningful insights.",
    solution:
      "Built a cross-platform Flutter app with SwiftUI-inspired UI, offering predictive cycle tracking, mood logging, and encrypted health data storage.",
    tech: ["Flutter", "Firebase", "Riverpod", "Swift", "Health Kit"],
    results: ["1000+ active users", "4.8★ App Store rating", "Featured in 3 health blogs", "Zero data breaches"],
    category: "Health",
    storeUrl: playStoreLinks.femtrack,
  },
  {
    id: "pillowtalk",
    name: "PillowTalk",
    tagline: "AI-Powered Sleep Wellness Platform",
    platform: ["Flutter"],
    status: "Live",
    impact: "Improving sleep for thousands",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
    image: images.pillowtalk,
    problem:
      "Most sleep apps felt clinical and difficult to use. Users needed a calming, beautiful interface with actionable insights.",
    solution:
      "Designed and shipped a Flutter app with AI-generated sleep coaching, guided meditations, ambient soundscapes, and a stunning dark-first UI.",
    tech: ["Flutter", "Dart", "Supabase", "OpenAI API", "Riverpod"],
    results: ["500+ daily active users", "25% avg sleep improvement reported", "4.7★ Play Store", "Featured in ProductHunt"],
    category: "Wellness",
    storeUrl: playStoreLinks.pillowtalk,
  },
  {
    id: "nutrahara",
    name: "Nutrahara",
    tagline: "iOS Nutrition Intelligence App",
    platform: ["iOS"],
    status: "Live",
    impact: "500k+ food database integrated",
    color: "#3b82f6",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
    image: "https://images.unsplash.com/photo-1758786977080-a5e60a3f843c?w=600&q=80",
    problem:
      "Nutrition apps were cluttered and slow. Users on iOS wanted a native-feeling, fast, and beautiful food tracking experience.",
    solution:
      "Built a native SwiftUI app with Apple Health integration, barcode scanning, macro tracking dashboards, and a premium minimal design.",
    tech: ["SwiftUI", "Swift", "Core Data", "HealthKit", "AVFoundation"],
    results: ["Native iOS performance", "4.9★ App Store", "Top 10 in Health category", "Featured by Apple editors"],
    category: "Nutrition",
  },
  {
    id: "aibudget",
    name: "AI Budget Tracker",
    tagline: "Smart Finance with AI Insights",
    platform: ["Flutter"],
    status: "In Progress",
    impact: "Coming Q2 2025",
    color: "#34d399",
    gradient: "linear-gradient(135deg, #34d399 0%, #3b82f6 100%)",
    image: "https://images.unsplash.com/photo-1591467454366-fb32b72b20e9?w=600&q=80",
    problem:
      "People overspend because finance apps don't give real-time, personalized advice — just charts nobody reads.",
    solution:
      "Building a Flutter-first app with AI-powered spending analysis, predictive budgeting, real-time sync, and natural language financial coaching.",
    tech: ["Flutter", "Supabase", "OpenAI", "Plaid API", "Riverpod"],
    results: ["AI-powered insights", "Real-time bank sync", "Multi-currency support", "Launching Q2 2025"],
    category: "Finance",
  },
] as const;

export type Project = (typeof projects)[number];
