import { default as React } from 'react';
import { Header } from '../components/Header';
import { Form } from '../components/Form';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
    return (
        <div className="home-page">
            <Header />
            <Form />
            
        </div>
    );
};
AOS.init();
export { Home };