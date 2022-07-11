import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/home_page";
import CapturePage from "./components/pages/capture_page";
import MocksPage from "./components/pages/mocks_page";
import CreateMockPage from "./components/pages/create_mock_page";
import { checkUpdates, getDate } from "./utils/check_update";

function App() {
    useEffect(() => {
        if (localStorage.getItem("update_alert") !== getDate()) {
            checkUpdates();
        }
    }, [checkUpdates]);

    return (
        <Router>
            <Switch>
                <Route exact path="/home">
                    <HomePage />
                </Route>
                <Route exact path="/capture">
                    <CapturePage />
                </Route>
                <Route exact path="/mocks_update/:id">
                    <CreateMockPage />
                </Route>
                <Route exact path="/mocks_create/">
                    <CreateMockPage />
                </Route>
                <Route exact path="/mocks">
                    <MocksPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
