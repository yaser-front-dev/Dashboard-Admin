import routes from './routes'
import { useRoutes } from 'react-router-dom'
import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  let router = useRoutes(routes);
  return (
    <>
    <Topbar/>
    <div className="w-full flex items-center justify-between">
      <Sidebar/>
    {router}
    </div>
    </>
  )
}

export default App
