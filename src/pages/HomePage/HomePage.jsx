import { useState } from 'react';
import Input from '../../components/Input/Input';
import LastRequests from '../../components/LastRequests/LastRequests';
import VinInfo from '../../components/VinInfo/VinInfo';

function HomePage() {
    const [vin, setVin] = useState('');
    const [vinInfo, setVinInfo] = useState([]);
    return (
        <main>
            <Input setVinInfo={setVinInfo} setVin={setVin} />
            <LastRequests setVinInfo={setVinInfo} setVin={setVin} />
            <VinInfo vinInfo={vinInfo} vin={vin} />
        </main>
    );
}

export default HomePage;
