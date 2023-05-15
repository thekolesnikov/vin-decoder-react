import { useState } from 'react';
import Input from '../../components/Input/Input';
import LastRequests from '../../components/LastRequests/LastRequests';
import VinInfo from '../../components/VinInfo/VinInfo';

function HomePage() {
    const [vinInfo, setVinInfo] = useState([]);
    return (
        <main>
            <Input setVinInfo={setVinInfo} />
            <LastRequests setVinInfo={setVinInfo} />
            <VinInfo vinInfo={vinInfo} />
        </main>
    );
}

export default HomePage;
