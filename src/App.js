import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import DefaultLayout from '~/layouts/DefaultLayout/DefaultLayout';
import { publicRoutes } from './routes';
import { boxContext } from './Context/boxContext';
import { Notification } from './Popper';

function App() {
    const [box, setBox] = useContext(boxContext);
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
            {!!box.comp && <Notification>{box.comp}</Notification>}
        </div>
    );
}

export default App;
