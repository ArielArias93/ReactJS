import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import { useEffect } from 'react';

import TaskPage from '../pages/tasks/TaskPage';

import LoginPage from '../pages/auth/LoginPage';

import RegisterFormik from '../components/pure/forms/registerFormik';


function AppRoutingOne() {

  let logged = localStorage.getItem('credentials');

  //let logged = true
  

  useEffect(() => {

    logged = localStorage.getItem('credentials');
  }, []);

  return (

    <Router>

      <div align="center">

        <aside>

          <Link to='/login'>||LOGIN|</Link>
          <Link to='/registro'>|REGISTRO|</Link>
          <Link to='/task'>|TAREAS||</Link>
          
        </aside>

        <main>

          <Switch>

            <Route path='/login' component={ LoginPage } />

            <Route path='/registro' component={ RegisterFormik }/>

            <Route path='/task' component={ TaskPage}>
              {
                  logged ? 
                  () => {

                  alert('Debes estar loggeado antes')
                  return (<Redirect to='/login'/>)
                  }
                  :
                  () => {

                  return (<TaskPage/>)
                  }
                }
              </Route>

          </Switch>

        </main>
      </div>     
    </Router>
  );
}

export default AppRoutingOne;
