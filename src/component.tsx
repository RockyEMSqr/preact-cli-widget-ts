import { h, VNode } from 'preact';

import './style.css';

interface Props {
    color?: string;
}

export function App(props: Props): VNode {
    return (
        <div>
            <h1 style={{ color: props.color }}>Hello, World!</h1>
        </div>
    );
}

export const AComp = ()=>{
    return <div>AComp</div>
}
// import {ExportThis, Text, Input} from './importThis'
// export {ExportThis, Text, Input};
// export default{
//     App,
//     AComp,
//     ExportThis,
//     Text,
//     Input
// }
export * from './importThis'