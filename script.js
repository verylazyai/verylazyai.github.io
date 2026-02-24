// AI Tools Database - Comprehensive Collection (120 tools)
const aiTools = [
    // WRITING TOOLS (20 tools) - with rankings
    {
        id: 1, name: "ChatGPT", category: "writing", icon: "💬",
        description: "Advanced AI chatbot for conversations, content creation, coding help, and problem-solving.",
        fullDescription: "ChatGPT is OpenAI's flagship conversational AI that can help with writing, brainstorming, coding, learning, and much more.",
        features: ["Natural conversations", "Content generation", "Code writing", "Learning assistance", "Multi-language"],
        url: "https://chat.openai.com", videoUrl: "https://www.youtube.com/embed/JTxsNm9IdYU",
        badge: "Free", rank: 1
    },
    {
        id: 2, name: "Claude", category: "writing", icon: "🤖",
        description: "Anthropic's AI assistant with strong reasoning, coding abilities, and long context windows.",
        fullDescription: "Claude excels at complex reasoning, analysis, and coding tasks with extended context understanding.",
        features: ["Extended context", "Advanced reasoning", "Safe responses", "Code generation", "Document analysis"],
        url: "https://claude.ai", videoUrl: "https://www.youtube.com/embed/Ml8T32zilsM",
        badge: "Free", rank: 2
    },
    {
        id: 3, name: "Gemini", category: "writing", icon: "✨",
        description: "Google's multimodal AI that understands text, images, audio, and video.",
        fullDescription: "Google's Gemini is a powerful multimodal AI for creative and analytical work.",
        features: ["Multimodal understanding", "Google integration", "Real-time info", "Image generation", "Code assistance"],
        url: "https://gemini.google.com", videoUrl: "https://www.youtube.com/embed/UIZAiXYceBI",
        badge: "Free", rank: 3
    },
    {
        id: 4, name: "QuillBot", category: "writing", icon: "📝",
        description: "AI-powered paraphrasing and grammar checking tool.",
        fullDescription: "QuillBot helps rephrase and improve writing with AI paraphrasing and grammar tools.",
        features: ["Paraphrasing modes", "Grammar checking", "Summarization", "Citation generator", "Word flipper"],
        url: "https://quillbot.com", videoUrl: "", badge: "Free"
    },
    {
        id: 5, name: "Jasper AI", category: "writing", icon: "✏️",
        description: "AI content platform for marketing copy, blogs, and creative writing.",
        fullDescription: "Jasper specializes in marketing content for ads, blogs, emails, and social media.",
        features: ["Marketing copy", "Brand voice", "SEO optimization", "Templates", "Team collaboration"],
        url: "https://jasper.ai", videoUrl: "", badge: "Trial"
    },
    {
        id: 6, name: "Copy.ai", category: "writing", icon: "📄",
        description: "AI copywriting tool for marketing, emails, and product descriptions.",
        fullDescription: "Copy.ai helps create compelling copy quickly with AI templates.",
        features: ["90+ templates", "Multiple tones", "Long-form editor", "Workflows", "Multi-language"],
        url: "https://copy.ai", videoUrl: "", badge: "Free"
    },
    {
        id: 7, name: "Writesonic", category: "writing", icon: "🚀",
        description: "AI writing assistant with SEO optimization for articles and ads.",
        fullDescription: "Writesonic combines AI writing with SEO tools for optimized content.",
        features: ["SEO content", "Article writer", "Landing pages", "Ad copy", "Plagiarism checker"],
        url: "https://writesonic.com", videoUrl: "", badge: "Free"
    },
    {
        id: 8, name: "Rytr", category: "writing", icon: "⚡",
        description: "Fast AI writing tool for emails, blogs, and social posts.",
        fullDescription: "Rytr is a lightweight AI writing assistant for quick content creation.",
        features: ["40+ use cases", "30+ languages", "20+ tones", "Plagiarism check", "Chrome extension"],
        url: "https://rytr.me", videoUrl: "", badge: "Free"
    },
    {
        id: 9, name: "Wordtune", category: "writing", icon: "🎯",
        description: "AI writing companion that rewrites and enhances sentences.",
        fullDescription: "Wordtune improves text by offering multiple ways to rephrase sentences.",
        features: ["Sentence rewriting", "Tone adjustments", "Expansion/shortening", "Browser extension", "Real-time"],
        url: "https://wordtune.com", videoUrl: "", badge: "Free"
    },
    {
        id: 10, name: "Hemingway Editor", category: "writing", icon: "📖",
        description: "AI-powered editor for bold and clear writing.",
        fullDescription: "Hemingway analyzes writing and suggests readability improvements.",
        features: ["Readability scoring", "Complexity analysis", "Passive voice detection", "Adverb highlighting", "Clean UI"],
        url: "https://hemingwayapp.com", videoUrl: "", badge: "Free"
    },
    {
        id: 11, name: "ProWritingAid", category: "writing", icon: "✍️",
        description: "Comprehensive writing assistant with grammar and style checks.",
        fullDescription: "ProWritingAid offers in-depth writing analysis with detailed reports.",
        features: ["Grammar", "Style improvements", "Readability", "Plagiarism", "Word/Docs integration"],
        url: "https://prowritingaid.com", videoUrl: "", badge: "Free"
    },
    {
        id: 12, name: "Sudowrite", category: "writing", icon: "📚",
        description: "AI writing partner for fiction and creative writing.",
        fullDescription: "Sudowrite helps fiction writers with AI-powered creative suggestions.",
        features: ["Story development", "Character suggestions", "Plot brainstorming", "Descriptive writing", "Prompts"],
        url: "https://sudowrite.com", videoUrl: "", badge: "Trial"
    },
    {
        id: 13, name: "Compose AI", category: "writing", icon: "⌨️",
        description: "Free Chrome extension for AI autocompletion everywhere.",
        fullDescription: "Compose AI integrates AI writing assistance across all websites.",
        features: ["Universal autocomplete", "Email generation", "Rephrasing", "Works everywhere", "100% free"],
        url: "https://compose.ai", videoUrl: "", badge: "Free"
    },
    {
        id: 14, name: "Shortly AI", category: "writing", icon: "📝",
        description: "AI writing partner that helps continue your thoughts.",
        fullDescription: "Shortly AI provides distraction-free writing with AI assistance.",
        features: ["Distraction-free", "Idea expansion", "Writer's block help", "Command-based", "Clean interface"],
        url: "https://shortlyai.com", videoUrl: "", badge: "Trial"
    },
    {
        id: 15, name: "Hyperwrite", category: "writing", icon: "🖊️",
        description: "AI writing assistant with personalized suggestions.",
        fullDescription: "Hyperwrite learns your style and provides personalized AI assistance.",
        features: ["Personalized AI", "Chrome extension", "Email writing", "Documents", "Style adaptation"],
        url: "https://hyperwriteai.com", videoUrl: "", badge: "Free"
    },
    {
        id: 16, name: "Wordsmith", category: "writing", icon: "🔤",
        description: "AI content generator for data-driven narratives.",
        fullDescription: "Wordsmith transforms data into written narratives.",
        features: ["Data-to-text", "Automated reporting", "Personalization", "Templates", "API"],
        url: "https://automatedinsights.com/wordsmith", videoUrl: "", badge: "Trial"
    },
    {
        id: 17, name: "Anyword", category: "writing", icon: "💡",
        description: "AI copywriting with predictive performance scoring.",
        fullDescription: "Anyword uses AI to generate and score marketing copy.",
        features: ["Performance prediction", "Copy scoring", "A/B insights", "Audience analysis", "Templates"],
        url: "https://anyword.com", videoUrl: "", badge: "Trial"
    },
    {
        id: 18, name: "Frase", category: "writing", icon: "🎯",
        description: "AI content optimizer for SEO research and briefs.",
        fullDescription: "Frase combines AI writing with SEO research.",
        features: ["SEO briefs", "SERP analysis", "Optimization", "Question research", "Outlines"],
        url: "https://frase.io", videoUrl: "", badge: "Trial"
    },
    {
        id: 19, name: "Simplified", category: "writing", icon: "🎨",
        description: "All-in-one AI for writing, design, and social media.",
        fullDescription: "Simplified combines AI writing with design tools.",
        features: ["Writer & designer", "Social templates", "Video creation", "Collaboration", "Brand kit"],
        url: "https://simplified.com", videoUrl: "", badge: "Free"
    },
    {
        id: 20, name: "Article Forge", category: "writing", icon: "📰",
        description: "AI article writer that creates unique long-form content.",
        fullDescription: "Article Forge generates complete articles automatically.",
        features: ["Auto article generation", "SEO optimized", "Multi-language", "Image insertion", "API access"],
        url: "https://articleforge.com", videoUrl: "", badge: "Trial"
    },

    // IMAGE TOOLS (18 tools)
    {
        id: 21, name: "Midjourney", category: "image", icon: "🌌",
        description: "AI art generator known for stunning artistic image creation.",
        fullDescription: "Midjourney creates incredibly artistic and detailed images via Discord.",
        features: ["Artistic generation", "Style presets", "Upscaling", "Variations", "Community gallery"],
        url: "https://midjourney.com", videoUrl: "https://www.youtube.com/embed/6YJUv9Wxyh0",
        badge: "Trial", rank: 1
    },
    {
        id: 22, name: "DALL-E 3", category: "image", icon: "🎨",
        description: "Create stunning images from text with OpenAI's latest model.",
        fullDescription: "DALL-E 3 generates creative and realistic images with improved accuracy.",
        features: ["Text-to-image", "Style variations", "High-res outputs", "ChatGPT integration", "Multiple ratios"],
        url: "https://openai.com/dall-e-3", videoUrl: "https://www.youtube.com/embed/qTgPSKKjfVg",
        badge: "Free", rank: 2
    },
    {
        id: 23, name: "Stable Diffusion", category: "image", icon: "🖼️",
        description: "Open-source AI image generator with powerful customization.",
        fullDescription: "Stable Diffusion offers complete control and can run locally.",
        features: ["Open-source", "Local/online", "Multiple models", "Fine-tuning", "Active community"],
        url: "https://stability.ai", videoUrl: "https://www.youtube.com/embed/DHaL56P6f5M",
        badge: "Free", rank: 3
    },
    {
        id: 24, name: "Leonardo AI", category: "image", icon: "🎭",
        description: "Game-ready AI art with consistent character controls.",
        fullDescription: "Leonardo AI specializes in game assets and consistent characters.",
        features: ["Game assets", "Character consistency", "Multiple styles", "Canvas editing", "Model training"],
        url: "https://leonardo.ai", videoUrl: "", badge: "Free"
    },
    {
        id: 25, name: "Adobe Firefly", category: "image", icon: "🔥",
        description: "Adobe's AI image generator integrated with Creative Cloud.",
        fullDescription: "Adobe Firefly brings generative AI to Creative Cloud.",
        features: ["Creative Cloud integration", "Generative fill", "Text effects", "Recolor", "Commercial safe"],
        url: "https://firefly.adobe.com", videoUrl: "", badge: "Free"
    },
    {
        id: 26, name: "Canva AI", category: "image", icon: "🎨",
        description: "AI-powered design tools built into Canva.",
        fullDescription: "Canva's AI features help create designs within their platform.",
        features: ["Magic Design", "Background removal", "Text to image", "Magic Edit", "Templates"],
        url: "https://canva.com/ai-image-generator", videoUrl: "", badge: "Free"
    },
    {
        id: 27, name: "Playground AI", category: "image", icon: "🎪",
        description: "Free AI image generator with canvas editing.",
        fullDescription: "Playground AI offers powerful free tier with canvas editing.",
        features: ["1000 free images/day", "Canvas editor", "Community models", "Inpainting", "High quality"],
        url: "https://playgroundai.com", videoUrl: "", badge: "Free"
    },
    {
        id: 28, name: "DreamStudio", category: "image", icon: "💭",
        description: "Official Stable Diffusion interface by Stability AI.",
        fullDescription: "DreamStudio provides easy web interface for Stable Diffusion.",
        features: ["Stable Diffusion UI", "Advanced settings", "Multiple models", "Edit & iterate", "Commercial use"],
        url: "https://dreamstudio.ai", videoUrl: "", badge: "Credits"
    },
    {
        id: 29, name: "Ideogram", category: "image", icon: "🔮",
        description: "AI image generator specializing in text rendering.",
        fullDescription: "Ideogram excels at generating images with accurate text.",
        features: ["Accurate text", "Typography focused", "High quality", "Style variations", "Community gallery"],
        url: "https://ideogram.ai", videoUrl: "", badge: "Free"
    },
    {
        id: 30, name: "Artbreeder", category: "image", icon: "🧬",
        description: "Create images by mixing and breeding existing ones.",
        fullDescription: "Artbreeder uses genetic algorithms to create unique images.",
        features: ["Image breeding", "Character creation", "Landscapes", "Collaborative", "Gene editing"],
        url: "https://artbreeder.com", videoUrl: "", badge: "Free"
    },
    {
        id: 31, name: "Remove.bg", category: "image", icon: "🔲",
        description: "Instantly remove backgrounds with AI precision.",
        fullDescription: "Remove.bg automatically removes backgrounds in seconds.",
        features: ["Auto removal", "Edge detection", "Bulk processing", "API", "HD downloads"],
        url: "https://remove.bg", videoUrl: "", badge: "Free"
    },
    {
        id: 32, name: "Clipdrop", category: "image", icon: "✂️",
        description: "AI image editing suite with background removal and upscaling.",
        fullDescription: "Clipdrop offers collection of AI tools for image editing.",
        features: ["Background removal", "Upscaling", "Cleanup", "Relight", "Multiple tools"],
        url: "https://clipdrop.co", videoUrl: "", badge: "Free"
    },
    {
        id: 33, name: "Photoleap", category: "image", icon: "📸",
        description: "AI photo editor with generative features for mobile.",
        fullDescription: "Photoleap brings professional AI editing to mobile.",
        features: ["Text to image", "AI avatars", "Photo enhancement", "Object removal", "Mobile-first"],
        url: "https://photoleap.app", videoUrl: "", badge: "Free"
    },
    {
        id: 34, name: "Getimg.ai", category: "image", icon: "🖼️",
        description: "Comprehensive AI image suite with multiple models.",
        fullDescription: "Getimg.ai offers complete toolkit for AI images.",
        features: ["Multiple models", "Image editing", "Outpainting", "Model training", "API"],
        url: "https://getimg.ai", videoUrl: "", badge: "Free"
    },
    {
        id: 35, name: "Craiyon", category: "image", icon: "🖍️",
        description: "Free AI image generator (formerly DALL-E mini).",
        fullDescription: "Craiyon provides free unlimited AI image generation.",
        features: ["Unlimited free", "Simple interface", "Multiple styles", "No login", "Quick results"],
        url: "https://craiyon.com", videoUrl: "", badge: "Free"
    },
    {
        id: 36, name: "NightCafe", category: "image", icon: "🌙",
        description: "AI art generator with multiple algorithms and community.",
        fullDescription: "NightCafe offers various AI art methods with community focus.",
        features: ["Multiple algorithms", "Style transfer", "Challenges", "Print options", "Daily credits"],
        url: "https://nightcafe.studio", videoUrl: "", badge: "Free"
    },
    {
        id: 37, name: "DeepAI", category: "image", icon: "🧠",
        description: "AI image generator with API access and creative tools.",
        fullDescription: "DeepAI provides image generation with API access.",
        features: ["Multiple generators", "API available", "Style transfer", "Colorization", "Developer-friendly"],
        url: "https://deepai.org", videoUrl: "", badge: "Free"
    },
    {
        id: 38, name: "Pixlr AI", category: "image", icon: "✨",
        description: "AI-powered features in popular online photo editor.",
        fullDescription: "Pixlr combines traditional editing with AI features.",
        features: ["AI cutout", "Background removal", "Enhancement", "Full editor", "Browser-based"],
        url: "https://pixlr.com/ai", videoUrl: "", badge: "Free"
    },

    // VIDEO TOOLS (15 tools) - Continuing with remaining categories...
    {
        id: 39, name: "Runway Gen-2", category: "video", icon: "🎬",
        description: "Advanced AI video generation with text-to-video.",
        fullDescription: "Runway's Gen-2 offers cutting-edge AI video tools.",
        features: ["Text-to-video", "Image-to-video", "Motion tracking", "Green screen removal", "30+ tools"],
        url: "https://runwayml.com", videoUrl: "https://www.youtube.com/embed/0m8CfFXlYT0",
        badge: "Free", rank: 1
    },
    {
        id: 40, name: "Pika Labs", category: "video", icon: "⚡",
        description: "Text and image to video AI with editing capabilities.",
        fullDescription: "Pika makes video creation accessible with AI tools.",
        features: ["Text-to-video", "Image-to-video", "Video editing", "Style customization", "Discord"],
        url: "https://pika.art", videoUrl: "", badge: "Free", rank: 2
    },
    {
        id: 41, name: "HeyGen", category: "video", icon: "👤",
        description: "AI avatar videos with voice cloning for presentations.",
        fullDescription: "HeyGen creates professional videos with AI avatars.",
        features: ["AI avatars", "Voice cloning", "40+ languages", "Templates", "Easy editing"],
        url: "https://heygen.com", videoUrl: "https://www.youtube.com/embed/MxSBDjc5fqw",
        badge: "Free", rank: 3
    },
    {
        id: 42, name: "Synthesia", category: "video", icon: "🎭",
        description: "AI video platform with customizable avatars.",
        fullDescription: "Synthesia transforms text into professional videos.",
        features: ["140+ avatars", "120+ languages", "Custom avatars", "Screen recording", "Collaboration"],
        url: "https://synthesia.io", videoUrl: "", badge: "Trial"
    },
    {
        id: 43, name: "D-ID", category: "video", icon: "🗣️",
        description: "AI video generator that brings photos to life.",
        fullDescription: "D-ID creates talking head videos from photos and text.",
        features: ["Photo animation", "Text-to-speech", "Multi-language", "Custom avatars", "API"],
        url: "https://d-id.com", videoUrl: "", badge: "Trial"
    },
    {
        id: 44, name: "Descript", category: "video", icon: "📹",
        description: "AI video editing that works like a document editor.",
        fullDescription: "Descript allows text-based video editing with AI features.",
        features: ["Text-based editing", "Overdub", "Studio sound", "Filler removal", "Screen recording"],
        url: "https://descript.com", videoUrl: "", badge: "Free"
    },
    {
        id: 45, name: "Fliki", category: "video", icon: "🎥",
        description: "Text to video AI with realistic voices and stock assets.",
        fullDescription: "Fliki transforms text into engaging videos with AI voices.",
        features: ["Text to video", "75+ languages", "Stock library", "Blog to video", "Subtitles"],
        url: "https://fliki.ai", videoUrl: "", badge: "Free"
    },
    {
        id: 46, name: "Pictory", category: "video", icon: "📺",
        description: "AI video generator from long content.",
        fullDescription: "Pictory creates short branded videos from long-form content.",
        features: ["Article to video", "Script to video", "Auto captions", "Highlight reels", "Templates"],
        url: "https://pictory.ai", videoUrl: "", badge: "Trial"
    },
    {
        id: 47, name: "InVideo AI", category: "video", icon: "🎞️",
        description: "AI video creator with text prompts and templates.",
        fullDescription: "InVideo AI generates complete videos from text prompts.",
        features: ["Text to video", "5000+ templates", "AI voiceovers", "Stock media", "Multi-language"],
        url: "https://invideo.io", videoUrl: "", badge: "Free"
    },
    {
        id: 48, name: "Lumen5", category: "video", icon: "💡",
        description: "AI video maker for social videos from content.",
        fullDescription: "Lumen5 transforms blog posts into engaging social videos.",
        features: ["Content to video", "Auto-layout", "Media library", "Brand kit", "Social optimization"],
        url: "https://lumen5.com", videoUrl: "", badge: "Free"
    },
    {
        id: 49, name: "Wisecut", category: "video", icon: "✂️",
        description: "AI video editor that auto-cuts silences and adds subtitles.",
        fullDescription: "Wisecut uses AI to edit videos automatically.",
        features: ["Auto-cut silences", "Smart subtitles", "Background music", "Auto-reframe", "Storyboard"],
        url: "https://wisecut.video", videoUrl: "", badge: "Trial"
    },
    {
        id: 50, name: "Opus Clip", category: "video", icon: "🎯",
        description: "AI tool that creates viral short clips from long videos.",
        fullDescription: "Opus Clip extracts engaging moments for social media.",
        features: ["Auto clip creation", "Virality scoring", "Auto-captions", "Social formatting", "Multi-platform"],
        url: "https://opus.pro", videoUrl: "", badge: "Free"
    },
    {
        id: 51, name: "Captions", category: "video", icon: "💬",
        description: "AI-powered app for captions and video editing on mobile.",
        fullDescription: "Captions makes adding AI captions and editing easy on mobile.",
        features: ["Auto-captions", "Video editing", "Eye contact fix", "Mobile-first", "Social templates"],
        url: "https://captions.ai", videoUrl: "", badge: "Free"
    },
    {
        id: 52, name: "Steve AI", category: "video", icon: "🤵",
        description: "AI video maker for animated and live-action videos.",
        fullDescription: "Steve AI creates professional videos from text scripts.",
        features: ["Script to video", "Animation/live-action", "Voice synthesis", "Characters", "Quick creation"],
        url: "https://steve.ai", videoUrl: "", badge: "Trial"
    },
    {
        id: 53, name: "Peech", category: "video", icon: "🍑",
        description: "AI video platform for teams to create branded content.",
        fullDescription: "Peech automates video creation for marketing teams.",
        features: ["Auto-editing", "Brand management", "Team collaboration", "Content library", "Transcription"],
        url: "https://peech-ai.com", videoUrl: "", badge: "Trial"
    },

    // CODE TOOLS (17 tools) - Ranks 1-3
    {
        id: 54, name: "GitHub Copilot", category: "code", icon: "💻",
        description: "AI pair programmer with real-time code suggestions.",
        fullDescription: "GitHub Copilot helps you write code faster with AI suggestions.",
        features: ["Real-time suggestions", "Multiple languages", "Context-aware", "IDE integration", "Explanations"],
        url: "https://github.com/features/copilot", videoUrl: "https://www.youtube.com/embed/Xt8o9QM9Rr0",
        badge: "Trial", rank: 1
    },
    {
        id: 55, name: "Cursor", category: "code", icon: "⚙️",
        description: "AI-first code editor built for pair programming.",
        fullDescription: "Cursor is designed from scratch for AI pair programming.",
        features: ["AI-native editor", "Chat with codebase", "Inline suggestions", "Code understanding", "Multiple models"],
        url: "https://cursor.sh", videoUrl: "https://www.youtube.com/embed/gqUQbjsYZLQ",
        badge: "Free", rank: 2
    },
    {
        id: 56, name: "Codeium", category: "code", icon: "🚀",
        description: "Free AI code completion for 70+ languages.",
        fullDescription: "Codeium provides fast AI completions for free.",
        features: ["70+ languages", "IDE integrations", "Fast completions", "Natural language", "100% free"],
        url: "https://codeium.com", videoUrl: "", badge: "Free", rank: 3
    },
    {
        id: 57, name: "Tabnine", category: "code", icon: "⌨️",
        description: "AI code assistant with team learning and privacy.",
        fullDescription: "Tabnine offers AI completions with privacy focus.",
        features: ["Team learning", "On-premise option", "Privacy-focused", "Multiple IDEs", "Custom models"],
        url: "https://tabnine.com", videoUrl: "", badge: "Free"
    },
    {
        id: 58, name: "Replit AI", category: "code", icon: "🔧",
        description: "AI coding in browser-based IDE with instant deployment.",
        fullDescription: "Replit combines online IDE with AI assistance.",
        features: ["Browser-based", "AI generation", "Instant deployment", "Multiplayer", "Built-in database"],
        url: "https://replit.com/ai", videoUrl: "", badge: "Free"
    },
    {
        id: 59, name: "Amazon CodeWhisperer", category: "code", icon: "🌩️",
        description: "AWS's AI coding companion with security scanning.",
        fullDescription: "CodeWhisperer provides AWS-optimized AI suggestions.",
        features: ["AWS optimized", "Security scanning", "Reference tracking", "Multiple languages", "IDE support"],
        url: "https://aws.amazon.com/codewhisperer", videoUrl: "", badge: "Free"
    },
    {
        id: 60, name: "Sourcegraph Cody", category: "code", icon: "🤖",
        description: "AI coding assistant that understands your codebase.",
        fullDescription: "Cody provides AI with deep codebase understanding.",
        features: ["Codebase context", "Code search", "Multi-repo", "Chat interface", "IDE integration"],
        url: "https://sourcegraph.com/cody", videoUrl: "", badge: "Free"
    },
    {
        id: 61, name: "CodeGeeX", category: "code", icon: "⚡",
        description: "Free AI code assistant for 20+ programming languages.",
        fullDescription: "CodeGeeX offers multilingual code generation.",
        features: ["20+ languages", "Code translation", "Comment generation", "Free forever", "Privacy-focused"],
        url: "https://codegeex.cn/en-US", videoUrl: "", badge: "Free"
    },
    {
        id: 62, name: "Mutable AI", category: "code", icon: "🔄",
        description: "AI-accelerated software development with codebase chat.",
        fullDescription: "Mutable AI helps write, refactor, and understand code faster.",
        features: ["Code generation", "Refactoring", "Test generation", "Documentation", "Codebase Q&A"],
        url: "https://mutable.ai", videoUrl: "", badge: "Free"
    },
    {
        id: 63, name: "Continue", category: "code", icon: "➡️",
        description: "Open-source AI code assistant for VS Code.",
        fullDescription: "Continue is open-source alternative with multiple LLMs.",
        features: ["Open source", "Multiple LLMs", "VS Code extension", "Self-hosted", "Customizable"],
        url: "https://continue.dev", videoUrl: "", badge: "Free"
    },
    {
        id: 64, name: "Phind", category: "code", icon: "🔍",
        description: "AI search engine for developers with code-focused answers.",
        fullDescription: "Phind provides instant detailed programming answers.",
        features: ["Developer search", "Code examples", "Multi-source", "Fast responses", "Technical focus"],
        url: "https://phind.com", videoUrl: "", badge: "Free"
    },
    {
        id: 65, name: "CodePal", category: "code", icon: "👥",
        description: "AI code generator with multiple coding helpers.",
        fullDescription: "CodePal offers various AI tools for code generation and review.",
        features: ["Multiple tools", "Code generation", "Bug detection", "Documentation", "Code review"],
        url: "https://codepal.ai", videoUrl: "", badge: "Free"
    },
    {
        id: 66, name: "AskCodi", category: "code", icon: "💬",
        description: "AI coding assistant with workbooks for complex projects.",
        fullDescription: "AskCodi provides AI with specialized workbooks.",
        features: ["Code generation", "Workbooks", "Test generation", "Documentation", "Multi-language"],
        url: "https://askcodi.com", videoUrl: "", badge: "Free"
    },
    {
        id: 67, name: "Boxy by CodeSandbox", category: "code", icon: "📦",
        description: "AI coding assistant integrated into CodeSandbox.",
        fullDescription: "Boxy helps code faster in CodeSandbox with contextual AI.",
        features: ["Context-aware", "Code generation", "Refactoring", "Explanation", "Native integration"],
        url: "https://codesandbox.io/boxy", videoUrl: "", badge: "Free"
    },
    {
        id: 68, name: "CodeSquire", category: "code", icon: "🧑‍💻",
        description: "AI code writing assistant for data scientists.",
        fullDescription: "CodeSquire helps data scientists write code faster.",
        features: ["Data science focus", "Jupyter support", "Function generation", "SQL queries", "Pandas code"],
        url: "https://codesquire.ai", videoUrl: "", badge: "Free"
    },
    {
        id: 69, name: "Safurai", category: "code", icon: "🛡️",
        description: "AI code assistant focused on quality and security.",
        fullDescription: "Safurai provides AI with emphasis on secure code.",
        features: ["Security focus", "Code quality", "Bug detection", "Optimization", "IDE support"],
        url: "https://safurai.com", videoUrl: "", badge: "Free"
    },
    {
        id: 70, name: "Fig", category: "code", icon: "🌳",
        description: "AI-powered terminal with autocomplete for CLI commands.",
        fullDescription: "Fig adds visual autocomplete to your terminal.",
        features: ["Terminal autocomplete", "Script building", "Team collaboration", "Plugin system", "Multi-shell"],
        url: "https://fig.io", videoUrl: "", badge: "Free"
    },

    // AUDIO TOOLS (15 tools) - Continuing...
    {
        id: 71, name: "ElevenLabs", category: "audio", icon: "🎵",
        description: "Ultra-realistic AI voice generator with voice cloning.",
        fullDescription: "ElevenLabs creates incredibly realistic AI voices.",
        features: ["Realistic synthesis", "Voice cloning", "29+ languages", "Emotion control", "API"],
        url: "https://elevenlabs.io", videoUrl: "https://www.youtube.com/embed/yzBeKGgApZg",
        badge: "Free", rank: 1
    },
    {
        id: 72, name: "Suno AI", category: "audio", icon: "🎸",
        description: "AI music generator that creates complete songs from text.",
        fullDescription: "Suno generates complete songs with vocals and instruments.",
        features: ["Text-to-music", "Multiple genres", "Custom lyrics", "Instrumental", "Commercial license"],
        url: "https://suno.ai", videoUrl: "https://www.youtube.com/embed/Ty9FOMd0t8E",
        badge: "Free", rank: 2
    },
    {
        id: 73, name: "Murf AI", category: "audio", icon: "🎙️",
        description: "Studio-quality AI voices for professional voiceovers.",
        fullDescription: "Murf AI offers studio-quality AI voices.",
        features: ["120+ voices", "20+ languages", "Voice customization", "Background music", "Voice cloning"],
        url: "https://murf.ai", videoUrl: "", badge: "Free", rank: 3
    },
    {
        id: 74, name: "PlayHT", category: "audio", icon: "▶️",
        description: "Realistic text-to-speech with voice cloning.",
        fullDescription: "PlayHT provides ultra-realistic text-to-speech.",
        features: ["Voice cloning", "800+ voices", "60+ languages", "Pronunciation library", "API"],
        url: "https://play.ht", videoUrl: "", badge: "Free"
    },
    {
        id: 75, name: "AIVA", category: "audio", icon: "🎼",
        description: "AI music composition assistant for soundtracks.",
        fullDescription: "AIVA composes emotional soundtrack music with AI.",
        features: ["Soundtrack creation", "Multiple genres", "Customizable", "MIDI export", "Copyright ownership"],
        url: "https://aiva.ai", videoUrl: "", badge: "Free"
    },
    {
        id: 76, name: "Soundraw", category: "audio", icon: "🎹",
        description: "AI music generator for royalty-free music.",
        fullDescription: "Soundraw lets you generate and customize royalty-free music.",
        features: ["Royalty-free", "Customizable", "Unlimited downloads", "Multiple genres", "Simple interface"],
        url: "https://soundraw.io", videoUrl: "", badge: "Trial"
    },
    {
        id: 77, name: "Descript Overdub", category: "audio", icon: "🗣️",
        description: "AI voice cloning for ultra-realistic text-to-speech.",
        fullDescription: "Overdub creates digital copy of your voice.",
        features: ["Voice cloning", "Text-based editing", "Podcast editing", "Stock voices", "Natural sound"],
        url: "https://descript.com/overdub", videoUrl: "", badge: "Free"
    },
    {
        id: 78, name: "Resemble AI", category: "audio", icon: "🎤",
        description: "AI voice generator with emotion control.",
        fullDescription: "Resemble AI provides real-time voice cloning and synthesis.",
        features: ["Real-time cloning", "Emotion control", "Multi-language", "API", "Voice marketplace"],
        url: "https://resemble.ai", videoUrl: "", badge: "Trial"
    },
    {
        id: 79, name: "Lalal.ai", category: "audio", icon: "🎧",
        description: "AI-powered stem splitter to extract vocals and instruments.",
        fullDescription: "Lalal.ai separates vocals and instruments using AI.",
        features: ["Stem separation", "Vocal removal", "Instrument isolation", "Batch processing", "High quality"],
        url: "https://lalal.ai", videoUrl: "", badge: "Free"
    },
    {
        id: 80, name: "Cleanvoice AI", category: "audio", icon: "🧹",
        description: "AI that removes filler words from podcasts.",
        fullDescription: "Cleanvoice automatically edits podcasts.",
        features: ["Filler removal", "Noise reduction", "Dead air removal", "Multi-language", "Timeline export"],
        url: "https://cleanvoice.ai", videoUrl: "", badge: "Trial"
    },
    {
        id: 81, name: "Beatoven.ai", category: "audio", icon: "🎶",
        description: "AI music generator creating mood-based music.",
        fullDescription: "Beatoven.ai generates unique mood-based music.",
        features: ["Mood-based", "Royalty-free", "Custom length", "Multiple genres", "Video syncing"],
        url: "https://beatoven.ai", videoUrl: "", badge: "Free"
    },
    {
        id: 82, name: "Boomy", category: "audio", icon: "💥",
        description: "AI music creation platform to make and distribute songs.",
        fullDescription: "Boomy lets anyone create original songs with AI.",
        features: ["Song creation", "Spotify distribution", "Multiple styles", "Easy interface", "Earn royalties"],
        url: "https://boomy.com", videoUrl: "", badge: "Free"
    },
    {
        id: 83, name: "Adobe Podcast", category: "audio", icon: "🎙️",
        description: "AI-powered audio recording and editing for podcasters.",
        fullDescription: "Adobe Podcast uses AI to enhance audio quality.",
        features: ["Studio-quality", "Audio enhancement", "Transcript editing", "Remote recording", "Free"],
        url: "https://podcast.adobe.com", videoUrl: "", badge: "Free"
    },
    {
        id: 84, name: "Speechify", category: "audio", icon: "📖",
        description: "AI text-to-speech for listening to documents.",
        fullDescription: "Speechify converts text to natural-sounding speech.",
        features: ["Natural voices", "Speed control", "Multi-platform", "OCR support", "Celebrity voices"],
        url: "https://speechify.com", videoUrl: "", badge: "Free"
    },
    {
        id: 85, name: "Krisp", category: "audio", icon: "🔇",
        description: "AI-powered noise cancellation for calls.",
        fullDescription: "Krisp removes background noise in real-time using AI.",
        features: ["Noise cancellation", "Echo removal", "Voice isolation", "Meeting transcription", "Works anywhere"],
        url: "https://krisp.ai", videoUrl: "", badge: "Free"
    },

    // PRODUCTIVITY TOOLS (18 tools)
    {
        id: 86, name: "Notion AI", category: "productivity", icon: "📓",
        description: "AI writing assistant integrated into Notion workspace.",
        fullDescription: "Notion AI brings powerful writing to your Notion workspace.",
        features: ["Notion integrated", "Content generation", "Summarization", "Translation", "Grammar"],
        url: "https://notion.so/product/ai", videoUrl: "", badge: "Trial", rank: 1
    },
    {
        id: 87, name: "Otter.ai", category: "productivity", icon: "🦦",
        description: "AI meeting assistant with transcription and summaries.",
        fullDescription: "Otter.ai automatically joins and transcribes meetings.",
        features: ["Real-time transcription", "Meeting summaries", "Action items", "Speaker ID", "Zoom/Teams"],
        url: "https://otter.ai", videoUrl: "", badge: "Free", rank: 2
    },
    {
        id: 88, name: "Grammarly", category: "productivity", icon: "✍️",
        description: "AI writing assistant for grammar, clarity, and tone.",
        fullDescription: "Grammarly helps write confidently with AI suggestions.",
        features: ["Grammar checking", "Clarity", "Tone detection", "Plagiarism", "Browser extension"],
        url: "https://grammarly.com", videoUrl: "", badge: "Free", rank: 3
    },
    {
        id: 89, name: "Mem", category: "productivity", icon: "🧠",
        description: "AI-powered note-taking app that organizes itself.",
        fullDescription: "Mem uses AI to auto-organize notes.",
        features: ["Auto-organization", "Smart search", "AI writing", "Knowledge graph", "Quick capture"],
        url: "https://mem.ai", videoUrl: "", badge: "Free"
    },
    {
        id: 90, name: "Reclaim AI", category: "productivity", icon: "📅",
        description: "AI scheduling assistant that defends your time.",
        fullDescription: "Reclaim auto-schedules tasks and meetings.",
        features: ["Auto-scheduling", "Smart calendar", "Time blocking", "Habits", "Team coordination"],
        url: "https://reclaim.ai", videoUrl: "", badge: "Free"
    },
    {
        id: 91, name: "Motion", category: "productivity", icon: "⚡",
        description: "AI project manager that plans your day automatically.",
        fullDescription: "Motion uses AI to automatically plan your day.",
        features: ["Auto-scheduling", "Project management", "Meeting scheduling", "Task priority", "Team features"],
        url: "https://usemotion.com", videoUrl: "", badge: "Trial"
    },
    {
        id: 92, name: "Fireflies.ai", category: "productivity", icon: "🔥",
        description: "AI meeting assistant for automatic notes and transcription.",
        fullDescription: "Fireflies records and summarizes meetings automatically.",
        features: ["Meeting recording", "Transcription", "Action items", "CRM integration", "Search"],
        url: "https://fireflies.ai", videoUrl: "", badge: "Free"
    },
    {
        id: 93, name: "Calendly AI", category: "productivity", icon: "📆",
        description: "Smart scheduling tool with AI optimization.",
        fullDescription: "Calendly uses AI to optimize meeting scheduling.",
        features: ["Smart scheduling", "Time zone intelligence", "Routing forms", "Integrations", "Team scheduling"],
        url: "https://calendly.com", videoUrl: "", badge: "Free"
    },
    {
        id: 94, name: "Superhuman", category: "productivity", icon: "⚡",
        description: "AI-powered email client for speed and productivity.",
        fullDescription: "Superhuman combines AI with keyboard shortcuts.",
        features: ["AI writing", "Smart scheduling", "Read statuses", "Keyboard shortcuts", "Beautiful design"],
        url: "https://superhuman.com", videoUrl: "", badge: "Trial"
    },
    {
        id: 95, name: "Magical", category: "productivity", icon: "✨",
        description: "AI text expander and automation for repetitive tasks.",
        fullDescription: "Magical automates typing and data entry with AI.",
        features: ["Text expansion", "Data entry automation", "Works everywhere", "No integrations", "Free forever"],
        url: "https://magical.so", videoUrl: "", badge: "Free"
    },
    {
        id: 96, name: "Zapier AI", category: "productivity", icon: "🔗",
        description: "Automate workflows between apps with AI.",
        fullDescription: "Zapier uses AI to automate tasks without coding.",
        features: ["5000+ integrations", "AI automation", "No-code workflows", "Custom triggers", "Multi-step"],
        url: "https://zapier.com", videoUrl: "", badge: "Free"
    },
    {
        id: 97, name: "Clockwise", category: "productivity", icon: "🕐",
        description: "AI calendar assistant that creates focus time.",
        fullDescription: "Clockwise manages calendar for uninterrupted focus.",
        features: ["Focus time", "Meeting optimization", "Team coordination", "Analytics", "Flexible holds"],
        url: "https://clockwise.com", videoUrl: "", badge: "Free"
    },
    {
        id: 98, name: "Tldv", category: "productivity", icon: "📹",
        description: "AI meeting recorder for Google Meet and Zoom.",
        fullDescription: "Tldv records meetings with AI summaries and highlights.",
        features: ["Meeting recording", "AI summaries", "Timestamped notes", "Speaker insights", "Multi-language"],
        url: "https://tldv.io", videoUrl: "", badge: "Free"
    },
    {
        id: 99, name: "Todoist AI", category: "productivity", icon: "✅",
        description: "Task manager with AI-powered task suggestions.",
        fullDescription: "Todoist uses AI to help plan your day.",
        features: ["Task management", "AI suggestions", "Natural language", "Collaboration", "Cross-platform"],
        url: "https://todoist.com", videoUrl: "", badge: "Free"
    },
    {
        id: 100, name: "Tactiq", category: "productivity", icon: "💬",
        description: "Real-time transcription for Google Meet, Zoom, Teams.",
        fullDescription: "Tactiq provides real-time meeting transcripts with AI summaries.",
        features: ["Real-time transcription", "AI summaries", "Action items", "Multi-platform", "Chrome extension"],
        url: "https://tactiq.io", videoUrl: "", badge: "Free"
    },
    {
        id: 101, name: "Bearly", category: "productivity", icon: "🐻",
        description: "AI assistant for reading, writing, and research on desktop.",
        fullDescription: "Bearly brings AI to any app with a hotkey.",
        features: ["Hotkey access", "Works everywhere", "Document Q&A", "Writing assistance", "Quick actions"],
        url: "https://bearly.ai", videoUrl: "", badge: "Free"
    },
    {
        id: 102, name: "Hints", category: "productivity", icon: "💡",
        description: "AI assistant that works through messaging apps.",
        fullDescription: "Hints lets you interact with AI through WhatsApp or Telegram.",
        features: ["Works via messaging", "Voice messages", "Task creation", "CRM integration", "Mobile-first"],
        url: "https://hints.so", videoUrl: "", badge: "Free"
    },
    {
        id: 103, name: "Spoke", category: "productivity", icon: "🗣️",
        description: "AI meeting assistant that summarizes Slack threads.",
        fullDescription: "Spoke summarizes Slack discussions and meeting recordings.",
        features: ["Slack summarization", "Meeting summaries", "Priority inbox", "Action items", "Team features"],
        url: "https://spoke.ai", videoUrl: "", badge: "Free"
    },

    // RESEARCH TOOLS (17 tools)
    {
        id: 104, name: "Perplexity AI", category: "research", icon: "🔍",
        description: "AI-powered search engine with sourced answers and citations.",
        fullDescription: "Perplexity AI combines search with AI for accurate cited answers.",
        features: ["AI-powered search", "Source citations", "Follow-up questions", "Multiple sources", "Real-time info"],
        url: "https://perplexity.ai", videoUrl: "https://www.youtube.com/embed/gT2N68P0zuQ",
        badge: "Free", rank: 1
    },
    {
        id: 105, name: "Consensus", category: "research", icon: "📚",
        description: "AI search engine for scientific research papers.",
        fullDescription: "Consensus searches millions of papers for evidence-based answers.",
        features: ["Research paper search", "Evidence synthesis", "Citation extraction", "Expert consensus", "Paper summaries"],
        url: "https://consensus.app", videoUrl: "", badge: "Free", rank: 2
    },
    {
        id: 106, name: "Elicit", category: "research", icon: "🧪",
        description: "AI research assistant for analyzing papers and extracting insights.",
        fullDescription: "Elicit automates research workflows like literature review.",
        features: ["Paper summarization", "Data extraction", "Literature review", "Question answering", "Research workflows"],
        url: "https://elicit.org", videoUrl: "", badge: "Free", rank: 3
    },
    {
        id: 107, name: "Wolfram Alpha", category: "research", icon: "🧮",
        description: "Computational intelligence engine for math and science.",
        fullDescription: "Wolfram Alpha computes expert-level answers using vast knowledge.",
        features: ["Mathematical computation", "Scientific data", "Step-by-step solutions", "Data visualization", "Unit conversions"],
        url: "https://wolframalpha.com", videoUrl: "", badge: "Free"
    },
    {
        id: 108, name: "Semantic Scholar", category: "research", icon: "🎓",
        description: "AI-powered academic search engine by Allen Institute.",
        fullDescription: "Semantic Scholar uses AI to help researchers find relevant papers.",
        features: ["Academic search", "Citation analysis", "Paper recommendations", "Research trends", "Open access"],
        url: "https://semanticscholar.org", videoUrl: "", badge: "Free"
    },
    {
        id: 109, name: "ResearchRabbit", category: "research", icon: "🐰",
        description: "AI-powered tool for discovering research papers.",
        fullDescription: "ResearchRabbit helps discover relevant papers and visualize connections.",
        features: ["Paper discovery", "Citation networks", "Collections", "Recommendations", "Collaboration"],
        url: "https://researchrabbit.ai", videoUrl: "", badge: "Free"
    },
    {
        id: 110, name: "Scite", category: "research", icon: "📊",
        description: "Smart citations showing how papers have been cited.",
        fullDescription: "Scite uses AI to show how research has been cited in other papers.",
        features: ["Smart citations", "Supporting/contrasting evidence", "Paper analysis", "Research validation", "Citation reports"],
        url: "https://scite.ai", videoUrl: "", badge: "Free"
    },
    {
        id: 111, name: "Connected Papers", category: "research", icon: "🔗",
        description: "Visual tool for exploring academic papers and connections.",
        fullDescription: "Connected Papers creates visual graphs showing paper connections.",
        features: ["Citation graphs", "Paper discovery", "Research mapping", "Similar papers", "Visual exploration"],
        url: "https://connectedpapers.com", videoUrl: "", badge: "Free"
    },
    {
        id: 112, name: "Explainpaper", category: "research", icon: "📄",
        description: "AI that explains confusing parts of research papers.",
        fullDescription: "Explainpaper uses AI to help understand difficult passages.",
        features: ["Paper explanation", "Highlight to explain", "Simplified language", "Upload PDFs", "Research assistance"],
        url: "https://explainpaper.com", videoUrl: "", badge: "Free"
    },
    {
        id: 113, name: "Humata AI", category: "research", icon: "📑",
        description: "ChatGPT for your documents - ask questions about PDFs.",
        fullDescription: "Humata lets you chat with documents and get instant answers.",
        features: ["Document Q&A", "PDF analysis", "Instant answers", "Summarization", "Citation extraction"],
        url: "https://humata.ai", videoUrl: "", badge: "Free"
    },
    {
        id: 114, name: "ChatPDF", category: "research", icon: "💬",
        description: "Chat with any PDF document using AI.",
        fullDescription: "ChatPDF allows conversations with PDF documents.",
        features: ["PDF chat", "Question answering", "Summarization", "Multi-document", "Source citations"],
        url: "https://chatpdf.com", videoUrl: "", badge: "Free"
    },
    {
        id: 115, name: "SciSpace", category: "research", icon: "🚀",
        description: "AI assistant for reading and understanding research papers.",
        fullDescription: "SciSpace helps read, understand, and review research papers.",
        features: ["Paper explanation", "Math explanations", "Citation finder", "Paraphraser", "Research assistant"],
        url: "https://scispace.com", videoUrl: "", badge: "Free"
    },
    {
        id: 116, name: "Lateral", category: "research", icon: "🔎",
        description: "AI-powered research assistant for finding papers.",
        fullDescription: "Lateral helps researchers find, read, and organize papers.",
        features: ["Smart search", "Document management", "Note-taking", "Highlights", "Team collaboration"],
        url: "https://lateral.io", videoUrl: "", badge: "Free"
    },
    {
        id: 117, name: "Inciteful", category: "research", icon: "💡",
        description: "Build a network of academic papers around your topic.",
        fullDescription: "Inciteful helps discover the most important papers in your field.",
        features: ["Paper networks", "Citation analysis", "Similar papers", "Important papers", "Research mapping"],
        url: "https://inciteful.xyz", videoUrl: "", badge: "Free"
    },
    {
        id: 118, name: "Scholarcy", category: "research", icon: "📖",
        description: "AI-powered article summarizer for research papers.",
        fullDescription: "Scholarcy creates summary flashcards of research papers.",
        features: ["Paper summarization", "Flashcards", "Key findings", "Browser extension", "Reference extraction"],
        url: "https://scholarcy.com", videoUrl: "", badge: "Free"
    },
    {
        id: 119, name: "Iris.ai", category: "research", icon: "🌸",
        description: "AI research assistant for exploring scientific knowledge.",
        fullDescription: "Iris.ai helps explore scientific literature.",
        features: ["Research exploration", "Paper discovery", "Concept mapping", "Question answering", "Knowledge graph"],
        url: "https://iris.ai", videoUrl: "", badge: "Free"
    },
    {
        id: 120, name: "You.com", category: "research", icon: "🌐",
        description: "AI search engine with customizable sources and apps.",
        fullDescription: "You.com provides AI search with customizable sources.",
        features: ["AI search", "Custom sources", "Productivity apps", "Code search", "Privacy-focused"],
        url: "https://you.com", videoUrl: "", badge: "Free"
    }
];

// AI Keywords for Smart Search
const categoryKeywords = {
    writing: ['write', 'writing', 'content', 'text', 'article', 'blog', 'copy', 'essay', 'document', 'grammar', 'paraphrase', 'edit', 'proofread'],
    image: ['image', 'picture', 'photo', 'art', 'visual', 'design', 'graphic', 'illustration', 'draw', 'create image', 'generate image', 'background'],
    video: ['video', 'clip', 'movie', 'film', 'animation', 'edit video', 'create video', 'voiceover', 'avatar'],
    code: ['code', 'programming', 'develop', 'software', 'debug', 'IDE', 'function', 'script', 'developer'],
    audio: ['audio', 'voice', 'sound', 'music', 'song', 'speech', 'voice clone', 'narration', 'podcast', 'TTS', 'text to speech'],
    productivity: ['productivity', 'organize', 'schedule', 'meeting', 'task', 'calendar', 'email', 'note', 'workflow', 'automate'],
    research: ['research', 'search', 'find', 'paper', 'study', 'academic', 'scientific', 'analyze', 'data', 'information']
};

// State
let currentCategory = 'all';
let searchTerm = '';
let compareList = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderTools();
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    // Hero tabs
    document.querySelectorAll('.hero-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            document.querySelectorAll('.hero-tab').forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            
            const tabType = e.target.dataset.tab;
            const aiSearchContainer = document.getElementById('aiSearchContainer');
            const aiSearchResults = document.getElementById('aiSearchResults');
            const comparisonPanel = document.getElementById('comparisonPanel');
            
            // Hide all panels first
            aiSearchContainer.style.display = 'none';
            aiSearchResults.style.display = 'none';
            comparisonPanel.style.display = 'none';
            
            if (tabType === 'search') {
                aiSearchContainer.style.display = 'block';
            } else if (tabType === 'compare') {
                comparisonPanel.style.display = 'block';
                renderComparison();
            }
        });
    });

    // AI Search
    const aiSearchButton = document.getElementById('aiSearchButton');
    const aiSearchInput = document.getElementById('aiSearchInput');
    
    if (aiSearchButton) {
        aiSearchButton.addEventListener('click', handleAISearch);
    }
    
    if (aiSearchInput) {
        aiSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleAISearch();
            }
        });
    }

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.dataset.category;
            searchTerm = '';
            const quickSearch = document.getElementById('quickSearchInput');
            if (quickSearch) quickSearch.value = '';
            renderTools();
            
            // Scroll to tools
            document.querySelector('.tools-section').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Quick search input
    const quickSearchInput = document.getElementById('quickSearchInput');
    if (quickSearchInput) {
        quickSearchInput.addEventListener('input', (e) => {
            searchTerm = e.target.value.toLowerCase();
            renderTools();
        });
    }

    // Modal close
    const modal = document.getElementById('toolModal');
    const closeBtn = document.querySelector('.close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Handle AI Search
function handleAISearch() {
    const aiSearchInput = document.getElementById('aiSearchInput');
    const aiSearchResults = document.getElementById('aiSearchResults');
    const query = aiSearchInput.value.toLowerCase().trim();
    
    if (!query) return;
    
    // Find matching categories based on keywords
    let matchedCategories = [];
    let matchedTools = [];
    
    for (const [category, keywords] of Object.entries(categoryKeywords)) {
        for (const keyword of keywords) {
            if (query.includes(keyword)) {
                matchedCategories.push(category);
                break;
            }
        }
    }
    
    // If categories matched, show those tools
    if (matchedCategories.length > 0) {
        matchedTools = aiTools.filter(tool => matchedCategories.includes(tool.category));
    } else {
        // Otherwise, search by tool name and description
        matchedTools = aiTools.filter(tool => 
            tool.name.toLowerCase().includes(query) ||
            tool.description.toLowerCase().includes(query) ||
            tool.fullDescription.toLowerCase().includes(query)
        );
    }
    
    // Display results
    if (matchedTools.length === 0) {
        aiSearchResults.innerHTML = `
            <h3>🔍 No results found</h3>
            <p>Try different keywords like "create images", "write code", "edit video", etc.</p>
        `;
    } else {
        const categoryNames = {
            writing: '✍️ Writing',
            image: '🎨 Images',
            video: '🎬 Video',
            code: '💻 Code',
            audio: '🎵 Audio',
            productivity: '⚡ Productivity',
            research: '🔍 Research'
        };
        
        const categories = [...new Set(matchedTools.map(t => t.category))];
        
        aiSearchResults.innerHTML = `
            <h3>✨ Found ${matchedTools.length} tools for you!</h3>
            <p style="margin-bottom: 16px;">Recommended categories: ${categories.map(c => categoryNames[c]).join(', ')}</p>
            <button onclick="applyAISearchResults(['${categories.join("','")}'])" 
                    style="padding: 10px 20px; background: linear-gradient(135deg, var(--primary), var(--secondary)); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">
                View These Tools →
            </button>
        `;
    }
    
    aiSearchResults.style.display = 'block';
}

// Apply AI Search Results
function applyAISearchResults(categories) {
    // Switch to browse tab
    document.querySelectorAll('.hero-tab').forEach(t => t.classList.remove('active'));
    document.querySelector('[data-tab="browse"]').classList.add('active');
    document.getElementById('aiSearchContainer').style.display = 'none';
    document.getElementById('aiSearchResults').style.display = 'none';
    
    // If single category, filter by it
    if (categories.length === 1) {
        currentCategory = categories[0];
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        document.querySelector(`[data-category="${categories[0]}"]`).classList.add('active');
    } else {
        currentCategory = 'all';
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        document.querySelector('[data-category="all"]').classList.add('active');
    }
    
    searchTerm = '';
    renderTools();
    
    // Scroll to tools
    document.querySelector('.tools-section').scrollIntoView({ behavior: 'smooth' });
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
    toolsGrid.innerHTML = filteredTools.map(tool => {
        const rankBadge = tool.rank ? `<div class="rank-badge rank-${tool.rank}">#${tool.rank}</div>` : '';
        const isInCompare = compareList.includes(tool.id);
        const compareCheckbox = `<div class="tool-compare-checkbox ${isInCompare ? 'checked' : ''}" data-tool-id="${tool.id}" onclick="event.stopPropagation(); toggleCompare(${tool.id})"></div>`;
        
        return `
        <div class="tool-card" data-id="${tool.id}">
            ${compareCheckbox}
            ${rankBadge}
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
    `}).join('');

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

    const rankBadgeHtml = tool.rank ? `<span class="modal-category" style="background: linear-gradient(135deg, #FFD700, #FFA500); color: white;">#${tool.rank} Top Choice</span>` : '';

    modalBody.innerHTML = `
        <div class="modal-header">
            <div>
                <div class="modal-icon">${tool.icon}</div>
                <h2 class="modal-title">${tool.name}</h2>
                <span class="modal-category">${tool.category}</span>
                ${rankBadgeHtml}
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

// ============================================
// COMPARISON FEATURE
// ============================================

// Toggle tool in comparison
function toggleCompare(toolId) {
    const index = compareList.indexOf(toolId);
    
    if (index > -1) {
        // Remove from compare
        compareList.splice(index, 1);
    } else {
        // Add to compare (max 3)
        if (compareList.length >= 3) {
            alert('You can compare up to 3 tools at a time. Remove one to add another.');
            return;
        }
        compareList.push(toolId);
    }
    
    updateCompareCount();
    renderTools(); // Re-render to update checkboxes
}

// Update compare count badge
function updateCompareCount() {
    const countBadge = document.getElementById('compareCount');
    if (compareList.length > 0) {
        countBadge.textContent = compareList.length;
        countBadge.style.display = 'inline-flex';
    } else {
        countBadge.style.display = 'none';
    }
}

// Render comparison panel
function renderComparison() {
    const selectedToolsContainer = document.getElementById('selectedToolsForCompare');
    const comparisonTableContainer = document.getElementById('comparisonTable');
    
    if (compareList.length === 0) {
        selectedToolsContainer.innerHTML = '';
        comparisonTableContainer.innerHTML = `
            <div class="empty-compare-state">
                <h4>No tools selected for comparison</h4>
                <p>Go back to Browse Tools and click the checkboxes on tool cards to add them here.</p>
                <button onclick="switchToBrowse()" class="compare-cta-btn">
                    Browse AI Tools →
                </button>
            </div>
        `;
        return;
    }
    
    const compareTools = compareList.map(id => aiTools.find(t => t.id === id)).filter(Boolean);
    
    // Render selected tools chips
    selectedToolsContainer.innerHTML = compareTools.map(tool => `
        <div class="compare-tool-chip">
            <span class="compare-tool-icon">${tool.icon}</span>
            <span class="compare-tool-name">${tool.name}</span>
            <button class="remove-compare-btn" onclick="toggleCompare(${tool.id}); renderComparison();">×</button>
        </div>
    `).join('');
    
    // Render comparison table
    comparisonTableContainer.innerHTML = `
        <table class="comparison-table">
            <thead>
                <tr>
                    <th style="width: 200px;">Feature</th>
                    ${compareTools.map(tool => `
                        <th>
                            <div class="tool-compare-header">
                                <span class="tool-compare-icon">${tool.icon}</span>
                                <span class="tool-compare-name">${tool.name}</span>
                                <span class="tool-compare-category">${tool.category}</span>
                            </div>
                        </th>
                    `).join('')}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="feature-row-label">Category</td>
                    ${compareTools.map(tool => `
                        <td>
                            <span class="tool-category">${tool.category}</span>
                        </td>
                    `).join('')}
                </tr>
                <tr>
                    <td class="feature-row-label">Pricing</td>
                    ${compareTools.map(tool => `
                        <td>
                            <span class="tool-badge ${tool.badge === 'Free' ? 'badge-free' : ''}">${tool.badge}</span>
                        </td>
                    `).join('')}
                </tr>
                <tr>
                    <td class="feature-row-label">Top Ranked</td>
                    ${compareTools.map(tool => `
                        <td>
                            ${tool.rank ? `<span class="rank-badge rank-${tool.rank}" style="position: relative; top: 0; right: 0;">#${tool.rank}</span>` : '—'}
                        </td>
                    `).join('')}
                </tr>
                <tr>
                    <td class="feature-row-label">Description</td>
                    ${compareTools.map(tool => `
                        <td style="font-size: 13px; line-height: 1.5;">${tool.description}</td>
                    `).join('')}
                </tr>
                <tr>
                    <td class="feature-row-label">Key Features</td>
                    ${compareTools.map(tool => `
                        <td>
                            <ul style="margin: 0; padding-left: 20px; font-size: 13px;">
                                ${tool.features.slice(0, 3).map(f => `<li style="margin: 4px 0;">${f}</li>`).join('')}
                            </ul>
                        </td>
                    `).join('')}
                </tr>
                <tr>
                    <td class="feature-row-label">Video Tutorial</td>
                    ${compareTools.map(tool => `
                        <td>
                            <span class="feature-value">
                                ${tool.videoUrl ? '<span class="feature-check">✓</span> Available' : '<span class="feature-cross">✗</span> Not available'}
                            </span>
                        </td>
                    `).join('')}
                </tr>
                <tr>
                    <td class="feature-row-label">Action</td>
                    ${compareTools.map(tool => `
                        <td>
                            <a href="${tool.url}" target="_blank" rel="noopener" class="compare-cta-btn">
                                Try ${tool.name} →
                            </a>
                        </td>
                    `).join('')}
                </tr>
            </tbody>
        </table>
    `;
}

// Switch back to browse tab
function switchToBrowse() {
    document.querySelectorAll('.hero-tab').forEach(t => t.classList.remove('active'));
    document.querySelector('[data-tab="browse"]').classList.add('active');
    document.getElementById('comparisonPanel').style.display = 'none';
    
    // Scroll to tools
    document.querySelector('.tools-section').scrollIntoView({ behavior: 'smooth' });
}
