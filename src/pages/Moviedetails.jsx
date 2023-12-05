import React from 'react'

const Moviedetails = () => {
  return (
  <>
    <section className="text-gray-600 body-font overflow-hidden">
        <div className="container py-24 mx-auto">
          <div className="lg:w-2/3 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="/images/Animal_310x390_499364.jpg"
            />
            <div className="lg:w-1/2 w-full lg:pl-20 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-4xl title-font font-medium mb-1">
                Animal
              </h1>
              <div className="flex mb-4">Action, Crime, Drama</div>
              <p className="leading-relaxed text-xl">
                A son's love for his father. Often away due to work the father
                is unable to comprehend the intensity of his son's love.
                Ironically, this fervent love and admiration for his father and
                family creates conflict between the father and son.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              <div className="flex justify-around">
                <div className="flex flex-col">
                  <ul>
                    <li>Director :</li>
                    <li>Cast : </li>
                    <li>Release On :</li>
                    <li>Duration :</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>Sandeep Reddy Vanga</li>
                    <li>Ranbir Kapoor, Triptii Dimri, Anil Kapoor</li>
                    <li>December 01, 2023</li>
                    <li>3 hours 23 mins</li>
                  </ul>
                </div>



                
              </div>
              <div className="flex mt-8">
              <a className="flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:scale-105 rounded"   rel="noopener noreferrer" href="https://youtu.be/Dydmpfo68DA?si=19w_0_w7OYwHpVxP" target="_blank">View Tailor</a>
          <a href='/reserve' className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:scale-105 rounded">Reserve Ticket</a>
          
        </div>
              
            </div>
            
          </div>
        </div>
      </section>
  </>
  )
}

export default Moviedetails