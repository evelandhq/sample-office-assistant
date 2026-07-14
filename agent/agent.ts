import { deepSeek } from '@ai-sdk/deepseek';
import { defineAgent } from 'eve';

export default defineAgent({
  // model: 'anthropic/claude-sonnet-4.6',
  model: deepSeek('deepseek-v4-flash'),
});
