import logo from './logo.svg';
import './App.css';

function App() {
  const nayok = [
    'Shakib AL Hasan', 'Shakib Khan', ' Bill gits', 'Jhankar Mahbub', 'Md Rony', 'Md Rakib', 'Mizanur Rahman Azhari', 'Anisur Rahman'
  ];

  const cinemas = [
    { nayok: 'koober', nayika: 'kopila' },
    { nayok: 'Rubel', nayika: 'Moushumi' },
    { nayok: 'Razzak', nayika: 'shabana' }
  ]
  return (
    <div className="App">
      <ul>
        {nayok.map(nayek => <li>{nayek}</li>)}
      </ul>

      {
        cinemas.map(cinema => <Cinema nayok={cinema.nayok} nayika={cinema.nayika} ></Cinema>)
      }


    </div>
  );
}

// function Person(props) {
// const person = {
//   backgroundColor: 'skyblue',
//   border: '3px solid lightsalmon',
//   margin: '20px',
//   borderRadius: '20px'
//   }
//   return (
//     <div style={person}>
//       <h1>Name: {props.name}</h1>
//       <h4>Profession: {props.job}</h4>
//     </div>)
// }

function Cinema(props) {
  const person = {
    backgroundColor: 'skyblue',
    border: '3px solid lightsalmon',
    margin: '20px',
    borderRadius: '20px'
  }
  return (
    <div style={person}>
      <h1>Nayok: {props.nayok}</h1>
      <h4>Nayika: {props.nayika}</h4>
    </div>)
}


export default App;

/*
      <Person name="Shakib AL Hasan" job="cricketer"></Person>
      <Person name="Shakib Khan" job="Hero"></Person>
      <Person name="Bill gits" job="businessman"></Person>
      <Person name="Jhankar Mahbub" job="Programmer"></Person>
      <Person name="Md Rony" job="Teacher"></Person>
      <Person name="Md Rakib" job="Police"></Person>
      <Person name="Mizanur Rahman Azhari" job="Islamic Scolar"></Person>
      <Person name="Anisur Rahman" job="Engineer"></Person>
 */

/*
<Person name={nayok[0]} job="cricketer"></Person>
<Person name={nayok[1]} job="Hero"></Person>
<Person name={nayok[2]} job="businessman"></Person>
<Person name={nayok[3]} job="Programmer"></Person>
<Person name={nayok[4]} job="Teacher"></Person>
<Person name={nayok[5]} job="Police"></Person>
<Person name={nayok[6]} job="Islamic Scolar"></Person>
<Person name={nayok[7]} job="Engineer"></Person>
*/