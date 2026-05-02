import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, ChevronDown, ChevronUp, Code } from 'lucide-react';
import { useState } from 'react';
import type { IconType } from 'react-icons';
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiVite,
  SiNodedotjs, SiExpress, SiNestjs,
  SiGo, SiFastapi, SiPython,
  SiPostgresql, SiMongodb, SiRedis, SiMysql, SiSqlite,
  SiPrisma, SiDrizzle,
  SiDocker, SiGithubactions, SiVercel , SiGooglecloud, SiKubernetes, SiTerraform, SiNginx,
  SiOpenai, SiTensorflow, SiPytorch, SiLangchain,SiHuggingface ,
  SiExpo, SiFlutter, SiGooglebigquery,
  SiApachekafka, SiApacheairflow, SiPandas, SiGrafana,
  SiSnowflake, SiClickhouse, SiFirebase, SiSupabase,SiMetabase ,SiDbt 
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

/* ─────────────────────────── types ─────────────────────────── */
interface TechItem {
  name: string;
  icon?: IconType;
  color: string;       // icon hex colour
  bg: string;          // tailwind bg/border classes
  text: string;        // tailwind text class
}

interface TechCategory {
  label: string;
  items: TechItem[];
}

interface FaqEntry {
  q: string;
  a: string;
}

interface ServiceDetail {
  title: string;
  tagline: string;
  description: string;
  accentFrom: string;
  accentTo: string;
  techCategories: TechCategory[];
  faqs: FaqEntry[];
}

/* ─────────────────────── tech helper ───────────────────────── */
const T = (
  name: string,
  icon: IconType | undefined,
  color: string,
  bg: string,
  text: string,
): TechItem => ({ name, icon, color, bg, text });

/* ──────────────────────── tech lists ───────────────────────── */
const FRONTEND: TechItem[] = [
  T('React',        SiReact,       '#61DAFB', 'bg-cyan-500/10 border border-cyan-500/25',     'text-cyan-300'),
  T('Next.js',      SiNextdotjs,   '#FFFFFF', 'bg-slate-500/10 border border-slate-500/25',   'text-slate-200'),
  T('TypeScript',   SiTypescript,  '#3178C6', 'bg-blue-500/10 border border-blue-500/25',     'text-blue-300'),
  T('JavaScript',   SiJavascript,  '#F7DF1E', 'bg-yellow-500/10 border border-yellow-500/25', 'text-yellow-300'),
  T('Tailwind CSS', SiTailwindcss, '#06B6D4', 'bg-teal-500/10 border border-teal-500/25',     'text-teal-300'),
  T('Vite',         SiVite,        '#646CFF', 'bg-purple-500/10 border border-purple-500/25', 'text-purple-300'),
];

const BACKEND_NODE: TechItem[] = [
  T('Node.js',    SiNodedotjs,  '#339933', 'bg-green-500/10 border border-green-500/25',  'text-green-300'),
  T('Express',    SiExpress,    '#FFFFFF', 'bg-slate-500/10 border border-slate-500/25',  'text-slate-200'),
  T('NestJS',     SiNestjs,     '#E0234E', 'bg-red-500/10 border border-red-500/25',      'text-red-300'),
  T('TypeScript', SiTypescript, '#3178C6', 'bg-blue-500/10 border border-blue-500/25',    'text-blue-300'),
];

const BACKEND_GO: TechItem[] = [
  T('Golang', SiGo, '#00ADD8', 'bg-cyan-500/10 border border-cyan-500/25',   'text-cyan-300'),
  T('Gin',    SiGo, '#00ADD8', 'bg-teal-500/10 border border-teal-500/25',   'text-teal-300'),
  T('GORM',   SiGo, '#00ADD8', 'bg-indigo-500/10 border border-indigo-500/25','text-indigo-300'),
];

const BACKEND_PYTHON: TechItem[] = [
  T('FastAPI',  SiFastapi, '#009688', 'bg-emerald-500/10 border border-emerald-500/25', 'text-emerald-300'),
  T('Python',   SiPython,  '#3776AB', 'bg-yellow-500/10 border border-yellow-500/25',  'text-yellow-300'),
  T('Pydantic', SiPython,  '#E92063', 'bg-orange-500/10 border border-orange-500/25',  'text-orange-300'),
];

const DBS: TechItem[] = [
  T('PostgreSQL', SiPostgresql, '#4169E1', 'bg-blue-500/10 border border-blue-500/25',   'text-blue-300'),
  T('MongoDB',    SiMongodb,    '#47A248', 'bg-green-500/10 border border-green-500/25', 'text-green-300'),
  T('Redis',      SiRedis,      '#FF4438', 'bg-red-500/10 border border-red-500/25',     'text-red-300'),
  T('MySQL',      SiMysql,      '#4479A1', 'bg-orange-500/10 border border-orange-500/25','text-orange-300'),
  T('SQLite',     SiSqlite,     '#003B57', 'bg-slate-500/10 border border-slate-500/25', 'text-slate-300'),
];

const ORMS: TechItem[] = [
  T('Prisma',      SiPrisma,   '#2D3748', 'bg-indigo-500/10 border border-indigo-500/25', 'text-indigo-300'),
  T('TypeORM',     SiNestjs,   '#E0234E', 'bg-purple-500/10 border border-purple-500/25', 'text-purple-300'),
  T('Mongoose',    SiMongodb,  '#47A248', 'bg-green-500/10 border border-green-500/25',   'text-green-300'),
  T('Drizzle ORM', SiDrizzle,  '#C5F74F', 'bg-yellow-500/10 border border-yellow-500/25', 'text-yellow-300'),
  T('SQLAlchemy',  SiPython,   '#3776AB', 'bg-blue-500/10 border border-blue-500/25',     'text-blue-300'),
];

const DEVOPS: TechItem[] = [
  T('Docker',         SiDocker,         '#2496ED', 'bg-sky-500/10 border border-sky-500/25',     'text-sky-300'),
  T('GitHub Actions', SiGithubactions,  '#2088FF', 'bg-slate-500/10 border border-slate-500/25', 'text-slate-200'),
  T('Vercel',         SiVercel,         '#FFFFFF', 'bg-slate-500/10 border border-slate-500/25', 'text-slate-300'),
  T('AWS',            FaAws , '#FF9900', 'bg-orange-500/10 border border-orange-500/25','text-orange-300'),
];

const AI_LIBS: TechItem[] = [
  T('LangChain',   SiLangchain ,   '#1C3C3C', 'bg-emerald-500/10 border border-emerald-500/25', 'text-emerald-300'),
  T('OpenAI SDK',  SiOpenai,    '#412991', 'bg-slate-500/10 border border-slate-500/25',     'text-slate-200'),
  T('TensorFlow',  SiTensorflow,'#FF6F00', 'bg-orange-500/10 border border-orange-500/25',   'text-orange-300'),
  T('PyTorch',     SiPytorch,   '#EE4C2C', 'bg-red-500/10 border border-red-500/25',         'text-red-300'),
  T('HuggingFace', SiHuggingface ,   '#FFD21E', 'bg-yellow-500/10 border border-yellow-500/25',   'text-yellow-300'),
];

const MOBILE_LIBS: TechItem[] = [
  T('React Native', SiReact,      '#61DAFB', 'bg-cyan-500/10 border border-cyan-500/25',    'text-cyan-300'),
  T('Flutter',      SiFlutter,    '#02569B', 'bg-sky-500/10 border border-sky-500/25',      'text-sky-300'),
  T('Expo',         SiExpo,       '#FFFFFF', 'bg-slate-500/10 border border-slate-500/25',  'text-slate-200'),
  T('TypeScript',   SiTypescript, '#3178C6', 'bg-blue-500/10 border border-blue-500/25',    'text-blue-300'),
  T('Zustand',      undefined,    '#F36D00', 'bg-orange-500/10 border border-orange-500/25','text-orange-300'),
];

/* ────────────────────── service data ───────────────────────── */
const SERVICES: Record<string, ServiceDetail> = {
  'web-applications': {
    title: 'Web Applications',
    tagline: 'Full-stack, production-grade web products',
    description:
      'We architect and ship scalable web applications using the modern JS/TS ecosystem. From a lean landing page to a complex SaaS platform, every layer — frontend, API, database — is purpose-built for performance and maintainability.',
    accentFrom: 'from-indigo-500',
    accentTo: 'to-purple-500',
    techCategories: [
      { label: 'Frontend', items: FRONTEND },
      { label: 'Backend (Node)', items: BACKEND_NODE },
      { label: 'Backend (Go)', items: BACKEND_GO },
      { label: 'Databases', items: DBS },
      { label: 'ORMs & Query Builders', items: ORMS },
      { label: 'DevOps & Deployment', items: DEVOPS },
    ],
    faqs: [
      {
        q: 'Which framework do you default to for new projects?',
        a: 'Next.js + TypeScript for most full-stack web apps — it gives us SSR/SSG, API routes, and first-class Vercel deployment out of the box. For pure APIs we lean on NestJS or Golang depending on scale requirements.',
      },
      {
        q: 'Do you support existing codebases or greenfield only?',
        a: 'Both. We regularly join ongoing projects to add features, improve architecture, or rescue a stalled MVP. We start with a brief audit so we understand the codebase before touching anything.',
      },
      {
        q: 'Which database should I choose?',
        a: 'PostgreSQL for anything that benefits from relations, constraints, or ACID guarantees. MongoDB when the schema is truly dynamic. Redis as a caching layer on top of either.',
      },
      {
        q: 'How do you handle auth?',
        a: 'We implement JWT-based sessions or OAuth via providers (Google, GitHub) with libraries like Passport or NextAuth/Auth.js. For enterprise we can integrate SAML/SSO.',
      },
      {
        q: 'Can you build both the frontend and backend?',
        a: 'Yes — we are a full-stack team. You get one point of contact for the entire product, which removes the coordination overhead between separate frontend and backend contractors.',
      },
    ],
  },

  'ai-machine-learning': {
    title: 'AI & Machine Learning',
    tagline: 'Intelligent systems that learn, adapt, and deliver value',
    description:
      'From fine-tuning LLMs and building RAG pipelines to training custom vision or NLP models, we turn your data into competitive advantages. Our AI work is always grounded in practical ROI — not technology for its own sake.',
    accentFrom: 'from-violet-500',
    accentTo: 'to-pink-500',
    techCategories: [
      { label: 'AI / ML Libraries', items: AI_LIBS },
      { label: 'Backend (Python)', items: BACKEND_PYTHON },
      { label: 'Backend (Node)', items: BACKEND_NODE },
      {
        label: 'Databases & Vector Stores', items: [
          ...DBS,
          T('Pinecone', undefined, '#000000', 'bg-green-500/10 border border-green-500/25', 'text-green-300'),
          T('Weaviate', undefined, '#3D9970', 'bg-purple-500/10 border border-purple-500/25', 'text-purple-300'),
        ],
      },
      { label: 'DevOps & Deployment', items: DEVOPS },
    ],
    faqs: [
      {
        q: 'Do I need a large dataset to get started?',
        a: 'Not always. Many use-cases can be solved by prompting large pre-trained models (GPT-4, Claude, Gemini) with retrieval-augmented generation rather than training from scratch. We assess your data situation first and recommend the right approach.',
      },
      {
        q: 'What is a RAG pipeline?',
        a: 'Retrieval-Augmented Generation connects an LLM to your own documents or database. Instead of the model guessing, it retrieves relevant context at query time and grounds its answer in your data — dramatically reducing hallucinations.',
      },
      {
        q: 'Which LLM provider do you work with?',
        a: 'We are provider-agnostic — OpenAI, Anthropic (Claude), Google Gemini, Mistral, and open-source models via HuggingFace. We pick based on cost, latency, and capability for the specific task.',
      },
      {
        q: 'How do you deploy ML models to production?',
        a: 'FastAPI wraps the model as a REST/gRPC service, containerised with Docker, and deployed on AWS (SageMaker or ECS) or GCP — with autoscaling and monitoring baked in.',
      },
      {
        q: 'Can you integrate AI into our existing product?',
        a: 'Absolutely. We regularly add AI features (smart search, summarisation, recommendation, copilots) to existing web or mobile products without a full rebuild.',
      },
    ],
  },

  'mobile-development': {
    title: 'Mobile Development',
    tagline: 'Cross-platform apps that feel truly native',
    description:
      'We build iOS and Android applications with React Native and Expo — sharing up to 95% of the codebase across platforms while delivering smooth 60fps animations and native device APIs. Backed by the same Node / Go backends we use for web.',
    accentFrom: 'from-sky-500',
    accentTo: 'to-indigo-500',
    techCategories: [
      { label: 'Mobile', items: MOBILE_LIBS },
      { label: 'Backend (Node)', items: BACKEND_NODE },
      { label: 'Backend (Go)', items: BACKEND_GO },
      { label: 'Databases', items: DBS },
      { label: 'ORMs & Query Builders', items: ORMS },
      { label: 'DevOps & Deployment', items: DEVOPS },
    ],
    faqs: [
      {
        q: 'React Native or Flutter — which do you use?',
        a: 'We specialise in React Native with Expo. For teams already using React/TypeScript on the web it is the most productive choice, and the Expo ecosystem has matured enormously in recent years.',
      },
      {
        q: 'Can you share code between a web app and a mobile app?',
        a: 'Yes — with a monorepo (Nx or Turborepo) we can share business logic, API clients, and even some UI components between a Next.js web app and a React Native app.',
      },
      {
        q: 'How do you handle push notifications?',
        a: 'Expo Notifications for cross-platform push, backed by Firebase Cloud Messaging (FCM) for Android and APNs for iOS. We wire this into your backend so you can trigger notifications server-side.',
      },
      {
        q: 'Do you publish to the App Store and Google Play?',
        a: 'Yes, end-to-end. We set up EAS Build and Submit (Expo Application Services) so releases to both stores are automated via CI/CD.',
      },
      {
        q: 'How long does it take to build a mobile MVP?',
        a: 'A focused MVP with auth, core features, and App Store submission typically takes 6–10 weeks. We scope it tightly so you can start validating with real users quickly.',
      },
    ],
  },

  'rapid-prototyping': {
    title: 'Rapid Prototyping',
    tagline: 'From idea to interactive in days, not months',
    description:
      'We compress the idea-to-validation cycle with lean engineering practices. Using the fastest tools in the ecosystem we build working prototypes and clickable demos that are real enough to show investors, test with users, and iterate on immediately.',
    accentFrom: 'from-amber-500',
    accentTo: 'to-orange-500',
    techCategories: [
      { label: 'Frontend', items: FRONTEND },
      { label: 'Backend (Node)', items: BACKEND_NODE },
      { label: 'Backend (Python)', items: BACKEND_PYTHON },
      {
        label: 'Databases', items: [
          T('PostgreSQL', SiPostgresql, '#4169E1', 'bg-blue-500/10 border border-blue-500/25',    'text-blue-300'),
          T('MongoDB',    SiMongodb,    '#47A248', 'bg-green-500/10 border border-green-500/25',  'text-green-300'),
          T('Supabase',   SiSupabase,   '#3ECF8E', 'bg-emerald-500/10 border border-emerald-500/25','text-emerald-300'),
          T('Firebase',   SiFirebase,   '#FFCA28', 'bg-yellow-500/10 border border-yellow-500/25','text-yellow-300'),
        ],
      },
      { label: 'ORMs & Query Builders', items: ORMS },
      { label: 'DevOps & Deployment', items: DEVOPS },
    ],
    faqs: [
      {
        q: 'How fast is "rapid"?',
        a: 'A basic interactive prototype in 3–5 days. A testable MVP with auth, core features, and a deployed URL in 2–4 weeks. Speed comes from ruthless scope discipline, not cutting corners on code quality.',
      },
      {
        q: 'What is the difference between a prototype and an MVP?',
        a: 'A prototype validates the concept and UX flow — it might use mock data. An MVP is a fully functional, deployed product with real backend logic that actual users can sign up and use.',
      },
      {
        q: 'Can a prototype become the production codebase?',
        a: 'Yes. We write prototypes with production-quality patterns so they are a solid foundation for v1. We avoid throwaway code that creates technical debt before you even launch.',
      },
      {
        q: 'Do you help with product scoping?',
        a: 'Absolutely — a scoping session is typically the first step. We help you identify the one core flow that needs to work for your hypothesis to be validated, and cut everything else.',
      },
      {
        q: 'What if requirements change mid-build?',
        a: 'We work in short sprints and expect change. We flag the impact on scope and timeline transparently and adjust together — no surprise invoices.',
      },
    ],
  },

  'cloud-security': {
    title: 'Cloud & Security',
    tagline: 'Resilient infrastructure built to scale safely',
    description:
      'We design and operate cloud infrastructure that grows with your product — containerised services, CI/CD pipelines, zero-trust networking, and proactive security controls. Your users stay up; your data stays safe.',
    accentFrom: 'from-emerald-500',
    accentTo: 'to-teal-500',
    techCategories: [
      { label: 'Backend (Go)', items: BACKEND_GO },
      { label: 'Backend (Node)', items: BACKEND_NODE },
      { label: 'Databases', items: DBS },
      {
        label: 'DevOps & Cloud', items: [
          T('Docker',         SiDocker,            '#2496ED', 'bg-sky-500/10 border border-sky-500/25',       'text-sky-300'),
          T('Kubernetes',     SiKubernetes,        '#326CE5', 'bg-blue-500/10 border border-blue-500/25',     'text-blue-300'),
          T('Terraform',      SiTerraform,         '#844FBA', 'bg-purple-500/10 border border-purple-500/25', 'text-purple-300'),
          T('GitHub Actions', SiGithubactions,     '#2088FF', 'bg-slate-500/10 border border-slate-500/25',  'text-slate-200'),
          T('AWS',            FaAws,               '#FF9900', 'bg-orange-500/10 border border-orange-500/25','text-orange-300'),
          T('GCP',            SiGooglecloud,       '#4285F4', 'bg-blue-500/10 border border-blue-500/25',    'text-blue-300'),
          T('Vercel',         SiVercel,            '#FFFFFF', 'bg-slate-500/10 border border-slate-500/25',  'text-slate-300'),
          T('Nginx',          SiNginx,             '#009639', 'bg-green-500/10 border border-green-500/25',  'text-green-300'),
        ],
      },
    ],
    faqs: [
      {
        q: 'Which cloud provider do you work with?',
        a: "Primarily AWS and GCP, with Vercel/Railway for edge-first or simpler deployments. We recommend based on your team's familiarity, budget, and compliance requirements.",
      },
      {
        q: 'How do you handle secrets and environment variables?',
        a: 'AWS Secrets Manager or GCP Secret Manager at the infra layer, with environment-specific injection at deploy time. Never in source control.',
      },
      {
        q: 'Do you set up monitoring and alerting?',
        a: 'Yes — Prometheus + Grafana or Datadog for metrics, structured logging via Loki or CloudWatch, and PagerDuty / Slack alerts on error spikes and latency degradations.',
      },
      {
        q: 'What security practices do you follow?',
        a: 'OWASP Top 10 hardening, dependency scanning (Snyk), container image scanning, least-privilege IAM roles, VPC isolation, and automated penetration testing baselines.',
      },
      {
        q: 'Can you migrate an existing app to the cloud?',
        a: 'Yes. We perform a lift-and-shift first to stop the bleeding, then incrementally containerise and modernise the architecture without a big-bang rewrite.',
      },
    ],
  },

  'data-analytics': {
    title: 'Data Analytics',
    tagline: 'Turn raw data into decisions',
    description:
      'We build the pipelines, warehouses, and dashboards that make your data legible and actionable — from ingestion and transformation to real-time visualisation and self-serve BI tools for your team.',
    accentFrom: 'from-rose-500',
    accentTo: 'to-pink-500',
    techCategories: [
      { label: 'Backend (Python)', items: BACKEND_PYTHON },
      { label: 'Backend (Node)', items: BACKEND_NODE },
      {
        label: 'Databases & Warehouses', items: [
          ...DBS,
          T('BigQuery',   SiGooglebigquery ,     '#669DF6', 'bg-blue-500/10 border border-blue-500/25',   'text-blue-300'),
          T('Snowflake',  SiSnowflake,   '#29B5E8', 'bg-sky-500/10 border border-sky-500/25',     'text-sky-300'),
          T('ClickHouse', SiClickhouse,  '#FFCC01', 'bg-yellow-500/10 border border-yellow-500/25','text-yellow-300'),
        ],
      },
      {
        label: 'Data Tools', items: [
          T('Apache Kafka', SiApachekafka,  '#231F20', 'bg-orange-500/10 border border-orange-500/25', 'text-orange-300'),
          T('dbt',          SiDbt ,      '#FF694B', 'bg-orange-500/10 border border-orange-500/25', 'text-orange-200'),
          T('Airflow',      SiApacheairflow,'#017CEE', 'bg-red-500/10 border border-red-500/25',       'text-red-300'),
          T('Pandas',       SiPandas,       '#150458', 'bg-blue-500/10 border border-blue-500/25',     'text-blue-300'),
          T('Grafana',      SiGrafana,      '#F46800', 'bg-yellow-500/10 border border-yellow-500/25', 'text-yellow-300'),
          T('Metabase',     SiMetabase ,      '#509EE3', 'bg-indigo-500/10 border border-indigo-500/25', 'text-indigo-300'),
        ],
      },
      { label: 'DevOps & Deployment', items: DEVOPS },
    ],
    faqs: [
      {
        q: 'Where does the data come from?',
        a: 'Wherever it lives — your product database, third-party APIs, flat files, event streams (Kafka, Segment). We build the connectors and normalise everything into a clean data model.',
      },
      {
        q: 'Do you build custom dashboards or use off-the-shelf BI tools?',
        a: 'Both. Metabase or Grafana for internal BI with minimal custom work. Custom React dashboards for customer-facing analytics or pixel-perfect requirements.',
      },
      {
        q: 'How do you handle real-time vs batch analytics?',
        a: 'Batch with dbt + Airflow for daily/hourly aggregations. Kafka + ClickHouse or TimescaleDB for sub-second streaming analytics. We pick the right architecture for your latency needs and budget.',
      },
      {
        q: 'Can non-technical team members use the dashboards?',
        a: 'That is the goal. We build self-serve dashboards with filters and drill-downs so your team can answer their own questions without a data engineer in the loop for every query.',
      },
      {
        q: 'Is our data safe during the engagement?',
        a: 'We work with anonymised or synthetic data during development wherever possible. For production data access we sign NDAs and operate under strict least-privilege principles.',
      },
    ],
  },
};

/* ─────────────────────── sub-components ────────────────────── */
function TechBadge({ item }: { item: TechItem }) {
  const Icon = item.icon;
  return (
    <div className={`flex flex-col items-center justify-center gap-3 p-4 rounded-2xl border ${item.bg} hover:scale-105 transition-transform duration-200 cursor-default`}>
      <div className="flex items-center justify-center w-16 h-16">
        {Icon
          ? <Icon style={{ color: item.color, width: '100%', height: '100%' }} />
          : <Code style={{ color: item.color, width: '100%', height: '100%' }} className="opacity-50" />}
      </div>
      <span className={`text-xs font-semibold text-center leading-tight ${item.text}`}>{item.name}</span>
    </div>
  );
}

function FaqAccordion({ faq }: { faq: FaqEntry }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-800 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-800/40 transition-colors"
      >
        <span className="text-slate-100 font-medium pr-4">{faq.q}</span>
        {open
          ? <ChevronUp className="w-5 h-5 text-indigo-400 flex-shrink-0" />
          : <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-6 pb-5 text-slate-400 leading-relaxed border-t border-slate-800 pt-4">
          {faq.a}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────── page ──────────────────────────── */
export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? SERVICES[slug] : undefined;

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 pt-24 px-6">
        <p className="text-slate-400 text-lg">Service not found.</p>
        <Link to="/" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-200 text-sm mb-10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to services
        </Link>

        {/* Hero */}
        <div className="mb-20">
          <p className={`text-transparent bg-clip-text bg-gradient-to-r ${service.accentFrom} ${service.accentTo} font-semibold text-sm tracking-widest uppercase mb-4`}>
            What We Build
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-100 leading-tight mb-5">
            {service.title}
          </h1>
          <p className={`text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r ${service.accentFrom} ${service.accentTo} mb-6`}>
            {service.tagline}
          </p>
          <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
            {service.description}
          </p>
        </div>

        {/* Tech stack */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold text-slate-100 mb-2">Tech Stack</h2>
          <p className="text-slate-500 mb-10">The tools and technologies we use to build this service.</p>
          <div className="space-y-10">
            {service.techCategories.map((cat) => (
              <div key={cat.label}>
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
                  {cat.label}
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                  {cat.items.map((item) => (
                    <TechBadge key={item.name} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-24" />

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-slate-100 mb-2">Frequently Asked Questions</h2>
          <p className="text-slate-500 mb-10">Common questions about our {service.title.toLowerCase()} work.</p>
          <div className="space-y-3">
            {service.faqs.map((faq) => (
              <FaqAccordion key={faq.q} faq={faq} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className={`rounded-2xl bg-gradient-to-br ${service.accentFrom}/10 ${service.accentTo}/5 border border-slate-700/60 p-10 flex flex-col md:flex-row items-center justify-between gap-6`}>
          <div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">Ready to build?</h3>
            <p className="text-slate-400">Tell us about your project and we will get back to you within 24 hours.</p>
          </div>
          <Link
            to="/discuss"
            className={`flex items-center gap-2 bg-gradient-to-r ${service.accentFrom} ${service.accentTo} text-white px-8 py-3.5 rounded-full font-medium hover:scale-105 transition-transform hover:shadow-lg whitespace-nowrap`}
          >
            Discuss a Project
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
