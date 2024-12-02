import Image from "next/image";



export  function HomeTextImageSection() {
    return(
        <div className="flex flex-col md:flex-row items-center gap-8 m-auto justify-center  max-w-container-md px-6 py-12">
        {/* Left Section */}
        <div className="flex flex-col items-start text-left md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold">Title will be here </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repellendus voluptate, aliquid accusamus ex
             nihil impedit cumque dolore placeat, quibusdam corporis adipisci dolores. Optio obcaecati voluptatem, qui cupiditate quae quas?
          </p>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
           Click Here
          </button>
        </div>
    
        {/* Right Section */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={'https://plus.unsplash.com/premium_photo-1682148233099-e9de9e59b081?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
            alt={"image missing"}
            width={400}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
     
    
       )
}