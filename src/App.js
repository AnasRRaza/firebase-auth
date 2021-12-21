import './App.css';
import { useUserContext } from './context/userContext';
import Auth from './routes/Auth';
import UnAuth from './routes/unAuth';

function App() {

  const { error, loading, user } = useUserContext();
  console.log(error);
  console.log(user);


  return (
    <div className='app'>
      {error && <p className='error'>{error}</p>}
      {loading ? <h2>Loading...</h2> : <> {user ? <UnAuth /> : <Auth />} </>}
    </div>
  )
}

export default App;
