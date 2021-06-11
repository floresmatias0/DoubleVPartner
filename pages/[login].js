import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';

const User = () => {
  const [user, setUser] = useState();
  const router = useRouter();


  useEffect(() => {
      const userFetch = async(name) => {
        await fetch(`https://api.github.com/search/users?q=${name}`)
        .then(res => res.json())
        .then(data => {
          for(let i = 0; i < data.items.length; i++){
            if(name === data.items[i].login){
                setUser(data.items);
            }
          }
        })
      }
      userFetch(router.query.login);
  },[])

  return (
    <div>
    <Head>
      <title>{`${router.query.login}`}</title>
    </Head>
    {user && user.length > 0 ? (
      user.map((point,i) => {
        return (
          <div className="card" key={i}>
              <h1>{point.login}</h1>
              <img src={point.avatar_url} alt="profile"/>
          </div>
        )
      })
    ) : (
      <p></p>
    )}
    <style jsx>
    {`
      div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .card{
        margin-top: 2em;
        width: 30em;
        text-align: center;
        border-radius: 1em;
        border: 2px solid darkgray;
        cursor: pointer;
      }
      .card img{
        width:100%;
        margin: 0.5em;
      }
    `}
    </style>
    <style jsx global>
    {`
      html,
      body{
        margin: 0;
        padding: 0;
        background: rgb(238,174,202);
        background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
      }
    `}
    </style>
    </div>
  )
}

export default User;
