import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router';

import { publicRoutes } from './const/publicRoutes.ts';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map(({ path, Component }) => {
                    return <Route key={path} path={path} element={<Component />} />;
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
