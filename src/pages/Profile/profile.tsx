import React, { useState } from 'react';

import { useAuth0 , withAuthenticationRequired} from '@auth0/auth0-react';
import Loading from './../../components/loading';
import ProfileForm from './ProfileForm';
import ProfileFormContainer from './ProfileFormContainer';
import ProfileFormx from './ProfileFormx';

const Profile =  ():React.ReactElement => {
  const { user, getAccessTokenSilently } = useAuth0();
 { // const [tokenval, setTokenVal] = useState('')
  // const serverUrl = process.env.REACT_APP_SERVER_URL;

  // const name = user?.name
  // const picture = user?.picture
  // const email = user?.email

  // const tokengen = async () => {
  //   const token = await getAccessTokenSilently()
  //   console.log(token)
  //   //setTokenVal(token)

  // //   const params = {
  // //       name:"Joseph",
  // //       price:400,
  // //       language:"Edo",
  // //       total_pages:40
  // //  }

  // //   const urlOptions =  {
  // //       method: "POST",
  // //       headers: {
  // //         Authorization: `Bearer ${token}`,
  // //         'Content-Type': 'application/json' 
  // //       },
  // //       body: JSON.stringify(params),
  // //     }

  // //   try {
  // //       const response = await fetch(`${serverUrl}/api/book`, urlOptions);
    
  // //         const responseData = await response.json();
          
  // //       return token
        
  // //   } catch (error) {
        
  // //   }
  // }
}

  return (

        <section className='about d-flex align-items-center text-light py-5'>
           
                  {/* <ProfileForm/> */}
                  {/* <ProfileFormContainer/> */}
                  <ProfileFormx />
               
        </section>

  );
};

//export default Profile

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
});