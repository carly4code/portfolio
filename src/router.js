import Home from './pages/Home';
import App from './App';

import ProjectPage from './pages/ProjectPage';


export default <Router history={hashHistory}>
  <Route path="/" component={App}>
    <Route path="project/:projectId" component={ProjectPage}/>
  </Route>
</Router>