import { h, VNode } from 'preact';
import './style.css';
interface Props {
    color?: string;
}
export declare function App(props: Props): VNode;
export declare const AComp: () => h.JSX.Element;
import { ExportThis, Text, Input } from './importThis';
export { ExportThis, Text, Input };
declare const _default: {
    App: typeof App;
    AComp: () => h.JSX.Element;
    ExportThis: () => h.JSX.Element;
    Text: typeof Text;
    Input: typeof Input;
};
export default _default;
