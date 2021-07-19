import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Notifications from './pages/Notifications';
import Orders from './pages/Orders';
import Pasteries from './pages/Pastries';
import Posts from './pages/Posts';
import Users from './pages/Users';
import Tables from './components/Tables/Tables';
import CheckBoxTable from './components/Tables/CheckBoxTable';
import Form from './components/Form/AddUserForm';

function App() {
  return (
    <>
    <Router>
      <Sidebar/>
      <Switch>
        <Route path = '/' exact component={Home} />
        <Route path = '/notifications' component={Notifications} />
        <Route path = '/orders' component={Orders} />
        <Route path = '/pasteries' component={Pasteries} /> 
        <Route path = '/posts' component={Posts} />      
        <Route path = '/users' component={Users} /> 
        <Route path = '/tables' component={Tables} />
        <Route path = '/checkBoxTables' component={CheckBoxTable} />
        <Route path = '/form' component={Form} />   
      </Switch>
    </Router>
    </>
  );
}

export default App;
