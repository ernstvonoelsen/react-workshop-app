import { CSSProperties, PropsWithChildren } from "react";

const style : CSSProperties = {
    color: 'red'
}

const MyComponent = (props: PropsWithChildren<{name : string, num? : number}>) =>{
    return (
    <>
        <div>
            Hello {props.name}
        </div>
        {props.children}
        <div style={style}>
            {props.num != null ? props.num : 42}
        </div>
    </>
    );
}

export default MyComponent;