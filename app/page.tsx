
const experiences = [
  {
    role: "Software Engineer Team Member",
    company: "Buckeye Vertical",
    date: "2026 — Present",
    location: "Columbus, OH",
    bullets: [
      "Developed ROS2 software in C++ for NVIDIA Jetson platforms, integrating autonomous mission algorithms and real-time processing for unmanned aerial systems.",
      "Built computer vision pipelines using DINOv2, DETR, YOLO, and OpenCV, benchmarking three architectures for object detection across varying aerial flight conditions.",
      "Generated 12K+ synthetic training variations through a Unity3D/C# domain-randomization pipeline and integrated TensorRT optimization, achieving 95% accuracy on real-world evaluation data.",
    ],
    tags: ["C++", "Python", "ROS2", "Computer Vision", "TensorRT", "Unity3D"],
  },
  {
    role: "Data Engineer",
    company: "EquiData",
    date: "September 2026 — Present",
    location: "Columbus, OH",
    bullets: [
      "Developed Python and Pandas document-processing pipelines to transform 100+ unstructured community project reports into structured, searchable datasets.",
      "Built an LLM-powered extraction and classification workflow using LangChain, structured outputs, semantic retrieval, and automated validation to improve document accessibility and reduce manual review.",
    ],
    tags: ["Python", "Pandas", "LangChain", "LLMs", "Data Pipelines"],
  },
  {
    role: "Machine Learning Team Member",
    company: "iGEM — SprayAway",
    date: "2026 — Present",
    location: "Columbus, OH",
    description:
      "Engineering Python-based biomedical data pipelines using Pandas, NumPy, and SciPy to process experimental PK/PD time-series data. Developing machine learning approaches that combine experimental observations with mechanistic model predictions.",
    tags: ["Python", "NumPy", "SciPy", "Machine Learning", "Time Series"],
  },
  {
    role: "Neuroimaging Research Assistant",
    company: "OSU Center for Cognitive and Behavioral Brain Imaging",
    date: "March 2026 — Present",
    location: "Columbus, OH",
    description:
      "Engineering Python-based computational workflows for high-dimensional fMRI data using Pandas, Jupyter, and Nilearn. Developing reproducible validation and testing workflows while investigating data quality, edge cases, and reliability across participants.",
    tags: ["Python", "Pandas", "Nilearn", "Jupyter", "Data Analysis"],
  },
  {
    role: "Data Analytics Intern",
    company: "Greater Cleveland Partnership",
    date: "May 2024 — March 2025",
    location: "Cleveland, OH",
    bullets: [
      "Analyzed workforce and salary datasets across cybersecurity, data analytics, and software engineering occupations, identifying industry and compensation trends.",
      "Collaborated on technical analytics initiatives and digital projects within a five-intern team, applying Agile practices to coordinate deliverables and communicate findings to stakeholders.",
    ],
    tags: ["Python", "Data Analytics", "Excel", "Agile", "Workforce Analytics"],
  },
];

const leadership = [
  {
    organization: "Association for Computing Machinery (ACM)",
    role: "Communications Director",
  },
  {
    organization: "Women in Cybersecurity (WiCyS)",
    role: "Website Manager",
  },
];

const featuredProjects = [
  {
    number: "01",
    name: "FlightOps",
    category: "Distributed Systems / Backend Engineering",
    subtitle: "Event-Driven Architecture",
    description:
      "An event-driven flight operations platform designed to process, manage, and monitor events across distributed services. The system combines asynchronous event streaming, persistent data storage, caching, and reliable workflows to provide real-time operational visibility.",
    tags: [
      "Python",
      "FastAPI",
      "Apache Kafka",
      "PostgreSQL",
      "Redis",
      "React",
      "Docker",
    ],
    status: "Featured project",
  },
  {
    number: "02",
    name: "WasteVision",
    category: "Computer Vision / Deep Learning",
    subtitle: "Image Classification",
    description:
      "A deep learning image classification project exploring automated waste sorting. Trained and evaluated convolutional neural network architectures, including VGG16, on a dataset of 150,000+ images, achieving 96% validation accuracy.",
    tags: [
      "Python",
      "CNN",
      "VGG16",
      "Deep Learning",
      "Computer Vision",
    ],
    status: "Featured project",
  },
  {
    number: "03",
    name: "Speaker Outreach Platform",
    category: "Applied AI / Full-Stack Development",
    subtitle: "AI-Powered Discovery & Outreach Management",
    description:
      "Building an AI-powered speaker discovery and outreach platform for student organizations. Officers can describe an event and receive ranked speaker recommendations with supporting sources, generate context-aware outreach drafts, and manage contacts through a shared pipeline that preserves outreach history across leadership transitions.",
    tags: [
      "Python",
      "AI / LLMs",
      "Information Retrieval",
      "Full-Stack Development",
      "Workflow Automation",
      "Contact Management",
    ],
    status: "In Development",
  },
];

const otherProjects = [
  {
    name: "FraudLens",
    category: "Machine Learning / Predictive Modeling",
    description:
      "An end-to-end fraud analytics workflow focused on highly imbalanced transaction data. Explores data analysis, feature preparation, SMOTE-based resampling, and Random Forest classification, with ROC-AUC used to evaluate model performance.",
    tags: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Random Forest",
      "SMOTE",
    ],
  },
  {
    name: "Medical Image Classification",
    category: "Computer Vision / Deep Learning",
    description:
      "A medical image classification project exploring convolutional neural networks and transfer learning. Uses model evaluation and visual explanations to investigate predictions and understand potential failure modes.",
    tags: [
      "Python",
      "TensorFlow",
      "Keras",
      "CNN",
      "Computer Vision",
    ],
  },
  {
    name: "Intraoperative Physiological Event Intelligence",
    category: "Applied ML / Time-Series Analysis",
    description:
      "A multimodal clinical time-series project focused on reconstructing physiological timelines from signals such as ECG, SpO₂, blood pressure, respiratory measurements, and medication events while identifying significant physiological changes.",
    tags: [
      "Python",
      "PyTorch",
      "FastAPI",
      "PostgreSQL",
      "SciPy",
    ],
  },
  {
    name: "MedKnowledge AI",
    category: "Applied AI / Retrieval-Augmented Generation",
    description:
      "A retrieval-augmented generation application that combines semantic search and large language models to retrieve relevant information from a curated knowledge base through an interactive interface.",
    tags: [
      "Python",
      "LangChain",
      "Hugging Face",
      "ChromaDB",
      "BGE Embeddings",
      "FastAPI",
      "Streamlit",
    ],
  },
];

const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "C++", "C", "Java", "C#", "SQL", "JavaScript"],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      "FastAPI",
      "React",
      "PyTorch",
      "TensorFlow",
      "Keras",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "SciPy",
      "OpenCV",
      "Hugging Face",
      "LangChain",
      "Nilearn",
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Git",
      "Docker",
      "Linux",
      "PostgreSQL",
      "Redis",
      "Apache Kafka",
      "ChromaDB",
      "ROS2",
      "TensorRT",
      "NVIDIA Jetson",
      "Jupyter",
    ],
  },
  {
    category: "Areas",
    skills: [
      "Software Engineering",
      "Distributed Systems",
      "AI / ML",
      "Computer Vision",
      "Autonomous Systems",
      "Scientific Computing",
      "Data Pipelines",
      "REST APIs",
      "Embedded Systems",
    ],
  },
];

const sectionLabel =
  "font-mono text-xs uppercase tracking-[0.25em] text-[#a2d6a8]";

const sectionTitle =
  "mt-4 font-editorial text-4xl text-[#f0f2ef] md:text-5xl";

const sectionContainer =
  "mx-auto max-w-6xl px-6";

function SectionHeading({
  number,
  label,
  title,
}: {
  number: string;
  label: string;
  title: string;
}) {
  return (
    <div className="mb-14">
      <p className={sectionLabel}>
        {number} / {label}
      </p>
      <h2 className={sectionTitle}>{title}</h2>
    </div>
  );
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="border border-[#29322b] px-3 py-1.5 font-mono text-[10px] tracking-wide text-[#a4ada5]"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0e0c] text-[#f0f2ef]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#29322b]/80 bg-[#0b0e0c]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a
            href="#home"
            className="font-editorial text-2xl tracking-wide text-[#f0f2ef] transition-colors hover:text-[#a2d6a8]"
          >
            LM<span className="text-[#a2d6a8]">.</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {[
              ["About", "#about"],
              ["Education", "#education"],
              ["Experience", "#experience"],
              ["Leadership", "#leadership"],
              ["Projects", "#projects"],
              ["Skills", "#skills"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-xs tracking-wide text-[#a4ada5] transition-colors hover:text-[#a2d6a8]"
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href="mailto:lakshmiamondeddu@gmail.com"
            className="border border-[#a2d6a8]/50 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-[#a2d6a8] transition-all hover:bg-[#a2d6a8] hover:text-[#0b0e0c]"
          >
            Get in touch
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="editorial-grid relative flex min-h-[88vh] items-center"
      >
        <div className="green-glow pointer-events-none absolute -right-40 top-10 h-[600px] w-[600px]" />

        <div className={`${sectionContainer} relative z-10 w-full py-28`}>
          <div className="max-w-4xl">
            <p className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-[#a2d6a8]">
              <span className="h-px w-10 bg-[#a2d6a8]" />
              Computer Science & Engineering
            </p>

            <h1 className="font-editorial text-7xl leading-[0.95] tracking-tight text-[#f0f2ef] sm:text-8xl md:text-[110px]">
              Lakshmi
              <br />
              <span className="italic text-[#a2d6a8]">Mondeddu.</span>
            </h1>

            <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-xl text-lg leading-relaxed text-[#a4ada5] md:text-xl">
                I build software for intelligent systems. Exploring the
                intersection of software engineering, machine learning, and
                real-world problem solving.
              </p>

              <a
                href="#projects"
                className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#a2d6a8]"
              >
                Explore my work
                <span className="transition-transform group-hover:translate-x-2">
                  →
                </span>
              </a>
            </div>

            <div className="mt-20 flex flex-wrap gap-x-10 gap-y-4 border-t border-[#29322b] pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-[#748078]">
              <span>Columbus, Ohio</span>
              <span>The Ohio State University</span>
              <span>AI / ML · Software Engineering</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 right-8 hidden font-mono text-[10px] tracking-[0.3em] text-[#748078] [writing-mode:vertical-rl] md:block">
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-[#29322b] py-24 md:py-32"
      >
        <div className={sectionContainer}>
          <SectionHeading
            number="01"
            label="About"
            title="A little about me."
          />

          <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="font-editorial text-3xl leading-snug text-[#f0f2ef] md:text-4xl">
                Curious by nature. Driven by the opportunity to build things
                that make a difference.
              </p>
            </div>

            <div className="space-y-5 text-sm leading-8 text-[#a4ada5]">
              <p>
                I&apos;m Lakshmi, a student and developer interested in
                building thoughtful software and exploring how intelligent
                systems can solve practical problems.
              </p>
              <p>
                My work spans software engineering, data systems, computer
                vision, and machine learning. I enjoy taking ideas from an
                initial concept through implementation, experimentation, and
                iteration.
              </p>
              <p>
                Outside of technical projects, I enjoy collaborating with
                student organizations and finding opportunities to learn from
                the people around me.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section
        id="education"
        className="border-t border-[#29322b] py-24 md:py-32"
      >
        <div className={sectionContainer}>
          <SectionHeading
            number="02"
            label="Education"
            title="Academic background."
          />

          <div className="grid gap-8 border border-[#29322b] bg-[#141a16] p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#a2d6a8]">
                Undergraduate Education
              </p>

              <h3 className="font-editorial text-3xl text-[#f0f2ef] md:text-4xl">
                The Ohio State University
              </h3>

              <p className="mt-4 text-base leading-relaxed text-[#a2d6a8]">
                B.S. in Computer Science and Engineering, Honors
              </p>

              <p className="mt-2 text-sm text-[#a4ada5]">
                Minors in Psychology and Statistics
              </p>
            </div>

            <div className="border-t border-[#29322b] pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
              <p className="font-mono text-xs uppercase tracking-widest text-[#a2d6a8]">
                Expected
              </p>
              <p className="mt-2 font-editorial text-3xl text-[#f0f2ef]">
                May 2028
              </p>
              <p className="mt-2 text-sm text-[#748078]">
                Columbus, Ohio
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="border-t border-[#29322b] py-24 md:py-32"
      >
        <div className={sectionContainer}>
          <SectionHeading
            number="03"
            label="Experience"
            title="Where I've been building."
          />

          <div className="space-y-0">
            {experiences.map((experience, index) => (
              <article
                key={experience.company}
                className="grid gap-6 border-t border-[#29322b] py-10 md:grid-cols-[220px_1fr] md:gap-12"
              >
                <div>
                  <p className="font-mono text-xs text-[#a2d6a8]">
                    {experience.date}
                  </p>
                  <p className="mt-2 text-xs text-[#748078]">
                    {experience.location}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-medium text-[#f0f2ef]">
                        {experience.role}
                      </h3>
                      <p className="mt-1 text-sm text-[#a2d6a8]">
                        {experience.company}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-[#526057]">
                      0{index + 1}
                    </span>
                  </div>

                  {experience.bullets && (
                    <ul className="mt-6 space-y-3">
                      {experience.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-3 text-sm leading-7 text-[#a4ada5]"
                        >
                          <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-[#a2d6a8]" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}

                  {experience.description && (
                    <p className="mt-5 max-w-3xl text-sm leading-7 text-[#a4ada5]">
                      {experience.description}
                    </p>
                  )}

                  <TagList tags={experience.tags} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section
        id="leadership"
        className="border-t border-[#29322b] py-24 md:py-32"
      >
        <div className={sectionContainer}>
          <SectionHeading
            number="04"
            label="Leadership"
            title="Beyond the classroom."
          />

          <div className="divide-y divide-[#29322b] border-y border-[#29322b]">
            {leadership.map((item) => (
              <div
                key={item.organization}
                className="flex flex-col justify-between gap-3 py-7 sm:flex-row sm:items-center"
              >
                <h3 className="text-lg text-[#f0f2ef]">
                  {item.organization}
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider text-[#a2d6a8]">
                  {item.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-t border-[#29322b] py-24 md:py-32"
      >
        <div className={sectionContainer}>
          <SectionHeading
            number="05"
            label="Selected Work"
            title="Things I've been working on."
          />

          <div className="space-y-8">
            {featuredProjects.map((project) => (
              <article
                key={project.name}
                className="group relative border border-[#29322b] bg-[#141a16] p-7 transition-colors duration-300 hover:border-[#a2d6a8]/50 md:p-10"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#a2d6a8]">
                    {project.category}
                  </p>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-widest ${
                      project.status === "In Development"
                        ? "text-[#d1b77c]"
                        : "text-[#748078]"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto]">
                  <div>
                    <h3 className="font-editorial text-4xl text-[#f0f2ef] transition-colors group-hover:text-[#a2d6a8] md:text-5xl">
                      {project.name}
                    </h3>
                    <p className="mt-2 font-mono text-xs text-[#748078]">
                      {project.subtitle}
                    </p>
                    <p className="mt-6 max-w-3xl text-sm leading-8 text-[#a4ada5]">
                      {project.description}
                    </p>
                    <TagList tags={project.tags} />
                  </div>

                  <div className="hidden font-editorial text-5xl text-[#29322b] md:block">
                    {project.number}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-24">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className={sectionLabel}>Additional Work</p>
                <h3 className="mt-3 font-editorial text-3xl text-[#f0f2ef]">
                  More explorations.
                </h3>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#748078]">
                Other Projects
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {otherProjects.map((project, index) => (
                <article
                  key={project.name}
                  className="border border-[#29322b] p-7 transition-colors hover:border-[#a2d6a8]/40"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#a2d6a8]">
                    {project.category}
                  </p>

                  <div className="mt-5 flex items-start justify-between gap-3">
                    <h4 className="font-editorial text-2xl text-[#f0f2ef]">
                      {project.name}
                    </h4>
                    <span className="font-mono text-xs text-[#526057]">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-[#a4ada5]">
                    {project.description}
                  </p>

                  <TagList tags={project.tags} />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="border-t border-[#29322b] py-24 md:py-32"
      >
        <div className={sectionContainer}>
          <SectionHeading
            number="06"
            label="Toolkit"
            title="Tools of the trade."
          />

          <div className="grid gap-10 md:grid-cols-2">
            {skillGroups.map((group, index) => (
              <div
                key={group.category}
                className="border-t border-[#29322b] pt-6"
              >
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-lg text-[#f0f2ef]">
                    {group.category}
                  </h3>
                  <span className="font-mono text-xs text-[#526057]">
                    0{index + 1}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-[#29322b] px-3 py-2 text-xs text-[#a4ada5] transition-colors hover:border-[#a2d6a8]/60 hover:text-[#a2d6a8]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="editorial-grid relative border-t border-[#29322b] py-28 md:py-36"
      >
        <div className="green-glow pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2" />

        <div className={`${sectionContainer} relative z-10`}>
          <p className={sectionLabel}>07 / Contact</p>

          <h2 className="mt-8 max-w-4xl font-editorial text-6xl leading-[1.05] text-[#f0f2ef] md:text-8xl">
            Have something
            <br />
            <span className="italic text-[#a2d6a8]">in mind?</span>
          </h2>

          <div className="mt-12 flex flex-col justify-between gap-10 border-t border-[#29322b] pt-8 md:flex-row md:items-end">
            <div>
              <p className="max-w-md text-sm leading-7 text-[#a4ada5]">
                I'm always interested in connecting, learning about new
                opportunities, and collaborating on meaningful projects.
              </p>

              <a
                href="mailto:lakshmiamondeddu@gmail.com"
                className="mt-6 inline-block border-b border-[#a2d6a8] pb-2 text-lg text-[#a2d6a8] transition-colors hover:text-[#f0f2ef]"
              >
                lakshmiamondeddu@gmail.com
              </a>
            </div>

            <div className="flex gap-6 font-mono text-xs uppercase tracking-widest text-[#a4ada5]">
              <a
                href="https://github.com/lakshmimon"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#a2d6a8]"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/lakshmimon/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#a2d6a8]"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#29322b]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-7 text-xs text-[#748078] sm:flex-row sm:items-center">
          <p className="font-editorial text-lg text-[#f0f2ef]">
            Lakshmi Mondeddu<span className="text-[#a2d6a8]">.</span>
          </p>

          <p className="font-mono text-[10px] uppercase tracking-widest">
            Designed & built with intention · © {new Date().getFullYear()}
          </p>

          <a
            href="#home"
            className="font-mono text-[10px] uppercase tracking-widest transition-colors hover:text-[#a2d6a8]"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
