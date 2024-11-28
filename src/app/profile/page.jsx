import Logo from "@/../public/logo.png"
import ProfileInfo from "@/components/section/ProfileInfo"
import ProfileForm from "@/components/section/ProfileForm"
import React from 'react'
import getUser from "@/lib/actions/getUser"

const page = async () => {

// const data = await getUser();

const data = {
    name: "Jeeten Mandal",
    address: "Biratnagar 10, Hong Kong",
    createdAt: "2024-22-22",
    status: "verified",
    email: "jeeten123@gmail.com",
    age: "19", 
    docPhoto: "12345",
    character: "son",

}


  return (
    <main className='px-28 py-12 '>
    {

      data?
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