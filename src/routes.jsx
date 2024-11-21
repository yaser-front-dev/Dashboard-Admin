import Home from "./pages/Home/Home"
import UsersList from "./pages/Users/Users"
import NewUser from "./pages/NewUser/NewUser"
import Prodcts from "./pages/Prodcts/Prodcts"

let routes = [
    {path : '/' , element : <Home/>},
    {path : '/Users' , element : <UsersList/>},
    {path : '/newUser' , element : <NewUser/>},
    {path : '/Prodcts' , element : <Prodcts/>},
]

export default routes