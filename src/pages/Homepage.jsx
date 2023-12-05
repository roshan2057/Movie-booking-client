import React from 'react'
import Card from './components.jsx/Card'

const Homepage = () => {
  return (
  <>


<h1 className="mt-9 pl-8 text-3xl">Top Movies</h1>

<section className="text-gray-600 body-font">
<div className="container px-5 py-8 mx-auto">
<div className="flex flex-wrap -m-4">
 
<Card image="/images/Animal_310x390_499364.jpg" name="Animal" />
<Card image="/images/DuiKadam_310x390_844350.jpg" name="Dui Kadam" />
<Card image="/images/Dunki_310x390_824545.jpg" name="Dunki" />
<Card image="/images/HattiChhap_310x390_810682.png" name="HattiChap" />
<Card image="/images/Salaar_310x390_545363.png" name="Salaar" />


 
</div>
</div>
</section>
  </>
  )
}

export default Homepage