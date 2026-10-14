export type Project = {
  slug: string; number: string; name: string; type: string; description: string;
  contribution: string; stack: string[]; theme: string; status: string;
  href: string | null; image: string; imageAlt: string; problem: string;
  approach: string; outcome: string;
  gallery?: { src: string; alt: string; title: string; copy: string }[];
};

export const projects: Project[] = [
  {
    slug: "be1space", number: "01", name: "Be1Space", type: "Product · Full stack · Accessibility",
    description: "A full-stack study-space discovery platform designed to make it easier for NYU students to find affordable, accessible places to work across New York City. Students can explore locations, filter spaces around their needs, save favorites, and manage a personalized profile instead of searching across scattered resources.",
    contribution: "Developed responsive discovery, location-browsing, favorites, authentication, and profile experiences with Next.js and React. Connected the frontend to FastAPI REST endpoints and Supabase for persistent, real-time data, while using dynamic routing and accessibility-minded interface patterns to create a cohesive experience from search to saved space.",
    stack: ["Next.js", "React", "FastAPI", "Supabase", "REST APIs"], theme: "belspace", status: "Student product",
    href: "https://be1space.vercel.app/", image: "/projects/be1space.png", imageAlt: "Be1Space landing page with a starry navy background and Find Your Perfect Space headline",
    problem: "NYU students often piece together study-space information from scattered sources, with few reliable ways to compare affordability, accessibility, atmosphere, and location in one place.",
    approach: "I treated discovery as an end-to-end product flow: browse and filter spaces, inspect useful details, authenticate, save favorites, and return to a personalized profile. The frontend and API layer were designed together so each interface state reflected real, persistent data.",
    outcome: "The result is a cohesive discovery experience that turns an open-ended search into a guided journey from finding a space to saving it for later.",
  },
  {
    slug: "hvac-margin-rescue", number: "02", name: "HVAC Margin Rescue", type: "Data · Analytics · Full stack",
    description: "A full-stack decision-support application built for a datathon that analyzes HVAC project data to identify financially at-risk projects. It surfaces margin, billing, and operational risk indicators so teams can recognize problems earlier and focus on the projects requiring attention.",
    contribution: "Connected the web dashboard to Python and FastAPI services for risk scoring, root-cause analysis, and recommendations. Translated project data into prioritized insights and recovery opportunities, then presented critical projects, margin performance, estimated recoverable value, and recommended actions in a clear decision-making interface.",
    stack: ["Python", "FastAPI", "React", "REST APIs"], theme: "hvac", status: "Datathon project",
    href: "https://the-hvac-margin-rescue-challenge.vercel.app/", image: "/projects/hvac-margin-rescue.png", imageAlt: "MarginGuard dashboard showing HVAC project risk, critical projects, warnings, and average margin",
    problem: "Dense financial and operational records make it difficult for HVAC teams to see which projects are losing margin, why that is happening, and where intervention could recover value.",
    approach: "We connected a React dashboard to Python and FastAPI services that score risk, surface root causes, and produce prioritized recommendations. I focused on translating those outputs into a hierarchy that supports fast decision-making.",
    outcome: "The dashboard helps a user move from a portfolio-level health check to the specific projects, risk indicators, and recommended actions that require attention.",
  },
  {
    slug: "eclipse", number: "03", name: "Eclipse at JGM Innovation", type: "AI · Frontend · Prompt engineering",
    description: "An internal AI-powered workspace developed during my internship to help JGM Innovation teams complete content, auditing, planning, and professional-development tasks through one chatbot experience. Reusable commands turn complex team processes into guided workflows for outputs such as dashboards, briefs, social posts, and résumé feedback.",
    contribution: "Built and refined responsive chatbot interfaces with JavaScript, HTML, and CSS across authentication, workspace, messaging, and light/dark theme experiences. Engineered and tested prompts for reusable AI features, then created automated data workflows with Zapier, Google Sheets, Apps Script, and CSV datasets to ingest, transform, and prepare information for AI-assisted use.",
    stack: ["JavaScript", "HTML/CSS", "Prompt engineering", "Apps Script", "Zapier"], theme: "eclipse", status: "Internship experience", href: null,
    image: "/projects/eclipse.png", imageAlt: "JGM Eclipse sign-in interface with a soft blue and pink gradient surrounding a glass-like login card",
    problem: "Internal teams needed a more consistent way to access AI-assisted workflows for content, audits, planning, and professional-development tasks without recreating complex prompts each time.",
    approach: "I worked across the product surface: responsive authentication and chat interfaces, reusable prompts, light and dark themes, and automated data preparation workflows that made structured information usable by AI features.",
    outcome: "Eclipse brought repeatable team workflows into one approachable workspace while establishing a clearer visual system and more consistent interaction patterns.",
    gallery: [
      { src: "/projects/eclipse.png", alt: "Eclipse authentication interface", title: "Authentication", copy: "A focused Microsoft sign-in flow that makes enterprise access feel calm and approachable." },
      { src: "/projects/eclipse-chat-light.png", alt: "Eclipse chatbot workspace in light mode", title: "Chat workspace", copy: "Conversation history, reusable commands, and messaging controls organized into a clear workspace." },
      { src: "/projects/eclipse-chat-dark.png", alt: "Eclipse chatbot workspace in dark mode", title: "Dark mode", copy: "A restrained dark visual system with readable hierarchy and consistent component states." },
    ],
  },
];

export const capabilities = [
  { number: "01", title: "Build products", copy: "Responsive, accessible interfaces connected to dependable backend services.", tools: ["React", "Next.js", "FastAPI", "REST APIs", "Supabase"] },
  { number: "02", title: "Work with data", copy: "Analysis and decision-support experiences that make complex information understandable.", tools: ["Python", "pandas", "NumPy", "SQL", "Matplotlib"] },
  { number: "03", title: "Shape AI workflows", copy: "Reusable prompts and automated pipelines designed around real team processes.", tools: ["Prompt engineering", "Apps Script", "Zapier", "CSV workflows"] },
  { number: "04", title: "Design thoughtfully", copy: "Product experiences grounded in accessibility, hierarchy, and intentional visual systems.", tools: ["Figma", "UI systems", "Accessibility", "Git", "GitHub"] },
];
