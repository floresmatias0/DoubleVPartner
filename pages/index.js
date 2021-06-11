import { useForm } from 'react-hook-form';
import { useState } from 'react';
import styles from '../styles/Home.module.css'

const Home = () => {
  const [users,setUsers] = useState();
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async(data) => {
        setLoading(true);
          await fetch(`https://api.github.com/search/users?q=${data.name}`)
          .then(res => res.json())
          .then(data => {
            setUsers(data.items);
          })
        setLoading(false);
    }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="name"
          {...register("name", { required: true })}
        />
        {errors.name && <span>This field is required</span>}

        <input type="submit" />
      </form>
      <div className={styles.profileSearch}>
        {loading ? (
          <p>loading...</p>
        ):(
          users && users.length > 0 ? (
            users.map((user,i) => {
              return (
                <div key={i}>
                  <h2>{user.login}</h2>
                  <img src={user.avatar_url} alt="perfil"/>
                </div>
              )
            })
          ):(
            <p></p>
          )
        )}
      </div>
    </div>
  )
}


export default Home;
