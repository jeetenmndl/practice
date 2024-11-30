import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Welfare from "@/../public/welfare.jpg"
import Care from "@/../public/care.jpg"
import Bpkihs from "@/../public/bpkihs.jpg"
import Kopila from "@/../public/kopila.jpg"

import Image from "next/image";

const Ngo = () => {
  return (
    <>
        <hr className="border-gray-300 mx-28 my-8" />

<section className="py-8  px-2 md:px-6 lg:px-12 xl:px-28 ">
 <h2 className="text-3xl font-semibold">NGO initiative highlights.</h2>
 <article className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
   <Card>
   <CardHeader className="relative">
       <div className="absolute top-2 right-4">
       <Image className="w-20 h-20 rounded-full" src={Care} alt="kopila" />
       </div>
       <CardTitle> Fitness and yoga sessions
       </CardTitle>
       <CardDescription> June 18, 2024
       </CardDescription>
     </CardHeader>
     <CardContent>
       <p className="leading-7">Join Student Care on June 21, 2024, at the Yoga Room Center for rejuvenating fitness and yoga sessions. Enhance your physical and mental well-being in a supportive environment. All students are welcome!</p>
     </CardContent>
     <CardFooter>
       <span className="text-sm font-medium text-blue-800 ">Organized by: Student Care</span>
     </CardFooter>
   </Card>

   <Card>
   <CardHeader className="relative">
       <div className="absolute top-2 right-4">
       <Image className="w-20 h-20 rounded-full" src={Kopila} alt="kopila" />
       </div>
       <CardTitle>Book and School Supply Drives</CardTitle>
       <CardDescription> June 25, 2024
       </CardDescription>
     </CardHeader>
     <CardContent>
       <p className="leading-7">Join Kopila - Nepal on June 25, 2024, at Library Connect for a book and school supply drive. Help support education by donating books and supplies to students in need. Your contributions can make a difference!</p>
     </CardContent>
     <CardFooter>
       <span className="text-sm font-medium text-blue-800 ">Organized by: Kopila Nepal</span>
     </CardFooter>
   </Card>
   
   <Card>
   <CardHeader className="relative">
       <div className="absolute top-2 right-4">
       <Image className="w-20 h-20 rounded-full" src={Bpkihs} alt="kopila" />
       </div>
       <CardTitle>Student Free Health Checkup
       </CardTitle>
       <CardDescription> June 25, 2024
       </CardDescription>
     </CardHeader>
     <CardContent>
       <p className="leading-7">The Student Welfare Society is organizing a free health checkup for students on July 1, 2024, at Birat Nursing Home, Kamal Pokhari Marg, Biratnagar. Prioritize your health and join us for this beneficial event!</p>
     </CardContent>
     <CardFooter>
       <span className="text-sm font-medium text-blue-800 ">Organized by: B.P.K.I.H.S
       </span>
     </CardFooter>
   </Card>
   <Card>
     <CardHeader className="relative">
       <div className="absolute top-2 right-4">
       <Image className="w-20 h-20 rounded-full" src={Welfare} alt="kopila" />
       </div>
       <CardTitle>Healthcare Sessions</CardTitle>
       <CardDescription> June 25, 2024
       </CardDescription>
     </CardHeader>
     <CardContent>
       <p className="leading-7">Join us for fitness and yoga sessions organized by the Student Welfare Society on June 21, 2024, at Cultural Exchange Programs, Biratnagar-05 Kani Pani. Enhance your well-being in a culturally enriching environment!</p>
     </CardContent>
     <CardFooter>
       <span className="text-sm font-medium text-blue-800 ">Organized by: Student Welfare Society</span>
     </CardFooter>
   </Card>
 </article>
</section>
    </>
  )
}

export default Ngo