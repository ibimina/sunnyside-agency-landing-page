function Navigation(props) {



    return ( <>
<nav data-visible={props.visible}>
    <ul className="top-ul">
        <li className="">About</li>
        <li className="">Services</li>
        <li className="">Projects</li>
        <li><button className="contact">contact</button></li>
    </ul>
</nav>
    
    </> );
}

export default Navigation;