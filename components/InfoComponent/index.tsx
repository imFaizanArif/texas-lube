import React from "react"

import DocumentsShow from "./DocumentsViewer"
// import ShopMap from "./ShowShopsOnMap"
import ForDistributors from "./DistributorsCOmponent"
const InfoComponent = () => {
  return (
    <div>
      <ForDistributors />
      <DocumentsShow />
      {/* <ShopMap /> */}
      
    </div>
  )
}

export default InfoComponent

//  map view
