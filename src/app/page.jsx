
import Card1 from "@/../public/card1.svg"
import Card2 from "@/../public/card2.svg"
import Card3 from "@/../public/card3.svg"

import Image from "next/image";

export default function Home() {

  return (
    <>
   
    <main className=' px-2 md:px-6 lg:px-12 xl:px-28 md:pt-8 flex flex-col-reverse lg:flex-row gap-8 xl:gap-12 md:justify-between'>


      
    <section className="lg:w-2/3 ">

    <section className="grid grid-cols-1 lg:grid-cols-3 px-6 lg:px-0 gap-6 [&>div]:rounded-md">
      
      <div className="border lg:h-96 p-5 lg:p-3 bg-green-100">
        <h3 className="font-medium text-2xl">Build a virtual virtual Family</h3>
      <p className="text-xs text-gray-600 pt-2">Create a supportive virtual family for students, fostering mental well-being through connection, empathy.</p>
      <hr className="border-blue-200 mt-5" />
      <div className="w-full px-4 py-8">
        <Image src={Card1} className="w-full " alt="card1" />
      </div>
      </div>


      <div className="border lg:h-96 p-5 lg:p-3 bg-blue-100">
        <h3 className="font-medium text-2xl">Share Thoughts & Problems</h3>
      <p className="text-xs text-gray-600 pt-2">Share thoughts and problems in a safe space, connecting with peers for support and understanding</p>
      <hr className="border-blue-200 mt-5" />
      <div className="w-full px-8 py-4">
        <Image src={Card2} className="w-full " alt="card1" />
      </div>
      </div>
      
      <div className="border lg:h-96 p-5 lg:p-3 bg-orange-100">
        <h3 className="font-medium text-2xl">Track Down the Resolution</h3>
      <p className="text-xs text-gray-600 pt-2">Track down the resolution of shared issues, ensuring continuous support and effective solutions.</p>
      <hr className="border-blue-200 mt-5" />
      <div className="w-full px-8 py-4">
        <Image src={Card3} className="w-full " alt="card1" />
      </div>
      </div>

    </section>

    

      
      <p className="mb-6 leading-8 hidden">There are students who know they can solve their problems by discussing with their specific family members. Yet they can’t share their feelings and problems because of various reasons leading to mental health issues. Create and build a web relation that we are in need of.</p>
      {/* <div className=" px-2 my-4 md:px-0 rounded-lg h-60 overflow-hidden grid place-content-center">
       <Image src={Banner2} className="w-full brightness-75 " alt="banner" />
      </div> */}



      <hr className="mt-12 border-gray-300" />


      <div className="my-8 px-2 md:px-0">
        <h2 className="text-3xl font-semibold ">Feeds Matching Your Character
        </h2>
        
        {/* <Feed /> */}
      </div>

     
      <hr className="border-gray-300" />

      
    </section>

    <section className="lg:w-1/3 px-2 md:px-0 pt-4 lg:pt-0">
      {/* <IssueForm /> */}
    </section>
  
 </main>
 </>
  );
}
