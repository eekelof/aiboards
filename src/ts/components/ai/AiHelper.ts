// import { anthropic } from '@ai-sdk/anthropic';
import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';

export default class AiHelper {
    static async handle(prompt: string) {
        const model = openai('gpt-4o');
        // const model = anthropic("claude-3-5-haiku-latest");

        const { text } = await generateText({
            model,
            system: 'You are a friendly assistant!',
            prompt,

        });

        console.log(text);
    }
}