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
    },
    {
      id: "cloud-native-voting-app",
      title: "Cloud-Native Voting Application",
      badge: "AWS, DOCKER & KUBERNETES (EKS)",
      shortDescription: "Deployed a cloud-native voting application using Docker containers and Kubernetes on Amazon EKS with separate frontend, API, and MongoDB services.",
      problem: "Deploying microservice voting applications into production requires high-availability cluster orchestration, containerized microservice separation, persistent database state management, and reliable networking.",
      whatIBuilt: "Deployed a cloud-native voting application using Docker containers and Kubernetes on Amazon EKS. Configured EKS cluster, EC2 worker nodes, IAM roles, namespaces, Secrets, and Kubernetes workloads to support reliable application deployment. Deployed MongoDB using StatefulSets and persistent storage, configured replication, and exposed application components through Kubernetes Services.",
      technologies: ["AWS", "Docker", "Kubernetes", "Amazon EKS", "MongoDB", "EC2", "IAM", "StatefulSets"],
      highlights: [
        "Deployed a cloud-native voting application using Docker containers and Kubernetes on Amazon EKS, with separate frontend, API, and MongoDB services.",
        "Configured EKS cluster, EC2 worker nodes, IAM roles, namespaces, Secrets, and Kubernetes workloads to support reliable application deployment.",
        "Deployed MongoDB using StatefulSets and persistent storage, configured replication, and exposed application components through Kubernetes Services."
      ],
      githubUrl: "https://github.com/ramandevgan56/cloud-native-voting-app",
      demoUrl: "https://github.com/ramandevgan56/cloud-native-voting-app",
      diagramType: "kubernetes",
      architectureNodes: [
        {
          id: "eks-cluster",
          label: "Amazon EKS Cluster & EC2 Worker Nodes",
          type: "Control & Compute Tier",
          description: "Orchestrates container workloads across multi-AZ EC2 worker nodes with IAM role integration.",
          subDetails: "EKS Cluster, EC2 Worker Nodes, IAM Roles"
        },
        {
          id: "frontend-api-svcs",
          label: "Frontend & API K8s Deployments",
          type: "Stateless Microservices",
          description: "Containerized UI & REST API pods managed via Kubernetes Deployments, Namespaces, and Secrets.",
          subDetails: "Docker Containers, Kubernetes Workloads"
        },
        {
          id: "mongodb-statefulset",
          label: "MongoDB StatefulSet & Storage",
          type: "Database Tier",
          description: "Persistent database cluster using K8s StatefulSets with persistent storage and data replication.",
          subDetails: "StatefulSets, Persistent Storage, Replication"
        },
        {
          id: "k8s-services",
          label: "Kubernetes Services & Ingress",
          type: "Networking",
          description: "Exposes application components reliably through Kubernetes Services.",
          subDetails: "ClusterIP & LoadBalancer K8s Services"
        }
      ]
    },
    {
      id: "3-tier-web-app-aws",
      title: "3-Tier Web Application Deployment on AWS",
      badge: "AWS INFRASTRUCTURE & ARCHITECTURE",
      shortDescription: "Deployed a 3-Tier web application using VPC, public/private subnets, EC2, Application Load Balancer, and Aurora MySQL.",
      problem: "Flat single-server architectures lack redundancy, fault isolation, and dynamic scaling, leaving web applications vulnerable to single points of failure.",
      whatIBuilt: "Deployed a 3-Tier web application using VPC, public/private subnets, EC2, Application Load Balancer, and Aurora MySQL. Configured VPC, public/private subnets, route tables, Internet Gateway, NAT Gateway, and security groups to establish secure network communication between application layers. Implemented Application Load Balancers, Target Groups, Launch Templates, and Auto Scaling to distribute traffic and improve application availability.",
      technologies: ["AWS VPC", "EC2", "ALB", "Aurora MySQL", "Auto Scaling", "NAT Gateway", "Security Groups"],
      highlights: [
        "Deployed a 3-Tier web Application using VPC, public/ private subnets, EC2, Application Load Balancer, and Aurora MySQL.",
        "Configured VPC, public/ private subnets, route tables, Internet Gateway, NAT Gateway, and security groups to establish secure network communication between application layers.",
        "Implemented Application Load Balancers, Target Groups, Launch Templates, and Auto Scaling to distribute traffic and improve application availability."
      ],
      githubUrl: "https://github.com/ramandevgan56/3-tier-web-app-aws",
      demoUrl: "https://github.com/ramandevgan56/3-tier-web-app-aws",
      diagramType: "aws",
      architectureNodes: [
        {
          id: "vpc-network",
          label: "AWS VPC & Subnets Network",
          type: "Network Tier",
          description: "Configured VPC, public/private subnets, route tables, Internet Gateway, NAT Gateway, and Security Groups.",
          subDetails: "VPC, Public/Private Subnets, IGW, NAT"
        },
        {
          id: "alb-target-groups",
          label: "Application Load Balancer & Target Groups",
          type: "Load Balancing",
          description: "Distributes incoming traffic across web application targets with health checking.",
          subDetails: "ALB, Target Groups, Security Groups"
        },
        {
          id: "ec2-autoscaling",
          label: "EC2 Launch Templates & Auto Scaling",
          type: "Application Tier",
          description: "Auto Scaling group dynamically launching EC2 compute instances based on workload demand.",
          subDetails: "EC2, Launch Templates, Auto Scaling"
        },
        {
          id: "aurora-mysql",
          label: "Aurora MySQL Relational Database",
          type: "Database Tier",
          description: "High-performance Aurora MySQL database residing securely in private subnets.",
          subDetails: "Aurora MySQL, DB Subnet Groups"
        }
      ]
    },
    {
      id: "automated-rest-api-terraform-jenkins",
      title: "Automated REST API Deployment on AWS",
      badge: "TERRAFORM & JENKINS CI/CD",
      shortDescription: "Provisioned AWS infrastructure with Terraform (VPC, subnets, EC2, RDS, ALB) and automated REST API deployment using Jenkins CI/CD pipeline.",
      problem: "Manual cloud infrastructure provisioning and code deployment create environment drift, slow release velocity, and security oversights.",
      whatIBuilt: "Provisioned AWS infrastructure using Terraform, including VPC, subnets, EC2, RDS, security groups, and Load Balancer. Built a Jenkins CI/CD pipeline to automate REST API deployment on AWS EC2. Configured Application Load Balancer and Route 53 for application traffic routing and connectivity.",
      technologies: ["Terraform", "Jenkins", "AWS EC2", "AWS RDS", "VPC", "ALB", "Route 53", "CI/CD"],
      highlights: [
        "Provisioned AWS infrastructure using Terraform, including VPC, subnets, EC2, RDS, security groups, and Load Balancer.",
        "Built a Jenkins CI/CD pipeline to automate REST API deployment on AWS EC2.",
        "Configured Application Load Balancer and Route 53 for application traffic routing and connectivity."
      ],
      githubUrl: "https://github.com/ramandevgan56/automated-rest-api-aws",
      demoUrl: "https://github.com/ramandevgan56/automated-rest-api-aws",
      diagramType: "cicd",
      architectureNodes: [
        {
          id: "terraform-iac",
          label: "Terraform Infrastructure as Code",
          type: "IaC Provisioning",
          description: "Provisioned AWS infrastructure using Terraform, including VPC, subnets, EC2, RDS, security groups, and Load Balancer.",
          subDetails: "Terraform HCL, VPC, Subnets, EC2, RDS, ALB"
        },
        {
          id: "jenkins-pipeline",
          label: "Jenkins CI/CD Automation Pipeline",
          type: "CI/CD Pipeline",
          description: "Built a Jenkins CI/CD pipeline to automate REST API deployment on AWS EC2.",
          subDetails: "Jenkins Pipeline, Automated Deployment"
        },
        {
          id: "alb-route53",
          label: "ALB & Route 53 Traffic Routing",
          type: "Traffic Routing",
          description: "Configured Application Load Balancer and Route 53 for application traffic routing and connectivity.",
          subDetails: "Application Load Balancer, Route 53"
        },
        {
          id: "ec2-rds-compute",
          label: "AWS EC2 API & AWS RDS Storage",
          type: "Compute & Storage",
          description: "Automated execution environment running REST API on EC2 linked to RDS database instance.",
          subDetails: "AWS EC2, AWS RDS Database"
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
    },
    {
      name: "cloud-native-voting-app",
      description: "Cloud-native voting application deployed on Amazon EKS using Docker containers, Kubernetes Deployments, StatefulSets for MongoDB, and Services.",
      stars: 18,
      forks: 5,
      language: "Kubernetes",
      techStack: ["AWS EKS", "Kubernetes", "Docker", "MongoDB", "StatefulSets"],
      url: "https://github.com/ramandevgan56/cloud-native-voting-app"
    },
    {
      name: "3-tier-web-app-aws",
      description: "Highly available 3-Tier web application deployment on AWS utilizing VPC, public/private subnets, EC2, ALB, Auto Scaling, and Aurora MySQL.",
      stars: 31,
      forks: 9,
      language: "AWS & HCL",
      techStack: ["AWS VPC", "EC2", "ALB", "Auto Scaling", "Aurora MySQL"],
      url: "https://github.com/ramandevgan56/3-tier-web-app-aws"
    },
    {
      name: "automated-rest-api-aws",
      description: "Automated REST API deployment on AWS using Terraform for IaC provisioning (VPC, EC2, RDS, ALB, Route 53) and Jenkins CI/CD pipeline.",
      stars: 27,
      forks: 8,
      language: "Terraform",
      techStack: ["Terraform", "Jenkins", "AWS EC2", "AWS RDS", "Route 53"],
      url: "https://github.com/ramandevgan56/automated-rest-api-aws"
    }
  ]
};
