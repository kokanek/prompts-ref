import { PrefixPathnameNormalizer } from "next/dist/server/future/normalizers/request/prefix"

const prompts = [
  {
    id: 1,
    type: 'TEXT',
    title: 'Startup Ideas',
    prompt: 'Generate startup ideas for [skill/product] and the step-by-step road map for each startup, as well as the unique marketing strategies that will reach the target audience.\nSkill: [Insert here]',
    description: 'This prompt helps you generate startup ideas for a specific target audience.',
    model: 'GPT-3',
    tags: ['startup', 'marketing', 'product', 'business'],

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