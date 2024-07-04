import React from 'react'
import axios from 'axios'

function App() {
  const [search, setSearch] = useState()
  const [currency, setCurrency] = useState([])
  useEffect(()=>{
    axios.get('https://openapiv1.coinstats.app/coins',{headers:{'X-API-KEY':'wcsJ+KwYbVTOdAVMauzxvxLyR/Rm2Q7wbc9abQgOLNo='}}).then(res=> console.log(res)).catch(err => console.log(err))

  },[])
  return (
    <div classNmame="App">
    <h2>Crypto currency App</h2>
    <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)}/>
    <table>
    <thead>
      <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Symbol</th>
        <th>Market Cap</th>
        <th>Price</th>
        <th>Available Supply</th>
        <th>Volume(24hr)</th>

        






        

        
      </tr>
    </thead>
    <tbody>

    </tbody>

    </table>
      
    </div>
  )
}

export default App
