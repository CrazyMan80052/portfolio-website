# Projects Overview

## Work Projects
---
## Amazon
Built internal full-stack tools and backend services to help engineers test recommendation models, debug customer escalations, and analyze large-scale production data faster. The work focused on scalable AWS infrastructure, cost-efficient analytics, and developer enablement.

- Designed and implemented a simulation platform using React, Java, and AWS that was used by 30+ engineers.
- Built and JUnit-tested Java REST APIs with AWS Lambda, API Gateway, Athena, and S3 in an event-driven system handling 8k+ TPS and 100TB/day of logs.
- Reduced Athena query costs by 90% through SQL optimization, caching, and partitioning, cutting scans from 100+ GB to under 1 GB.
- Improved analysis runtime from 10-15 minutes to under 3 minutes, enabling faster investigation and automated statistical analysis.
- Presented the tool to 40+ stakeholders and collaborated across a 10+ person team to expand features and improve self-service workflows.

## Nokia
Automated deployment, validation, and observability workflows for production-facing data integration systems. The project centered on infrastructure automation, CI/CD, and reducing manual testing overhead.

- Automated Kubernetes (GKE) and Ab Initio deployment workflows with Bash, reducing manual testing effort by 70%.
- Built CI/CD pipelines with Jenkins and GitHub for production-facing data integration tools.
- Developed validation workflows to improve reliability and consistency across deployments.
- Implemented monitoring and logging infrastructure with Prometheus, Datadog, and Fluent Bit.

## Personal Projects
---

## Boss MechAInic Chatbot Tool
Developed an agentic chatbot platform that helps customers diagnose car issues and connect with relevant auto shops. The system also gives shops access to customer conversations so they can prepare diagnoses more efficiently.

- Built the application with Next.js and TypeScript and deployed it on Vercel.
- Implemented conversational workflows to guide users through vehicle issue diagnosis.
- Integrated Redis, Auth.js, and PostgreSQL for caching, authentication, and persistent data storage.
- Designed the platform so auto shops could review conversations and accelerate follow-up support.

Repository: [Boss MechAInic Chatbot Tool](https://github.com/CrazyMan80052/boss-chatbot-tool/tree/main)

## Finance Data Pipeline
Created a serverless ETL pipeline on AWS to ingest, transform, and store stock market data for downstream analytics and machine learning use cases. The system was designed to run automatically with low maintenance while supporting scalable querying.

- Pulled market data from the Alpha Vantage API with Python-based AWS Lambda functions.
- Cleaned and transformed raw data with PySpark, including malformed-value handling, rolling averages, technical indicators, and aggregations.
- Stored processed datasets in partitioned Parquet format on S3 for efficient Athena queries.
- Scheduled the pipeline with CloudWatch to run every 12 hours in a fully serverless architecture.
- Scaled the pipeline to process over 10,000 stock records per day.

Repository: [Finance Data Pipeline](https://github.com/CrazyMan80052/finance-data-pipeline)

## Automated Video Creation and Uploading Tool

Built a fully automated Python pipeline for generating and publishing Reddit-style short-form videos to YouTube and TikTok. The system replaced a repetitive manual workflow with a cross-platform content engine that could render, package, and upload videos in minutes.

- Designed a fully automated Python tool to generate and upload Reddit-style shorts to YouTube and TikTok.
- Rendered and uploaded each video in under 4 minutes, and early outputs reached over 1,000 views in the first 24 hours.
- Incorporated GPT, Coqui TTS, and NLP workflows to generate thumbnails, tags, subtitles, and descriptions automatically.
- Automated video editing and rendering as part of the end-to-end publishing pipeline.
- Deployed and containerized the full system with Docker for reliable cross-platform execution and testing.

Repository: [Automated Video Creation and Uploading Tool](https://github.com/CrazyMan80052/Reddit-Video-Uploader)

## Stock Price Movement Classifier
Built a machine learning pipeline to predict next-day stock price movement using historical market data and engineered technical indicators. The project focused on feature engineering, model comparison, and practical performance gains at scale.

- Trained XGBoost and Random Forest classifiers on 2 million rows of historical price data.
- Engineered 15+ technical indicators with PyTorch, NumPy, and Pandas.
- Improved model precision by 10% through feature engineering and preprocessing.
- Reached about 60% prediction accuracy on next-day stock movement classification.
- Visualized trends and feature distributions with Matplotlib to guide normalization and feature selection.

Repository: [Stock Price Movement Classifier](https://github.com/CrazyMan80052/Quantathon2025)

## Hack AI Infrared Analysis
Developed a computer vision system for search-and-rescue assistance by detecting people in infrared drone imagery. The project combined object detection, dataset preprocessing, and reinforcement-learning-inspired path planning.

- Trained a YOLOv8 and PyTorch-based model to detect people in infrared drone images with 80% accuracy.
- Processed and cleaned a 7,800-image dataset, including annotation format conversion and data preparation with Pandas and NumPy.
- Worked with the Partially Occluded Persons infrared drone dataset for model development and evaluation.
- Designed a Q-learning-based drone swarm pathfinding algorithm that increased area coverage efficiency by 20%.

Repository: [Hack AI Infrared Analysis](https://github.com/CrazyMan80052/HackAIInfraredAnalysis)

## Bounded Buffer Problem
Implemented a thread-safe bounded buffer in C to solve the producer-consumer problem under concurrent workloads. The project emphasized synchronization correctness, performance tuning, and stress testing.

- Built a multithreaded producer-consumer system in C using POSIX threads, mutexes, and semaphores.
- Supported up to 10 concurrent producer and consumer threads without race conditions or deadlocks.
- Developed a testing framework that simulated 1,000+ operations to verify correctness under load.
- Improved throughput by 3x over a naive unsynchronized implementation by reducing lock contention and tuning critical sections.

Repository: [Bounded Buffer Problem](https://github.com/CrazyMan80052/bounded-buffer)

## CLI Restaurant Inventory System
Created a terminal-based restaurant inventory and ordering system in C with persistent file storage. The project focused on systems programming fundamentals, efficient order handling, and debugging reliability issues.

- Built a CLI application that allowed staff to place orders, update inventory, and persist data with files.
- Implemented dynamic memory management to support flexible order and inventory operations.
- Used GDB and Valgrind to find and fix segmentation faults and memory leaks.
- Designed the system to process multiple orders efficiently while maintaining consistent inventory tracking.

Repository: [CLI Restaurant Inventory System](https://github.com/CrazyMan80052/cli-restaurant-inventory-system)

## Club Discovery System
Helped lead the redesign of Ohio State's club discovery platform to provide better filtering, recommendations, attendance support, and a more modern user experience. The project combined frontend development, product design, and team leadership in a collaborative student setting.

- Built features for the discovery page with React and Next.js, including tag-based filtering and recommendation workflows.
- Contributed to the UI layout and overall product design for a modern club exploration experience.
- Managed an 8-person team using Agile processes and Git-based collaboration workflows.
- Structured task assignments around team strengths while creating growth opportunities through targeted subtasks.
- Contributed to a system under review for deployment at a university serving 60,000+ students.

Repository: [Club Discovery System](https://github.com/Collaborative-Software-Development-Club/fall-2025-web-clubhub)

## Skills

### Languages
- C++
- Python
- Java
- C
- Ruby
- TypeScript
- JavaScript
- SQL
- Bash
- HTML/CSS

### Frameworks and Libraries
- React.js
- Next.js
- Node.js
- PyTorch
- Pandas
- NumPy
- PySpark
- Matplotlib
- XGBoost
- Random Forest
- JUnit
- POSIX Threads
- MoviePy
- Auth.js

### Cloud and Infrastructure
- AWS
- AWS Lambda
- API Gateway
- Amazon S3
- Athena
- CloudWatch
- GCP
- GKE
- Kubernetes
- Docker
- Vercel
- Linux/Unix

### Databases and Data Technologies
- PostgreSQL (Postgres)
- Redis
- Parquet
- ETL Pipelines
- Data Partitioning
- Serverless Architecture

### DevOps and Observability
- Jenkins
- GitHub
- Git
- CI/CD
- Prometheus
- Datadog
- Fluent Bit

### Machine Learning and AI
- AI/ML
- YOLOv8
- Computer Vision
- NLP
- LLM
- Technical Indicator Engineering
- Reinforcement Learning
- Q-Learning
- CUDA
- AI-Assisted Development
- OpenAI GPT
- OpenAI Whisper
- Coqui TTS

### Software Engineering
- Full-Stack Development
- REST API Development
- Event-Driven Systems
- Multithreading
- Concurrency
- Synchronization
- Performance Optimization
- Unit Testing
- Testing and Debugging
- GDB
- Valgrind
- Agile
- Git Workflows
