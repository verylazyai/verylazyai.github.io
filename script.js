// AI Tools Database
const aiTools = [
    // Writing Tools
    {
        id: 1,
        name: "ChatGPT",
        category: "writing",
        icon: "💬",
        description: "Advanced AI chatbot for conversations, content creation, coding help, and problem-solving.",
        fullDescription: "ChatGPT is OpenAI's flagship conversational AI that can help with writing, brainstorming, coding, learning, and much more. It understands context and can engage in natural, flowing conversations.",
        features: [
            "Natural language conversations",
            "Content generation and editing",
            "Code writing and debugging",
            "Learning and research assistance",
            "Multiple language support"
        ],
        url: "https://chat.openai.com",
        videoUrl: "https://www.youtube.com/embed/JTxsNm9IdYU",
        badge: "Free"
    },
    {
        id: 2,
        name: "Claude",
        category: "writing",
        icon: "🤖",
        description: "Anthropic's AI assistant with strong reasoning, coding abilities, and long context windows.",
        fullDescription: "Claude excels at complex reasoning, analysis, and coding tasks. With extended context windows, it can work with large documents and maintain coherent conversations.",
        features: [
            "Extended context understanding",
            "Advanced reasoning and analysis",
            "Safe and helpful responses",
            "Code generation and review",
            "Document analysis"
        ],
        url: "https://claude.ai",
        videoUrl: "https://www.youtube.com/embed/Ml8T32zilsM",
        badge: "Free"
    },
    {
        id: 3,
        name: "Gemini",
        category: "writing",
        icon: "✨",
        description: "Google's multimodal AI that understands text, images, audio, and video for creative tasks.",
        fullDescription: "Google's Gemini is a powerful multimodal AI that can process and generate content across different formats, making it ideal for creative and analytical work.",
        features: [
            "Multimodal understanding",
            "Integration with Google services",
            "Real-time information access",
            "Image and text generation",
            "Code assistance"
        ],
        url: "https://gemini.google.com",
        videoUrl: "https://www.youtube.com/embed/UIZAiXYceBI",
        badge: "Free"
    },
    {
        id: 4,
        name: "QuillBot",
        category: "writing",
        icon: "📝",
        description: "AI-powered paraphrasing and grammar checking tool for improving your writing.",
        fullDescription: "QuillBot helps you rephrase and improve your writing with AI-powered paraphrasing, grammar checking, and summarization tools.",
        features: [
            "Paraphrasing in multiple modes",
            "Grammar and spell checking",
            "Summarization tool",
            "Citation generator",
            "Word flipper for vocabulary"
        ],
        url: "https://quillbot.com",
        videoUrl: "",
        badge: "Free"
    },

    // Image Tools
    {
        id: 5,
        name: "DALL-E",
        category: "image",
        icon: "🎨",
        description: "Create stunning images from text descriptions with OpenAI's image generation AI.",
        fullDescription: "DALL-E generates creative and realistic images from textual descriptions, making it perfect for designers, marketers, and creators.",
        features: [
            "Text-to-image generation",
            "Style variations and editing",
            "High-resolution outputs",
            "Inpainting and outpainting",
            "Multiple aspect ratios"
        ],
        url: "https://openai.com/dall-e",
        videoUrl: "https://www.youtube.com/embed/qTgPSKKjfVg",
        badge: "Free"
    },
    {
        id: 6,
        name: "Midjourney",
        category: "image",
        icon: "🌌",
        description: "AI art generator known for stunning, artistic image creation via Discord.",
        fullDescription: "Midjourney creates incredibly artistic and detailed images through Discord commands, perfect for creative professionals and artists.",
        features: [
            "Artistic image generation",
            "Multiple style presets",
            "Upscaling capabilities",
            "Variation generation",
            "Community gallery"
        ],
        url: "https://midjourney.com",
        videoUrl: "https://www.youtube.com/embed/6YJUv9Wxyh0",
        badge: "Trial"
    },
    {
        id: 7,
        name: "Stable Diffusion",
        category: "image",
        icon: "🖼️",
        description: "Open-source AI image generator with powerful customization and local running options.",
        fullDescription: "Stable Diffusion is an open-source text-to-image model that offers complete control and can be run locally or through various online platforms.",
        features: [
            "Open-source and customizable",
            "Run locally or online",
            "Multiple model versions",
            "Fine-tuning capabilities",
            "Active community"
        ],
        url: "https://stability.ai",
        videoUrl: "https://www.youtube.com/embed/DHaL56P6f5M",
        badge: "Free"
    },
    {
        id: 8,
        name: "Leonardo AI",
        category: "image",
        icon: "🎭",
        description: "Game-ready AI art generator with consistent character and style controls.",
        fullDescription: "Leonardo AI specializes in creating game assets and consistent character designs with powerful style control features.",
        features: [
            "Game asset generation",
            "Consistent character creation",
            "Multiple art styles",
            "Canvas editing tools",
            "Model training"
        ],
        url: "https://leonardo.ai",
        videoUrl: "",
        badge: "Free"
    },
    {
        id: 9,
        name: "Remove.bg",
        category: "image",
        icon: "🔲",
        description: "Instantly remove backgrounds from images with AI precision.",
        fullDescription: "Remove.bg uses AI to automatically detect and remove backgrounds from images in seconds, perfect for product photos and portraits.",
        features: [
            "Automatic background removal",
            "High-quality edge detection",
            "Bulk processing",
            "API available",
            "HD downloads"
        ],
        url: "https://remove.bg",
        videoUrl: "",
        badge: "Free"
    },

    // Video Tools
    {
        id: 10,
        name: "Runway",
        category: "video",
        icon: "🎬",
        description: "AI-powered video editing with Gen-2 for text-to-video and image-to-video generation.",
        fullDescription: "Runway offers cutting-edge AI video tools including text-to-video, image-to-video, and advanced editing features for creators.",
        features: [
            "Text-to-video generation",
            "AI video editing",
            "Motion tracking",
            "Green screen removal",
            "Style transfer"
        ],
        url: "https://runwayml.com",
        videoUrl: "https://www.youtube.com/embed/0m8CfFXlYT0",
        badge: "Free"
    },
    {
        id: 11,
        name: "Pika",
        category: "video",
        icon: "⚡",
        description: "Create and edit videos with AI - text to video, image to video, and more.",
        fullDescription: "Pika makes video creation accessible with AI-powered tools for generating videos from text prompts and images.",
        features: [
            "Text-to-video",
            "Image-to-video",
            "Video editing",
            "Style customization",
            "Easy sharing"
        ],
        url: "https://pika.art",
        videoUrl: "",
        badge: "Free"
    },
    {
        id: 12,
        name: "HeyGen",
        category: "video",
        icon: "👤",
        description: "AI video generator with customizable avatars and voice cloning for presentations.",
        fullDescription: "HeyGen creates professional videos with AI avatars and voice cloning, perfect for marketing, training, and presentations.",
        features: [
            "AI avatar creation",
            "Voice cloning",
            "Multiple languages",
            "Template library",
            "Easy video editing"
        ],
        url: "https://heygen.com",
        videoUrl: "https://www.youtube.com/embed/MxSBDjc5fqw",
        badge: "Free"
    },

    // Code Tools
    {
        id: 13,
        name: "GitHub Copilot",
        category: "code",
        icon: "💻",
        description: "AI pair programmer that suggests code completions as you type in your editor.",
        fullDescription: "GitHub Copilot is trained on billions of lines of code to help you write code faster with AI-powered suggestions and completions.",
        features: [
            "Real-time code suggestions",
            "Multiple language support",
            "Context-aware completions",
            "IDE integration",
            "Code explanation"
        ],
        url: "https://github.com/features/copilot",
        videoUrl: "https://www.youtube.com/embed/Xt8o9QM9Rr0",
        badge: "Trial"
    },
    {
        id: 14,
        name: "Cursor",
        category: "code",
        icon: "⚙️",
        description: "AI-first code editor built for pair programming with AI.",
        fullDescription: "Cursor is a modern code editor designed from the ground up for AI pair programming, with powerful AI features built in.",
        features: [
            "AI-native editor",
            "Chat with your codebase",
            "Inline AI suggestions",
            "Codebase understanding",
            "Multiple AI models"
        ],
        url: "https://cursor.sh",
        videoUrl: "https://www.youtube.com/embed/gqUQbjsYZLQ",
        badge: "Free"
    },
    {
        id: 15,
        name: "Replit",
        category: "code",
        icon: "🔧",
        description: "Browser-based IDE with AI coding assistance and instant deployment.",
        fullDescription: "Replit combines a powerful online IDE with AI assistance, making it easy to code, collaborate, and deploy from anywhere.",
        features: [
            "Browser-based coding",
            "AI code generation",
            "Instant deployment",
            "Multiplayer coding",
            "Built-in database"
        ],
        url: "https://replit.com",
        videoUrl: "",
        badge: "Free"
    },
    {
        id: 16,
        name: "Codeium",
        category: "code",
        icon: "🚀",
        description: "Free AI code completion tool supporting 70+ languages in your favorite IDE.",
        fullDescription: "Codeium provides fast and accurate AI code completions for free, supporting a wide range of programming languages and IDEs.",
        features: [
            "70+ language support",
            "IDE integrations",
            "Fast completions",
            "Natural language search",
            "100% free"
        ],
        url: "https://codeium.com",
        videoUrl: "",
        badge: "Free"
    },

    // Audio Tools
    {
        id: 17,
        name: "ElevenLabs",
        category: "audio",
        icon: "🎵",
        description: "Ultra-realistic AI voice generator with voice cloning and text-to-speech.",
        fullDescription: "ElevenLabs creates incredibly realistic AI voices for narration, audiobooks, video voiceovers, and more with voice cloning capabilities.",
        features: [
            "Realistic voice synthesis",
            "Voice cloning",
            "Multiple languages",
            "Emotion control",
            "API access"
        ],
        url: "https://elevenlabs.io",
        videoUrl: "https://www.youtube.com/embed/yzBeKGgApZg",
        badge: "Free"
    },
    {
        id: 18,
        name: "Murf AI",
        category: "audio",
        icon: "🎙️",
        description: "AI voice generator for professional voiceovers with studio-quality voices.",
        fullDescription: "Murf AI offers studio-quality AI voices for creating professional voiceovers for videos, presentations, and e-learning content.",
        features: [
            "120+ voices",
            "20+ languages",
            "Voice customization",
            "Background music",
            "Voice cloning"
        ],
        url: "https://murf.ai",
        videoUrl: "",
        badge: "Free"
    },
    {
        id: 19,
        name: "Suno",
        category: "audio",
        icon: "🎸",
        description: "AI music generator that creates complete songs from text prompts.",
        fullDescription: "Suno generates complete songs with vocals and instruments from simple text descriptions, making music creation accessible to everyone.",
        features: [
            "Text-to-music generation",
            "Multiple genres",
            "Custom lyrics",
            "Instrumental versions",
            "Commercial licensing"
        ],
        url: "https://suno.ai",
        videoUrl: "https://www.youtube.com/embed/Ty9FOMd0t8E",
        badge: "Free"
    },

    // Productivity Tools
    {
        id: 20,
        name: "Notion AI",
        category: "productivity",
        icon: "⚡",
        description: "AI-powered writing assistant integrated into Notion for notes and docs.",
        fullDescription: "Notion AI brings powerful writing assistance directly into your Notion workspace, helping with brainstorming, writing, and organizing.",
        features: [
            "Integrated with Notion",
            "Content generation",
            "Summarization",
            "Translation",
            "Grammar improvement"
        ],
        url: "https://notion.so/product/ai",
        videoUrl: "",
        badge: "Trial"
    },
    {
        id: 21,
        name: "Otter.ai",
        category: "productivity",
        icon: "🦦",
        description: "AI meeting assistant that transcribes and summarizes your meetings in real-time.",
        fullDescription: "Otter.ai automatically joins your meetings, transcribes conversations, and creates actionable summaries and notes.",
        features: [
            "Real-time transcription",
            "Meeting summaries",
            "Action items extraction",
            "Speaker identification",
            "Integration with Zoom/Teams"
        ],
        url: "https://otter.ai",
        videoUrl: "",
        badge: "Free"
    },
    {
        id: 22,
        name: "Grammarly",
        category: "productivity",
        icon: "✍️",
        description: "AI writing assistant for grammar, clarity, and tone suggestions across all platforms.",
        fullDescription: "Grammarly helps you write confidently with AI-powered suggestions for grammar, clarity, engagement, and delivery.",
        features: [
            "Grammar and spelling",
            "Clarity suggestions",
            "Tone detection",
            "Plagiarism checker",
            "Browser extension"
        ],
        url: "https://grammarly.com",
        videoUrl: "",
        badge: "Free"
    },
    {
        id: 23,
        name: "Zapier AI",
        category: "productivity",
        icon: "🔗",
        description: "Automate workflows between apps with AI-powered automation.",
        fullDescription: "Zapier uses AI to help you automate tasks between your favorite apps and services without coding.",
        features: [
            "5000+ app integrations",
            "AI-powered automation",
            "No-code workflows",
            "Custom triggers",
            "Multi-step workflows"
        ],
        url: "https://zapier.com",
        videoUrl: "",
        badge: "Free"
    },

    // Research Tools
    {
        id: 24,
        name: "Perplexity AI",
        category: "research",
        icon: "🔍",
        description: "AI-powered search engine that provides sourced answers with citations.",
        fullDescription: "Perplexity AI combines search with AI to give you accurate, cited answers to your questions with source links.",
        features: [
            "AI-powered search",
            "Source citations",
            "Follow-up questions",
            "Multiple sources",
            "Real-time information"
        ],
        url: "https://perplexity.ai",
        videoUrl: "https://www.youtube.com/embed/gT2N68P0zuQ",
        badge: "Free"
    },
    {
        id: 25,
        name: "Consensus",
        category: "research",
        icon: "📚",
        description: "AI search engine for scientific research papers with evidence-based answers.",
        fullDescription: "Consensus uses AI to search through millions of scientific papers and provide evidence-based answers to research questions.",
        features: [
            "Research paper search",
            "Evidence synthesis",
            "Citation extraction",
            "Expert consensus",
            "Free access to papers"
        ],
        url: "https://consensus.app",
        videoUrl: "",
        badge: "Free"
    },
    {
        id: 26,
        name: "Elicit",
        category: "research",
        icon: "🧪",
        description: "AI research assistant that helps analyze research papers and extract insights.",
        fullDescription: "Elicit automates parts of research workflows like literature review, data extraction, and summarization of academic papers.",
        features: [
            "Paper summarization",
            "Data extraction",
            "Literature review",
            "Question answering",
            "Research workflows"
        ],
        url: "https://elicit.org",
        videoUrl: "",
        badge: "Free"
    },
    {
        id: 27,
        name: "Wolfram Alpha",
        category: "research",
        icon: "🧮",
        description: "Computational intelligence engine for mathematics, science, and factual queries.",
        fullDescription: "Wolfram Alpha computes expert-level answers using breakthrough algorithms, a vast knowledge base, and AI technology.",
        features: [
            "Mathematical computation",
            "Scientific data",
            "Step-by-step solutions",
            "Data visualization",
            "Unit conversions"
        ],
        url: "https://wolframalpha.com",
        videoUrl: "",
        badge: "Free"
    }
];

// State
let currentCategory = 'all';
let searchTerm = '';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderTools();
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.dataset.category;
            renderTools();
        });
    });

    // Search input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value.toLowerCase();
        renderTools();
    });

    // Modal close
    const modal = document.getElementById('toolModal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Render Tools
function renderTools() {
    const toolsGrid = document.getElementById('toolsGrid');
    const noResults = document.getElementById('noResults');
    
    // Filter tools
    let filteredTools = aiTools.filter(tool => {
        const categoryMatch = currentCategory === 'all' || tool.category === currentCategory;
        const searchMatch = tool.name.toLowerCase().includes(searchTerm) || 
                          tool.description.toLowerCase().includes(searchTerm) ||
                          tool.category.toLowerCase().includes(searchTerm);
        return categoryMatch && searchMatch;
    });

    // Show/hide no results
    if (filteredTools.length === 0) {
        toolsGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    } else {
        toolsGrid.style.display = 'grid';
        noResults.style.display = 'none';
    }

    // Render tool cards
    toolsGrid.innerHTML = filteredTools.map(tool => `
        <div class="tool-card" data-id="${tool.id}">
            <div class="tool-header">
                <div class="tool-icon">${tool.icon}</div>
                <div class="tool-info">
                    <h3 class="tool-name">${tool.name}</h3>
                    <span class="tool-category">${tool.category}</span>
                </div>
            </div>
            <p class="tool-description">${tool.description}</p>
            <div class="tool-footer">
                <a href="${tool.url}" target="_blank" rel="noopener" class="tool-link" onclick="event.stopPropagation()">
                    Try it free →
                </a>
                <span class="tool-badge ${tool.badge === 'Free' ? 'badge-free' : ''}">${tool.badge}</span>
            </div>
        </div>
    `).join('');

    // Add click listeners to cards
    document.querySelectorAll('.tool-card').forEach(card => {
        card.addEventListener('click', () => {
            const toolId = parseInt(card.dataset.id);
            openModal(toolId);
        });
    });
}

// Open Modal
function openModal(toolId) {
    const tool = aiTools.find(t => t.id === toolId);
    if (!tool) return;

    const modal = document.getElementById('toolModal');
    const modalBody = document.getElementById('modalBody');

    const videoHtml = tool.videoUrl ? `
        <div class="modal-video">
            <iframe src="${tool.videoUrl}" allowfullscreen></iframe>
        </div>
    ` : '';

    const featuresHtml = tool.features && tool.features.length > 0 ? `
        <div class="modal-features">
            <h3>Key Features</h3>
            <ul>
                ${tool.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
    ` : '';

    modalBody.innerHTML = `
        <div class="modal-header">
            <div>
                <div class="modal-icon">${tool.icon}</div>
                <h2 class="modal-title">${tool.name}</h2>
                <span class="modal-category">${tool.category}</span>
            </div>
        </div>
        <p class="modal-description">${tool.fullDescription}</p>
        ${videoHtml}
        ${featuresHtml}
        <a href="${tool.url}" target="_blank" rel="noopener" class="modal-cta">
            Try ${tool.name} Free →
        </a>
    `;

    modal.style.display = 'block';
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
