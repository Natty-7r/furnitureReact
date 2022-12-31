import "./navbar.scss";

export default function Navbar() {
  return (
    <navbar className="navbar mobile_navbar">
      <div className="humburger">
        <span className="bar bar_1"></span>
        <span className="bar bar_2"></span>
        <span className="bar bar_3"></span>

        <div className="mobile_navlist">
          <li>
            <a href="">home</a>
          </li>
          <li>
            <a href="">about</a>
          </li>
          <li>
            <a href="">catagories</a>
          </li>
          <li>
            <a href="">products</a>
          </li>
          <li>
            <a href="">contact</a>
          </li>
        </div>
      </div>
      <div className="logo_div">
        nane <br />
        furniture
      </div>
      <button className="btn btn_lang">Amh</button>
    </navbar>
  );
}
