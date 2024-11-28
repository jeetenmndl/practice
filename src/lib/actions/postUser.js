"use server"

import { currentUser } from "@clerk/nextjs/server";


const postUser = async (data,docPhoto, userPhoto)=>{

    const user = await currentUser();

    try {

    let details = {
        userID: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        verified: false,
        docPhoto: docPhoto,
        userPhoto: userPhoto,
        character: data.character,
        age: data.age,
        address: data.address,
        createdAt: "123"
    }
    console.log(details)

  
    const settings = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(details)
  };
  
    const query = await fetch(`${process.env.SERVER}/create_account_api`, settings)
    const response = await query.json()
  
    return response

} catch (error) {
        return error; 
}
  }

  export default postUser;