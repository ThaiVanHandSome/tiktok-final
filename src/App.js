import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import DefaultLayout from '~/layouts/DefaultLayout/DefaultLayout';
import { publicRoutes } from './routes';
import { authContext } from './Context/authContext';
import Auth from './components/Auth';

function App() {
    const [openAuth, setOpenAuth] = useContext(authContext);
    return (
        <div>
            <Router>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((item, index) => {
                            const Comp = item.component;
                            let Layout = DefaultLayout;
                            if (item.layout) {
                                Layout = item.layout;
                            } else if (item.layout === null) {
                                Layout = Fragment;
                            }
                            return <Route key={index} path={item.path} element={<Layout>{<Comp />}</Layout>} />;
                        })}
                    </Routes>
                </div>
            </Router>
            {openAuth && <Auth />}
        </div>
    );
}

export default App;
