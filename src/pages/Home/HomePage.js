import React, {Suspense, lazy} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
const Dashboard = lazy(() => import("../dashboard/Dashboard"));
export default function HomePage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                {
                    /* Redirect from root URL to /dashboard. */
                    <Redirect exact from="/" to="/dashboard"/>
                }
                {/* Route other */}
                <Route path="/dashboard" component={Dashboard}/>
            </Switch>
        </Suspense>
    );
}