import React, {useState} from "react";
import img1 from "./graph.png";
import "./home.css";
import * as ReactBootStrap from "react-bootstrap";
import img2 from "./bug2.jpg";
import img3 from "./bug4.jpg";
import img4 from "./bug5.jpg";
import img5 from "./bug6.jpg";
import img6 from "./bug7.jpg";
import img7 from "./bug8.jpg";


function App()
{
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(false);
    const [cross, setcross] = useState(false);

    const getapidetail = async () => {
        const url = "https://reqres.in/api/users?page=1";
            fetch(url)
            .then((response) => response.json())
            .then(result  => {
                console.log(result);
                setdata(result.data)
                    setloading(true);
                    setTimeout(() => {
                        setloading(false);
                    }, 1000);
                    setcross(true);
            });
    }

    // useEffect(() => {
    //     getapidetail();
    // })
    return(
        <div>
        <section className="section">
            <div className="section1">
                <div className="logo">
                    <img className="image2" src={img1} alt='svg' />
                    <p>TBUDDY</p>
                </div>
                <nav>
                    <ul>
                        <li className="active">Home</li>
                        <li onClick={getapidetail} className="get"><a href="#user2">Get Users </a></li>
                        <li>Service</li>
                    </ul>
                </nav>    
                <div className="burger-images">
                    <img className='bugs' src={img2} alt='one' />
                    <img className='bugs' src={img3} alt='two' />
                    <img className='bugs' src={img4} alt='three' />
                    <img className='bugs' src={img5} alt='four' />
                    <img className='bugs' src={img6} alt='five' />
                    <img className='bugs' src={img7} alt='six' />
                </div> 
            </div>
        </section>
        {loading ? <div className="circle"><ReactBootStrap.Spinner className="spinner" animation="border" /></div> : ""}
        {loading ? "" : <ul className="user">
        {cross ?<p onClick={() => setloading(true)} className="cross">X</p> : "" }
        {data.map((item) => (
            <div className="person" id="user2">   
                <img className="center" src={item.avatar} alt="users" srcset="" />
                <h1 className="h1">{item.first_name}</h1>
                <p className="p">{item.last_name}</p>
                <p className="p">{item.email}</p>
            </div>
        ))}
    </ul>}
        </div>
    );
}

export default App;