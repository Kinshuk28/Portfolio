export const nav = [
  { id: "about", num: "01", label: "About" },
  { id: "experience", num: "02", label: "Experience" },
  { id: "skills", num: "03", label: "Skills" },
  { id: "work", num: "04", label: "Work" },
  { id: "leadership", num: "05", label: "Leadership" },
  { id: "contact", num: "06", label: "Contact" },
] as const

export const stats = [
  { to: 99.07, decimals: 2, suffix: "%", label: "CAT Percentile", sub: "among 3.3 lakh candidates" },
  { to: 240, decimals: 0, suffix: "K+", label: "Data Points", sub: "used to fine-tune Apple's LLM" },
  { to: 25, decimals: 0, suffix: "%", label: "Fewer Complaints", sub: "via LLM alignment work" },
  { to: 600, decimals: 0, suffix: "+", label: "Community Members", sub: "engaged through events" },
]

export type Entry = {
  date: string
  title: string
  org: string
  bullets?: string[]
  body?: string
}

export const experience: Entry[] = [
  {
    date: "Apr–May 2026",
    title: "Process Design & Transformation Intern",
    org: "IndiaMART InterMESH Ltd.",
    bullets: [
      "Built an HRBP dashboard for 2,400+ records, eliminating backend costs and cutting reporting time by 50%",
      "Engineered AI context from 26+ cross-tabs, cutting ad-hoc analysis from hours to ~10 seconds per query",
      "Designed a 5-step form with 9 smart filters routing questions by context, cutting free-text responses by 60%",
      "Benchmarked data collection against 6 sources including Gallup, McKinsey, and HBR, identifying 7 critical gaps",
      "Engineered a 3-stage AI-powered n8n pipeline to screen 1,000+ candidates with live score tracking",
      "Automated candidate shortlisting and follow-up, cutting manual processing by ~75% (130+ hours per month)",
    ],
  },
  {
    date: "2025–Present",
    title: "MBA Candidate",
    org: "Indian Institute of Management, Udaipur",
    bullets: [
      "Pursuing an MBA with a focus on strategy, analytics, and product",
      "Scored 99.11 %ile (XAT Decision-Making) and 99.07 %ile (CAT)",
      "Completed the McKinsey Forward Program and an IBM Product Management certification",
    ],
  },
  {
    date: "Sep 2024–Feb 2025",
    title: "Business Analyst",
    org: "Turing Enterprises Inc.",
    bullets: [
      "Implemented RLHF to fine-tune models, increasing response accuracy by 12–18%",
      "Trained Apple's LLM on 240K+ data points, cutting latency 15% and improving consistency 20%",
      "Analyzed 10+ model parameters and translated findings into executive reports across 5+ teams",
    ],
  },
  {
    date: "Jun–Jul 2023",
    title: "Summer Trainee",
    org: "Delhi Metro Rail Corporation Ltd.",
    bullets: [
      "Evaluated 8 metro components including bogies, brake systems, HVAC and pneumatic controls",
      "Compiled a 25+ page technical report on subsystem operations, failures, and safety",
    ],
  },
  {
    date: "Jun–Jul 2022",
    title: "Summer Trainee",
    org: "Bharat Heavy Electricals Limited",
    bullets: [
      "Analyzed 10+ stages of turbine manufacturing and testing",
      "Assessed quality control protocols across 15+ critical components",
    ],
  },
  {
    date: "2020–2024",
    title: "B.Tech, Mechanical Engineering",
    org: "Netaji Subhas University of Technology",
    bullets: [
      "Graduated with hands-on projects spanning machining research and 3D printing",
      "Ranked in the top 6 percentile of JEE Mains among 10 lakh+ candidates",
    ],
  },
]

export const leadership: Entry[] = [
  {
    date: "2024",
    title: "Organizing Member",
    org: "Peña Madridista, Delhi",
    body: "Led the planning and execution of 10+ community activities, including 7+ match screenings for 600+ Real Madrid fans, partnering with 5+ organizations and venues across Delhi.",
  },
  {
    date: "2023",
    title: "PR Head",
    org: "Team Daedulus Racing, NSUT",
    body: "Led marketing and outreach for NSUT's all-terrain vehicle racing team, boosting social media reach by 250% and helping the team place Top 30 out of 300+ institutions at SAE BAJA India.",
  },
]

export const badges = [
  "99.11%ile XAT Decision-Making",
  "99.07%ile CAT",
  "Top 6%ile JEE Mains",
  "Top 79/867 Case Competition",
  "McKinsey Forward Program",
  "IBM Product Management Certified",
]

export const skills = [
  {
    title: "AI & Analytics",
    items: ["RLHF Fine-Tuning", "Model Evaluation", "LLM Alignment", "ANOVA", "Genetic Algorithms", "Executive Reporting"],
  },
  {
    title: "Strategy & Business",
    items: ["Business Analysis", "Product Management", "Case Competitions", "Financial Markets", "Cross-functional Collaboration"],
  },
  {
    title: "Engineering & Design",
    items: ["Mechanical Design", "CAD", "3D Printing (FDM)", "Systems Analysis", "Quality Control"],
  },
  {
    title: "Tools & Certifications",
    items: ["Lean Six Sigma (Green Belt, in progress)", "McKinsey Forward Program", "IBM Product Management Cert."],
  },
]

export const work = [
  {
    index: "01",
    title: "Fine-Tuning Apple's LLM",
    tag: "AI / ML",
    org: "Turing Enterprises Inc.",
    body: "Trained Apple's LLM on 240K+ data points via RLHF, cutting latency 15%, improving consistency 20%, and reducing user complaints by 25% through better alignment with user intent.",
  },
  {
    index: "02",
    title: "FDM-Based 3D Printer",
    tag: "Engineering",
    org: "Personal Project",
    body: "Designed and assembled a 3D printer end-to-end (frame, stepper motors, heating elements, and calibration), achieving a 30% cost reduction versus commercial alternatives.",
  },
  {
    index: "03",
    title: "Surface Roughness Optimization of SS321",
    tag: "Research",
    org: "Academic Research",
    body: "Used ANOVA and a Genetic Algorithm to optimize cutting speed, feed rate, and depth of cut, achieving a 29% reduction in surface roughness on stainless steel.",
  },
  {
    index: "04",
    title: "Metro Systems Evaluation",
    tag: "Engineering",
    org: "Delhi Metro Rail Corporation",
    body: "Evaluated 8 metro subsystems, including regenerative braking and air suspension, and compiled a 25+ page technical report on operations, failures, and safety.",
  },
]

export const contact = {
  email: "kinshukcr7@gmail.com",
  linkedin: "https://www.linkedin.com/in/kinshuk-khandelwal/",
}
