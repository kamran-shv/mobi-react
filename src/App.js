import './App.css';
import Header from "./Header/Header";
import HeadBanner from "./HeadBanner/HeadBanner";
import Advantages from "./Advantages/Advantages";

function App() {
    return (<div className='app-wrapper'>
            <Header/>
            <HeadBanner/>
            <Advantages/>
        </div>);
}

export default App;
