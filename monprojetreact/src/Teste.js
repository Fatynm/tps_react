
import logo from './faty.jpg';
import flr from './flr.jpg';
import lyt from './lyt.jpg';
export default function Teste() {
  const Comptest=(props)=> {
    return (
        <>
        <h1>{props.H1}</h1>
            <img
            src={props.logo1}
            alt={props.name}
            className={props.nmclass}
            width={props.size.width}
            height={props.size.height}/>
            <p>Description: {props.text}<br/>
            Price: {props.prix} </p>
        </> );
    }
  
    const containerStyle = {
      display: 'flex',
      justifyContent: 'center', // Centre horizontalement
      alignItems: 'center', // Centre verticalement
      height: '100vh', // 100% de la hauteur de la vue
    };
  
    const comptestStyle = {
      marginRight: '100px', // Espace entre les composants si nécessaire
    };
  
    return (
      <div style={containerStyle}>
        <div style={comptestStyle}>
        <Comptest
        H1={'Cup of cofee'}
        logo1={logo}
        name={'image'}
        mnclass={'logo'}
        size={{width:300 , height:500}}
        text={'It\'s time for coofee'}
        prix={'50$'}/>
      </div>
      <div style={comptestStyle}>
      <Comptest size={{width:300 , height:500}}
      name={'image1'}
      mnclass={'logo1'}
      H1={'Flower'}
      logo1={flr}
      text={'What\'s a wonderfull flower'}
      prix={'100$'}/>
      </div>
      <div style={comptestStyle}>
      <Comptest size={{width:300 , height:500}}
      name={'image2'}
      mnclass={'logo1'}
      H1={'La lumiere'}
      logo1={lyt}
      text={'What\'s a gorgious light'}
      prix={'200$'}/>
    </div>
      </div>
    );
}
