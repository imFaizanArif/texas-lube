import React from "react"

import DocumentsShow from "./DocumentsViewer"
// import ShopMap from "./ShowShopsOnMap"
import ForDistributors from "./DistributorsCOmponent"
import ContactForm from "components/ContactUs"
const InfoComponent = () => {
  return (
    <div>
      <ForDistributors />
      <DocumentsShow />
      {/* <ShopMap /> */}
      <ContactForm />
    </div>
  )
}

export default InfoComponent

//  map view
