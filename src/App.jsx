
/*  import { useState } from "react"
const App=()=>{
  const [name, setName]=useState("");
  const [city, setCity]=useState("");
 const handleSubmit=()=>{
    alert("name:" +name+ " city : "+city);

 }
  return(

<>
<h1>Application from!</h1>
Enter name: <input type="text"
value={name} onChange={(e)=>{setName(e.target.value)}}/>
<br />
Enter city: <input type="text"
value={city} onChange={(e)=>{setCity(e.target.value)}}/>
<br />
<button onClick={handleSubmit}>click her</button>
</>
  )
}
export default App; */


 /* import { useState } from "react";
const App=()=>{
const [input,setInput]=useState({});
const handleInput=(e)=>{
   let name=e.target.name;
   let value=e.target.value;
   setInput(values=>({...values,[name]:value}));
   console.log(input);
}
  return(
<>
<h1>Application From !</h1>
 Enter rollno : <input type="text" name="rollno"
 onChange={handleInput}/>
 <br />
Enter name: <input type="text" name="name"
onChange={handleInput}/>
<br />
Enter city : <input type="text" name="city"
onChange={handleInput}/>
<br />
Enter fees: <input type="text" name="fees"
onChange={handleInput}/>
<br />
<button>Data save!</button>
</>
  )
}
export default App; */



















/*  import { useState } from "react";
const App=()=>{
const [rollno, setRollno]=useState("");
const [name,setName]=useState("");
const[city,setCity]=useState("");
const[fees,setFees]=useState("");
const handleSubmit=()=>{
console.log({rollno:rollno, name:name, fees:fees, city:city});
}
return(
<>
<h1>Application form!!</h1>
Enter rollno: <input type="text"
value={rollno} onChange={(e)=>{setRollno(e.target.value)}}/>
<br /><br />
Enter name: <input type="text"
value={name} onChange={(e)=>{setName(e.target.value)}}/>
<br /><br />
enter city: <input type="text"
value={city} onChange={(e)=>{setCity(e.target.value)}}/>
<br /><br />
enter fees: <input type="text"
value={fees} onChange={(e)=>{setFees(e.target.value)}}/>
<br /><br />
<button onClick={handleSubmit}>Data save!!</button>
</>
)
}
export default App; */































































