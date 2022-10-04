import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFoundPage from '../pages/404/NotFoundPage';
import LoginPage from '../pages/auth/LoginPage';
import DashBoardPage from '../pages/dashboard/DashBoard';
{/*import  clsx  from  'clsx' ; */}

function AppRoutingFinal() {

  let loggedIn = true

  return (
    <Router>
      {/*Router Switch */}
      <Switch>

        <Route exact path='/'>
          {
            loggedIn ?
            <Redirect from='/' to='/dashboard' />
            :
            <Redirect from='/' to='/login' />
          }
        </Route>
        
        <Route exact path='/login' component={LoginPage}/>

        <Route exact path='/dashboard'>
          {
            loggedIn ?
            <DashBoardPage/>
           :
            <Redirect from='/' to='/login' />
          }
        </Route>

        <Route component={NotFoundPage}/>

      </Switch>

    </Router>
  );
}

export default AppRoutingFinal;
