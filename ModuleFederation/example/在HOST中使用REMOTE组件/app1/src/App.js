import React from "react";
const RemoteButton = React.lazy(() => import("app2/Button"));

const App = () => {
    return <div>
        app1
        <React.Suspense fallback="Loading Button">
            <RemoteButton />
        </React.Suspense>
    </div>
}
export default App;
