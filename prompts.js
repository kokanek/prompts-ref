import { PrefixPathnameNormalizer } from "next/dist/server/future/normalizers/request/prefix"

const prompts = [
  {
    id: 1,
    type: 'TEXT',
    title: 'Startup Ideas',
    prompt: 'Generate startup ideas for [skill/product] and the step-by-step road map for each startup, as well as the unique marketing strategies that will reach the target audience.\nSkill: [Insert here].',
    description: 'This prompt helps you generate startup ideas for a specific target audience.',
    model: 'GPT-3',
    tags: ['startup', 'marketing', 'product', 'business'],
    output: `Here are some startup ideas focused on the skill of prompt engineering, along with step-by-step roadmaps and unique marketing strategies to reach your target audience.
### Startup Ideas
1. **Prompt Engineering Consultancy**
   - **Overview**: A service that provides businesses with customized prompt engineering solutions to optimize their use of AI tools.
   - **Target Audience**: Businesses using AI technology (e.g., marketing agencies, content creators).

2. **Prompt Marketplace**
   - **Overview**: Create a platform where users can buy and sell prompts specifically designed for various AI models.
   - **Target Audience**: AI enthusiasts, content creators, and businesses looking for optimized prompts.

3. **Prompt Engineering Training Program**
   - **Overview**: Develop an online course aimed at teaching individuals and teams how to create effective prompts.
   - **Target Audience**: Professionals in tech, marketing, and creative industries.

4. **Prompt Optimization Tool**
   - **Overview**: A software solution that provides optimization suggestions for user-generated prompts.
   - **Target Audience**: Developers and marketers using AI tools in their workflows.

5. **AI Content Creation Agency**
   - **Overview**: An agency that leverages prompt engineering to produce high-quality content for clients using generative AI.
   - **Target Audience**: Businesses needing content marketing solutions.`
  },
  {
    id: 2,
    type: 'IMAGE',
    title: 'Crayon drawing',
    prompt: 'Generate a crayon drawing of a [noun] in a [setting].',
    description: 'This prompt helps you generate an image in a crayon look.',
    model: 'Midjourney',
    tags: ['create', 'art', 'drawing', 'crayon'],

  }
]

export default prompts;