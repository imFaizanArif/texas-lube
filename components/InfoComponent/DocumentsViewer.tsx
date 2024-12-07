"use client"

import React, { useRef } from "react"
import { Image as AntDImage, Button } from "antd"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"

const DocumentsShow: React.FC = () => {
  const documents = ["/doc1.jpg", "/doc2.jpg", "/doc3.png", "/doc1.jpg", "/doc2.jpg", "/doc3.png", "/doc1.jpg", "/doc2.jpg", "/doc3.png","/doc3.png"]
  const scrollRef = useRef(null) // Ref to the scrollable div

  const scrollLeft = () => {
    const scrollableContainer = document.getElementById("scrollable-container")
    if (scrollableContainer) {
      scrollableContainer.scrollBy({
        left: -300, // Adjust the scroll distance
        behavior: "smooth",
      })
    }
  }

  // Function to scroll right
  const scrollRight = () => {
    const scrollableContainer = document.getElementById("scrollable-container")
    if (scrollableContainer) {
      scrollableContainer.scrollBy({
        left: 300, // Adjust the scroll distance
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative   z-10 mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">

          <h1 className="!text-center mb-8 text-xl font-bold text-[#BF2B29] sm:text-[40px] lg:text-left">Certificates</h1>
    
    <div className="flex items-center relative ">
    {/* Left Scroll Button */}
    <Button 
      icon={<LeftOutlined  className="text-white"/>} 
      onClick={scrollLeft} 
      className="absolute left-0 z-10 !bg-[#BF2B29] rounded-full "
      style={{ zIndex: 10 }}
    />

     
        <div
          id="scrollable-container"
          className="flex gap-2 overflow-x-auto"
          style={{ position: 'relative', display: 'flex', alignItems: 'center' }}

        >
          {documents.map((item, index) => (
            <div className="col-2 border !border-[#2A4696] rounded-md">

                <AntDImage
                  key={index}
                  src={item}
                  width={300}
                  height={350}
                //   preview={false}
                  className="mr-4   !rounded-md"  
                />
            </div>
          ))}
        </div>
        <Button 
            icon={<RightOutlined className="text-white"/>} 
            onClick={scrollRight} 
            className="absolute right-0 z-10 !bg-[#BF2B29] rounded-full  "
            style={{ zIndex: 10 }}
          />
     
    </div>
    </div>

  )
}
export default DocumentsShow
