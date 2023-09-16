import { useState } from "react"
import Courses from "./components/Courses/Courses"
import Carts from "./components/Carts/Carts";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [carts, setCarts] = useState([]);
  const [credit, setCredit] = useState(0);
  const [remaining, setRemaining] = useState(20);
 

  const handleSelect = name => {
    const newCarts = [...carts, name]
    const isAdded = carts.find(item => item.id === name.id)
    let count = name.credit_hour;
    if (isAdded) {
      toast('Already added in the cart')
    }
    else {
      carts.forEach(item => {
        count = count + item.credit_hour
        if (count > 20) {
          toast('You cannot use more than 20 hours')
        }

      })
      let totalRemaining = 20 - count;
      if (totalRemaining < 0) {
        return
      }
      setCredit(count);
      setCarts(newCarts);
      setRemaining(totalRemaining);



    }
  }

  return (
    <div>
      <h1 className="text-4xl text-center font-bold mt-12 mb-8">Course Registration</h1>
      <div className="flex gap-6 max-w-7xl mx-auto">
        <Courses
          handleSelect={handleSelect}></Courses>
        <Carts carts={carts}
          credit={credit}
          remaining={remaining}></Carts>
          <ToastContainer />


      </div>
    </div>

  )
}

export default App
