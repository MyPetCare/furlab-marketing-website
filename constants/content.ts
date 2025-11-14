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

// --- RAW CONTENT DATA (JSON) ---
const RAW_CONTENT = {
  "home": {
    "hero": {
      "headline": "All-in-one pet wellness, made simple.",
      "subhead": "Track nutrition, habits, and health reminders—without the guesswork. Our AI pet wellness app gives you clarity and confidence.",
      "ctas": [
        {
          "label": "Get Furlab",
          "url": "/download",
          "variant": "primary",
          "type": "link"
        },
        {
          "label": "Learn More",
          "url": "/features",
          "variant": "secondary",
          "type": "link"
        }
      ],
      "image": "https://res.cloudinary.com/dlmtb2xqp/image/upload/v1763131186/furlab-marketing/Home_1_jn77ej.png"
    },
    "features": [
      {
        "title": "Smart Nutrition",
        "benefit": "Scan pet food labels and get instant AI pet nutrition analysis and personalized meal guidance.",
        "icon": "NutritionIcon"
      },
      {
        "title": "Habit Tracking",
        "benefit": "Daily logs for walks, medication, and playtime are kept neatly in one place.",
        "icon": "NutritionIcon"
      },
      {
        "title": "Health Reminders",
        "benefit": "Never miss vet checkups, important refills, or vaccine appointments again.",
        "icon": "NutritionIcon"
      }
    ],
    "testimonials": [
      {
        "quote": "Furlab turned chaos into calm for our two pups. The AI-powered insights are a game-changer.",
        "author": "Marisol R.",
        "role": "Dog mom of 2",
        "avatar": "https://res.cloudinary.com/dlmtb2xqp/image/upload/v1763131302/furlab-marketing/dog_2_fhns7x.png"
      },
      {
        "quote": "I finally feel proactive, not reactive, about my cat’s health. It's like having a wellness expert in my pocket.",
        "author": "Devon S.",
        "role": "Cat parent",
        "avatar": "https://res.cloudinary.com/dlmtb2xqp/image/upload/v1763131308/furlab-marketing/cat_1_z2a3do.png"
      }
    ],
    "screenshots": [
      {
        "image": "https://res.cloudinary.com/dlmtb2xqp/image/upload/v1763134423/furlab-marketing/Home_2_tntrdw.png",
        "alt": "Furlab app dashboard showing a pet's daily activity summary."
      },
      {
        "image": "https://res.cloudinary.com/dlmtb2xqp/image/upload/v1763134431/furlab-marketing/Home_3_uqvmyt.png",
        "alt": "The nutrition analysis view in the Furlab app with a food score."
      }
    ]
  },
  "features_page": {
    "sections": [
      {
        "title": "Nutrition, clarified",
        "description": "Stop guessing. Our AI reads pet food labels, suggests ideal portions, and adapts to your pet’s unique health goals, making smart nutrition effortless.",
        "screenshot": "https://res.cloudinary.com/dlmtb2xqp/image/upload/v1763134380/furlab-marketing/Features_1_zgpmrn.png"
      },
      {
        "title": "Habits you can actually keep",
        "description": "Consistency is key to wellness. Our simple logs and gentle nudges help you build healthy routines for feeding, exercise, and medication without the stress.",
        "screenshot": "https://res.cloudinary.com/dlmtb2xqp/image/upload/v1763134399/furlab-marketing/Features_2_qxq4bg.png"
      }
    ]
  },
  "blog": {
    "posts": [
      {
        "title": "Dry Matter vs. As-Fed Basis: The Key to Understanding What’s Really in Your Pet’s Food",
        "slug": "dry-matter-vs-as-fed-basis-the-key-to-understanding-whats-really-in-your-pets-food",
        "summary": "Confused by pet food labels? Learn the difference between dry matter and as-fed to decode real nutrition and make smarter choices.",
        "body": "\n# **Dry Matter vs. As-Fed Basis: The Key to Understanding What’s Really in Your Pet’s Food**\n\n### **Intro**\n\nIf you’ve ever compared two pet foods—say, a canned recipe and a kibble—and wondered why their nutrient numbers seem so different, you’re not alone. Those tiny percentages on pet food labels can be misleading if you don’t know one key concept: dry matter vs. as-fed basis.\n\nUnderstanding this difference isn’t just “nutrition math.” It’s about making smarter choices for your furry family. This article breaks down what these terms mean, why they matter, and how you can use them to compare foods accurately and confidently.\n\n---\n\n## **What “As-Fed” Really Means**\n\n**Answer first:** “As-fed” shows what’s in the food before removing moisture—how your pet actually eats it.\n\nEvery pet food label lists nutrients like protein, fat, and fiber on an as-fed basis. That means the numbers include water weight. A canned food that’s 75% moisture might look lower in protein than kibble, but it’s mostly because of the water, not the nutrition.\n\nFor example:\n\n* A wet food may say 10% protein on the label.\n\n* But if it’s 75% moisture, that 10% is part of the remaining 25% solids.\n\n* On a dry matter basis, that’s actually 40% protein (10 ÷ 0.25).\n\nThink of it like comparing smoothies vs. protein powder—you need to remove the water to compare fairly.\n\n---\n\n## **What “Dry Matter” Means—and Why It’s the Real Comparison**\n\n**Answer first:** Dry matter removes water weight, showing the true nutrient density of the food.\n\nWhen veterinarians, nutritionists, or the Association of American Feed Control Officials (AAFCO) evaluate pet food, they use dry matter basis. It reveals how much actual nutrition your pet gets from the food’s solids—protein, fat, vitamins, and minerals.\n\n### **Quick formula:**\n\nDry Matter % \\= 100 \\- Moisture %  \nNutrient on Dry Matter Basis (%) \\= (As-Fed % ÷ Dry Matter %) × 100\n\nSo that 10% protein canned food (with 75% moisture) becomes 40% protein on a dry matter basis. \n\nDry Matter % \\= 100 \\- 75 \\= 25\n\nProtein (DM) \\= (10 ÷ 25\\) × 100 \\= 40%\n\nMeanwhile, a kibble with 25% protein and 10% moisture stays roughly 28% on a dry matter basis. Suddenly, that “low-protein” canned food looks richer than you thought.\n\n---\n\n## **Why the Difference Matters for Your Pet’s Health**\n\n**Answer first:** Comparing on dry matter basis helps you choose the right nutrition for your pet’s lifestyle.\n\nWhen you only look at as-fed labels, it’s easy to misjudge quality. Dry matter tells you the truth—especially when comparing food types:\n\n* Wet vs. Dry Food: Wet foods appear lower in nutrients because of water content. Dry matter comparison levels the field.\n\n* Weight Management: Foods higher in moisture can support satiety with fewer calories.\n\n* Digestive Sensitivity: Some pets thrive on higher-protein, lower-carb diets visible only when using dry matter numbers.\n\n* Veterinary Guidance: Vets often ask for nutrient data on a dry matter basis to tailor diets for conditions like kidney or liver disease.\n\n**Example:**  \n If your senior cat needs higher protein but lower phosphorus, your vet might request dry matter values to compare therapeutic diets accurately.\n\n---\n\n## **How to Calculate It Yourself (It’s Easier Than You Think)**\n\nYou don’t need a lab—just your phone’s calculator.  \n Here’s a simple step-by-step:\n\n1. Find the moisture percentage on your pet food label.\n\n2. Subtract that from 100 to get the dry matter portion.\n\n3. Divide each nutrient’s percentage (protein, fat, fiber) by the dry matter portion.\n\n4. Multiply by 100 to express as a percent.\n\n**Example:**\n\n* Food label: 12% protein, 78% moisture\n\n* Dry matter \\= 100 \\- 78 \\= 22\n\n* Protein (dry matter) \\= (12 ÷ 22\\) × 100 \\= 54.5%\n\nNow you can compare apples to apples between brands or between wet and dry options.\n\n---\n\n## **Common Mistakes Pet Parents Make**\n\nEven savvy pet parents get tripped up by labeling differences. Here are the top three pitfalls:\n\n* Only reading “Guaranteed Analysis,” which usually shows as-fed data, not dry matter.\n\n* Comparing across food types (wet vs. dry) without adjusting for moisture.\n\n* Ignoring fiber or fat conversions, which matter for digestion and energy.\n\nTip: AAFCO’s nutrient profiles are based on dry matter for a reason—it’s the only fair way to compare nutrient adequacy.\n\n---\n\n## **Takeaway**\n\n* “As-fed” \\= nutrients with water included (the way it’s served).\n\n* “Dry matter” \\= nutrients after removing moisture (the fair comparison).\n\n* Always compare foods using dry matter to understand true nutrition.\n\n* This method helps you select diets aligned with your pet’s needs.\n\n---\n\n## **How Furlab Simplifies This for You**\n\nUnderstanding pet nutrition math is powerful—but you don’t have to do it alone.  \nFurlab’s AI-powered nutrition analyzer automatically converts nutrient data into dry matter basis, so you can compare brands, recipes, or feeding plans without the spreadsheet stress.\n\nWhether you’re managing a multi-pet household or just want to feel confident about your dog’s dinner, Furlab helps you make informed, heart-led choices that keep tails wagging and whiskers happy.\n\nTry Furlab to simplify your pet’s health routine—science-backed care, made human.\n\n---\n\n## **FAQ**\n\n**Q1: Why do wet foods look lower in protein than dry foods?**  \n Because wet foods contain much more water. When moisture is removed, their true protein content often matches or exceeds kibble.\n\n**Q2: Is dry matter the same as calorie content?**  \n Not exactly. Dry matter shows nutrient ratios; calories depend on energy density, which varies with ingredients.\n\n**Q3: Do I always need to calculate dry matter?**  \n Not daily—but it’s essential when comparing foods or managing a specific health condition.",
        "cover_image": "https://res.cloudinary.com/dlmtb2xqp/image/upload/v1763134582/furlab-marketing/image1_oa164r.png",
        "tags": [
          "pet nutrition",
          "dry matter vs as-fed",
          "dog food comparison",
          "cat health",
          "Furlab app"
        ],
        "author": "Furlab Team",
        "published_at": "2025-10-01",
        "seo": {
          "title": "Dry Matter vs As-Fed: Decode Your Pet’s Nutrition Like a Pro",
          "description": "Learn how to compare pet foods accurately using dry matter vs as-fed basis. Understand labels, moisture, and make smarter feeding choices with Furlab.",
          "og_image": "https://res.cloudinary.com/dlmtb2xqp/image/upload/v1763134582/furlab-marketing/image1_oa164r.png"
        }
      },
      {
        "title": "Senior cat nutrition: what to adjust and when",
        "slug": "senior-cat-nutrition",
        "summary": "As your feline friend ages, their dietary needs change. Learn about the small adjustments that can make a big difference in their comfort and health.",
        "body": "## Focus on hydration and digestibility\nOlder cats are more prone to dehydration and may have more sensitive digestive systems. Switching to a high-quality wet food is one of the best changes you can make. It provides essential moisture and is often easier to digest than dry kibble.\n\n## Adjust protein and calorie intake\nWork closely with your vet to determine the right calorie count for your senior cat to maintain a healthy weight. While protein is still crucial for muscle mass, the quality of the protein becomes even more important. Your vet can recommend a diet that supports their aging body without taxing their kidneys. Tracking their intake and reactions to diet shifts in a wellness for pets app is a great way to monitor their progress.",
        "cover_image": "https://picsum.photos/seed/catnutrition/1200/630",
        "tags": [
          "nutrition",
          "cats"
        ],
        "author": "Furlab Team",
        "published_at": "2025-09-15",
        "seo": {
          "title": "A Guide to Senior Cat Nutrition | Furlab",
          "description": "Learn how to compare pet foods accurately using dry matter vs as-fed basis. Understand labels, moisture, and make smarter feeding choices with Furlab.",
          "og_image": "https://picsum.photos/seed/catnutrition/1200/630"
        }
      }
    ]
  },
  "contact": {
    "faqs": [
      {
        "q": "Which pets does Furlab support?",
        "a": "Furlab is currently optimized for dogs and cats. We're actively working on expanding our AI models to support more species soon!"
      },
      {
        "q": "Does Furlab replace my vet?",
        "a": "Absolutely not. Furlab is a tool to help you track your pet's wellness and organize their information. It empowers preventive care but is not a substitute for professional veterinary advice. Always consult your vet for medical decisions."
      },
      {
        "q": "Is my pet's data secure?",
        "a": "Yes, we take data privacy and security very seriously. All your pet's information is encrypted and stored securely. Please review our Privacy Policy for more details."
      }
    ]
  },
  "common": {
    "header_cta_label": "Get the App",
    "features_cta_label": "Download the App"
  }
};

// --- ICON MAPPING ---
const iconMap: { [key: string]: any } = {
  'NutritionIcon': NutritionIcon,
  'HabitIcon': HabitIcon,
  'HealthIcon': HealthIcon
};

// --- DESERIALIZE AND EXPORT ---
export const content: AppContent = {
  ...RAW_CONTENT,
  home: {
    ...RAW_CONTENT.home,
    features: RAW_CONTENT.home.features.map((f: any) => ({
      ...f,
      icon: iconMap[f.icon] || NutritionIcon
    }))
  }
};

export const siteConfig = {
    logoUrl: LOGO_URL,
    appStoreLink: APP_STORE_LINK,
    playStoreLink: PLAY_STORE_LINK,
    contactEmail: CONTACT_EMAIL,
    brandName: "Furlab",
    siteUrl: "https://www.furlab.cc"
};
