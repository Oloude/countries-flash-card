import { useState } from 'react'
import {countries} from './data'
// import data from './countries.json'

function App() {
//   const [countriesData, setCountriesData] = useState(() => {
//   return data.map((country) => ({
//     id: country.id,
//     name: country.name,
//     code: country.code2l,
//     flag: `/SVG/${country.code2l}.svg`,
//     haveKnow: false,
//   }));
// });
const [countriesData, setCountriesData] = useState(countries)
const [currentCountryNumber, setCurrentCountryNumber] = useState(0)

  return (
    <main className='flex justify-center items-center flex-col gap-10 min-h-screen bg-mauve-100 p-4 font-sans'>
      <h1 className='text-center text-mauve-800 text-4xl font-bold'>Learn about Coutries</h1>
      <div className='flex flex-col gap-6'>
        <img src={countriesData[currentCountryNumber].flag} alt="" className='w-full h-100 rounded-xl' />
        <h3 className='text-center font-serif text-6xl text-orange-800 font-bold italic'>{countriesData[currentCountryNumber].name}</h3>
        <div className='flex items-center justify-center gap-3'>
          <button className='bg-mauve-900 px-4 py-2 rounded-md text-sm text-mauve-200 font-semibold hover:scale-105 cursor-pointer'>Know</button>
          <button onClick={()=>setCurrentCountryNumber(prev => prev === countriesData.length -1 ? 0 : prev + 1)} className='bg-mauve-800 px-4 py-2 rounded-md text-sm text-mauve-200 font-semibold hover:scale-105 cursor-pointer'>Next</button>
        </div>
      </div>

    </main>
//   //   <button
//   // onClick={() =>
//   //   navigator.clipboard.writeText(
//   //     JSON.stringify(countriesData, null, 2)
//   //   )
//   // }
// >
//   Copy Countries Data
// </button>
  )
}

export default App