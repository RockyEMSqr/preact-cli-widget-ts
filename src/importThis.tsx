import {Component, h} from 'preact';
export const ExportThis = ()=>{
    return <div>Exported</div>
}
export class Input extends Component{
    render(){
        return <div>Input</div>
    }
}
export class Text extends Input{
    render(): h.JSX.Element {
        return <div>Text Input</div>
    }
}