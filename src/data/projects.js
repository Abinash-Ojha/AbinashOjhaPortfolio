import legalyser from '../assets/legalyser.jpg'
import ayurdiet from '../assets/ayurdiet.webp'
import furniture from '../assets/srisatyasaifurniture.png'
import clixora from '../assets/clixora.webp'
import gietuverse from '../assets/gietuverse.jpg'
import research from '../assets/research.webp'

// live: main website link. links: extra links, e.g. [{ label: 'GitHub', href: '...' }]
export const projects = [
  {
    id: 'legalyser', numeral: 'I', name: 'Legalyser', tagline: 'LLM-powered legal document analysis platform',
    lead: 'Legalyser lets a user upload a legal document and ask questions about it, with answers drawn from that document rather than from the model’s general knowledge.',
    body: [
      '',
      'Reading contracts and legal papers line by line takes time, and a language model on its own will sometimes invent details it was never given. To prevent that, the document is split into chunks, each chunk is converted into an embedding with the Gemini embedding model, and the vectors are stored in PostgreSQL using PgVector. When a question arrives, the system embeds it, retrieves the most relevant chunks and passes only those to the LLM as context. The answer comes back as structured output: an analysis table, key points and a summary.',
      'The backend is a stateless Spring Boot API secured with JWT, and every document and question-and-answer session belongs to a single user and is access-controlled. Redis handles caching and rate limiting, which protects the service from abuse and keeps LLM costs under control.',
    ],
    stack: ['Spring Boot', 'Gemini LLM', 'RAG', 'Redis', 'PostgreSQL'],
    image: legalyser, alt: 'Architecture diagram of the Legalyser RAG pipeline: upload, chunking and embedding, PgVector retrieval, LLM response, Redis rate limiting',
    caption: 'The retrieval pipeline',
        repo: 'https://github.com/Abinash-Ojha/LegalDocumentAnalyserV2',
  },
  {
    id: 'ayurdiet', numeral: 'II', name: 'AyurDiet', tagline: 'AI enabled Ayurvedic diet automation platform',
    lead: 'AyurDiet is a multi-role SaaS platform that automates Ayurvedic diet planning for doctors and their patients.',
    body: [
      'AyurDiet is a multi-role SaaS platform designed to simplify Ayurvedic diet management. It serves Admins, Doctors, and Patients, each with role-specific access enforced through JWT authentication and role-based access control (RBAC). The platform automates diet-plan generation using a machine-learning model. The model runs as an independent service, keeping the core application available even if the ML service fails.',
      'The Spring Boot backend communicates with the model through Spring WebFlux. Generated diet plans are stored in PostgreSQL and assigned unique UUIDs for identification. Patients receive their diet plans by email and can access them securely through the application. The deployment architecture was designed to support approximately 250 concurrent users with zero initial infrastructure cost. This project combines secure access control, ML integration, and fault isolation in a practical healthcare application.',
    ],
    figure: ['95%', 'reduction in manual diet-management time'],
    stack: ['Spring Boot', 'WebFlux', 'React', 'PostgreSQL', 'ML'],
    image: ayurdiet, alt: 'AyurDiet landing page showing the headline Empowering Ayurvedic Nutrition',
    caption: 'The landing page',
    live: 'https://ayur-diet.netlify.app',
  },
  {
    id: 'furniture', numeral: 'III', name: 'Sri Satya Sai Furniture', tagline: 'Website for a local furniture shop',
    lead: 'A website I designed and built for a local furniture shop, giving the business a place online that matches its own look.',
    body: [
      'The shop had a clear idea of how its site should look, so I worked from their theme and their customizations instead of a generic template, shaping the layout, colours and content around the shop’s own identity.',
      'I then deployed the finished site on Netlify, so it is live on the web and can be updated and redeployed whenever the shop’s details change.',
    ],
    stack: ['Web design', 'Front-end development', 'Netlify'],
    image: furniture, alt: 'Screenshot of the Sri Satya Sai Furniture website',
    caption: 'The shop’s website',
    live: 'https://srisatyasaifurniture.netlify.app/',
  },
   {
    id: 'gietuverse', numeral: 'IV', name: 'Uni-Verse', tagline: 'virtual meta-verse of GIETU',
    lead: 'GIETUVerse is a meta-verse of the GIET University campus where visitors walk around as live avatars and chat with people nearby.',
    body: [
      'I built it to move beyond theory and learn how WebSockets, real-time synchronisation and event-driven design work in practice. The Spring Boot backend uses WebSockets with the STOMP protocol to keep a persistent two-way connection with every client. When a user moves with the keyboard, the new coordinates are sent to the server and broadcast to all subscribers, so everyone sees the same map at the same moment.',
      'When two users come within about 50 units of each other, the server opens a private messaging channel between them. Sessions are mapped to users by email, so each private message reaches the correct connection. The frontend is built in React and deployed on Netlify, while the backend runs on Render with Neon serverless PostgreSQL.',
    ],
    figure: ['~50 units', 'proximity radius that opens private chat'],
    stack: ['Spring Boot', 'WebSockets (STOMP)', 'React', 'PostgreSQL'],
    image: gietuverse, alt: 'GIETUVerse 2D campus map in two browser windows showing two live avatars',
    caption: 'Two sessions, one campus',
    live: 'https://gietuverse.netlify.app',
  },
  {
    id: 'clixora', numeral: 'V', name: 'Clixora', tagline: 'URL shortening platform',
    lead: 'Clixora turns long web addresses into short links, with custom or randomly generated aliases.',
    body: [
      'Users reach it through JWT-secured APIs and can choose their own alias or let the system generate one. The backend is built to be analytics-ready, so link activity can be tracked. Redirects are the part that has to be fast: caching the lookups in Redis brought redirect latency down from about 900 ms to 12 ms, roughly a 98% reduction.',
      'To prevent abuse, a fixed-window rate limiter built on Redis atomic counters controls how often a client can call the service. The frontend and backend are deployed on separate PaaS platforms, so a failure on one side does not take down the other.',
    ],
    figure: ['900 ms → 12 ms', 'redirect latency with Redis caching'],
    stack: ['Spring Boot', 'React', 'MySQL', 'Redis', 'JWT'],
    image: clixora, alt: 'Clixora landing page with Create Short Link, Manage Links and Customize Links buttons',
    caption: 'The landing page',
    live: 'https://clixora.netlify.app',
  },
  {
    id: 'research', numeral: 'VI', name: 'Smart Research Assistant', tagline: 'Gemini-powered study assistant',
    lead: 'Smart Research Assistant helps students and researchers work through long or difficult text.',
    body: [
      'The user pastes in content and chooses what to do with it: summarise it, extract the key points, analyse its sentiment and tone, or rephrase and simplify it. The request goes to the Gemini API and the response appears next to the input.',
      'The frontend is built with React and deployed on Netlify. The backend is a reactive Spring Boot (WebFlux) service on Render that handles the requests and calls the Gemini API. It is a practical use of LLM integration for education and research support.',
    ],
    stack: ['React', 'Spring Boot WebFlux', 'Gemini API'],
    image: research, alt: 'Smart Research Assistant interface with a content input, an operation selector and a response panel',
    caption: 'The workspace',
    live: 'https://lnkd.in/diTDH8P8', liveLabel: 'Open project',
  },
]