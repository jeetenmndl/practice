"use server"

import { currentUser } from "@clerk/nextjs/server";


const postIssue = async (data)=>{

    const user = await currentUser();

    try {

    let details = {
        issuedBy: user.id,
        title: data.title,
        description: data.description,
        preferredCharacter: data.preferredCharacter,
        gotRelation: false,
        private: data.private,
    }

  
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

  export default postIssue;