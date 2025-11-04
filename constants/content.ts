
import type { AppContent } from '../types';
import { NutritionIcon, HabitIcon, HealthIcon } from '../components/Icons';

// --- GLOBAL VARIABLES ---
const LOGO_URL = 'https://picsum.photos/seed/furlablogo/120/40';
const APP_STORE_LINK = 'https://apps.apple.com';
const PLAY_STORE_LINK = 'https://play.google.com';
const CONTACT_EMAIL = 'hello@furlab.com';

const BRAND_IMAGES = [
  'https://picsum.photos/seed/furlabhero/600/800', // hero
  'https://picsum.photos/seed/furlabdash/800/600', // dashboard
  'https://picsum.photos/seed/furlabnutrition/800/600', // nutrition
  'https://picsum.photos/seed/furlabclarified/800/600', // nutrition clarified
];

// --- CONTENT OBJECT ---
export const content: AppContent = {
  home: {
    hero: {
      headline: "All-in-one pet wellness, made simple.",
      subhead: "Track nutrition, habits, and health reminders—without the guesswork. Our AI pet wellness app gives you clarity and confidence.",
      ctas: [
        { label: "Get Furlab", url: "/download", variant: "primary", type: 'link' },
        { label: "Learn More", url: "/features", variant: "secondary", type: 'link' },
      ],
      image: BRAND_IMAGES[0]
    },
    features: [
      { "icon": NutritionIcon, "title": "Smart Nutrition", "benefit": "Scan pet food labels and get instant AI pet nutrition analysis and personalized meal guidance." },
      { "icon": HabitIcon, "title": "Habit Tracking", "benefit": "Daily logs for walks, medication, and playtime are kept neatly in one place." },
      { "icon": HealthIcon, "title": "Health Reminders", "benefit": "Never miss vet checkups, important refills, or vaccine appointments again." }
    ],
    testimonials: [
      { "quote": "Furlab turned chaos into calm for our two pups. The AI-powered insights are a game-changer.", "author": "Marisol R.", "role": "Dog mom of 2", "avatar": "https://i.pravatar.cc/150?u=marisol" },
      { "quote": "I finally feel proactive, not reactive, about my cat’s health. It's like having a wellness expert in my pocket.", "author": "Devon S.", "role": "Cat parent", "avatar": "https://i.pravatar.cc/150?u=devon" }
    ],
    screenshots: [
      { "image": BRAND_IMAGES[1], "alt": "Furlab app dashboard showing a pet's daily activity summary." },
      { "image": BRAND_IMAGES[2], "alt": "The nutrition analysis view in the Furlab app with a food score." }
    ]
  },
  features_page: {
    sections: [
      { "title": "Nutrition, clarified", "description": "Stop guessing. Our AI reads pet food labels, suggests ideal portions, and adapts to your pet’s unique health goals, making smart nutrition effortless.", "screenshot": BRAND_IMAGES[3] },
      { "title": "Habits you can actually keep", "description": "Consistency is key to wellness. Our simple logs and gentle nudges help you build healthy routines for feeding, exercise, and medication without the stress.", "screenshot": "https://picsum.photos/seed/furlabhabits/800/600" }
    ]
  },
  blog: {
    posts: [
      {
        "title": "How to calm an anxious dog (daily routines that work)",
        "slug": "calm-anxious-dog",
        "summary": "Discover practical steps and gentle, consistent routines that can help create calmer days for you and your anxious companion.",
        "body": "## Daily structure is your best friend\nAnxious dogs thrive on predictability. Establishing a consistent daily routine can significantly reduce stress and anxiety. This doesn't mean your schedule has to be rigid, but key events should happen around the same time each day.\n\n## Mental stimulation over intense exercise\nWhile physical exercise is important, over-exercising a stressed dog can sometimes increase cortisol levels. Instead, focus on mentally tiring activities. Short walks with lots of sniffing opportunities, puzzle feeders, and scent work games are fantastic ways to engage their brain and naturally calm them down. Using a dog care app can help track these activities easily.\n\n## Create a safe space\nEnsure your dog has a designated 'safe zone'—a crate, a bed, or a quiet corner where they are never bothered. This space should be associated with positive things, like a special chew toy or a comfy blanket. It gives them a place to retreat to when they feel overwhelmed.",
        "cover_image": "https://picsum.photos/seed/dogcalm/1200/630",
        "tags": ["behavior", "dogs"],
        "author": "Furlab Team",
        "published_at": "2025-10-01",
        "seo": { "title": "Calm an Anxious Dog With Daily Routines | Furlab", "description": "Learn evidence-based daily routines and practical tips to reduce your dog's anxiety and build a calmer, happier life together.", "og_image": "https://picsum.photos/seed/dogcalm/1200/630" }
      },
      {
        "title": "Senior cat nutrition: what to adjust and when",
        "slug": "senior-cat-nutrition",
        "summary": "As your feline friend ages, their dietary needs change. Learn about the small adjustments that can make a big difference in their comfort and health.",
        "body": "## Focus on hydration and digestibility\nOlder cats are more prone to dehydration and may have more sensitive digestive systems. Switching to a high-quality wet food is one of the best changes you can make. It provides essential moisture and is often easier to digest than dry kibble.\n\n## Adjust protein and calorie intake\nWork closely with your vet to determine the right calorie count for your senior cat to maintain a healthy weight. While protein is still crucial for muscle mass, the quality of the protein becomes even more important. Your vet can recommend a diet that supports their aging body without taxing their kidneys. Tracking their intake and reactions to diet shifts in a wellness for pets app is a great way to monitor their progress.",
        "cover_image": "https://picsum.photos/seed/catnutrition/1200/630",
        "tags": ["nutrition", "cats"],
        "author": "Furlab Team",
        "published_at": "2025-09-15",
        "seo": { "title": "A Guide to Senior Cat Nutrition | Furlab", "description": "Discover key diet adjustments for hydration, protein, and calorie intake to support the health and wellness of your senior cat.", "og_image": "https://picsum.photos/seed/catnutrition/1200/630" }
      }
    ]
  },
  contact: {
    faqs: [
      { "q": "Which pets does Furlab support?", "a": "Furlab is currently optimized for dogs and cats. We're actively working on expanding our AI models to support more species soon!" },
      { "q": "Does Furlab replace my vet?", "a": "Absolutely not. Furlab is a tool to help you track your pet's wellness and organize their information. It empowers preventive care but is not a substitute for professional veterinary advice. Always consult your vet for medical decisions." },
      { "q": "Is my pet's data secure?", "a": "Yes, we take data privacy and security very seriously. All your pet's information is encrypted and stored securely. Please review our Privacy Policy for more details." }
    ]
  },
  common: {
    header_cta_label: "Get the App",
    features_cta_label: "Download the App"
  }
};

export const siteConfig = {
    logoUrl: LOGO_URL,
    appStoreLink: APP_STORE_LINK,
    playStoreLink: PLAY_STORE_LINK,
    contactEmail: CONTACT_EMAIL,
    brandName: "Furlab",
    siteUrl: "https://www.furlab.com"
};