import type { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  slug: string;
  title: string;
  iconName: string; // Corresponds to key in iconMap or Lucide icon name
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  process?: { step: string; description: string }[];
  cta: { text: string; link: string };
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  clientName: string;
  industry: string;
  imageUrl: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string }[];
  summary: string; // Short summary for cards
  servicesUsed: string[]; // e.g., ['Brand Building', 'Data Analysis']
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string; // ISO string
  imageUrl?: string;
  excerpt: string;
  content: string; // Markdown or HTML content
  tags: string[];
}

export const servicesData: Service[] = [
  {
    id: '1',
    slug: 'brand-building',
    title: 'Brand Building',
    iconName: 'Palette',
    shortDescription: 'Craft a memorable brand identity that resonates and stands out.',
    longDescription: 'We help you build a strong, cohesive brand from the ground up. This includes defining your brand voice, visual identity, and market positioning to create a lasting impression.',
    benefits: [
      'Increased brand recognition and recall.',
      'Stronger customer loyalty and trust.',
      'Clear differentiation from competitors.',
      'Consistent brand messaging across all channels.',
    ],
    process: [
        { step: 'Discovery & Research', description: 'Understanding your business, audience, and competitive landscape.' },
        { step: 'Strategy Development', description: 'Defining brand positioning, messaging, and core values.' },
        { step: 'Visual Identity Design', description: 'Creating logos, color palettes, typography, and brand guidelines.' },
        { step: 'Brand Launch & Activation', description: 'Rolling out your new brand across all touchpoints.' },
    ],
    cta: { text: 'Build Your Brand with Us', link: '/contact?service=brand-building' },
  },
  {
    id: '2',
    slug: 'audience-engagement',
    title: 'Audience Engagement',
    iconName: 'Users',
    shortDescription: 'Connect with your customers through compelling content and strategic social media.',
    longDescription: 'Foster meaningful connections with your target audience. We develop content strategies, manage social media presence, and run engagement campaigns that build community and drive interaction.',
    benefits: [
      'Higher customer interaction and participation.',
      'Improved brand perception and advocacy.',
      'Increased website traffic and lead generation.',
      'Valuable insights into customer preferences.',
    ],
    cta: { text: 'Engage Your Audience Today', link: '/contact?service=audience-engagement' },
  },
  {
    id: '3',
    slug: 'data-analysis',
    title: 'Data Analysis',
    iconName: 'BarChart3',
    shortDescription: 'Unlock actionable insights from your marketing data to optimize performance.',
    longDescription: 'Turn data into your most valuable asset. We analyze key metrics from your campaigns and website to identify trends, measure ROI, and provide data-driven recommendations for continuous improvement.',
    benefits: [
      'Informed decision-making based on real data.',
      'Optimized marketing spend and resource allocation.',
      'Identification of high-performing channels and content.',
      'Continuous improvement of campaign effectiveness.',
    ],
    cta: { text: 'Leverage Your Data Now', link: '/contact?service=data-analysis' },
  },
  {
    id: '4',
    slug: 'amplification-strategies',
    title: 'Amplification Strategies',
    iconName: 'Megaphone',
    shortDescription: 'Scale your reach and impact through targeted advertising and growth hacking.',
    longDescription: 'Maximize your marketing impact. We design and execute amplification strategies, including paid advertising (PPC, social ads), influencer marketing, and growth hacking techniques to expand your reach and accelerate growth.',
    benefits: [
      'Rapidly increase brand visibility and market penetration.',
      'Targeted reach to specific audience segments.',
      'Scalable campaigns for sustainable growth.',
      'Improved conversion rates and customer acquisition.',
    ],
    cta: { text: 'Amplify Your Success', link: '/contact?service=amplification-strategies' },
  },
];

export const caseStudiesData: CaseStudy[] = [
  {
    id: '1',
    slug: 'ecommerce-sales-boost',
    title: 'Boosting E-commerce Sales by 150% for FashionRetail Co.',
    clientName: 'FashionRetail Co.',
    industry: 'E-commerce / Fashion',
    imageUrl: 'https://placehold.co/800x450.png',
    challenge: 'FashionRetail Co. was struggling with stagnant online sales and low brand visibility in a competitive market. Their previous marketing efforts lacked clear direction and ROI.',
    solution: 'BEZA developed a multi-channel strategy focusing on SEO optimization for their e-commerce platform, targeted social media advertising campaigns (Facebook & Instagram), and compelling content marketing. We also implemented a conversion rate optimization (CRO) plan for their product pages.',
    results: [
      { metric: 'Online Sales Increase', value: '+150%' },
      { metric: 'Website Traffic Growth', value: '+200%' },
      { metric: 'Return on Ad Spend (ROAS)', value: '5.2x' },
      { metric: 'Conversion Rate Improvement', value: '+35%' },
    ],
    summary: 'Implemented a targeted ad campaign and SEO strategy that significantly increased online sales and brand visibility for a major fashion retailer.',
    servicesUsed: ['Audience Engagement', 'Data Analysis', 'Amplification Strategies'],
  },
  {
    id: '2',
    slug: 'saas-lead-generation',
    title: 'Tripling Qualified Leads for TechSolutions Inc.',
    clientName: 'TechSolutions Inc.',
    industry: 'SaaS / B2B Technology',
    imageUrl: 'https://placehold.co/800x450.png',
    challenge: 'TechSolutions Inc., a B2B SaaS provider, faced challenges in generating a consistent flow of qualified leads. Their existing lead generation funnel was inefficient and costly.',
    solution: 'Our team revamped their content marketing strategy by creating high-value downloadable assets (eBooks, whitepapers), optimizing landing pages for conversion, and implementing a sophisticated email nurturing sequence. We also utilized LinkedIn Ads for targeted B2B outreach.',
    results: [
      { metric: 'Qualified Leads Generated', value: '+300%' },
      { metric: 'Cost Per Lead Reduction', value: '-40%' },
      { metric: 'Sales Pipeline Growth', value: '+180%' },
      { metric: 'Website Engagement (Time on Site)', value: '+60%' },
    ],
    summary: 'Revamped content marketing and lead nurturing funnels, resulting in a 3x increase in qualified leads for a B2B SaaS company.',
    servicesUsed: ['Brand Building', 'Audience Engagement', 'Data Analysis'],
  },
];

export const blogPostsData: BlogPost[] = [
  {
    id: '1',
    slug: 'future-of-digital-marketing-2024',
    title: 'The Future of Digital Marketing: Trends to Watch in 2024',
    author: 'Jane Doe, Head of Strategy @ BEZA',
    date: '2024-01-15T10:00:00Z',
    imageUrl: 'https://placehold.co/800x400.png',
    excerpt: 'Digital marketing is constantly evolving. Discover the key trends that will shape the landscape in 2024 and how your business can prepare for success.',
    content: `
<p>The digital marketing landscape is a whirlwind of change, and 2024 is no exception. Staying ahead of the curve is crucial for businesses looking to thrive. Here are some of the top trends we're watching at BEZA:</p>
<h3 class="text-xl font-semibold my-3">1. AI-Powered Personalization at Scale</h3>
<p>Artificial intelligence is moving beyond chatbots. Expect to see AI driving hyper-personalized content, product recommendations, and even ad creatives. The ability to deliver unique experiences to individual users will be a game-changer.</p>
<h3 class="text-xl font-semibold my-3">2. The Rise of Short-Form Video Content</h3>
<p>Platforms like TikTok, Instagram Reels, and YouTube Shorts continue to dominate user attention. Brands need a solid short-form video strategy to engage audiences, showcase products, and build community.</p>
<h3 class="text-xl font-semibold my-3">3. Privacy-First Marketing</h3>
<p>With increasing data privacy regulations (like GDPR and CCPA) and the phasing out of third-party cookies, marketers must adapt. This means focusing on first-party data collection, consent management, and building trust through transparency.</p>
<p>These are just a few of the exciting developments. At BEZA, we're committed to helping our clients navigate these changes and leverage them for growth. Contact us to learn more about how we can future-proof your marketing strategy.</p>
`,
    tags: ['Digital Marketing', 'Trends', 'AI', 'Video Marketing', 'Privacy'],
  },
  {
    id: '2',
    slug: 'unlocking-power-of-data-analytics',
    title: 'Unlocking the Power of Data Analytics in Your Marketing',
    author: 'John Smith, Data Lead @ BEZA',
    date: '2024-02-20T14:30:00Z',
    imageUrl: 'https://placehold.co/800x400.png',
    excerpt: 'Data is more than just numbers; it\'s the key to understanding your customers and optimizing your campaigns. Learn how to effectively use data analytics.',
    content: `
<p>In today's competitive environment, making decisions based on gut feelings is a recipe for disaster. Data analytics provides the clarity and insight needed to make informed marketing choices. Here’s how you can unlock its power:</p>
<h3 class="text-xl font-semibold my-3">1. Define Clear Objectives and KPIs</h3>
<p>What do you want to achieve? Before diving into data, establish clear goals and Key Performance Indicators (KPIs) to measure success. This could be website traffic, conversion rates, customer lifetime value, etc.</p>
<h3 class="text-xl font-semibold my-3">2. Choose the Right Tools</h3>
<p>There's a plethora of analytics tools available, from Google Analytics to more specialized platforms. Select tools that align with your objectives and technical capabilities. BEZA can help you choose and implement the right stack.</p>
<h3 class="text-xl font-semibold my-3">3. Focus on Actionable Insights</h3>
<p>Data is useless without interpretation. Look for patterns, trends, and anomalies that provide actionable insights. For example, which marketing channels are driving the most valuable customers? Which content resonates most with your audience?</p>
<h3 class="text-xl font-semibold my-3">4. Test, Learn, Iterate</h3>
<p>Data analytics is not a one-time task. Continuously monitor your KPIs, test different strategies (A/B testing is your friend!), learn from the results, and iterate on your campaigns for ongoing improvement.</p>
<p>By embracing data analytics, you can transform your marketing from a cost center into a revenue-driving machine. BEZA’s data experts are here to guide you on this journey.</p>
`,
    tags: ['Data Analytics', 'Marketing Strategy', 'KPIs', 'Optimization'],
  },
];
