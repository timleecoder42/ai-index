export interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
  url: string;
  image: string;
  tags: string[];
  pricing: 'Free' | 'Freemium' | 'Paid';
}

export const aiTools: AITool[] = [
  {
    id: '1',
    name: 'ChatGPT',
    description: 'Advanced language model for conversation and text generation',
    category: 'Language Models',
    url: 'https://chat.openai.com',
    image: 'https://chat.openai.com/favicon.ico',
    tags: ['chatbot', 'writing', 'coding'],
    pricing: 'Freemium'
  },
  {
    id: '2',
    name: 'Midjourney',
    description: 'AI-powered image generation from text descriptions',
    category: 'Image Generation',
    url: 'https://midjourney.com',
    image: 'https://www.midjourney.com/favicon.ico',
    tags: ['art', 'design', 'images'],
    pricing: 'Paid'
  },
  {
    id: '3',
    name: 'GitHub Copilot',
    description: 'AI-powered coding assistant',
    category: 'Development',
    url: 'https://github.com/features/copilot',
    image: 'https://github.com/favicon.ico',
    tags: ['coding', 'productivity', 'development'],
    pricing: 'Paid'
  },
  {
    id: '4',
    name: 'Jasper',
    description: 'AI content generation platform for marketing and business',
    category: 'Content Creation',
    url: 'https://jasper.ai',
    image: 'https://www.jasper.ai/favicon.ico',
    tags: ['marketing', 'writing', 'business'],
    pricing: 'Paid'
  },
  {
    id: '5',
    name: 'Stable Diffusion',
    description: 'Open-source AI art generation model',
    category: 'Image Generation',
    url: 'https://stability.ai',
    image: 'https://stability.ai/favicon.ico',
    tags: ['art', 'open-source', 'images'],
    pricing: 'Free'
  },
  {
    id: '6',
    name: 'Claude',
    description: 'Advanced AI assistant for analysis and writing',
    category: 'Language Models',
    url: 'https://anthropic.com/claude',
    image: 'https://claude.ai/favicon.ico',
    tags: ['analysis', 'writing', 'research'],
    pricing: 'Freemium'
  },
  {
    id: '7',
    name: 'Runway',
    description: 'AI-powered video editing and generation',
    category: 'Video Creation',
    url: 'https://runway.ml',
    image: 'https://runway.com/favicon.ico',
    tags: ['video', 'editing', 'creation'],
    pricing: 'Paid'
  },
  {
    id: '8',
    name: 'Hugging Face',
    description: 'Platform for sharing and deploying AI models',
    category: 'Development',
    url: 'https://huggingface.co',
    image: 'https://huggingface.co/favicon.ico',
    tags: ['ml', 'models', 'open-source'],
    pricing: 'Freemium'
  },
  {
    id: '9',
    name: 'Synthesia',
    description: 'AI video generation with virtual presenters',
    category: 'Video Creation',
    url: 'https://synthesia.io',
    image: 'https://www.synthesia.io/favicon.ico',
    tags: ['video', 'presentation', 'avatar'],
    pricing: 'Paid'
  },
  {
    id: '10',
    name: 'Grammarly',
    description: 'AI-powered writing assistant and grammar checker',
    category: 'Writing',
    url: 'https://grammarly.com',
    image: 'https://www.grammarly.com/favicon.ico',
    tags: ['writing', 'grammar', 'productivity'],
    pricing: 'Freemium'
  },
  {
    id: '11',
    name: 'Notion AI',
    description: 'AI-enhanced note-taking and knowledge management',
    category: 'Productivity',
    url: 'https://notion.so',
    image: 'https://www.notion.so/favicon.ico',
    tags: ['notes', 'organization', 'writing'],
    pricing: 'Freemium'
  },
  {
    id: '12',
    name: 'Replicate',
    description: 'Platform for running AI models in the cloud',
    category: 'Development',
    url: 'https://replicate.com',
    image: 'https://replicate.com/favicon.ico',
    tags: ['cloud', 'ml', 'deployment'],
    pricing: 'Paid'
  },
  {
    id: '13',
    name: 'Otter.ai',
    description: 'AI-powered transcription and meeting notes',
    category: 'Productivity',
    url: 'https://otter.ai',
    image: 'https://otter.ai/favicon.ico',
    tags: ['transcription', 'meetings', 'notes'],
    pricing: 'Freemium'
  },
  {
    id: '14',
    name: 'Copy.ai',
    description: 'AI copywriting tool for marketing content',
    category: 'Content Creation',
    url: 'https://copy.ai',
    image: 'https://www.copy.ai/favicon.ico',
    tags: ['copywriting', 'marketing', 'content'],
    pricing: 'Freemium'
  },
  {
    id: '15',
    name: 'Dall-E',
    description: 'OpenAI\'s text-to-image generation model',
    category: 'Image Generation',
    url: 'https://openai.com/dall-e-3',
    image: 'https://openai.com/favicon.ico',
    tags: ['art', 'design', 'images'],
    pricing: 'Paid'
  },
  {
    id: '16',
    name: 'Perplexity AI',
    description: 'AI-powered search engine with real-time information',
    category: 'Search',
    url: 'https://perplexity.ai',
    image: 'https://www.perplexity.ai/favicon.ico',
    tags: ['search', 'research', 'information'],
    pricing: 'Freemium'
  },
  {
    id: '17',
    name: 'Gemini',
    description: 'Google\'s multimodal AI model',
    category: 'Language Models',
    url: 'https://gemini.google.com',
    image: 'https://www.gstatic.com/lamda/images/favicon_v1_150160cddff7f294ce30.svg',
    tags: ['multimodal', 'analysis', 'coding'],
    pricing: 'Freemium'
  },
  {
    id: '18',
    name: 'Whisper',
    description: 'OpenAI\'s speech recognition system',
    category: 'Audio',
    url: 'https://openai.com/research/whisper',
    image: 'https://openai.com/favicon.ico',
    tags: ['speech', 'transcription', 'audio'],
    pricing: 'Free'
  }
];

export const categories = [...new Set(aiTools.map(tool => tool.category))];