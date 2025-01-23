import { Ai_I, AiBox, AiObject } from './components/ai/AiBox';
import { Board, Board_I } from './components/board/Board';
import { Background } from './components/misc/Background';
import { Settings } from './components/misc/Settings';
import { SideBar } from './components/sidebar/SideBar';
import Util from './util/Util';

export interface App_I {
    board: Board_I,
    ai: Ai_I
}

function App() {
    const app: App_I = {
        board: Util.getBoardOnStart(),
        ai: AiObject()
    };

    return <div id="app">
        {Background()}
        {Board(app)}
        {AiBox(app)}
        {SideBar(app)}
        {Settings()}
    </div>;
}
document.body.append(App());