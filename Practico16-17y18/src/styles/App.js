//import logo from './logo.svg';
import './App.css';
//import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
//import OptionalRender from './components/pure/OptionalRender';
//import GreetingStyles from './components/pure/greetingStyles';
//import Ejemplo4 from './hooks/Ejemplo4';
//import Greeting from './components/pure/greeting'
//import GreetingF from './components/pure/greetingF';
//import TaskListComponent from './components/container/task_list';
//import Ejemplo1 from './hooks/ejemplo1';
//import Ejemplo2 from './hooks/ejemplo2';
//import MiComponenteConContexto from './hooks/Ejemplo3'
//import Father from './components/container/father';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
        {/*<img src={logo} className="App-logo" alt="logo" />*/}

        {/* Componente propio Greeting.jsx */}
        {/*<Greeting name='Ariel'></Greeting>*/}
        {/*<GreetingF name={"Ariel"}></GreetingF>*/}
        {/*<TaskListComponent></TaskListComponent>*/}
        {/*<Ejemplo1></Ejemplo1>*/}
        {/*<Ejemplo2></Ejemplo2>*/}
        {/*<MiComponenteConContexto></MiComponenteConContexto>*/}
        {/*<Ejemplo4 nombre=' Ariel'>
          <h3>Contenido del props.children</h3>
        </Ejemplo4>*/}
        {/*} <GreetingStyles name="Ariel"></GreetingStyles>
        </header>*/}
        {/*<Father></Father>*/}
        {/*<OptionalRender></OptionalRender>*/}
        {/*<LoginFormik></LoginFormik>*/}

        <RegisterFormik></RegisterFormik>
        

    </div>
  );
}

export default App;
