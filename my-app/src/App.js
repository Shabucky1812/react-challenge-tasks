import css from './App.module.css';
import Sidebar from './components/Sidebar';
// import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm';
import ContentAPIHooks from './components/ContentAPIHooks';

function App() {
    return (
        <div className={css.App}>
            {/* <NavBarSimple /> */}
            <NavBarForm />
            <Sidebar />
            <ContentAPIHooks />
        </div>
    );
}

export default App;