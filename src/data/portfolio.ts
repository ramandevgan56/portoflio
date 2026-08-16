import type { PortfolioData } from '../types/portfolio';

export const initialPortfolioData: PortfolioData = {
  personal: {
    name: "Raman Devgan",
    role: "Cloud Engineer",
    subroles: ["DevOps", "SRE", "Platform Engineering"],
    headline: "Building reliable infrastructure. Automating everything I can.",
    supportingText: "Cloud Engineer focused on building reliable, automated and scalable infrastructure using AWS, Docker, Kubernetes and Terraform.",
    location: "Chandigarh, India",
    availability: "Open to Internship & Full-time Roles",
    availabilityBadge: "Open to Internship & Full-time Roles",
    email: "ramandevgan56@gmail.com",
    githubUrl: "https://github.com/ramandevgan56",
    linkedinUrl: "https://www.linkedin.com/in/cloud-guy-26a848378/",
    instagramUrl: "https://www.instagram.com/ramandevgan21/?hl=en",
    twitterUrl: "https://x.com/ramandevgan",
    resumeUrl: "/resume.pdf",
    profileImage: "/images/profile.png",
  },

  about: {
    heading: "Cloud infrastructure,\nbuilt with purpose.",
    bioParagraphs: [
      "I am a passionate Cloud Engineer specializing in modern DevOps practices, Site Reliability Engineering (SRE), and Platform Engineering. My primary motivation is constructing resilient systems that scale effortlessly and heal automatically.",
      "My methodology centers around treating infrastructure as software. By leveraging Infrastructure as Code (IaC), GitOps, and robust observability pipelines, I transform complex cloud deployment workflows into predictable, automated, and secure delivery channels."
    ],
    currentlyFocused: [
      "AWS",
      "Terraform",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Linux",
      "Observability"
    ],
    metrics: [
      {
        label: "AUTOMATION RATIO",
        value: "99.9%",
        subtext: "IaC provisioned cloud assets"
      },
      {
        label: "TARGET AVAILABILITY",
        value: "99.99%",
        subtext: "High-availability uptime target"
      },
      {
        label: "DEPLOYMENT SPEED",
        value: "< 10m",
        subtext: "Automated commit-to-prod pipeline"
      }
    ]
  },

  skills: [
    {
      category: "CLOUD",
      items: [
        {
          name: "AWS",
          description: "Architecting core AWS cloud services including VPC, EC2, EKS, RDS, S3, IAM, and CloudWatch.",
          badge: "Primary Cloud"
        }
      ]
    },
    {
      category: "CONTAINERS & ORCHESTRATION",
      items: [
        {
          name: "Kubernetes",
          description: "Deploying, scaling, and managing containerized workloads with Pods, Services, and Helm charts.",
          badge: "Orchestration"
        },
        {
          name: "Docker",
          description: "Containerizing application workloads, multi-stage builds, and optimizing image footprints.",
          badge: "Containers"
        }
      ]
    },
    {
      category: "INFRASTRUCTURE AS CODE",
      items: [
        {
          name: "Terraform",
          description: "Provisioning and managing cloud infrastructure as code with reusable modules and remote state.",
          badge: "Core IaC"
        },
        {
          name: "Ansible",
          description: "Automating server configuration management, software provisioning, and application deployments.",
          badge: "Config Mgmt"
        }
      ]
    },
    {
      category: "CI/CD PIPELINE",
      items: [
        {
          name: "CI/CD Pipeline",
          description: "Building automated workflows for testing, container security scanning, and continuous delivery.",
          badge: "Automation"
        }
      ]
    },
    {
      category: "SYSTEMS & NETWORKING",
      items: [
        {
          name: "Linux",
          description: "System administration, user permissions, process management, and kernel CLI troubleshooting.",
          badge: "OS Core"
        },
        {
          name: "Networking",
          description: "TCP/IP subnetting, DNS routing, firewalls, load balancing, and network socket protocols.",
          badge: "Network Core"
        },
        {
          name: "System Design",
          description: "Designing fault-tolerant, high-concurrency, distributed cloud architectures with SLA guarantees.",
          badge: "Architecture"
        }
      ]
    },
    {
      category: "PROGRAMMING & DATABASES",
      items: [
        {
          name: "Python",
          description: "Developing cloud automation tools, boto3 AWS scripts, and RESTful utility APIs.",
          badge: "Scripting"
        },
        {
          name: "SQL",
          description: "Writing relational queries, database schema design, indexing, and PostgreSQL optimization.",
          badge: "Databases"
        }
      ]
    },
    {
      category: "VERSION CONTROL",
      items: [
        {
          name: "Git",
          description: "Branching strategies (GitFlow, trunk-based development), interactive rebasing, and merge control.",
          badge: "Version Control"
        },
        {
          name: "GitHub",
          description: "Pull request code reviews, GitHub Security alerts, branch protection rules, and team governance.",
          badge: "Collaboration"
        }
      ]
    }
  ],

  projects: [
    {
      id: "quickbite-docker-project",
      title: "QuickBite (FoodieHub) Food Delivery App",
      badge: "DOCKER & MICROSERVICES",
      shortDescription: "Containerized multi-service food ordering application featuring custom Dockerfiles for Frontend (Nginx), Backend (Express API), and MongoDB database orchestrated via Docker Compose.",
      problem: "Running microservice web apps locally without containerization leads to environment mismatch issues, port conflicts, missing database dependencies, and tedious multi-step manual launches.",
      whatIBuilt: "Architected a fully containerized stack for QuickBite. Created Dockerfile.frontend (serving static assets with Nginx on Port 80) and Dockerfile.backend (Express API on Port 5001). Configured docker-compose.yml for unified service management, volume persistence, and secure inter-container communication across a custom Docker bridge network (quickbite-network).",
      technologies: ["Docker", "Docker Compose", "Nginx", "Node.js", "Express", "MongoDB", "JavaScript"],
      highlights: [
        "Multi-tier containerized architecture (Nginx Frontend, Node.js API, MongoDB)",
        "Custom Dockerfile.frontend and Dockerfile.backend image builds",
        "Unified docker-compose.yml lifecycle orchestration with dependency ordering",
        "Isolated Docker bridge network (quickbite-network) for container DNS service discovery",
        "Environment variable isolation (MONGO_URI, PORT) for seamless execution",
        "Embedded database auto-seeding routine for instant local & API integration testing"
      ],
      githubUrl: "https://github.com/ramandevgan56/docker-project",
      demoUrl: "https://github.com/ramandevgan56/docker-project",
      diagramType: "docker",
      architectureNodes: [
        {
          id: "nginx-fe",
          label: "Nginx Frontend Container",
          type: "Web Tier",
          description: "Serves static HTML/JS food delivery interface on Port 80.",
          subDetails: "Dockerfile.frontend (Nginx Alpine)"
        },
        {
          id: "express-be",
          label: "Node.js Express API Container",
          type: "App Tier",
          description: "Handles food catalog, order placement, and API routes on Port 5001.",
          subDetails: "Dockerfile.backend (Node.js runtime)"
        },
        {
          id: "mongo-db",
          label: "MongoDB Database Container",
          type: "Database Tier",
          description: "NoSQL database storage container listening on Port 27017.",
          subDetails: "Data Volume Mounted"
        },
        {
          id: "docker-net",
          label: "Docker Bridge Network",
          type: "Networking",
          description: "Isolated virtual network (quickbite-network) enabling inter-container DNS routing.",
          subDetails: "Bridged Service Discovery"
        }
      ]
    }
  ],

  certifications: [
    {
      id: "cert-aws",
      title: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services (AWS)",
      year: "Aug 2026",
      credentialId: "1KGXSO8SJJCT",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/1KGXSO8SJJCT?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      status: "earned"
    },
    {
      id: "cert-msft",
      title: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft",
      year: "Mar 2026",
      credentialId: "5137b9b6-eb4a-480a-a99f-5b3b61fc0233",
      verifyUrl: "https://www.credly.com/badges/5137b9b6-eb4a-480a-a99f-5b3b61fc0233/public_url",
      status: "earned"
    },
    {
      id: "cert-google",
      title: "Google IT Support Professional Certificate",
      issuer: "Google / Coursera",
      year: "Aug 2026",
      credentialId: "5W2EBFOA221S",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/5W2EBFOA221S?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      status: "earned"
    }
  ],
  achievements: [
    {
      id: "ach-upwork",
      title: "Motion Graphic Designer",
      category: "UPWORK • FREELANCE",
      date: "Jan 2026 - Apr 2026 • 4 mos",
      description: "Successfully completed 9 freelance projects on Upwork with positive client feedback. Delivered projects on time while maintaining clear communication with international clients and managing multiple project deadlines.",
      metric: "9 Projects Completed"
    },
    {
      id: "ach-hackathon",
      title: "College Hackathon Runner-Up",
      category: "HACKATHON 2ND POSITION",
      date: "2026",
      description: "Won college hackathon and got 2nd position.",
      metric: "2nd Position"
    }
  ],

  education: {
    degree: "B.Tech / B.E. — Computer Science",
    institution: "[University Name]",
    period: "[2022 – 2026]",
    gpa: "CGPA: [Your CGPA]",
    relevantCoursework: [
      "Computer Networks",
      "Operating Systems",
      "Database Systems",
      "Distributed Systems",
      "Cloud Computing"
    ],
    achievements: [
      "Focus on Cloud System Architecture & Distributed Computing",
      "Hands-on lab experience with Linux Kernel Administration & Network Socket Programming"
    ]
  },

  journey: [
    {
      step: 1,
      title: "Linux & Networking",
      subtitle: "The Foundation",
      description: "Mastered Linux CLI administration, file permissions, shell environments, systemd services, TCP/IP networking, subnets, and DNS routing.",
      tools: ["Linux", "Bash", "SSH", "DNS", "TCP/IP"]
    },
    {
      step: 2,
      title: "Git & Version Control",
      subtitle: "Code Management",
      description: "Adopted structured version control, Git branching strategies, pull request workflows, interactive rebases, and release tagging.",
      tools: ["Git", "GitHub", "GitFlow"]
    },
    {
      step: 3,
      title: "Amazon Web Services (AWS)",
      subtitle: "Cloud Infrastructure",
      description: "Learned cloud fundamentals: VPC networking, EC2 compute, IAM security policies, S3 storage, RDS databases, and ALB load balancing.",
      tools: ["VPC", "EC2", "S3", "IAM", "RDS", "ALB"]
    },
    {
      step: 4,
      title: "Docker & Containerization",
      subtitle: "Packaging Workloads",
      description: "Containerized applications using Dockerfiles, optimized multi-stage builds, managed container networking, and composed local multi-container setups.",
      tools: ["Docker", "Docker Compose", "Multi-stage Builds"]
    },
    {
      step: 5,
      title: "Terraform (IaC)",
      subtitle: "Infrastructure Automation",
      description: "Transitioned from manual cloud console clicks to declarative Infrastructure as Code. Built modular Terraform code with remote state locking.",
      tools: ["Terraform", "HCL", "S3 Backend", "DynamoDB Lock"]
    },
    {
      step: 6,
      title: "Kubernetes & Orchestration",
      subtitle: "Workload Scaling",
      description: "Explored container orchestration: Pods, Deployments, Services, ConfigMaps, Secrets, Ingress, and Helm deployment charts on Amazon EKS.",
      tools: ["Kubernetes", "EKS", "Helm", "kubectl"]
    },
    {
      step: 7,
      title: "CI/CD Automation",
      subtitle: "Continuous Delivery",
      description: "Built end-to-end continuous integration and deployment pipelines with GitHub Actions, enforcing automated security scans and deployment stages.",
      tools: ["GitHub Actions", "Trivy", "ECR", "ArgoCD"]
    },
    {
      step: 8,
      title: "Monitoring & Observability",
      subtitle: "System Visibility",
      description: "Configured metrics gathering and visualization using Prometheus and Grafana. Set up CloudWatch alarms and real-time incident alerting.",
      tools: ["Prometheus", "Grafana", "CloudWatch", "Alertmanager"]
    },
    {
      step: 9,
      title: "SRE & Platform Engineering",
      subtitle: "Reliability & Scalability",
      description: "Applying Site Reliability Engineering principles: SLO/SLA targets, self-healing infrastructure, Chaos engineering tests, and developer platform tooling.",
      tools: ["SRE Principles", "SLO/SLA", "Self-Healing", "IaC Automation"]
    }
  ],

  repos: [
    {
      name: "docker-project",
      description: "QuickBite (FoodieHub) containerized food app with frontend (Nginx), backend (Express API), MongoDB, and Docker Compose configuration.",
      stars: 24,
      forks: 7,
      language: "Docker",
      techStack: ["Docker", "Docker Compose", "Node.js", "Nginx", "MongoDB"],
      url: "https://github.com/ramandevgan56/docker-project"
    }
  ]
};
