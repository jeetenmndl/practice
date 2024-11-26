import Logo from "@/../public/logo.png"
import ProfileInfo from "@/components/section/ProfileInfo"
import ProfileForm from "@/components/section/ProfileForm"
// import { auth, currentUser } from '@clerk/nextjs/server';
import React from 'react'

const page = async () => {

//   const user =  await currentUser();
//   const userID = user.id;

//   const result = await fetch(`${process.env.DOMAIN}/api/kyc/getUserKyc`, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({id: userID})
//   });

// const response = await result.json();
// console.log(response);

// const userInfo = await currentUser();

const data = {
    name: "Jeeten Mandal",
    address: "Biratnagar 10, Hong Kong",
    date: "2024-22-22",
    status: "verified",
    email: "jeeten123@gmail.com",
    phone: "9800000000",
    idType: "Citizenship", 
    idNumber: "12345"
}


  return (
    <main className='px-28 py-12 '>
    {

      !data?
      <section className="flex gap-6">
      <ProfileInfo data={data} image={Logo} />
      </section>
      :
        <section className=''>
          <ProfileForm />
        </section>
    }

    </main>
  )
}

export default page