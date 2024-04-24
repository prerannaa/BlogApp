import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import AddBlog from './components/AddBlog'
import EditBlog from './components/EditBlog'

function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={ < Home />}></Route>
    <Route path='/addblog' element={ < AddBlog />}></Route>
    <Route path='/editblog/:url' element={ <EditBlog />}></Route>
    </Routes>
    </>
  )
}

export default App
