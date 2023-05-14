import { useState } from 'react';
import Input from '../../components/Input/Input';
import VinInfo from '../../components/VinInfo/VinInfo';

function HomePage() {
    const [vinInfo, setVinInfo] = useState([]);
    console.log(vinInfo);
    return (
        <main>
            <Input setVinInfo={setVinInfo} />
            <VinInfo vinInfo={vinInfo} />
        </main>
    );
}

export default HomePage;
