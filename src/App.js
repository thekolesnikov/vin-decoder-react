import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainLayout from './components/MainLayout/MainLayout';
import HomePage from './pages/HomePage/HomePage';
import VariablesList from './pages/VariablesList/VariablesList';
import VariablesItem from './pages/VariablesItem/VariablesItem';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="variables" element={<VariablesList />} />
                    <Route path="variables/:id" element={<VariablesItem />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
