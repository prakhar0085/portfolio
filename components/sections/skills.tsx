'use client';

import { SectionHeading } from '@/components/reveal';
import {
  JavaIcon, PythonIcon, SqlIcon, HtmlIcon, CssIcon, JavaScriptIcon, ReactIcon, TailwindIcon, ReduxIcon, NodeIcon, ExpressIcon, RestApiIcon, RedisIcon, WebSocketsIcon, MysqlIcon, MongoIcon, PostgresIcon, AwsIcon, DockerIcon, CiCdIcon, GitIcon, GithubIcon, GithubActionsIcon, LlmIcon, RagIcon, LangChainIcon, LangGraphIcon, EmbeddingsIcon, PromptIcon, AiAgentsIcon
} from '@/components/brand-icons';

const RUNNING_ICONS = [
  // Row 1 (first 15 skills)
  { name: 'Java', icon: JavaIcon, iconPath: '/icons/Java-Dark.svg', color: '#EA2D42' },
  { name: 'Python', icon: PythonIcon, color: '#3776AB' },
  { name: 'SQL', icon: SqlIcon, iconPath: '/icons/SQLite.svg', color: '#00758F' },
  { name: 'HTML', icon: HtmlIcon, iconPath: '/icons/HTML.svg', color: '#E34F26' },
  { name: 'CSS', icon: CssIcon, iconPath: '/icons/CSS.svg', color: '#1572B6' },
  { name: 'JavaScript (ES6+)', icon: JavaScriptIcon, iconPath: '/icons/JavaScript.svg', color: '#F7DF1E' },
  { name: 'React.js', icon: ReactIcon, iconPath: '/icons/React-Dark.svg', color: '#61DAFB' },
  { name: 'Tailwind CSS', icon: TailwindIcon, iconPath: '/icons/Tailwind CSS.png', color: '#38BDF8' },
  { name: 'Redux Toolkit', icon: ReduxIcon, iconPath: '/icons/Redux.svg', color: '#764ABC' },
  { name: 'Node.js', icon: NodeIcon, iconPath: '/icons/NodeJS-Dark.svg', color: '#339933' },
  { name: 'Express.js', icon: ExpressIcon, iconPath: '/icons/ExpressJS-Dark.svg', color: '#FFFFFF' },
  { name: 'REST APIs', icon: RestApiIcon, iconPath: '/icons/CDN.png', color: '#22C55E' },
  { name: 'Redis', icon: RedisIcon, iconPath: '/icons/Redis-Dark.svg', color: '#DC2626' },
  { name: 'WebSockets', icon: WebSocketsIcon, iconPath: '/icons/websocket.png', color: '#00E5FF' },
  { name: 'MySQL', icon: MysqlIcon, color: '#00758F' },
  
  // Row 2 (next 16 skills)
  { name: 'MongoDB', icon: MongoIcon, iconPath: '/icons/MongoDB.svg', color: '#47A248' },
  { name: 'PostgreSQL', icon: PostgresIcon, iconPath: '/icons/PostgreSQL-Dark.svg', color: '#336791' },
  { name: 'AWS', icon: AwsIcon, iconPath: '/icons/AWS-Dark.svg', color: '#FF9900' },
  { name: 'Docker', icon: DockerIcon, iconPath: '/icons/Docker.svg', color: '#2496ED' },
  { name: 'CI/CD', icon: CiCdIcon, iconPath: '/icons/cicd.png', color: '#818CF8' },
  { name: 'Git', icon: GitIcon, color: '#F05032' },
  { name: 'GitHub', icon: GithubIcon, iconPath: '/icons/Github-Dark.svg', color: '#FFFFFF' },
  { name: 'GitHub Actions', icon: GithubActionsIcon, iconPath: '/icons/github action.png', color: '#2088FF' },
  { name: 'LLMs', icon: LlmIcon, iconPath: '/icons/LLM.png', color: '#A78BFA' },
  { name: 'RAG', icon: RagIcon, color: '#34D399' },
  { name: 'LangChain', icon: LangChainIcon, iconPath: '/icons/Langchain.png', color: '#34D399' },
  { name: 'LangGraph', icon: LangGraphIcon, iconPath: '/icons/LangGraph.png', color: '#EC4899' },
  { name: 'Embeddings', icon: EmbeddingsIcon, color: '#14B8A6' },
  { name: 'Prompt Engineering', icon: PromptIcon, iconPath: '/icons/Prompt Engineering.png', color: '#10B981' },
  { name: 'AI Agents', icon: AiAgentsIcon, iconPath: '/icons/Ai Agent.png', color: '#F43F5E' },
  { name: 'MCP', iconPath: '/icons/MCP.png', color: '#FF9900' }
];

export function Skills() {
  const row1 = RUNNING_ICONS.slice(0, 15);
  const row2 = RUNNING_ICONS.slice(15);

  return (
    <section id="skills" className="relative py-12 sm:py-16 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title={<>Skills</>}
          description="Technical Skills,     Frameworks,  and     Databases."
        />
      </div>

      {/* Double Track Running Marquees - Edge-to-Edge Full Viewport Width */}
      <div className="mt-10 flex flex-col gap-5 relative overflow-hidden w-full py-4 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        
        {/* Marquee Row 1 (Left to Right) */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max gap-4 animate-[skillsMarquee_45s_linear_infinite] hover:[animation-play-state:paused] cursor-pointer">
            {[...row1, ...row1, ...row1].map((tech, i) => {
              const Icon = tech.icon as any;
              const iconPath = tech.iconPath;
              return (
                <div
                  key={`${tech.name}-${i}`}
                  style={{
                    ['--icon-glow' as any]: `${tech.color}15`
                  }}
                  className="flex shrink-0 items-center gap-3 rounded-xl border border-border bg-foreground/[0.02] backdrop-blur-md px-4 py-2.5 transition-all duration-300 hover:border-accent/30 hover:scale-105 hover:bg-foreground/[0.04] hover:shadow-[0_0_20px_var(--icon-glow)]"
                >
                  <div className="h-10 w-10 shrink-0 flex items-center justify-center [&_svg]:h-full [&_svg]:w-full [&_div]:h-full [&_div]:w-full [&_div_span]:text-[12px] [&_div_span]:tracking-normal">
                    {iconPath ? (
                      <img src={iconPath} alt={tech.name} className="h-full w-full object-contain" />
                    ) : Icon ? (
                      <Icon />
                    ) : null}
                  </div>
                  <span className="font-display text-xs font-semibold text-foreground select-none">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Marquee Row 2 (Right to Left) */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max gap-4 animate-[skillsMarqueeReverse_45s_linear_infinite] hover:[animation-play-state:paused] cursor-pointer">
            {[...row2, ...row2, ...row2].map((tech, i) => {
              const Icon = tech.icon as any;
              const iconPath = tech.iconPath;
              return (
                <div
                  key={`${tech.name}-${i}`}
                  style={{
                    ['--icon-glow' as any]: `${tech.color}15`
                  }}
                  className="flex shrink-0 items-center gap-3 rounded-xl border border-border bg-foreground/[0.02] backdrop-blur-md px-4 py-2.5 transition-all duration-300 hover:border-accent/30 hover:scale-105 hover:bg-foreground/[0.04] hover:shadow-[0_0_20px_var(--icon-glow)]"
                >
                  <div className="h-10 w-10 shrink-0 flex items-center justify-center [&_svg]:h-full [&_svg]:w-full [&_div]:h-full [&_div]:w-full [&_div_span]:text-[12px] [&_div_span]:tracking-normal">
                    {iconPath ? (
                      <img src={iconPath} alt={tech.name} className="h-full w-full object-contain" />
                    ) : Icon ? (
                      <Icon />
                    ) : null}
                  </div>
                  <span className="font-display text-xs font-semibold text-foreground select-none">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
      
      <style>{`
        @keyframes skillsMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes skillsMarqueeReverse {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
