import React from 'react'


const DashboardAssets = ({assets}) => {
  return (
   <div className="bg-white rounded-lg shadow px-4">
             <h2 className="text-lg font-semibold mb-4">Assets</h2>
             <ul>
               {assets.map((asset, i) => (
                 <li key={i} className="flex justify-between items-center border-b py-2 text-sm">
                   <div className="flex items-center space-x-2">
                     <span className="text-xl">{asset.icon}</span>
                     <span>{asset.name}</span>
                   </div>
                   <div className="text-right">
                     <p className="text-black font-medium">{asset.value}</p>
                     <p className="text-green-600 text-xs">{asset.change}</p>
                   </div>
                 </li>
               ))}
             </ul>
           </div>
  )
}

export default DashboardAssets
