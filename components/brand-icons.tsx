import React from 'react';

// 1. JavaScript (Yellow square)
export const JavaScriptIcon = () => (
  <div className="h-5 w-5 bg-[#F7DF1E] rounded-md flex items-end justify-end p-0.5 select-none shrink-0">
    <span className="text-[8px] font-black text-black font-sans leading-none tracking-tighter">JS</span>
  </div>
);

// 2. Java (Coffee cup)
export const JavaIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 15c0 2 3.5 3 7 3s7-1 7-3M6.5 12.5c0 1.2 2.5 2 5.5 2s5.5-.8 5.5-2" stroke="#5382A1" strokeWidth="1.5"/>
    <path d="M10.5 9c0-1.5 1-2.5 1-4 0 1.5-1.5 2.5-1.5 4zm3 0.5c0-1.2.8-2 0.8-3.2 0 1.2-1 2-1 3.2z" stroke="#F89820" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M17 12.5c2 0 3-1 3-2.2s-1-2.2-3-2.2" stroke="#5382A1" strokeWidth="1.5"/>
  </svg>
);

// 3. Python (Blue and yellow snakes)
export const PythonIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M 12 2 C 6.48 2, 6 2.5, 6 4.5 V 6.7 H 12 V 7.5 H 7.5 C 5.57 7.5, 5 8.1, 5 10.1 V 12.5 C 5 14.4, 5.57 15.1, 7.5 15.1 H 8 V 13.6 C 8 12.5, 8.9 11.6, 10 11.6 H 14 C 15.1 11.6, 16 10.7, 16 9.6 V 5 C 16 3, 14 2, 12 2 Z M 12 3.5 A 1 1 0 1 1 12 5 A 1 1 0 0 1 12 3.5 Z" fill="#3776AB"/>
    <path d="M 12 22 C 17.52 22, 18 21.5, 18 19.5 V 17.3 H 12 V 16.5 H 16.5 C 18.43 16.5, 19 15.9, 19 13.9 V 11.5 C 19 9.6, 18.43 8.9, 16.5 8.9 H 16 V 10.4 C 16 11.5, 15.1 12.4, 14 12.4 H 10 C 8.9 12.4, 8 13.3, 8 14.4 V 19 C 8 21, 10 22, 12 22 Z M 12 20.5 A 1 1 0 1 1 12 19 A 1 1 0 0 1 12 20.5 Z" fill="#FFE873"/>
  </svg>
);

// 4. SQL (Cylinders database)
export const SqlIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6c0 1.66 3.58 3 8 3s8-1.34 8-3-3.58-3-8-3-8 1.34-8 3zm0 6c0 1.66 3.58 3 8 3s8-1.34 8-3M4 18c0 1.66 3.58 3 8 3s8-1.34 8-3" stroke="#00758F" strokeWidth="1.5"/>
    <path d="M4 6v12M20 6v12" stroke="#00758F" strokeWidth="1.5"/>
  </svg>
);

// 5. HTML (Orange shield)
export const HtmlIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.5 2h17l-1.5 17L12 22l-7-3-1.5-17z" fill="#E34F26"/>
    <path d="M12 3.5V20l5.2-2.3 1.2-12.7H12z" fill="#F06529"/>
    <path d="M12 8.5H8.7l.2 2.5H12V14l-3-.8-.2-1.7H7.4l.3 3.5 4.3 1.2V8.5zm0-3.5H7.1l.1 1.5H12V5z" fill="#FFFFFF"/>
  </svg>
);

// 6. CSS (Blue shield)
export const CssIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.5 2h17l-1.5 17L12 22l-7-3-1.5-17z" fill="#1572B6"/>
    <path d="M12 3.5V20l5.2-2.3 1.2-12.7H12z" fill="#29ABE2"/>
    <path d="M12 5h4.8l-.5 4.5H12V11h2.7l-.3 3-2.4.7V17l4.3-1.2.6-6.3H12V5z" fill="#EBEBEB"/>
  </svg>
);

// 7. React.js (Rotating Atom)
export const ReactIcon = () => (
  <svg viewBox="-11.5 -10.2 23 20.4" className="h-5 w-5 shrink-0 animate-[spin_25s_linear_infinite]" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1"/>
    <ellipse rx="11" ry="4.2" transform="rotate(60)" stroke="#61DAFB" strokeWidth="1"/>
    <ellipse rx="11" ry="4.2" transform="rotate(120)" stroke="#61DAFB" strokeWidth="1"/>
    <circle r="2" fill="#61DAFB"/>
  </svg>
);

// 8. Tailwind CSS (Cyan waves)
export const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6.5c-2.3 0-3.8 1.2-4.5 3.5 1-.5 2-.3 2.5.5.4.6.9 1.4 1.9 1.4 2.3 0 3.8-1.2 4.5-3.5-1 .5-2 .3-2.5-.5-.4-.6-.9-1.4-1.9-1.4zm-4.5 6c-2.3 0-3.8 1.2-4.5 3.5 1-.5 2-.3 2.5.5.4.6.9 1.4 1.9 1.4 2.3 0 3.8-1.2 4.5-3.5-1 .5-2 .3-2.5-.5-.4-.6-.9-1.4-1.9-1.4z" fill="#38BDF8"/>
  </svg>
);

// 9. Redux Toolkit (Purple molecule)
export const ReduxIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L3.5 7v10L12 21.5l8.5-5V7L12 2z" stroke="#764ABC" strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="12" cy="7" r="2" fill="#764ABC"/>
    <circle cx="7.5" cy="15" r="2" fill="#764ABC"/>
    <circle cx="16.5" cy="15" r="2" fill="#764ABC"/>
    <path d="M12 9v3.5M9.2 13.5l2.8-2M14.8 13.5l-2.8-2" stroke="#764ABC" strokeWidth="1.2"/>
  </svg>
);

// 10. Node.js (Green hexagon)
export const NodeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 6.5v11L12 22l8-4.5v-11L12 2z" stroke="#339933" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M12 6.5v11M8 8.8v6.4M16 8.8v6.4" stroke="#339933" strokeWidth="1.2"/>
  </svg>
);

// 11. Express.js (Black background lowercase ex)
export const ExpressIcon = () => (
  <div className="h-5 w-5 rounded bg-black border border-neutral-800 flex items-center justify-center select-none shrink-0">
    <span className="text-[8px] font-sans text-white lowercase tracking-tighter">ex</span>
  </div>
);

// 12. REST APIs (Hexagon interface)
export const RestApiIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 6.5v11L12 22l8-4.5v-11L12 2z" stroke="#22C55E" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M12 8.5c-1.5 0-2.5 1-2.5 2.5 0 1.2 1 2 2.5 2 1.5 0 2-.8 2-1.5s-.8-1.5-2-1.5M10.5 15h3.5" stroke="#22C55E" strokeWidth="1.2"/>
  </svg>
);

// 13. Redis (Red layers)
export const RedisIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L3 6.5l9 4.5 9-4.5-9-4.5z" fill="#DC2626"/>
    <path d="M3 11.5l9 4.5 9-4.5M3 16.5l9 4.5 9-4.5" stroke="#991B1B" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M3 6.5v10l9 4.5v-10l-9-4.5zm18 0v10l-9 4.5v-10l9-4.5z" stroke="#B91C1C" strokeWidth="1"/>
  </svg>
);

// 14. WebSockets (Socket network)
export const WebSocketsIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4v4m0 8v4M4 12h4m8 0h4" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="4" stroke="#00E5FF" strokeWidth="1.5"/>
    <path d="M9.5 9.5l5 5m0-5l-5 5" stroke="#00E5FF" strokeWidth="1"/>
  </svg>
);

// 15. MySQL (Dolphin)
export const MysqlIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 12c-1.5-1.5-4-2.5-6.5-2.5-2 0-4 .6-5.5 1.6M12 9.5C9.5 9 6.5 9.5 4.5 11" stroke="#00758F" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M3.5 15.5c1.5.5 4.5.8 7.5.8 4.5 0 8.5-1.5 10.5-3.5-1-1.5-2.5-2.5-4.5-3" stroke="#00758F" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M17.5 7.5C16.5 5 14 3.5 11 3.5" stroke="#00758F" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// 16. MongoDB (Green Leaf)
export const MongoIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2c0 0-4.5 4.5-4.5 9s3 6.5 4.5 10c1.5-3.5 4.5-5.5 4.5-10s-4.5-9-4.5-9z" fill="#47A248"/>
    <path d="M12 2v19" stroke="#337234" strokeWidth="1"/>
    <path d="M12 6c-2 2-3 4-3 6s1 3 3 5V6z" fill="#3F9142"/>
  </svg>
);

// 17. PostgreSQL (Elephant)
export const PostgresIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C7 2 6 4.5 6 6.5s.5 4 2.5 4.5S11 9 12 9s3.5 2 3.5 2 1.5-2.5 1.5-4.5S16 2 12 2z" stroke="#336791" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M8.5 11C7 11.5 5 13.5 5 16s2.5 4.5 5.5 4.5 5.5-2 5.5-4.5-2-4.5-3.5-5" stroke="#336791" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

// 18. AWS (Amazon smile)
export const AwsIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.3 15.6c-.7.6-1.6.9-2.6.9-2.1 0-3.7-1.3-3.7-3.6 0-2.4 1.8-3.7 4-3.7 1 0 1.7.2 2.3.5v5.9zm-2.4-5.3c-1.3 0-2.2.8-2.2 2.2 0 1.2.7 2.1 2 2.1.8 0 1.6-.4 2.1-1v-3.3c-.5-.4-1.1-.6-1.9-.6z" fill="#FFFFFF"/>
    <path d="M13.5 18.5c1.5.5 3.5.7 5.5.7.8 0 1.7-.1 2.5-.3.4-.1.7-.4.5-.8s-.5-.5-.8-.4c-.7.2-1.5.3-2.2.3-1.8 0-3.6-.2-5-.7-.4-.1-.8.1-.9.5s.1.8.4.7z" fill="#FF9900"/>
    <path d="M12.5 17c.5.5.9.9 1.5 1.2.3.2.7 0 .8-.3s0-.7-.3-.8c-.5-.3-.9-.6-1.3-1-.3-.3-.8-.3-1 .1s.1.8.3.8z" fill="#FF9900"/>
  </svg>
);

// 19. Docker (Whale)
export const DockerIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 13.5c0 2 1.5 3 4 3h10c2.5 0 4-1 4-3 0-1.8-1-2.5-3-2.5h-1M6.5 11h1.5M9 11h1.5M11.5 11h1.5M14 11h1.5" stroke="#2496ED" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 8h1.5M12.5 8h1.5" stroke="#2496ED" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M11.2 5H12.7" stroke="#2496ED" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M17 11c1-1.5 2-2 3.5-2.2.3.8.3 1.8-.2 2.5-.5.7-1.3 1-3.3.7z" fill="#2496ED"/>
  </svg>
);

// 20. CI/CD (Infinite loop)
export const CiCdIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 12c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4-4 1.8-4 4zm8 0c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4-4 1.8-4 4z" stroke="#818CF8" strokeWidth="1.5"/>
    <path d="M12 8.5v3.5m0 0l1.5-1.5m-1.5 1.5l-1.5-1.5" stroke="#818CF8" strokeWidth="1.5"/>
  </svg>
);

// 21. Git (Git fork / diamond)
export const GitIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.3 10.7l9 9c.7.7 1.8.7 2.5 0l9-9c.7-.7.7-1.8 0-2.5l-9-9c-.7-.7-1.8-.7-2.5 0l-9 9c-.7.7-.7 1.8 0 2.5z" fill="#F05032"/>
    <circle cx="12" cy="7.5" r="2" fill="#FFFFFF"/>
    <circle cx="12" cy="16.5" r="2" fill="#FFFFFF"/>
    <circle cx="16.5" cy="12" r="2" fill="#FFFFFF"/>
    <path d="M12 9.5v5M12 12.5h2.5" stroke="#FFFFFF" strokeWidth="1.5"/>
  </svg>
);

// 22. GitHub (White octocat)
export const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="#FFFFFF"/>
  </svg>
);

// 23. GitHub Actions (Workflow nodes)
export const GithubActionsIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="6" r="2.5" stroke="#2088FF" strokeWidth="1.5"/>
    <circle cx="18" cy="6" r="2.5" stroke="#2088FF" strokeWidth="1.5"/>
    <circle cx="12" cy="18" r="2.5" stroke="#2088FF" strokeWidth="1.5"/>
    <path d="M6 8.5v3.5c0 1.5.5 2.5 2 3h1.5M18 8.5v3.5c0 1.5-.5 2.5-2 3h-1.5" stroke="#2088FF" strokeWidth="1.5"/>
    <path d="M12 12.5v3" stroke="#2088FF" strokeWidth="1.5"/>
  </svg>
);

// 24. LLMs (Brain with sparkles)
export const LlmIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4c-3.5 0-6.5 2.5-6.5 6 0 1.8.8 3 2 4.5l-1 5.5L12 18l5.5 2-1-5.5c1.2-1.5 2-2.7 2-4.5 0-3.5-3-6-6.5-6z" stroke="#A78BFA" strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="12" cy="11" r="2.5" stroke="#A78BFA" strokeWidth="1.5"/>
    <path d="M9.5 10c0-1 .5-1.5 1.5-1.5M14.5 10c0-1-.5-1.5-1.5-1.5" stroke="#A78BFA" strokeWidth="1.2"/>
  </svg>
);

// 25. RAG (Document search)
export const RagIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="#34D399" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M14 2v6h6M11.5 11.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm0 0l3 3" stroke="#34D399" strokeWidth="1.5"/>
  </svg>
);

// 26. LangChain (Parrot link)
export const LangChainIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6.5C10 5.5 8 5 6 5.5A6.5 6.5 0 003 11c.5 3 2.5 4.5 4.5 5M12 6.5c2 1 4 1.5 6 1a6.5 6.5 0 013 5.5c-.5 3-2.5 4.5-4.5 5" stroke="#34D399" strokeWidth="1.5"/>
    <path d="M9 13.5h6" stroke="#34D399" strokeWidth="1.5"/>
  </svg>
);

// 27. LangGraph (Pink agentic network graph)
export const LangGraphIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="6" r="2" stroke="#EC4899" strokeWidth="1.5"/>
    <circle cx="6" cy="15" r="2" stroke="#EC4899" strokeWidth="1.5"/>
    <circle cx="18" cy="15" r="2" stroke="#EC4899" strokeWidth="1.5"/>
    <path d="M10.5 7.5l-3 6M13.5 7.5l3 6M8 15h8" stroke="#EC4899" strokeWidth="1.5"/>
  </svg>
);

// 28. Embeddings (Vector layers)
export const EmbeddingsIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6h16M4 12h12M4 18h8" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="18" cy="18" r="2" fill="#14B8A6"/>
    <circle cx="14" cy="12" r="2" fill="#14B8A6"/>
    <circle cx="18" cy="6" r="2" fill="#14B8A6"/>
  </svg>
);

// 29. Prompt Engineering (Sparkle message)
export const PromptIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 11.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0z" stroke="#10B981" strokeWidth="1.5"/>
    <path d="M10 11.5h4m-2-2v4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16.5 7.5l.5.5m0 0l.5-.5m-.5.5l-.5.5m.5-.5l.5.5" stroke="#10B981" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

// 30. AI Agents (Robot bot face)
export const AiAgentsIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="6" width="18" height="13" rx="3" stroke="#F43F5E" strokeWidth="1.5"/>
    <circle cx="8" cy="12.5" r="1.5" fill="#F43F5E"/>
    <circle cx="16" cy="12.5" r="1.5" fill="#F43F5E"/>
    <path d="M12 6V3m0 0h3m-3 0H9M9.5 16h5" stroke="#F43F5E" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// 31. FastAPI (Teal lightning badge)
export const FastApiIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#009688"/>
    <path d="M11 17l4-6.5h-3L13 7l-4 6.5h3L11 17z" fill="#FFFFFF"/>
  </svg>
);

// 32. TypeScript (Blue square)
export const TypeScriptIcon = () => (
  <div className="h-5 w-5 bg-[#3178C6] rounded-md flex items-end justify-end p-0.5 select-none shrink-0">
    <span className="text-[8px] font-black text-white font-sans leading-none tracking-tighter">TS</span>
  </div>
);

// 33. Next.js (Black circle with white N)
export const NextjsIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#000000" stroke="#333333" strokeWidth="1"/>
    <path d="M9 15V9h1l4 4.8V9h1v6h-1l-4-4.8V15H9z" fill="#FFFFFF"/>
  </svg>
);
