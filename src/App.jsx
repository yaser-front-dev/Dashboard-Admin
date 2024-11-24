import routes from './routes'
import { useRoutes } from 'react-router-dom'
import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  let router = useRoutes(routes);
  return (
    <>
      <Topbar />
      <div className="w-full flex justify-between">
        <div className="flex-1">
          <Sidebar />
        </div>
        <div className="flex-[4] px-5 pt-2">
          {router}
        </div>
      </div>
    </>
  )
}

export default App
