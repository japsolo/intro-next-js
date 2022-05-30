import Layout from '../components/Layout';

export default function About({ finalUsers }) {
  return (
    <Layout>
      <h2>About us!</h2>
      <ul>
        { finalUsers.map(user => <li key={user.id}> {user.name} </li> )}
      </ul>
    </Layout>
  )
}

export async function getServerSideProps () {
  const users = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
  const finalUsers = users.map(user => ({ name: user.name, id: user.id }));
  return {
    props: {
      finalUsers
    }
  }
}