import React, { useState } from 'react';

import { useAuth0 , withAuthenticationRequired} from '@auth0/auth0-react';
import Loading from './../../components/loading';

const Profile =  () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [tokenval, setTokenVal] = useState('')
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const name = user?.name
  const picture = user?.picture
  const email = user?.email

  const tokengen = async () => {
    const token = await getAccessTokenSilently()
    console.log(token)
    setTokenVal(token)

  //   const params = {
  //       name:"Joseph",
  //       price:400,
  //       language:"Edo",
  //       total_pages:40
  //  }

  //   const urlOptions =  {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         'Content-Type': 'application/json' 
  //       },
  //       body: JSON.stringify(params),
  //     }

  //   try {
  //       const response = await fetch(`${serverUrl}/api/book`, urlOptions);
    
  //         const responseData = await response.json();
          
  //       return token
        
  //   } catch (error) {
        
  //   }
  }


  return (
    <div>
        <section className='about d-flex align-items-center text-light py-5'>
            <div className="container ">
                <div className="col-md-2 mb-3">
                <img
                    src={picture}
                    alt="Profile"
                    className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                />
                </div>
                <div className="col-md text-center text-md-left">
                <h2>{name}</h2>
                <p className="lead text-muted">{email}</p>
                </div>
            </div>
            {/* <div className="row">
                <pre className="col-12 text-light bg-dark p-4">
                {JSON.stringify(user, null, 2)}
                </pre>
            </div> */}
                 <button
          type="button"
          className="btn btn-primary"
          onClick={tokengen}
        >
          Get token
        </button>
            <div className="row">
                <pre className="col-12 text-light bg-dark p-4">
                Token in console
                </pre>
            </div>
        </section>

    </div>
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
});