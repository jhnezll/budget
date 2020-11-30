import Item from "../Components/Item";
import React, {useContext, useEffect, useState} from "react";
import {useRouter} from "next/router";
import SessionContext from "../util/SessionContext";
import fb from "../util/firebase-config";

export default function Home() {

    const router = useRouter()
    const {isAuthenticated} = useContext(SessionContext)

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/auth/signin')
        }
    }, [isAuthenticated])

    const [sampleData, setSampleData] = useState([
        {
            id: 0,
            name: "Apple",
            price: 1.0,
            calories: 200
        },
        {
            id: 1,
            name: "Hamburger",
            price: 5.00,
            calories: 500
        },
        {
            id: 2,
            name: "Water",
            price: 1.0,
            calories: 0
        }
    ])

    let prices = sampleData.map(sampleData => (
        sampleData.price
    ))

    let totalPrice = prices.reduce((a, b) => a + b, 0)

    console.log(totalPrice)

    useEffect(() => {
    //    Setup where data will change when something new is added.
    })

    return (
      <div className="min-h-screen flex-1 bg-gray-200 p-4 flex justify-center items-center">
          <div className="bg-white w-full md:max-w-4xl rounded-lg shadow">
              <div className="h-12 flex justify-between items-center border-b border-gray-200 m-4 pb-2">
                  <div>
                      <div className="text-xl font-bold text-gray-700">🛒 Shopping Cart</div>
                      <div className="text-sm font-base text-gray-500">These are the items currently in your cart.</div>
                  </div>
              </div>

              <div className="px-6">

                  {sampleData.map(sample => (
                      <Item
                          key={sample.id}
                          name={sample.name}
                          price={sample.price.toFixed(2)}
                          calories={sample.calories}
                      />
                  ))}

                  <div className="flex bg-gray-200 justify-center items-center h-16 p-4 my-6 rounded-lg shadow-inner">
                      <div className="flex items-center border border-gray-400 p-2 border-dashed rounded cursor-pointer">
                          <div>
                              <svg className="text-gray-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                   viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                              </svg>
                          </div>
                          <div className="ml-1 text-gray-500 font-medium">Add another item</div>
                      </div>
                  </div>

                  <div className="flex h-16 p-4 my-6 rounded-lg border border-gray-100 shadow-md">
                      <div>
                          <div className="ml-2">
                              <div className="font-semibold text-gray-600">Total: ${totalPrice.toFixed(2)} </div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </div>
  )
}
