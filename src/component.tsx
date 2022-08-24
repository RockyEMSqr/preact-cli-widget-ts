import { h, VNode } from 'preact';

import './style.css';

interface Props {
    color?: string;
}

function App(props: Props): VNode {
    return (
        <div>
            <h1 style={{ color: props.color }}>Hello, World!</h1>
        </div>
    );
}

export const AComp = ()=>{
    return <div>AComp</div>
}
export default{
    App,
    AComp
}