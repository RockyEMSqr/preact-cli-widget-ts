import { h, VNode } from 'preact';
import './style.css';
interface Props {
    color?: string;
}
declare function App(props: Props): VNode;
export declare const AComp: () => h.JSX.Element;
import { ExportThis } from './importThis';
export { ExportThis };
declare const _default: {
    App: typeof App;
    AComp: () => h.JSX.Element;
    ExportThis: () => h.JSX.Element;
};
export default _default;
