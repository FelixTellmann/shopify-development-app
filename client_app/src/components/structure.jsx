import Settings from "./settings";
import About from "./about";
import Home from "./home";
import Contact from "./contact";
import {Switch, Route} from "react-router-dom";


const Structure = (props) => {
    return (
        <div>
            <Tabs
                tabs={[
                    {
                        id: 'all-customers',
                        title: 'All',
                        accessibilityLabel: 'All customers',
                        panelID: 'all-customers-content',
                    },
                    {
                        id: 'accepts-marketing',
                        title: 'Accepts marketing',
                        panelID: 'accepts-marketing-content',
                    },
                    {
                        id: 'repeat-customers',
                        title: 'Repeat customers',
                        panelID: 'repeat-customers-content',
                    },
                    {
                        id: 'prospects',
                        title: 'Prospects',
                        panelID: 'prospects-content',
                    },
                ]}
                selected={0}
            />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/settings" component={Settings}/>
            </Switch>
        </div>


    )
};