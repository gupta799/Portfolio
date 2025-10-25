import React from 'react'
import './App.css'

function App() {
  const portfolio = {
    name: "Alex Morgan",
    title: "Full Stack Developer",
    about: "Passionate developer with expertise in building scalable web applications and elegant user interfaces. Focused on creating meaningful digital experiences through clean code and thoughtful design.",

    experience: [
      {
        role: "Senior Software Engineer",
        company: "Tech Innovations Inc",
        period: "2022 - Present",
        description: "Leading development of cloud-native applications and mentoring junior developers"
      },
      {
        role: "Full Stack Developer",
        company: "Digital Solutions Co",
        period: "2020 - 2022",
        description: "Built and maintained multiple client-facing web applications using modern frameworks"
      },
      {
        role: "Frontend Developer",
        company: "StartupHub",
        period: "2018 - 2020",
        description: "Developed responsive user interfaces and improved application performance"
      }
    ],

    projects: [
      {
        name: "Task Management System",
        description: "A collaborative task management platform with real-time updates and team collaboration features",
        tech: ["React", "Node.js", "PostgreSQL", "WebSocket"]
      },
      {
        name: "E-Commerce Platform",
        description: "Full-featured online shopping platform with payment integration and inventory management",
        tech: ["Next.js", "TypeScript", "Stripe", "MongoDB"]
      },
      {
        name: "Analytics Dashboard",
        description: "Real-time data visualization dashboard for business intelligence and reporting",
        tech: ["React", "D3.js", "Express", "Redis"]
      }
    ],

    skills: {
      "Languages": ["JavaScript", "TypeScript", "Python", "SQL"],
      "Frontend": ["React", "Next.js", "Vue", "Tailwind CSS"],
      "Backend": ["Node.js", "Express", "Django", "REST APIs"],
      "Database": ["PostgreSQL", "MongoDB", "Redis"],
      "Tools": ["Git", "Docker", "AWS", "CI/CD"]
    },

    contact: {
      email: "alex.morgan@example.com",
      github: "github.com/alexmorgan",
      linkedin: "linkedin.com/in/alexmorgan"
    }
  }

  return (
    <div className="portfolio">
      <div className="container">
        <header className="header">
          <h1>{portfolio.name}</h1>
          <p className="subtitle">{portfolio.title}</p>
        </header>

        <section className="section">
          <h2>About</h2>
          <p>{portfolio.about}</p>
        </section>

        <section className="section">
          <h2>Experience</h2>
          <div className="timeline">
            {portfolio.experience.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-header">
                  <h3>{exp.role}</h3>
                  <span className="period">{exp.period}</span>
                </div>
                <div className="company">{exp.company}</div>
                <p className="description">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Projects</h2>
          <div className="projects">
            {portfolio.projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Skills</h2>
          <div className="skills">
            {Object.entries(portfolio.skills).map(([category, items]) => (
              <div key={category} className="skill-category">
                <h3>{category}</h3>
                <div className="skill-items">
                  {items.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section contact">
          <h2>Contact</h2>
          <div className="contact-links">
            <a href={`mailto:${portfolio.contact.email}`}>{portfolio.contact.email}</a>
            <a href={`https://${portfolio.contact.github}`} target="_blank" rel="noopener noreferrer">
              {portfolio.contact.github}
            </a>
            <a href={`https://${portfolio.contact.linkedin}`} target="_blank" rel="noopener noreferrer">
              {portfolio.contact.linkedin}
            </a>
          </div>
        </section>

        <footer className="footer">
          <p>© 2024 {portfolio.name}. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default App
