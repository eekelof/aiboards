import { App_I } from '../../App';
import AiHelper from './AiHelper';

export interface Ai_I {
    id: string;
}

export function AiObject() {
    const id = "";

    return { id };
}

export function AiBox(app: App_I) {
    const aiInput = <input class="aiInput" type="text" placeholder="Tell AI to do something" maxlength="512" enterkeyhint="done" />;
    aiInput.onkeydown = (e: KeyboardEvent) => {
        if (e.key != "Enter" || aiInput.value.length === 0)
            return;
        AiHelper.handle(aiInput.value);
        aiInput.value = "";
    };

    return <div id="aiBox">
        <div id="aiBoxTitle">✨Assistant</div>
        {aiInput}
        {/* select model from dropdown */}
    </div>;
}