import Image from "next/image";
import cena from '../../assets/images/cena.png'
const AboutPage = () => {
    return (
        <div>
            <h2>This is about page</h2>
            <Image width="500" height="300" src="https://i.ibb.co.com/fYRFJJ9K/Ronaldo.jpg" alt="RONALDO"></Image>
            <Image width="500" height="300" src="https://images.unsplash.com/photo-1777047023742-1607aeb1a5bb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="world pic"></Image>
            <Image width="300" height="300" src="/soyon.png" alt="soyon pic"></Image>
            <Image width="300" height="500" src={cena} alt="cena vai"></Image>
        </div>
    );
};

export default AboutPage;