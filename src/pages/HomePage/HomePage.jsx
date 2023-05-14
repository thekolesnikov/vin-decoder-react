import { useState } from 'react';
import Input from '../../components/Input/Input';

function HomePage() {
    const [vinInfo, setVinInfo] = useState('');
    return (
        <main>
            <Input vinInfo={vinInfo} setVinInfo={setVinInfo} />
        </main>
    );
}

export default HomePage;
