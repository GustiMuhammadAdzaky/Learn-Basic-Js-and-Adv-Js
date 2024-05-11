import { useState } from 'react'
import Header from './components/Header'



function App() {
    const [jumlah, setJumlah] = useState(0);

    function handleClick() {
        setJumlah(jumlah + 1);
    }

    return (
        <>
            <Header/>
            <button onClick={handleClick}>Likes {jumlah}</button>
        </>
    );
}

export default App;

