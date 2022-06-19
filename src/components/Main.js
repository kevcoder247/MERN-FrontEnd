//component libraries
import{Route} from 'react-router-dom';

//page components
import Index from '../pages/Index';
import Show from '../pages/Show'

const Main = (props) => {
    return (
        <main>
           
           <Route exact path="/">
            <Index />
           </Route>

           {/* (rp)render props passes down 3 properties, history, match, location */}
           {/* ...rp is props spreding */}
           <Route path="/people/:id" render={(rp) => <Show {...rp} />} />
            

        </main>
    )
}

export default Main;