import { useForm } from 'react-hook-form';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Layout from '../components/layout';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  const [users,setUsers] = useState();
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async(data) => {
        setLoading(true);
          await fetch(`https://api.github.com/search/users?q=${data.name}`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            setUsers(data.items);
          })
        setLoading(false);

    }

  return (
    <Layout className={styles.container}>
    <Head>
      <title>DoubleVPartner</title>
    </Head>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="name"
          placeholder="write name of profile"
          {...register("name", { required: true ,
            minLength: { value: 4, message: "shouldnt be short min: 4 letter"},
            maxLength: { value: "doublevpartners", message: "cant search this word"}
          })}
        />
        {errors.name && <span>This field is required</span>}
        {errors.name && errors.name.type === "minLength" && <span>{errors.name.message}</span>}


        <button type="submit">search</button>
      </form>
      <div className={styles.profileSearch}>
        {loading ? (
          <p>loading...</p>
        ):(
          users && users.length > 0 ? (
            users.map((user,i) => {
              if(user.login === "doublevpartners"){
                return (
                  <h1>sorry this profile not access</h1>
                )
              }else{
                return (
                  <Link href="/[login]" as={`/${user.login}`} key={i}>
                    <div className={styles.card} >
                        <h2>{user.id}</h2>
                        <h2>{user.login}</h2>
                    </div>
                  </Link>
                )
              }
            })

          ):(
            <p></p>
          )
        )}
      </div>
    </Layout>
  )
}


export default Home;
