import { useState } from 'react';
import Input from '../../components/Input/Input';
import LastRequests from '../../components/LastRequests/LastRequests';
import VinInfo from '../../components/VinInfo/VinInfo';
import { fetchVinInfo } from '../../utils/Api';

function HomePage() {
    const [vinInfo, setVinInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchVin(vin) {
        if (!isLoading) {
            const data = await fetchVinInfo(vin, setIsLoading);
            setVinInfo(data);
        }
    }
    return (
        <main>
            <Input
                setVinInfo={setVinInfo}
                fetchVin={fetchVin}
                isLoading={isLoading}
            />
            <LastRequests
                setVinInfo={setVinInfo}
                fetchVin={fetchVin}
                isLoading={isLoading}
            />
            <VinInfo vinInfo={vinInfo} />
        </main>
    );
}

export default HomePage;
