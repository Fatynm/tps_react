
export default function Comptest({props}) {
return (
    <div className="Comptest">
        <h1>{props.H1}</h1>
        <img
        src={props.logo1}
        alt={props.name}
        className={props.nmclass}
        width={props.size.width}
        height={props.size.height}/>
        <p>Description: {props.text}<br/>
        Price: {props.prix} </p>
    </div> );
}

