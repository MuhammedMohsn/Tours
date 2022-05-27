// import logo from './logo.svg';
import './App.css';
import { Fragment ,useState,useEffect} from 'react';
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'
function App() {
  let [loading,setloading]=useState(true)
  const [tours, setTours] = useState([])
  async function getdata(){
      let response=await fetch(url)
      let data=await response.json()
      console.log(`the data is ${data}`)
      setloading(false)

      setTours(data)
      console.log(tours)
      // console.log(`the data is : ${JSON.parse(JSON.stringify(data))}`)
  }
  const removetour=(id)=>{
      let newtours=tours.filter(tour=>{return tour.id!==id})
      setTours(newtours)
  }
 useEffect(()=>{let time=setTimeout(getdata(),3000); return clearTimeout(time)},[])
 if(loading){
   return (<Fragment><h2>loading ............</h2></Fragment>)
 }
 if (tours.length === 0) {
  return (
    <main>
      <div className='title'>
        <h2>no tours left</h2>
        <button className='btn' onClick={() => getdata()}>
          refresh
        </button>
      </div>
    </main>
  )
}
  return (
    <Fragment> 
    <main>
    <Tours tours={tours} removetour={removetour} />
  </main>
    </Fragment>
  );
   
}

export default App;
