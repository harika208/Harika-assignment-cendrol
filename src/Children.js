export default function Children(props){
    const [name, setname] = props;
    const handle=()=>{
        props.setName("hello")
    }
    return(
        <div>
            <h1>
                {props.name}
                <button onClick={handle}>click</button>
            </h1>
        </div>
    )
}