

import './App.css'
import Card from './Compunent/Card/Card'
import Data from './Compunent/Data/Data'

function App() {

console.log(Data)
  return (
    <>
       <h1 ><i>User Data</i></h1>
    <div className='main'>


      {
      Data.map((e,i)=>{
        return(
          <Card key={e.id}  imgsrc = {e.image} id={e.id}dec={e.description} title = {e.title}></Card>
        )

      })

      }
      </div>


    </>
  )
}

export default App
