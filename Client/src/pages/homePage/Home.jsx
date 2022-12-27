import Nav from '../../components/Home_page/navbar/nav';
import Slider2 from '../../components/Home_page/comp1/slider2';
import Slider from '../../components/Home_page/_slider/slider';
import Donate from '../../components/Home_page/comp3/donate';
import Features from '../../components/Home_page/features/features';
import Map from '../../components/Home_page/Map/map';
import Form from '../../components/Home_page/form/form';
import Last from '../../components/Home_page/Last/last';

//test

function Home() {
    return (
        <div className="App">
            <Nav /><br/>
            <Slider2 /><br/>
            <Slider /><br/>
            <Donate />
            {/* <Features /><br/> */}
            <Form />
            <Map /><br/>
            <Last />
        </div>
    );
}

export default Home;
