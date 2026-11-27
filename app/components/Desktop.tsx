"use client";
import type * as React from "react";
import { useCallback, useEffect, useRef, useState } from "react";

type AppId = "about" | "projects" | "experience" | "skills" | "contact" | "terminal";

type WindowState = {
  id: AppId;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
  minimized: boolean;
  maximized: boolean;
};

type TerminalLine = {
  type: "command" | "output";
  text: string;
};

const appInfo: Record<AppId, { title: string; icon: string }> = {
  about: { title: "About Me", icon: "about" },
  projects: { title: "Projects", icon: "projects" },
  experience: { title: "Experience", icon: "experience" },
  skills: { title: "Skills", icon: "skills" },
  contact: { title: "Contact", icon: "contact" },
  terminal: { title: "Terminal", icon: "terminal" },
};

const projects = [
  {
    name: "FlightOps",
    subtitle: "Flight Operations Event Platform",
    description:
      "A full-stack event platform designed to process and manage flight-operation events. Built around a FastAPI backend, Kafka event streaming, PostgreSQL, Redis, and a React interface, with Docker supporting the development environment.",
    technologies: ["Python", "FastAPI", "Kafka", "PostgreSQL", "Redis", "React", "Docker"],
    status: "Featured project",
  },
  {
    name: "WasteVision",
    subtitle: "Waste Sorting Image Classifier",
    description:
      "A computer vision project that classifies waste images into sorting categories. Uses a VGG16-based convolutional neural network and a dataset of more than 150,000 images, achieving 96% validation accuracy.",
    technologies: ["Python", "TensorFlow", "VGG16", "CNN", "Machine Learning"],
    status: "Featured project",
  },
  {
    name: "Speaker Outreach Platform",
    subtitle: "Speaker Outreach Management",
    description:
      "A platform for organizing speaker outreach and communication workflows. This project is currently in development.",
    technologies: ["Full-stack development", "Web applications"],
    status: "In development",
  },
  {
    name: "FraudLens",
    subtitle: "Fraud Detection Analytics",
    description:
      "A machine learning project exploring fraud detection with imbalanced datasets. Includes exploratory data analysis, SMOTE-based resampling, Random Forest modeling, and ROC-AUC evaluation.",
    technologies: ["Python", "Pandas", "Scikit-learn", "SMOTE", "Random Forest"],
    status: "Project",
  },
  {
    name: "Medical Image Classification",
    subtitle: "Deep Learning for Medical Imaging",
    description:
      "A computer vision project focused on classifying medical images using deep learning techniques.",
    technologies: ["Python", "Deep Learning", "Computer Vision"],
    status: "Project",
  },
  {
    name: "Intraoperative Physiological Event Intelligence",
    subtitle: "Physiological Event Analysis",
    description:
      "A project exploring the analysis of physiological events and the use of data-driven methods to identify meaningful patterns in clinical data.",
    technologies: ["Python", "Data Analysis", "Machine Learning"],
    status: "Project",
  },
  {
    name: "MedKnowledge AI",
    subtitle: "Medical Knowledge RAG Assistant",
    description:
      "A retrieval-augmented generation assistant designed to make medical knowledge easier to search and explore. Built using a retrieval pipeline, embeddings, a vector database, and an application interface.",
    technologies: ["Python", "LangChain", "Hugging Face", "ChromaDB", "FastAPI", "Streamlit"],
    status: "Project",
  },
];

const experiences = [
  {
    role: "Software Engineer",
    organization: "Buckeye Vertical",
    date: "2026 – Present",
    description:
      "Contributing to the development of autonomous drone and unmanned aerial systems. Working across computer vision, synthetic data generation, and robotics infrastructure, including object detection at altitudes above 200 feet AGL. Built more than 12,000 synthetic Unity3D/C# data variants and work with ROS2, C++, Docker, Jetson hardware, LiDAR, and TensorRT optimization.",
  },
  {
    role: "Data Engineer",
    organization: "EquiData",
    date: "September 2026 – Present",
    description:
      "Building Python and Pandas document-processing pipelines for more than 100 community project reports. Developing an LLM-powered extraction and classification workflow using LangChain, structured outputs, semantic retrieval, and automated validation to turn unstructured documents into organized, usable project data.",
  },
  {
    role: "Machine Learning Team Member",
    organization: "iGEM SprayAway",
    date: "2026 – Present",
    description:
      "Working on a research project exploring a redosable nasal spray approach to extracellular-vesicle-based gene therapy targeting HIV reservoirs. Contributing to the machine learning side of a multidisciplinary project.",
  },
  {
    role: "Neuroimaging Research Assistant",
    organization: "OSU Center for Cognitive and Behavioral Brain Imaging",
    date: "May – July 2026",
    description:
      "Worked with fMRI data and movie-based stimuli to investigate inter-subject brain similarity. Used Python, Pandas, Jupyter, and Nilearn to support neuroimaging data analysis and research workflows.",
  },
  {
    role: "Data Analytics Intern",
    organization: "Greater Cleveland Partnership",
    date: "May 2024 – March 2025",
    description:
      "Analyzed workforce and salary datasets across cybersecurity, data analytics, and software engineering pathways. Collaborated on IT pathway research and a volunteer platform while applying data analysis, Agile practices, and process-improvement methods.",
  },
];

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C++", "C", "SQL", "C#", "JavaScript"],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "FastAPI",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "LangChain",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "Docker",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "Linux",
      "ROS2",
      "Unity3D",
      "Jetson",
    ],
  },
  {
    title: "Areas",
    skills: [
      "AI / Machine Learning",
      "Data Engineering",
      "Full-Stack Development",
      "Computer Vision",
      "Distributed Systems",
      "Robotics",
    ],
  },
];

function AppIcon({
  app,
  size = "normal",
}: {
  app: AppId;
  size?: "normal" | "dock";
}) {
  const className = `app-icon app-icon-${app} ${size === "dock" ? "app-icon-dock" : ""}`;

  if (app === "about") {
    return (
      <div className={className}>
        <img src="/profile.jpg" alt="Lakshmi" />
      </div>
    );
  }

  if (app === "projects") {
    return (
      <div className={className}>
        <svg viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <rect x="7" y="6" width="50" height="52" rx="9" fill="#ffffff" />
          <path d="M7 15a9 9 0 0 1 9-9h32a9 9 0 0 1 9 9v8H7Z" fill="#ffd60a" />
          <path d="M16 31h32M16 39h32M16 47h24" stroke="#d5d7dc" strokeWidth="2.4" strokeLinecap="round" />
          <rect x="7.5" y="6.5" width="49" height="51" rx="8.5" fill="none" stroke="#d9d9df" />
        </svg>
      </div>
    );
  }

  if (app === "experience") {
    return (
      <div className={className}>
        <svg viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M33.7 17.1c-2.1 0-5.4-2.4-8.8-2.3-4.5.1-8.7 2.6-11 6.6-4.7 8.1-1.2 20.2 3.4 26.8 2.2 3.2 4.8 6.7 8.2 6.6 3.3-.1 4.6-2.1 8.6-2.1 4 0 5.1 2.1 8.7 2 3.6-.1 6-3.1 8.1-6.4 2.6-3.6 3.6-7.1 3.7-7.3-.1 0-7-2.8-7.1-10.4-.1-6.8 5.6-10.2 5.9-10.4-3.1-4.6-8-5.2-9.7-5.3-4.1-.4-8 2.4-10 2.4z"
            fill="#c4c8ff"
          />
          <path
            d="M39.5 10.7c1.7-2 2.8-4.9 2.5-7.7-2.5.1-5.4 1.6-7.1 3.6-1.5 1.8-3 4.6-2.6 7.4 2.7.2 5.5-1.3 7.2-3.3z"
            fill="#c4c8ff"
          />
        </svg>
      </div>
    );
  }

  if (app === "skills") {
    return (
      <div className={className}>
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <rect x="9" y="9" width="46" height="46" rx="12" fill="#e7e9ff" />
          <path d="M22 22l-7 10 7 10M42 22l7 10-7 10M36 19l-8 26" fill="none" stroke="#6c72d9" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }

  if (app === "contact") {
    return (
      <div className={`${className} app-icon-social`}>
        <SocialIcon type="mail" />
      </div>
    );
  }

  return (
    <div className={className}>
      <span className="terminal-icon-symbol">&gt;_</span>
    </div>
  );
}

function SocialIcon({ type }: { type: "mail" | "github" | "linkedin" }) {
  if (type === "mail") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <linearGradient id="mailGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#70c7ff" />
            <stop offset="100%" stopColor="#0878e8" />
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="56" height="56" rx="15" fill="url(#mailGradient)" />
        <rect x="13" y="19" width="38" height="27" rx="4" fill="#fff" />
        <path d="M14 21l18 14 18-14" fill="none" stroke="#9cccf2" strokeWidth="3" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "github") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="29" fill="#fff" />
        <path
          fill="#171717"
          d="M32 9C19.3 9 9 19.3 9 32c0 10.2 6.6 18.8 15.8 21.9 1.2.2 1.6-.5 1.6-1.1v-4.1c-6.4 1.4-7.8-2.7-7.8-2.7-1-2.7-2.6-3.4-2.6-3.4-2.1-1.4.2-1.4.2-1.4 2.3.2 3.5 2.3 3.5 2.3 2 3.5 5.3 2.5 6.6 1.9.2-1.5.8-2.5 1.4-3.1-5.1-.6-10.5-2.6-10.5-11.4 0-2.5.9-4.5 2.3-6.1-.2-.6-1-2.9.2-6 0 0 1.9-.6 6.3 2.3a21.7 21.7 0 0 1 11.5 0c4.4-3 6.3-2.3 6.3-2.3 1.2 3.1.4 5.4.2 6 1.5 1.6 2.3 3.6 2.3 6.1 0 8.8-5.4 10.8-10.5 11.4.8.7 1.5 2 1.5 4v6c0 .6.4 1.3 1.6 1.1C48.4 50.8 55 42.2 55 32 55 19.3 44.7 9 32 9Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="3" y="3" width="58" height="58" rx="12" fill="#0a66c2" />
      <path
        fill="#fff"
        d="M17 25h8v25h-8V25Zm4-12a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2ZM30 25h7.7v3.4h.1c1.1-2 3.7-4.1 7.6-4.1 8.1 0 9.6 5.3 9.6 12.2V50h-8V37.9c0-2.9-.1-6.7-4.1-6.7s-4.8 3.2-4.8 6.5V50H30V25Z"
      />
    </svg>
  );
}

export default function Desktop() {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [topZIndex, setTopZIndex] = useState(10);
  const [activeWindow, setActiveWindow] = useState<AppId | null>(null);
  const [time, setTime] = useState("");
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<TerminalLine[]>([
    { type: "output", text: "Lakshmi Mondeddu — portfolio shell" },
    { type: "output", text: 'Type "help" to see available commands.' },
    { type: "output", text: "" },
  ]);

  const terminalHistoryRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{
    id: AppId;
    offsetX: number;
    offsetY: number;
  } | null>(null);

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat("en-US", {
          weekday: "short",
          hour: "numeric",
          minute: "2-digit",
        }).format(new Date())
      );
    };

    updateTime();
    const interval = window.setInterval(updateTime, 30_000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    // Scroll only the terminal's output pane. Never scroll the whole page/window.
    const historyPane = terminalHistoryRef.current;
    if (historyPane) {
      historyPane.scrollTop = historyPane.scrollHeight;
    }
  }, [terminalHistory]);

  const openApp = useCallback(
    (id: AppId) => {
      setTopZIndex((current) => current + 1);
      setWindows((current) => {
        const existing = current.find((item) => item.id === id);

        if (existing) {
          return current.map((item) =>
            item.id === id
              ? { ...item, minimized: false, zIndex: topZIndex + 1 }
              : item
          );
        }

        const width = id === "terminal" ? 760 : id === "projects" ? 820 : id === "contact" ? 900 : 700;
        const height = id === "terminal" ? 470 : id === "contact" ? 650 : 560;

        return [
          ...current,
          {
            id,
            title: appInfo[id].title,
            x: Math.max(24, (window.innerWidth - width) / 2),
            y: Math.max(58, (window.innerHeight - height) / 2 - 25),
            width,
            height,
            zIndex: topZIndex + 1,
            minimized: false,
            maximized: false,
          },
        ];
      });
      setActiveWindow(id);
    },
    [topZIndex]
  );

  const closeWindow = (id: AppId) => {
    setWindows((current) => current.filter((item) => item.id !== id));
    setActiveWindow((current) => (current === id ? null : current));
  };

  const minimizeWindow = (id: AppId) => {
    setWindows((current) =>
      current.map((item) =>
        item.id === id ? { ...item, minimized: true } : item
      )
    );
    setActiveWindow(null);
  };

  const maximizeWindow = (id: AppId) => {
    setWindows((current) =>
      current.map((item) =>
        item.id === id ? { ...item, maximized: !item.maximized } : item
      )
    );
    setActiveWindow(id);
  };

  const focusWindow = (id: AppId) => {
    setTopZIndex((current) => current + 1);
    setWindows((current) =>
      current.map((item) =>
        item.id === id ? { ...item, zIndex: topZIndex + 1 } : item
      )
    );
    setActiveWindow(id);
  };

  const startDrag = (event: React.PointerEvent<HTMLDivElement>, id: AppId) => {
    if ((event.target as HTMLElement).closest("button")) return;

    const win = windows.find((item) => item.id === id);
    if (!win || win.maximized) return;

    dragRef.current = {
      id,
      offsetX: event.clientX - win.x,
      offsetY: event.clientY - win.y,
    };

    event.currentTarget.setPointerCapture(event.pointerId);
    focusWindow(id);
  };

  const moveDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current) return;

    const { id, offsetX, offsetY } = dragRef.current;
    setWindows((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              x: Math.max(0, event.clientX - offsetX),
              y: Math.max(34, event.clientY - offsetY),
            }
          : item
      )
    );
  };

  const stopDrag = () => {
    dragRef.current = null;
  };

  const executeCommand = (rawCommand: string) => {
    const command = rawCommand.trim().toLowerCase();
    if (!command) return;

    setTerminalHistory((current) => [
      ...current,
      { type: "command", text: rawCommand },
    ]);

    let output: string[] = [];

    switch (command) {
      case "help":
        output = [
          "Available commands:",
          "",
          "  help        Show this list",
          "  whoami      Learn about Lakshmi",
          "  about       Open the About Me app",
          "  projects    Open the Projects app",
          "  experience  Open the Experience app",
          "  skills      Show technical skills",
          "  contact     Open the Contact app",
          "  clear       Clear the terminal",
          "",
        ];
        break;

      case "whoami":
        output = [
          "Lakshmi Mondeddu",
          "Honors Computer Science and Engineering student at The Ohio State University.",
          "Interested in software engineering, AI/ML, data systems, and building useful products.",
          "",
        ];
        break;

      case "about":
        openApp("about");
        output = ["Opening About Me...", ""];
        break;

      case "projects":
        openApp("projects");
        output = ["Opening Projects...", ""];
        break;

      case "experience":
        openApp("experience");
        output = ["Opening Experience...", ""];
        break;

      case "skills":
        openApp("skills");
        output = [
          "Languages: Python, Java, C++, C, SQL, C#, JavaScript",
          "Frameworks: React, Next.js, Node.js, FastAPI, PyTorch, TensorFlow, LangChain",
          "Tools: Git, Docker, PostgreSQL, Redis, Kafka, Linux, ROS2, Unity3D",
          "Areas: AI/ML, Data Engineering, Full-Stack Development, Computer Vision, Robotics",
          "",
        ];
        break;

      case "contact":
        openApp("contact");
        output = ["Opening Contact...", ""];
        break;

      case "clear":
        setTerminalHistory([]);
        setTerminalInput("");
        return;

      default:
        output = [
          `command not found: ${command}`,
          'Type "help" to see the available commands.',
          "",
        ];
    }

    setTerminalHistory((current) => [
      ...current,
      ...output.map((text) => ({ type: "output" as const, text })),
    ]);
    setTerminalInput("");
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && activeWindow) {
        closeWindow(activeWindow);
      }

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        openApp("terminal");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeWindow, openApp]);

  return (
    <main className="mac-desktop">
      <header className="mac-menubar">
        <div className="menubar-left">
          <span className="apple-mark">●</span>
          <strong>Lakshmi</strong>
          <span className="menubar-item">Portfolio</span>
          <span className="menubar-item">File</span>
          <span className="menubar-item">Window</span>
        </div>
        <div className="menubar-right">
          <span>⌘</span>
          <span>{time}</span>
        </div>
      </header>

      <div className="desktop-name">
        <span>Lakshmi Mondeddu</span>
        <span>Software Engineering · AI/ML · Data</span>
      </div>

      <section className="desktop-icons" aria-label="Desktop applications">
        {(["about", "projects", "experience", "skills", "contact", "terminal"] as AppId[]).map(
          (app) => (
            <button
              className="desktop-app"
              key={app}
              onClick={() => openApp(app)}
              aria-label={`Open ${appInfo[app].title}`}
            >
              <AppIcon app={app} />
              <span>{appInfo[app].title}</span>
            </button>
          )
        )}
      </section>

      {windows
        .filter((item) => !item.minimized)
        .map((win) => (
          <section
            key={win.id}
            className={`mac-window mac-window-enter ${
              win.id === "terminal" ? "terminal-window" : ""
            } ${win.id === "contact" ? "contact-window" : ""} ${win.maximized ? "mac-window-maximized" : ""}`}
            style={{
              ...(win.maximized
                ? { zIndex: win.zIndex }
                : {
                    left: win.x,
                    top: win.y,
                    width: `min(${win.width}px, calc(100vw - 28px))`,
                    height: `min(${win.height}px, calc(100dvh - 100px))`,
                    zIndex: win.zIndex,
                  }),
              ...(win.id === "contact" ? { background: "#ffffff", color: "#24242a", border: "1px solid rgba(0,0,0,.12)" } : {}),
              ...(win.id === "terminal" ? { display: "flex", flexDirection: "column", minHeight: 0 } : {}),
            }}
            onPointerDown={() => focusWindow(win.id)}
          >
            <div
              className="mac-window-header"
              style={win.id === "contact" ? { background: "#f5f5f7", borderBottom: "1px solid #e5e5e9", color: "#55555d" } : undefined}
              onPointerDown={(event) => startDrag(event, win.id)}
              onPointerMove={moveDrag}
              onPointerUp={stopDrag}
              onPointerCancel={stopDrag}
              onDoubleClick={() => maximizeWindow(win.id)}
            >
              <div className="mac-traffic-lights">
                <button
                  className="mac-traffic-light mac-close"
                  onClick={() => closeWindow(win.id)}
                  aria-label="Close window"
                  title="Close"
                />
                <button
                  className="mac-traffic-light mac-minimize"
                  onClick={() => minimizeWindow(win.id)}
                  aria-label="Minimize window"
                  title="Minimize"
                />
                <button
                  className="mac-traffic-light mac-maximize"
                  onClick={() => maximizeWindow(win.id)}
                  aria-label="Expand window"
                  title="Expand"
                />
              </div>
              <span className="window-title">{win.title}</span>
              <span className="window-header-spacer" />
            </div>

            <div
              className="mac-window-content mac-scrollbar"
              style={
                win.id === "terminal"
                  ? { display: "flex", flex: "1 1 auto", minHeight: 0, overflow: "hidden" }
                  : undefined
              }
            >
              {win.id === "about" && <AboutContent />}
              {win.id === "projects" && <ProjectsContent />}
              {win.id === "experience" && <ExperienceContent />}
              {win.id === "skills" && <SkillsContent />}
              {win.id === "contact" && <ContactContent />}
              {win.id === "terminal" && (
                <TerminalContent
                  history={terminalHistory}
                  input={terminalInput}
                  setInput={setTerminalInput}
                  execute={executeCommand}
                  historyRef={terminalHistoryRef}
                />
              )}
            </div>
          </section>
        ))}

      <footer className="mac-dock-wrap">
        <div className="dock-tooltip">Click an app to open</div>
        <nav className="mac-dock" aria-label="Dock">
          {(["about", "projects", "experience", "skills", "contact", "terminal"] as AppId[]).map(
            (app) => (
              <button
                key={app}
                className={`dock-app ${activeWindow === app ? "dock-app-active" : ""}`}
                onClick={() => openApp(app)}
                title={appInfo[app].title}
              >
                <AppIcon app={app} size="dock" />
              </button>
            )
          )}

          <span className="dock-divider" />

          <a
            className="dock-app"
            href="mailto:lakshmiamondeddu@gmail.com"
            aria-label="Email Lakshmi"
            title="Mail"
          >
            <div className="app-icon app-icon-social">
              <SocialIcon type="mail" />
            </div>
          </a>

          <a
            className="dock-app"
            href="https://github.com/lakshmimon"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <div className="app-icon app-icon-social">
              <SocialIcon type="github" />
            </div>
          </a>

          <a
            className="dock-app"
            href="https://www.linkedin.com/in/lakshmimon/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <div className="app-icon app-icon-social">
              <SocialIcon type="linkedin" />
            </div>
          </a>
        </nav>
      </footer>
    </main>
  );
}

function AboutContent() {
  return (
    <article className="app-content about-content">
      <div className="about-heading">
        <img src="/profile.jpg" alt="Lakshmi Mondeddu" />
        <div>
          <p className="eyebrow">ABOUT ME</p>
          <h1 className="editorial-heading">Hi, I’m Lakshmi.</h1>
          <p className="muted-text">
            Honors Computer Science and Engineering student at The Ohio State
            University
          </p>
        </div>
      </div>

      <p>
        I’m a student developer interested in building software that connects
        thoughtful engineering with practical applications. My work spans
        full-stack development, AI and machine learning, data engineering, and
        research.
      </p>
      <p>
        I enjoy working across the stack: understanding a problem, designing
        the system behind it, and building an experience that makes the result
        useful and approachable.
      </p>

      <h2>What I’m interested in</h2>
      <ul className="content-list">
        <li>AI and machine learning systems that solve real problems</li>
        <li>Data-intensive applications and reliable backend systems</li>
        <li>Full-stack products with thoughtful user experiences</li>
        <li>Computer vision, robotics, and applied research</li>
      </ul>

      <h2>Education</h2>
      <div className="education-card">
        <strong>The Ohio State University</strong>
        <span>Honors B.S. Computer Science and Engineering</span>
        <span>Minors in Psychology and Statistics</span>
        <span className="muted-text">Expected May 2028</span>
      </div>
    </article>
  );
}

function ProjectsContent() {
  const [expandedProject, setExpandedProject] = useState<string | null>(
    projects[0].name
  );

  return (
    <article className="app-content">
      <p className="eyebrow">SELECTED WORK</p>
      <h1 className="editorial-heading">Projects</h1>
      <p className="muted-text">
        A collection of things I’ve built, explored, and am currently working on.
        Select a project to learn more.
      </p>

      <div className="project-list">
        {projects.map((project, index) => {
          const expanded = expandedProject === project.name;

          return (
            <div className="project-card" key={project.name}>
              <button
                className="project-card-button"
                onClick={() =>
                  setExpandedProject(expanded ? null : project.name)
                }
                aria-expanded={expanded}
              >
                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="project-title-group">
                  <strong>{project.name}</strong>
                  <span>{project.subtitle}</span>
                </span>
                <span className="project-status">{project.status}</span>
                <span className={`project-chevron ${expanded ? "rotated" : ""}`}>
                  ⌄
                </span>
              </button>

              {expanded && (
                <div className="project-details">
                  <p>{project.description}</p>
                  <div className="tag-list">
                    {project.technologies.map((technology) => (
                      <span className="tag" key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>
                  <span className="github-placeholder">
                    GitHub link coming soon
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </article>
  );
}

function ExperienceContent() {
  return (
    <article className="app-content">
      <p className="eyebrow">WHERE I’VE WORKED</p>
      <h1 className="editorial-heading">Experience</h1>
      <div className="experience-list">
        {experiences.map((experience) => (
          <section className="experience-card" key={experience.organization}>
            <div className="experience-topline">
              <div>
                <h2>{experience.role}</h2>
                <p className="experience-org">{experience.organization}</p>
              </div>
              <span className="experience-date">{experience.date}</span>
            </div>
            <p>{experience.description}</p>
          </section>
        ))}
      </div>

      <h2 className="section-heading">Campus Leadership</h2>
      <div className="leadership-list">
        <div>
          <strong>Association for Computing Machinery (ACM)</strong>
          <span>Communications Director</span>
        </div>
        <div>
          <strong>Women in Cybersecurity (WiCyS)</strong>
          <span>Website Manager</span>
        </div>
      </div>
    </article>
  );
}

function SkillsContent() {
  return (
    <article className="app-content">
      <p className="eyebrow">TOOLS OF THE TRADE</p>
      <h1 className="editorial-heading">Skills</h1>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <section className="skill-group" key={group.title}>
            <h2>{group.title}</h2>
            <div className="tag-list">
              {group.skills.map((skill) => (
                <span className="tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}

function ContactContent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mailtoHref, setMailtoHref] = useState("");
  const [copyStatus, setCopyStatus] = useState("");
  const recipient = "lakshmiamondeddu@gmail.com";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();

    if (!cleanName || !cleanEmail || !cleanMessage) return;

    const subject = `Portfolio inquiry from ${cleanName}`;
    const body = `${cleanMessage}\n\n— ${cleanName}\n${cleanEmail}`;
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Keep a visible fallback link in case the browser has no mail handler configured.
    setMailtoHref(mailto);
    setCopyStatus("");
    window.location.assign(mailto);
  };

  const copyMessage = async () => {
    const subject = `Portfolio inquiry from ${name.trim()}`;
    const body = `${message.trim()}\n\n— ${name.trim()}\n${email.trim()}`;
    const draft = `To: ${recipient}\nSubject: ${subject}\n\n${body}`;

    try {
      await navigator.clipboard.writeText(draft);
      setCopyStatus("Email draft copied.");
    } catch {
      setCopyStatus("Clipboard access is unavailable in this browser.");
    }
  };

  const fieldStyle: React.CSSProperties = {
    width: "100%",
    border: "1px solid #e3e3e8",
    borderRadius: 12,
    background: "#ffffff",
    color: "#24242a",
    padding: "14px 16px",
    outline: "none",
    fontSize: 15,
  };

  return (
    <article
      className="app-content mac-scrollbar"
      style={{ background: "#ffffff", color: "#24242a", minHeight: "100%", padding: "30px clamp(22px, 5vw, 54px) 36px", overflowY: "auto" }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <p className="eyebrow" style={{ color: "#85858e", letterSpacing: ".12em" }}>GET IN TOUCH</p>
        <h1 className="editorial-heading" style={{ color: "#24242a", fontSize: "clamp(34px, 5vw, 46px)", margin: "8px 0 10px" }}>Say hello.</h1>
        <p style={{ color: "#777780", lineHeight: 1.65, margin: "0 0 28px", maxWidth: 620 }}>
          Have an opportunity, a project idea, or just want to connect? Send me a message — I’d love to hear from you.
        </p>

        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 19 }}>
          <label style={{ display: "grid", gap: 8, color: "#777780", fontSize: 14 }}>
            Name
            <input required autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" style={fieldStyle} />
          </label>
          <label style={{ display: "grid", gap: 8, color: "#777780", fontSize: 14 }}>
            Email
            <input required type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" style={fieldStyle} />
          </label>
          <label style={{ display: "grid", gap: 8, color: "#777780", fontSize: 14 }}>
            Message
            <textarea required rows={6} value={message} onChange={(event) => setMessage(event.target.value)} placeholder="What’s on your mind?" style={{ ...fieldStyle, resize: "vertical", minHeight: 150, lineHeight: 1.55 }} />
          </label>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", paddingTop: 2 }}>
            <button type="submit" style={{ border: 0, borderRadius: 999, background: "#1677ed", color: "#ffffff", padding: "13px 28px", fontWeight: 600, fontSize: 15, cursor: "pointer" }}>
              Send Message <span aria-hidden="true">↗</span>
            </button>
            <span style={{ color: "#92929b", fontSize: 13 }}>Opens your default mail app</span>
          </div>
        </form>

        {mailtoHref && (
          <div role="status" style={{ marginTop: 18, padding: 14, borderRadius: 12, background: "#f5f7fb", color: "#55555d", fontSize: 14, lineHeight: 1.6 }}>
            If your email app didn’t open, <a href={mailtoHref} style={{ color: "#176fd1", fontWeight: 600, textDecoration: "none" }}>click here to open your email draft</a>. You can also copy the draft below.
            <div style={{ marginTop: 10 }}>
              <button type="button" onClick={copyMessage} style={{ border: "1px solid #d9dce4", borderRadius: 8, padding: "7px 11px", background: "#fff", color: "#55555d", cursor: "pointer", fontSize: 13 }}>Copy email draft</button>
              {copyStatus && <span style={{ marginLeft: 10, fontSize: 12 }}>{copyStatus}</span>}
            </div>
          </div>
        )}

        <div style={{ borderTop: "1px solid #ededf0", marginTop: 30, paddingTop: 20, display: "flex", alignItems: "center", gap: 9, flexWrap: "wrap", color: "#777780", fontSize: 14 }}>
          <span>Prefer email?</span>
          <a href={`mailto:${recipient}`} style={{ color: "#176fd1", textDecoration: "none", fontWeight: 500 }}>{recipient}</a>
          <button type="button" onClick={() => void navigator.clipboard?.writeText(recipient)} style={{ border: "1px solid #e3e3e8", borderRadius: 8, padding: "5px 9px", background: "#fff", color: "#65656e", cursor: "pointer", fontSize: 12 }}>Copy address</button>
        </div>
      </div>
    </article>
  );
}

function TerminalContent({
  history,
  input,
  setInput,
  execute,
  historyRef,
}: {
  history: TerminalLine[];
  input: string;
  setInput: (value: string) => void;
  execute: (command: string) => void;
  historyRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      className="terminal-body"
      style={{
        display: "flex",
        flexDirection: "column",
        flex: "1 1 auto",
        minHeight: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <div className="terminal-welcome">
        <p>Lakshmi Mondeddu — portfolio shell</p>
        <p>
          Type <span className="terminal-command-highlight">help</span> to get
          started.
        </p>
      </div>

      <div
        className="terminal-history"
        ref={historyRef}
        style={{
          flex: "1 1 auto",
          minHeight: 0,
          overflowY: "auto",
          overflowX: "hidden",
          overscrollBehavior: "contain",
          paddingRight: 8,
        }}
      >
        {history.map((line, index) => (
          <div
            className={`terminal-line ${
              line.type === "command" ? "terminal-command-line" : ""
            }`}
            key={`${index}-${line.text}`}
          >
            {line.type === "command" ? (
              <>
                <span className="terminal-prompt">lakshmi@portfolio ~ %</span>{" "}
                {line.text}
              </>
            ) : (
              <span>{line.text || "\u00a0"}</span>
            )}
          </div>
        ))}
      </div>

      <form
        className="terminal-input-row"
        style={{ flex: "0 0 auto" }}
        onSubmit={(event) => {
          event.preventDefault();
          execute(input);
        }}
      >
        <label className="terminal-prompt" htmlFor="terminal-input">
          lakshmi@portfolio ~ %
        </label>
        <input
          id="terminal-input"
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          value={input}
          onChange={(event) => setInput(event.target.value)}
          aria-label="Terminal command"
        />
        <span className="terminal-cursor" />
      </form>
    </div>
  );
}