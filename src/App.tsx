import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Posts from './components/posts/Posts';
import Users from './components/users/Users';
import Comments from './components/comments/Comments';
import { Login } from './components/authentication/Login';
import { Register } from './components/authentication/Register';
import { NotFound } from './components/errors/NotFound';
import { SubmitEmail } from './components/authentication/SubmitEmail';
import { SubmitCode } from './components/authentication/SubmitCode';
import { SubmitPassword } from './components/authentication/SubmitPassword';
import { Logout } from './components/authentication/Logout';
import { Profile } from './components/users/Profile';
import { IUser } from './models/IUser';

function App() {
  const storedUser: string | null = localStorage.getItem('user');
  const [loggedInUser, setloggedInUser] = useState<IUser | null>(null);

  useEffect(() => {

    setloggedInUser(storedUser ? JSON.parse(storedUser) : null);
  }, [storedUser]);




  return (
    <div className="App bg-black bg-gradient">
      <BrowserRouter>

        <header className="App-header container-fluid navbar navbar-expand-sm p-2 sticky-top d-flex justify-content-between backdrop-filter-blur">
          <Link className="App-logo" to="/"></Link>
          <Link className='profile-image' to="profile"></Link>
        </header>

        <section className="App-section min-vh-100 d-inline-flex justify-content-between rounded-5">


          <nav className='w-25 p-3'><div className='bg-body-tertiary rounded-5'>
            <Nav></Nav>
          </div></nav>

          <article className='w-auto p-3 justify-content-center align-middle text-center w-50'>
            <Routes>
              <Route path='/' element={<Navigate to={'/posts'} />} />

              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/submit-email' element={<SubmitEmail />} />
              <Route path='/submit-code' element={<SubmitCode />} />
              <Route path='/submit-password' element={<SubmitPassword />} />

              <Route path='/posts' element={<Posts />} />
              {/* <Route path='/new-post' element={<NewPostForm />}></Route>} */}
              {/* <Route path='/edit/:id' element={<EditPostForm />}></Route> */}

              <Route path='/people' element={<Users />} />

              <Route path='/profile' element={loggedInUser ? <Profile {...loggedInUser} /> : <Navigate to="/login" />} />
              {/* <Route path='/new-comment' element={<NewCommentForm />}></Route> */}

              <Route path='*' element={<NotFound />} />
            </Routes>
          </article>

          <aside className='p-3 text-end w-25'>



          </aside>

        </section>

        <div id='bottom-navbar' className="container-fluid navbar navbar-expand-sm p-2 justify-content-center backdrop-filter-blur sticky-bottom">
          <Link className="button-basic dec-none mx-4 py-1" to="/posts">Posts</Link>
          <Link className="button-basic dec-none mx-4 py-1" to="/people">People</Link>

          {localStorage.getItem('user') == null ?
            <>
              <Link className="button-basic dec-none mx-4 py-1" to="/login">Login</Link>
              <Link className="button-basic dec-none mx-4 py-1" to="/register">Register</Link>
            </>
            : <Link className="button-basic dec-none mx-4 py-1" to="/logout">Logout</Link>
          }
        </div>

        <footer className='App-footer'>
          Blog App Inc
        </footer>

      </BrowserRouter>
    </div>
  );
}

export default App;
