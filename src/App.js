import './App.scss';

import Authenticated from './Authenticated';
import UnAuthenticated from './UnAuthenticated';
import UseAuth from './hooks/useAuth/useAuth';
function App() {
  const [token] = UseAuth();

  if(token) {
    return <Authenticated />
  }

  return <UnAuthenticated />
}

export default App;
