import { BrowserRouter } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import './index.css';
const App = () => {
    return (
        <BrowserRouter>
            <AppHeader />
            <AppFooter />
        </BrowserRouter>
    )
}
export default App;