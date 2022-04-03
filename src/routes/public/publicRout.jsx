import { Route } from "react-router-dom";

function Public ({ path, component, exact  }) {

    return <Route path={path} component={component} exact={exact} />
}

export default Public;