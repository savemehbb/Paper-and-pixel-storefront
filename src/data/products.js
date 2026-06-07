// Product data for Paper & Pixel storefront
// Each product represents a digital printable download

const products = [
  // --- GREETING CARDS ---
  {
    id: 'card-birthday-01',
    name: 'Birthday Blooms',
    category: 'cards',
    price: 3.99,
    description: 'A cheerful floral birthday card printable with watercolor blossoms. Perfect for anyone celebrating another trip around the sun.',
    longDescription: 'This beautifully designed birthday card features delicate watercolor blooms in warm pinks and soft greens. The design is printed on a clean cream background with ample space for your personal message. Print at home and gift to someone special.',
    image: '/images/cards/birthday-card-front.png',
    preview: '/images/previews/birthday-card-front-preview.jpg',
    downloadPath: '/downloads/cards/card-birthday-01.pdf',
    details: ['High-resolution PDF (300 DPI)', 'A2 size (4.25" x 5.5")', 'Blank inside for your message', 'Cream envelope template included', 'Instant digital download'],
  },
  {
    id: 'card-thanks-01',
    name: 'Gratitude Garden',
    category: 'cards',
    price: 3.99,
    description: 'An elegant thank you card with botanical illustrations. Say thank you with style and warmth.',
    longDescription: 'Express your gratitude with this elegant botanical thank you card. Featuring hand-drawn garden elements in muted earth tones, this card conveys warmth and sincerity. The minimal design keeps the focus on your message.',
    image: '/images/cards/thankyou-card-front.png',
    preview: '/images/previews/thankyou-card-front-preview.jpg',
    downloadPath: '/downloads/cards/card-thanks-01.pdf',
    details: ['High-resolution PDF (300 DPI)', 'A2 size (4.25" x 5.5")', 'Blank inside', 'Matching envelope template', 'Instant digital download'],
  },
  {
    id: 'card-congrats-01',
    name: 'You Did It!',
    category: 'cards',
    price: 3.99,
    description: 'Celebrate achievements with this modern congratulatory card featuring gold foil accents.',
    longDescription: 'Make their accomplishment feel extra special with this celebratory card. Gold foil-style accents frame a clean, modern layout that works for graduations, promotions, or any milestone worth celebrating.',
    image: '/images/cards/congratulations-card-front.png',
    preview: '/images/previews/congratulations-card-front-preview.jpg',
    downloadPath: '/downloads/cards/card-congrats-01.pdf',
    details: ['High-resolution PDF (300 DPI)', 'A2 size (4.25" x 5.5")', 'Gold foil effect design', 'Matching envelope template', 'Instant digital download'],
  },

  // --- JOURNALS ---
  {
    id: 'journal-morning-01',
    name: 'Morning Pages Journal',
    category: 'journals',
    price: 7.99,
    description: 'Start each day with intention. A guided morning journal with prompts, gratitude pages, and free-writing space.',
    longDescription: 'Transform your mornings with this beautifully structured journal. Each day features a gratitude prompt, intention-setting space, and plenty of room for stream-of-consciousness writing. Print and bind for a 90-day morning ritual.',
    image: '/images/journals/lined-journal-page.png',
    preview: '/images/previews/lined-journal-page-preview.jpg',
    downloadPath: '/downloads/journals/journal-morning-01.pdf',
    details: ['High-resolution PDF (300 DPI)', '90-day journal with daily spreads', 'Letter size (8.5" x 11")', 'Gratitude prompts + free writing space', 'Print and bind instructions included', 'Instant digital download'],
  },
  {
    id: 'journal-dream-01',
    name: 'Dream Catcher Diary',
    category: 'journals',
    price: 6.99,
    description: 'Record and interpret your dreams with this whimsical dream journal.',
    longDescription: 'Capture your dreams the moment you wake. This dream journal provides structured pages for recording dream details, emotion tracking, symbolism interpretation, and space for sketches. A beautiful tool for self-discovery.',
    image: '/images/journals/dot-grid-journal.png',
    preview: '/images/previews/dot-grid-journal-preview.jpg',
    downloadPath: '/downloads/journals/journal-dream-01.pdf',
    details: ['High-resolution PDF (300 DPI)', '60 dream recording pages', 'Letter size (8.5" x 11")', 'Symbolism guide included', 'Sketch space on each page', 'Instant digital download'],
  },
  {
    id: 'journal-kids-01',
    name: 'My Little Storybook',
    category: 'journals',
    price: 5.99,
    description: 'A fun, colorful journal for kids aged 5-10 to write, draw, and imagine.',
    longDescription: 'Spark your child\'s creativity with this playful journal. Filled with prompts, doodle pages, story starters, and plenty of space for imagination. The colorful design keeps kids engaged and excited to write.',
    image: '/images/journals/kids-creative-journal.png',
    preview: '/images/previews/kids-creative-journal-preview.jpg',
    downloadPath: '/downloads/journals/journal-kids-01.pdf',
    details: ['High-resolution PDF (300 DPI)', '40 fun activity pages', 'A4 size (8.27" x 11.69")', 'Age-appropriate prompts', 'Coloring pages included', 'Instant digital download'],
  },

  // --- PLANNERS ---
  {
    id: 'planner-weekly-01',
    name: 'Weekly Wellness Planner',
    category: 'planners',
    price: 6.99,
    description: 'A holistic weekly planner that balances productivity, self-care, and meal planning.',
    longDescription: 'Plan your week with intention. Each weekly spread includes a to-do list, appointment slots, meal planner, water tracker, mood log, and a self-care checklist. Stylish and functional for busy lives.',
    image: '/images/planners/weekly-meal-planner.png',
    preview: '/images/previews/weekly-meal-planner-preview.jpg',
    downloadPath: '/downloads/planners/planner-weekly-01.pdf',
    details: ['High-resolution PDF (300 DPI)', '52 weekly spreads (full year)', 'Letter size (8.5" x 11")', 'Meal planner section', 'Mood & habit tracker', 'Instant digital download'],
  },
  {
    id: 'planner-monthly-01',
    name: 'Monthly Vision Planner',
    category: 'planners',
    price: 5.99,
    description: 'A minimalist monthly planner with goal-setting spreads and a vision board page.',
    longDescription: 'See the big picture with this elegant monthly planner. Each month features a calendar spread, goal-setting page, habit tracker, and vision board space. Perfect for goal-oriented planners who want a clean aesthetic.',
    image: '/images/planners/monthly-goal-planner.png',
    preview: '/images/previews/monthly-goal-planner-preview.jpg',
    downloadPath: '/downloads/planners/planner-monthly-01.pdf',
    details: ['High-resolution PDF (300 DPI)', '12 monthly spreads + extras', 'Letter size (8.5" x 11")', 'Goal planning worksheets', 'Vision board template', 'Instant digital download'],
  },
  {
    id: 'planner-undated-01',
    name: 'Daily Focus Planner',
    category: 'planners',
    price: 5.99,
    description: 'An undated daily planner to help you prioritize, focus, and reflect every single day.',
    longDescription: 'This undated daily planner gives you a fresh start whenever you need it. Each page helps you identify your top priorities, schedule your day, track habits, and reflect on wins. Perfect for restarting any time.',
    image: '/images/planners/daily-focus-planner.png',
    preview: '/images/previews/daily-focus-planner-preview.jpg',
    downloadPath: '/downloads/planners/planner-undated-01.pdf',
    details: ['High-resolution PDF (300 DPI)', '100 undated daily pages', 'Letter size (8.5" x 11")', 'Priority & focus sections', 'Evening reflection space', 'Instant digital download'],
  },

  // --- STICKERS ---
  {
    id: 'sticker-planner-01',
    name: 'Planner Pro Stickers',
    category: 'stickers',
    price: 4.99,
    description: 'A mega-pack of functional and decorative planner stickers to color-code your life.',
    longDescription: 'Organize your planner in style with this massive sticker pack. Includes habit trackers, meal icons, appointment markers, priority flags, mood dots, and decorative elements. Print on sticker paper and cut out.',
    image: '/images/stickers/motivational-quote-stickers.png',
    preview: '/images/previews/motivational-quote-stickers-preview.jpg',
    downloadPath: '/downloads/stickers/sticker-planner-01.pdf',
    details: ['High-resolution PNG files', '2 full sheets (US Letter)', 'Over 200 individual stickers', 'Mix of functional & decorative', 'Print on sticker paper', 'Instant digital download'],
  },
  {
    id: 'sticker-aesthetic-01',
    name: 'Aesthetic Vibes Pack',
    category: 'stickers',
    price: 4.99,
    description: 'Aesthetic stickers for journaling, laptops, and water bottles. Cozy vibes only.',
    longDescription: 'Add a touch of aesthetic charm to your journal, laptop, or water bottle. This pack features cozy-themed illustrations in muted earth tones — books, coffee cups, plants, stars, and more. Perfect for creating a cohesive aesthetic.',
    image: '/images/stickers/cute-aesthetic-stickers.png',
    preview: '/images/previews/cute-aesthetic-stickers-preview.jpg',
    downloadPath: '/downloads/stickers/sticker-aesthetic-01.pdf',
    details: ['High-resolution PNG files', '2 full sheets (US Letter)', '15 unique designs', 'Weather-resistant when printed on vinyl', 'Instant digital download'],
  },
  {
    id: 'sticker-kids-01',
    name: 'Rainbow Rewards',
    category: 'stickers',
    price: 3.99,
    description: 'Colorful reward stickers for kids. Great for teachers, parents, and caregivers.',
    longDescription: 'Motivate and celebrate kids with these vibrant reward stickers. Includes star ratings, achievement badges, "Great Job!" labels, and fun animal designs. Perfect for classrooms, chore charts, or at-home encouragement.',
    image: '/images/stickers/rainbow-rewards-stickers.png',
    preview: '/images/previews/rainbow-rewards-stickers-preview.jpg',
    downloadPath: '/downloads/stickers/sticker-kids-01.pdf',
    details: ['High-resolution PNG files', '1 full sheet (US Letter)', '36 stickers per sheet', 'Bright, kid-friendly designs', 'Instant digital download'],
  },

  // --- NEW INDIVIDUAL PRODUCTS ---
  {
    id: 'card-holiday-01',
    name: "Season's Greetings",
    category: 'cards',
    price: 3.99,
    description: 'A warm and festive holiday greeting card with elegant seasonal illustrations.',
    longDescription: 'Spread holiday cheer with this beautifully designed greeting card. Featuring elegant seasonal motifs in rich reds and greens, this card is perfect for sending warm wishes to family and friends during the holiday season.',
    image: '/images/cards/holiday-card-front.png',
    preview: '/images/previews/holiday-card-front-preview.jpg',
    downloadPath: '/downloads/cards/card-holiday-01.pdf',
    details: ['High-resolution PDF (300 DPI)', 'A2 size (4.25" x 5.5")', 'Blank inside for your message', 'Matching envelope template', 'Instant digital download'],
  },
  {
    id: 'planner-fitness-01',
    name: 'Fitness Tracker Planner',
    category: 'planners',
    price: 6.99,
    description: 'Track your workouts, meals, and progress with this comprehensive fitness planner.',
    longDescription: 'Achieve your fitness goals with this dedicated workout planner. Includes weekly workout logs, meal planning pages, water tracker, progress photos, and monthly goal setting. Perfect for gym-goers and home workout enthusiasts alike.',
    image: '/images/planners/fitness-tracker-planner.png',
    preview: '/images/previews/fitness-tracker-planner-preview.jpg',
    downloadPath: '/downloads/planners/planner-fitness-01.pdf',
    details: ['High-resolution PDF (300 DPI)', '52 weekly spreads', 'Letter size (8.5" x 11")', 'Workout & meal tracking', 'Progress photo pages', 'Instant digital download'],
  },
  {
    id: 'sticker-washi-01',
    name: 'Washi Tape Stickers',
    category: 'stickers',
    price: 4.99,
    description: 'Beautiful washi tape-inspired stickers for decorating journals, planners, and more.',
    longDescription: 'Bring the charm of washi tape to your sticker collection! These beautifully designed sticker sheets feature repeating patterns in coordinating color palettes — florals, geometrics, stripes, and dots. Perfect for borders, decorations, and accents.',
    image: '/images/stickers/washi-tape-stickers.png',
    preview: '/images/previews/washi-tape-stickers-preview.jpg',
    downloadPath: '/downloads/stickers/sticker-washi-01.pdf',
    details: ['High-resolution PNG files', '2 full sheets (US Letter)', '4 unique patterns', 'Easy to cut and apply', 'Instant digital download'],
  },

  // --- BUNDLES ---
  {
    id: 'bundle-selfcare-01',
    name: 'Self Care Bundle',
    category: 'bundles',
    price: 14.99,
    description: 'Everything you need for a mindful self-care routine — journal, meal planner, and aesthetic stickers.',
    longDescription: 'Treat yourself to this thoughtfully curated self-care bundle. Includes the Morning Pages Journal for daily reflection, the Weekly Meal Planner for nourishing meals, and the Aesthetic Vibes sticker pack for decorating it all. Save $3.98 vs. buying separately!',
    image: '/images/bundles/self-care-bundle-cover.png',
    preview: '/images/bundles/self-care-bundle-cover.png',
    downloadPath: '/downloads/self-care-bundle-cover.pdf',
    details: ['3 full products in one bundle', 'Morning Pages Journal ($7.99)', 'Weekly Meal Planner ($6.99)', 'Aesthetic Vibes Stickers ($4.99)', 'Total value: $19.97 — You save $4.98!', 'Instant digital download'],
  },
  {
    id: 'bundle-school-01',
    name: 'Back to School Pack',
    category: 'bundles',
    price: 10.99,
    description: 'Get kids organized and inspired with a journal, daily planner, and fun reward stickers.',
    longDescription: 'Set your kids up for success with this back-to-school bundle. The Kids Creative Journal encourages writing and drawing, the Daily Focus Planner builds organization skills, and the Rainbow Rewards stickers make achievements fun. Perfect for ages 5-12.',
    image: '/images/bundles/back-to-school-bundle-cover.png',
    preview: '/images/bundles/back-to-school-bundle-cover.png',
    downloadPath: '/downloads/back-to-school-bundle-cover.pdf',
    details: ['3 full products in one bundle', "My Little Storybook Journal ($5.99)", 'Daily Focus Planner ($5.99)', 'Rainbow Rewards Stickers ($3.99)', 'Total value: $15.97 — You save $4.98!', 'Instant digital download'],
  },
  {
    id: 'bundle-cards-01',
    name: 'Greeting Card Variety Pack',
    category: 'bundles',
    price: 12.99,
    description: 'A complete collection of 5 premium greeting cards for every occasion.',
    longDescription: 'Never be caught without the perfect card again! This variety pack includes 5 beautifully designed greeting cards: Birthday Blooms, Gratitude Garden, You Did It!, Season\'s Greetings, and our Anniversary card. Each comes with a matching envelope template. Perfect to have on hand for every occasion.',
    image: '/images/bundles/greeting-card-variety-cover.png',
    preview: '/images/bundles/greeting-card-variety-cover.png',
    downloadPath: '/downloads/greeting-card-variety-cover.pdf',
    details: ['5 premium greeting cards', 'Birthday, Thank You, Congrats, Holiday, & Anniversary', 'Each A2 size (4.25" x 5.5")', 'Matching envelope templates', 'Total value: $19.95 — You save $6.96!', 'Instant digital download'],
  },
]

export const categories = [
  { id: 'cards', name: 'Greeting Cards', icon: '✉️', description: 'For every occasion, made with love.' },
  { id: 'journals', name: 'Journals', icon: '📓', description: 'Capture thoughts, dreams, and stories.' },
  { id: 'planners', name: 'Planners', icon: '📅', description: 'Plan your life with intention.' },
  { id: 'stickers', name: 'Stickers', icon: '✨', description: 'Decorate your world, your way.' },
  { id: 'bundles', name: 'Bundles', icon: '🎁', description: 'Curated sets at a great value.' },
]

export function getProductsByCategory(category) {
  if (!category || category === 'all') return products
  return products.filter(p => p.category === category)
}

export function getProductById(id) {
  return products.find(p => p.id === id)
}

export function getCategoryInfo(categoryId) {
  return categories.find(c => c.id === categoryId)
}

export default products
