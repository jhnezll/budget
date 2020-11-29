import React from 'react';

export default function Item({name, calories, price}) {
    return(
            <div className="flex justify-between items-center h-16 p-4 my-6 rounded-lg border border-gray-100 shadow-md">
                <div className="flex items-center">
                    <div className="ml-2">
                        <div className="text-sm font-semibold text-gray-600">{name}</div>
                        <div className="text-sm font-light text-gray-500">{calories} Cal</div>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="px-4">
                        <h1 className="text-gray-600 font-semibold">${price}</h1>
                    </div>
                    <button className="bg-red-400 hover:bg-red-500 p-2 rounded-full shadow-md flex justify-center items-center">
                        <svg className="text-white toggle__lock w-6 h-6" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
            </div>
    )
}