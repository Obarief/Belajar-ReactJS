import PlaceContentCenter from '../components/PlaceContentCenter.jsx';
import Counter from '../components/Counter.jsx';
import ButtonMUI from '../components/Button.jsx';
import { useNavigate } from 'react-router-dom';

function Belajarusestate() {
    const navigate = useNavigate();
    function Logout() {
        console.clear();
        localStorage.clear();
        navigate('/belajarform');
    }

    return (
        <PlaceContentCenter>
            <Counter initialValue={0} />
            <ButtonMUI onClick={Logout}>Logout</ButtonMUI>
        </PlaceContentCenter>
    );
}

export default Belajarusestate;
