import Item from "../Components/Item";
import React, {useContext, useEffect} from "react";
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

    return (
      <div className="min-h-screen flex-1 bg-gray-200 p-4 flex justify-center items-center">
          <div className="bg-white w-full md:max-w-4xl rounded-lg shadow">
              <div className="h-12 flex justify-between items-center border-b border-gray-200 m-4 pb-2">
                  <div>
                      <div className="text-xl font-bold text-gray-700">Shopping Cart</div>
                      <div className="text-sm font-base text-gray-500">These are the items currently in your cart.</div>
                  </div>
              </div>

              <div className="px-6">

                  <Item name="Apple" price={3} calories="500" />
                  <Item name="Hamburger" price={4} calories="800" />

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
                              <div className="font-semibold text-gray-600">Total: </div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </div>
  )
}
