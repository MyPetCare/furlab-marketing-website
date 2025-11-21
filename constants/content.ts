import type { AppContent } from '../types';
import { NutritionIcon, HabitIcon, HealthIcon } from '../components/Icons';
import FurlabLogo from '../public/icons/furlab_homepage_icon_240x80.svg';

// --- GLOBAL VARIABLES ---
const LOGO_URL = FurlabLogo;
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
          "label": "Join Waitlist",
          "url": "/waitlist",
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
      "image": "https://res.cloudinary.com/dlmtb2xqp/image/upload/v1763179122/furlab-marketing/Home_1-image-v2_pz9iyj.png"
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
        "title": "No Dumb Questions: Building Vet Confidence as a New Pet Parent",
        "slug": "no-dumb-questions-building-vet-confidence-as-a-new-pet-parent",
        "summary": "There are no dumb questions at the vet. Learn how tracking and preparation turn nervous visits into confident conversations—with Furlab.",
        "body": "You love your new pet—and you want to do everything right. But at the vet’s office, it’s easy to freeze.  \n You forget the questions you meant to ask, worry about sounding clueless, or leave feeling like you missed something important.\n\nYou’re not alone. Every new pet parent struggles to find their voice in those early visits. The truth? Your veterinarian wants your questions.  \n Let’s explore how to build confidence, prepare like a pro, and use simple tracking tools to make every appointment more meaningful—for both of you.\n\n---\n\n## **1\\. Why Vet Communication Feels So Intimidating**\n\n**Answer first:** Many new owners feel uncertain because veterinary care involves unfamiliar terms, quick appointments, and emotional pressure.\n\nVeterinary communication research highlights that clear, empathetic dialogue improves both owner satisfaction and patient outcomes.  \nThe **American Veterinary Medical Association (AVMA)** emphasizes that strong client–vet communication supports trust, compliance, and preventive care success (*AVMA: Communicating with Clients, 2023*).\n\nYour vet isn’t just treating your pet—they’re teaching you how to care better.  \n**Reframe the mindset:** You’re not bothering your vet—you’re partnering with them.\n\n---\n\n## **2\\. The Science of Prepared Pet Parents**\n\n**Answer first:** Preparation builds confidence and improves care outcomes.\n\nAccording to the **American Animal Hospital Association (AAHA) 2019 Canine Life Stage Guidelines**, pets benefit when owners consistently share behavioral, nutritional, and lifestyle data.\n\nPrepared clients help veterinarians identify early warning signs and tailor prevention plans more effectively.\n\n💡 *Pro tip:* Before appointments, use Furlab to track or jot down quick notes:\n\n* How your pet’s energy, appetite, or sleep has changed\n\n* New foods or supplements introduced\n\n* Any changes in stool or water intake\n\nBringing this data turns your visit into a dialogue—not a guessing game.\n\n---\n\n## **3\\. Common Fears (and How to Let Them Go)**\n\n**Fear \\#1: “My question is too small.”**  \nNo question is too small if it affects your peace of mind. Minor issues—like ear scratching or picky eating—can signal early sensitivities or allergies.\n\n**Fear \\#2: “The vet will think I’m overreacting.”**  \nVeterinarians train to interpret subtle changes. Reporting small details helps them track trends and tailor recommendations.\n\n**Fear \\#3: “I won’t remember everything they say.”**  \nThat’s normal. Research on medical communication shows most people forget 40–80% of what they’re told during healthcare visits (*Kessels, 2003, Patient Education and Counseling*).\n\nTaking notes or using a health app to log vet advice ensures you can follow through confidently.\n\n---\n\n## **4\\. How Tracking Builds Trust (and Calms Anxiety)**\n\n**Answer first:** Objective data helps both you and your vet stay aligned.\n\nIt’s hard to explain “something feels off.” But if you can show that your pet’s eating dropped by 25%, or their play sessions shortened, you give your vet actionable insight.  \n That shared clarity builds trust.\n\nResearch from the **Human Animal Bond Research Institute (HABRI)** shows that most pet owners feel emotionally supported and less anxious when they can monitor and understand their pets’ wellbeing trends (*HABRI Survey of U.S. Pet Owners, 2023*).\n\n💡 *Furlab Tip:* Furlab automatically compiles trends in weight, hydration, and appetite—creating an evidence-based wellness snapshot to bring to your next visit.\n\n---\n\n## **5\\. Your Vet Wants to Help You Learn**\n\n**Answer first:** Vets appreciate curiosity—it shows engagement, not ignorance.\n\nThe **AVMA** encourages veterinarians to use plain language, provide clear take-home notes, and welcome owner participation in care decisions.  \nAsking “why” builds understanding and long-term trust. Try questions like:\n\n* “Can I show you my care log from Furlab?”\n\n* “How do I know if this diet change is working?”\n\n* “What’s the right way to introduce supplements?”\n\nThese conversations turn you into a confident collaborator in your pet’s health—not a passive observer.\n\n---\n\n## **Takeaway**\n\n* There’s no such thing as a dumb question at the vet.\n\n* Preparation builds clarity and reduces anxiety.\n\n* Simple health tracking improves communication and outcomes.\n\n* Small details matter—your vet can only act on what you share.\n\n* Curiosity builds trust. Confidence grows with every visit.\n\n---\n\n## **How Furlab Empowers Confident Conversations**\n\nFurlab makes preventive care tangible by turning your daily observations into insight.  \nWith **logged health data (like hydration, nutrition, and poop)**, you’ll walk into your vet’s office with evidence, not just emotion.  \nIt bridges the gap between appointments—so your vet sees the full story, not just a 15-minute snapshot.\n\n**Try Furlab today to simplify your vet visits, track with confidence, and become your pet’s most informed advocate.**\n\n---\n\n## **FAQ**\n\n**Q1: How can I prepare for my puppy’s first vet visit?**  \n Write down your questions in advance—diet, vaccines, sleep, and behavior—and bring any food labels or supplements for review.\n\n**Q2: How often should I see the vet for wellness checks?**  \n According to the AAHA, puppies should visit every 3–4 weeks until 16 weeks old, then yearly as adults (twice yearly for seniors).\n\n**Q3: What if I disagree with my vet’s advice?**  \n It’s okay to ask for clarification or a second opinion. Good vets welcome collaboration—your goal is shared understanding, not conflict.\n",
        "cover_image": "https://res.cloudinary.com/dlmtb2xqp/image/upload/v1763694073/furlab-marketing/Tracking_vet_xv8e16.png",
        "tags": [
          "new pet parents",
          "vet communication"
        ],
        "author": "Furlab Team",
        "published_at": "2025-11-21",
        "seo": {
          "title": "How to Talk to Your Vet with Confidence | Furlab's Guide ",
          "description": "New puppy or kitten? Learn how to communicate confidently with your veterinarian, track health changes, and become your pet’s best advocate with Furlab.",
          "og_image": "https://res.cloudinary.com/dlmtb2xqp/image/upload/v1763694073/furlab-marketing/Tracking_vet_xv8e16.png"
        }
      },
      {
        "title": "The First Weeks With a Puppy: What Every New Owner Needs to Know (and Feel Okay About)",
        "slug": "the-first-weeks-with-a-puppy-what-every-new-owner-needs-to-know-and-feel-okay-about",
        "summary": "New puppy chaos is normal. Learn the biggest early mistakes—and how mindful tracking with Furlab turns stress into confidence.",
        "body": "Bringing home a puppy feels magical—until it suddenly doesn’t. One day you’re laughing at zoomies, the next you’re wondering if you’re failing at this whole “dog parent” thing.\n\nYou’re not alone. Every new puppy owner feels a mix of joy, guilt, and exhaustion. The truth is, raising a puppy is less about perfection and more about presence. Here’s what real pet parents wish they’d known earlier—and how a little structure (and empathy) can change everything.\n\n---\n\n## **1\\. Puppies Don’t Need More—They Need the *Right* Kind of Stimulation**\n\n**Answer first:** Overstimulation, not undertraining, is the root of many early puppy struggles.\n\nMany new owners assume a tired puppy is a well-behaved one, but too much noise, activity, or newness can overwhelm developing nervous systems. Puppies process the world through smell and movement—too many new experiences at once can cause barking, nipping, or anxiety.\n\nShort walks, quiet decompression time, and slow introductions help puppies learn safely. Think “gentle exposure,” not “flooding.”\n\n💡 *Pro tip:* In your Furlab activity tracker, log both physical and *mental* stimulation. You’ll quickly see that calm play and sniffing walks are as valuable as exercise.\n\n---\n\n## **2\\. The Praise–Play–Treat Equation**\n\n**Answer first:** Emotional variety matters more than constant food rewards.\n\nTreats are great for early training—but they shouldn’t be your only communication. Puppies learn faster when praise, affection, and play are integrated with food. Studies on human–animal bonding show that consistent positive interaction releases **oxytocin**, a hormone linked to trust and emotional security (*Beetz et al., Frontiers in Psychology*, 2012).\n\n💡 *Pro tip:* Track your puppy’s favorite rewards—tug, treat, or praise—and rotate them. It keeps motivation high without overfeeding or burnout.\n\n---\n\n## **3\\. Consistency Builds Confidence (For Both of You)**\n\n**Answer first:** The most common training mistake isn’t “spoiling”—it’s inconsistency.\n\nChanging commands (“off” vs. “down”), skipping sessions, or letting habits slide on weekends can confuse your puppy and frustrate you. Consistency creates predictability—and predictability builds security.\n\nSet realistic expectations: five focused minutes daily beats one long, distracted session.\n\n💡 *Pro tip:* Use Furlab’s training tracker to log what you practiced, how your puppy responded, and what to adjust. Tiny patterns lead to big progress.\n\n---\n\n## **4\\. The Emotional Side of Puppyhood: Why “Puppy Blues” Are Normal**\n\n**Answer first:** Feeling frustrated or guilty doesn’t mean you’re failing—it means you care.\n\nMany new owners experience “puppy blues”: emotional overwhelm from sleep deprivation, messes, or unmet expectations.  \nResearch from the **Human Animal Bond Research Institute (HABRI)** shows that caring for pets improves long-term mental health—but early transitions can temporarily heighten stress before the bond stabilizes.\n\nRemember: you’re building a relationship, not checking boxes.\n\n💡 *Pro tip:* Note your own emotions alongside your puppy’s behavior in Furlab. Seeing both trends side-by-side can help normalize tough days and highlight how fast progress really happens.\n\n---\n\n## **5\\. Sniffing Is Science, Not Slacking**\n\n**Answer first:** Sniffing isn’t “wasting time”—it’s your puppy’s way of learning and decompressing.\n\nA dog’s sense of smell is up to **40 times stronger than a human’s**. Letting your puppy sniff builds confidence, decision-making, and calm behavior. “Sniff walks” activate mental engagement equivalent to vigorous physical play.\n\n💡 *Pro tip:* Use Furlab to track sniffing time on walks—many owners notice calmer evenings and fewer zoomies after longer scent sessions.\n\n---\n\n## **6\\. Progress, Not Perfection**\n\n**Answer first:** Every mistake teaches you something about your puppy—and yourself.\n\nYou’ll miss cues, over-reward, under-socialize, and get things wrong. That’s how learning happens. Puppies don’t remember every misstep—they remember how safe you make them feel.\n\nCelebrate micro-wins: one good recall, one quiet nap after crate time, one less potty accident.\n\n💡 *Pro tip:* Reflect weekly in Furlab’s health journal. Gratitude entries—like “slept through the night” or “played gently with kids”—reinforce positivity and perspective.\n\n---\n\n## **Takeaway**\n\n* Puppies need balanced, not constant, stimulation.\n\n* Rotate rewards (praise, play, treats) to build trust and joy.\n\n* Consistency is your superpower.\n\n* “Puppy blues” are real—but temporary.\n\n* Sniffing \\= learning. Slow walks are brain workouts.\n\n* Progress beats perfection—every single time.\n\n---\n\n## **How Furlab Helps You Through the Puppy Stage**\n\nFurlab is more than a pet wellness app—it’s your calm in the chaos.  \nUse it to track your puppy’s water intake, eating, and health, while also reflecting on your own journey as a new pet parent.\n\n**Try Furlab today to bring balance, confidence, and heart to your puppy’s first year.**\n\n---\n\n## **FAQ**\n\n**Q1: How do I know if my puppy is overstimulated?**  \nLook for signs like zoomies after walks, biting, or difficulty settling. Reduce stimulation and offer quiet time to reset.\n\n**Q2: What if I feel frustrated or regretful during training?**  \nThat’s normal. Many owners experience emotional ups and downs early on. Focus on routine and connection—it gets easier fast.\n\n**Q3: How much is too much exercise for a puppy?**  \nFollow the “5-minute rule”: about 5 minutes of formal exercise per month of age, twice daily. Combine with enrichment and rest.",
        "cover_image": "https://res.cloudinary.com/dlmtb2xqp/image/upload/v1763693459/furlab-marketing/Puppy_training_magwtv.png",
        "tags": [
          "puppy training",
          "new pet parents"
        ],
        "author": "Furlab Team",
        "published_at": "2025-11-20",
        "seo": {
          "title": "New Puppy Owner Guide | Practical Puppy Care | Furlab ",
          "description": "Feeling overwhelmed with your new puppy? Learn the most common challenges new owners face and how to build confidence through mindful tracking with Furlab",
          "og_image": "https://res.cloudinary.com/dlmtb2xqp/image/upload/v1763693459/furlab-marketing/Puppy_training_magwtv.png"
        }
      },
      {
        "title": "The Emotional Benefits of Tracking Your Pet’s Health (Yes, It Helps You Too)",
        "slug": "the-emotional-benefits-of-tracking-your-pets-health-yes-it-helps-you-too",
        "summary": "Tracking your pet’s health doesn’t just help them—it helps you feel calmer, more connected, and more confident. Discover how with Furlab.",
        "body": "Caring for a pet is more than keeping up with vaccines or feeding schedules—it’s about emotional connection.  \nWhen you track your pet’s health, you’re not just collecting data; you’re nurturing trust, reducing stress, and building a deeper sense of companionship.\n\nResearch on the human–animal bond shows that structured, mindful care can improve wellbeing for both species. Let’s explore how something as simple as tracking your cat’s diet or your dog’s exercise can make *you* feel better, too.\n\n---\n\n## **1\\. Tracking Reduces Stress and Builds Confidence**\n\n**Answer first:** Tracking your pet’s wellness gives you peace of mind and helps you feel more capable.\n\nAccording to the **Human Animal Bond Research Institute (HABRI)**, **87% of pet owners say their mental health has improved as a result of having a pet**, and nearly **80% report lower stress levels** after spending time caring for them (HABRI–Zoetis International Human–Animal Bond Study, 2022).\n\nWhen you use a structured tracking system—like noting appetite, hydration, or poop—you replace uncertainty with calm, proactive action. Instead of guessing whether your pet’s off day is serious, you can see patterns and make informed choices. That sense of control translates to reduced anxiety and higher confidence in your caregiving.\n\n---\n\n## **2\\. It Strengthens the Human–Animal Bond**\n\n**Answer first:** Tracking brings you closer by heightening awareness and empathy.\n\nLogging small details, like how your cat’s appetite changes after switching foods, teaches you to *listen* better. This attentiveness mirrors what animal-behavior researchers describe as **“reciprocal emotional regulation”** between pets and their owners: your calm and consistency help your pet feel secure, and their wellbeing reinforces yours (HABRI Impact Report, 2023).\n\nRather than simply reacting to issues, tracking helps you celebrate shared progress. Over time, it transforms care into connection.\n\n---\n\n## **3\\. It Creates Emotional Stability and Routine**\n\n**Answer first:** Routines reduce anxiety—for both you and your pet.\n\nA consistent care rhythm (feeding, play, rest) helps animals feel safe and humans feel grounded.  \nStudies on the **oxytocin effect in human–animal interactions** show that affectionate, predictable caregiving triggers oxytocin release in both species, lowering stress hormones like cortisol (Beetz et al., *Frontiers in Psychology*, 2012).\n\nBy logging routines, you reinforce that stability. For remote workers or people with high stress levels, this daily rhythm often becomes a simple but powerful emotional anchor.\n\n---\n\n## **4\\. It Fosters Gratitude and Positive Awareness**\n\n**Answer first:** Tracking helps you notice growth, not just problems.\n\nWhen you record milestones—your senior cat’s better coat condition or your puppy’s improved digestion—you start seeing *progress* instead of just worrying about symptoms.  \nPsychologists note that positive reflection, like recognizing small improvements, enhances emotional wellbeing and reduces caregiver burnout.\n\nEvery entry becomes a micro-moment of gratitude—a tangible reminder of how your attention makes your pet’s life better.\n\n---\n\n## **5\\. It Encourages Proactive, Not Reactive, Care**\n\n**Answer first:** Consistent tracking helps you catch issues early and prevent stress later.\n\nMonitoring small shifts in appetite, litter habits, or energy allows early detection of potential health concerns. Preventive care means fewer emergencies, lower costs, and less emotional strain.\n\nIn other words: when you stay ahead of problems, you protect your pet *and* your peace of mind.\n\n---\n\n## **Takeaway**\n\n* Tracking your pet’s health promotes calm and confidence.\n\n* Awareness deepens empathy and strengthens your bond.\n\n* Consistent routines boost security and emotional stability.\n\n* Gratitude grows as you recognize progress, not just illness.\n\n* Prevention reduces anxiety, costs, and crisis moments.\n\n---\n\n## **How Furlab Helps You Care—and Feel—Better**\n\nFurlab transforms the science of the human–animal bond into daily life.  \n Its **AI-powered health tracking** simplifies routines, spots early patterns, and helps you stay emotionally connected through data that feels personal.\n\nBy organizing care, Furlab gives you more than reminders—it gives you reassurance.  \nBecause caring for your pet should nurture *you*, too.\n\n**Try Furlab to simplify preventive care, strengthen connection, and bring calm to every routine.**\n\n---\n\n## **FAQ**\n\n**Q1: Can tracking my pet’s health really affect my own wellbeing?**  \n Yes. Research from HABRI and Zoetis shows that pet ownership and consistent caregiving reduce stress, loneliness, and anxiety in most adults.\n\n**Q2: Do I need to track everything daily?**  \nNo. Even simple weekly notes about diet, sleep, or energy levels help you feel organized and more connected.\n\n**Q3: How does Furlab make tracking easier?**  \nFurlab automates health logging, sends reminders, and visualizes trends—so you can focus on time with your pet, not spreadsheets.",
        "cover_image": "https://res.cloudinary.com/dlmtb2xqp/image/upload/v1763692382/furlab-marketing/Emotional_benefit_of_tracking_xtu1mw.png",
        "tags": [
          "health tracker",
          "preventive care",
          "stress reduction",
          "mindfulness"
        ],
        "author": "Furlab Team",
        "published_at": "2025-11-17",
        "seo": {
          "title": "Emotional Benefits of Pet Health Tracking | Furlab",
          "description": "Tracking your pet’s health builds peace of mind and connection. Learn how data-driven care enhances emotional wellbeing for both pets and people with Furlab.",
          "og_image": "https://res.cloudinary.com/dlmtb2xqp/image/upload/v1763692382/furlab-marketing/Emotional_benefit_of_tracking_xtu1mw.png"
        }
      },
      {
        "title": "How to Schedule Deworming for Your Cat: Tailoring Prevention to Every Lifestyle",
        "slug": "how-to-schedule-deworming-for-your-cat-tailoring-prevention-to-every-lifestyle",
        "summary": "Cat deworming schedules for every lifestyle—indoor, outdoor, or multi-cat. Keep prevention simple with Furlab.",
        "body": "Parasites are a silent but common threat to cats—whether they nap on your windowsill or hunt in the backyard. Roundworms, hookworms, and tapeworms are among the most frequent offenders, and even indoor cats aren’t immune.\nDeworming isn’t one-size-fits-all. The right schedule depends on your cat’s age, environment, and habits. In this article, you’ll learn how often to deworm based on your cat’s lifestyle and how to keep prevention simple with Furlab’s smart reminders and tracking tools.\n\n---\n\n## **Why Deworming Is Essential**\n\n**Answer first:** Regular deworming safeguards your cat’s health and protects your household from parasites that can spread to people.\n\nCats can contract worms through multiple routes:\n\n* From their mother during pregnancy or nursing\n\n* From ingesting infected fleas or prey\n\n* From contaminated soil or feces\n\n* In some cases, through skin contact with hookworm larvae\n\nMany infected cats show no symptoms, but parasites can still harm digestion, immunity, and coat condition. Severe infestations can cause **vomiting, diarrhea, weight loss, anemia, and even organ damage.**\n\nSome worms, such as roundworms and hookworms, are zoonotic, meaning they can infect humans—particularly children or immunocompromised individuals.\n\n---\n\n## **How Often Should Cats Be Dewormed?**\n\n**Answer first:** The schedule depends on age, exposure risk, and whether your cat lives indoors or outdoors.\n\nKittens and nursing mothers require the most frequent deworming, while adult cats follow a maintenance plan based on exposure risk.\n\n### **Recommended Baseline:**\n\n* Kittens: Begin at 3 weeks old, repeat every 2 weeks until 8–9 weeks, then monthly until 6 months\n\n* Nursing Queens: Treat concurrently with their kittens\n\n* Adults: Deworm every 1–3 months depending on lifestyle, and do annual fecal exams\n\n---\n\n## **Lifestyle-Based Deworming Schedules**\n\n### **1. Indoor-Only Cats**\n\nWhile their risk is lower, no cat is completely parasite-free. Fleas, insects, or microscopic eggs can still enter through shoes or plants.\n\n**Recommended schedule:**\n\n* Kittens: Start at 3 weeks; continue every 2 weeks until 8–9 weeks, then monthly until 6 months.\n\n* Adults: Every 3 months.\n\n* Fecal testing: Once yearly.\n\n**Why:** Roundworms are found in up to 75% of kittens regardless of living conditions, so even strictly indoor cats benefit from routine prevention.\n\n---\n\n### **2. Indoor–Outdoor Cats**\n\nThese cats encounter the highest mix of environmental exposure—soil, prey, insects, and other animals.\n\n**Recommended schedule:**\n\n* Kittens: Follow the same early-life plan (every 2 weeks until 8–9 weeks, then monthly until 6 months).\n\n* Adults: Deworm every 1–2 months year-round.\n\n* Fecal testing: Twice a year.\n\n**Why:** Exposure to prey, fleas, and contaminated soil increases the likelihood of tapeworm and hookworm infection.\n\n---\n\n### **3. Outdoor or Hunting Cats**\n\nCats that roam freely or hunt small animals face the greatest risk and can repeatedly reinfect themselves.\n\n**Recommended schedule:**\n\n* Adults: Deworm monthly.\n\n* Fecal tests: Every 3–4 months.\n\n**Why:** Vets recommend hunters be treated two to four times per year or monthly for complete protection.\n\n---\n\n### **4. Multi-Cat or Foster Households**\n\nParasite control must be coordinated. If one cat is infected, all cats sharing the environment are at risk.\n\n**Recommended schedule:**\n\n* Deworm all cats at the same time.\n\n* Follow the schedule for the most at-risk cat in the home (usually outdoor or foster kittens).\n\n* Keep litter boxes clean daily and bedding washed weekly.\n\n---\n\n## **Best Practices for Deworming Success**\n\n* Use broad-spectrum products that cover roundworms, hookworms, and tapeworms.\n\n* Common active ingredients: Pyrantel pamoate (roundworms, hookworms) and praziquantel (tapeworms).\n\n* Many modern preventives also control fleas and heartworms while managing intestinal worms.\n\nAlways consult your veterinarian for age- and weight-appropriate dosing.\n\nSide effects are rare but may include mild vomiting or diarrhea, typically resolving within 24 hours.\n\n---\n\n## **Takeaway**\n\n* Deworming protects both cats and humans from harmful parasites.\n\n* Kittens: every 2 weeks until 8–9 weeks old, then monthly until 6 months.\n\n* Indoor adults: every 3 months.\n\n* Outdoor or hunting cats: monthly or at least quarterly.\n\n* Always deworm all household cats together.\n\n* Combine deworming with flea and heartworm prevention for complete protection.\n\n---\n\n## **How Furlab Makes Preventive Care Effortless**\n\nKeeping track of multiple cats and care schedules can feel overwhelming. Furlab simplifies it.\n\nUse our health reminders feature to ensure that you never miss a deworming time. Bring your deworming records in Furlab to show your vet during your next visit. \n\nWith Furlab, preventive care becomes one tap simpler, so your cat stays healthy and you stay confident.\n\nTry Furlab today to streamline your cat’s wellness care—science-based protection made simple.\n\n---\n\n## **FAQ**\n\n**Q1: When should I start deworming my kitten?**\nAs early as 3 weeks old, then every two weeks until 8–9 weeks, and monthly until 6 months.\n\n**Q2: Can indoor cats skip deworming?**\n No. Indoor cats can still be exposed through fleas, insects, or soil on shoes.\n\n**Q3: Are over-the-counter dewormers safe?**\nPrescription products from veterinarians are safer and more effective, especially for young cats.\n",
        "cover_image": "https://res.cloudinary.com/dlmtb2xqp/image/upload/v1763693547/furlab-marketing/Deworming_schedule_gwppmc.png",
        "tags": [
          "cat wellness",
          "deworming schedule",
          "parasite prevention",
          "preventive care"
        ],
        "author": "Furlab Team",
        "published_at": "2025-11-13",
        "seo": {
          "title": "Cat Deworming Schedules | Preventive Care | Furlab",
          "description": "Discover the ideal deworming schedule for indoor, outdoor, and multi-cat households. Learn what vets recommend and keep your cat healthy with Furlab.",
          "og_image": "https://res.cloudinary.com/dlmtb2xqp/image/upload/v1763650016/furlab-marketing/Puppy_training_kwvw2o.png"
        }
      },
      {
        "title": "Dry Matter vs. As-Fed Basis: The Key to Understanding What’s Really in Your Pet’s Food",
        "slug": "dry-matter-vs-as-fed-basis-the-key-to-understanding-whats-really-in-your-pets-food",
        "summary": "Confused by pet food labels? Learn the difference between dry matter and as-fed to decode real nutrition and make smarter choices.",
        "body": "If you’ve ever compared two pet foods—say, a canned recipe and a kibble—and wondered why their nutrient numbers seem so different, you’re not alone. Those tiny percentages on pet food labels can be misleading if you don’t know one key concept: dry matter vs. as-fed basis.\n\nUnderstanding this difference isn’t just “nutrition math.” It’s about making smarter choices for your furry family. This article breaks down what these terms mean, why they matter, and how you can use them to compare foods accurately and confidently.\n\n---\n\n## **What “As-Fed” Really Means**\n\n**Answer first:** “As-fed” shows what’s in the food before removing moisture—how your pet actually eats it.\n\nEvery pet food label lists nutrients like protein, fat, and fiber on an as-fed basis. That means the numbers include water weight. A canned food that’s 75% moisture might look lower in protein than kibble, but it’s mostly because of the water, not the nutrition.\n\nFor example:\n\n* A wet food may say 10% protein on the label.\n\n* But if it’s 75% moisture, that 10% is part of the remaining 25% solids.\n\n* On a dry matter basis, that’s actually 40% protein (10 ÷ 0.25).\n\nThink of it like comparing smoothies vs. protein powder—you need to remove the water to compare fairly.\n\n---\n\n## **What “Dry Matter” Means—and Why It’s the Real Comparison**\n\n**Answer first:** Dry matter removes water weight, showing the true nutrient density of the food.\n\nWhen veterinarians, nutritionists, or the Association of American Feed Control Officials (AAFCO) evaluate pet food, they use dry matter basis. It reveals how much actual nutrition your pet gets from the food’s solids—protein, fat, vitamins, and minerals.\n\n### **Quick formula:**\n\nDry Matter % \\= 100 \\- Moisture %  \nNutrient on Dry Matter Basis (%) \\= (As-Fed % ÷ Dry Matter %) × 100\n\nSo that 10% protein canned food (with 75% moisture) becomes 40% protein on a dry matter basis. \n\nDry Matter % \\= 100 \\- 75 \\= 25\n\nProtein (DM) \\= (10 ÷ 25\\) × 100 \\= 40%\n\nMeanwhile, a kibble with 25% protein and 10% moisture stays roughly 28% on a dry matter basis. Suddenly, that “low-protein” canned food looks richer than you thought.\n\n---\n\n## **Why the Difference Matters for Your Pet’s Health**\n\n**Answer first:** Comparing on dry matter basis helps you choose the right nutrition for your pet’s lifestyle.\n\nWhen you only look at as-fed labels, it’s easy to misjudge quality. Dry matter tells you the truth—especially when comparing food types:\n\n* Wet vs. Dry Food: Wet foods appear lower in nutrients because of water content. Dry matter comparison levels the field.\n\n* Weight Management: Foods higher in moisture can support satiety with fewer calories.\n\n* Digestive Sensitivity: Some pets thrive on higher-protein, lower-carb diets visible only when using dry matter numbers.\n\n* Veterinary Guidance: Vets often ask for nutrient data on a dry matter basis to tailor diets for conditions like kidney or liver disease.\n\n**Example:**  \n If your senior cat needs higher protein but lower phosphorus, your vet might request dry matter values to compare therapeutic diets accurately.\n\n---\n\n## **How to Calculate It Yourself (It’s Easier Than You Think)**\n\nYou don’t need a lab—just your phone’s calculator.  \n Here’s a simple step-by-step:\n\n1. Find the moisture percentage on your pet food label.\n\n2. Subtract that from 100 to get the dry matter portion.\n\n3. Divide each nutrient’s percentage (protein, fat, fiber) by the dry matter portion.\n\n4. Multiply by 100 to express as a percent.\n\n**Example:**\n\n* Food label: 12% protein, 78% moisture\n\n* Dry matter \\= 100 \\- 78 \\= 22\n\n* Protein (dry matter) \\= (12 ÷ 22\\) × 100 \\= 54.5%\n\nNow you can compare apples to apples between brands or between wet and dry options.\n\n---\n\n## **Common Mistakes Pet Parents Make**\n\nEven savvy pet parents get tripped up by labeling differences. Here are the top three pitfalls:\n\n* Only reading “Guaranteed Analysis,” which usually shows as-fed data, not dry matter.\n\n* Comparing across food types (wet vs. dry) without adjusting for moisture.\n\n* Ignoring fiber or fat conversions, which matter for digestion and energy.\n\nTip: AAFCO’s nutrient profiles are based on dry matter for a reason—it’s the only fair way to compare nutrient adequacy.\n\n---\n\n## **Takeaway**\n\n* “As-fed” \\= nutrients with water included (the way it’s served).\n\n* “Dry matter” \\= nutrients after removing moisture (the fair comparison).\n\n* Always compare foods using dry matter to understand true nutrition.\n\n* This method helps you select diets aligned with your pet’s needs.\n\n---\n\n## **How Furlab Simplifies This for You**\n\nUnderstanding pet nutrition math is powerful—but you don’t have to do it alone.  \nFurlab’s AI-powered nutrition analyzer automatically converts nutrient data into dry matter basis, so you can compare brands, recipes, or feeding plans without the spreadsheet stress.\n\nWhether you’re managing a multi-pet household or just want to feel confident about your dog’s dinner, Furlab helps you make informed, heart-led choices that keep tails wagging and whiskers happy.\n\nTry Furlab to simplify your pet’s health routine—science-backed care, made human.\n\n---\n\n## **FAQ**\n\n**Q1: Why do wet foods look lower in protein than dry foods?**  \n Because wet foods contain much more water. When moisture is removed, their true protein content often matches or exceeds kibble.\n\n**Q2: Is dry matter the same as calorie content?**  \n Not exactly. Dry matter shows nutrient ratios; calories depend on energy density, which varies with ingredients.\n\n**Q3: Do I always need to calculate dry matter?**  \n Not daily—but it’s essential when comparing foods or managing a specific health condition.",
        "cover_image": "https://res.cloudinary.com/dlmtb2xqp/image/upload/v1763134582/furlab-marketing/image1_oa164r.png",
        "tags": [
          "pet nutrition",
          "dry matter vs as-fed"
        ],
        "author": "Furlab Team",
        "published_at": "2025-11-01",
        "seo": {
          "title": "Dry Matter vs As-Fed: Decode Your Pet’s Nutrition Like a Pro",
          "description": "Learn how to compare pet foods accurately using dry matter vs as-fed basis. Understand labels, moisture, and make smarter feeding choices with Furlab.",
          "og_image": "https://res.cloudinary.com/dlmtb2xqp/image/upload/v1763134582/furlab-marketing/image1_oa164r.png"
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
