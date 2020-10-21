import React, { Component } from 'react'
import logo from '../smlogo.png';
import '../styles.css';
import { Link } from 'react-router-dom';
import { getCategory } from '../../networks/categoryFetcher';
import lan from '../../configs/language';
import MMText from 'react-mm-text';

export default class navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categoryList: [],
        }
    }

    componentDidMount() {
        this.dataLoadGetCategory()
    }

    dataLoadGetCategory = () => {
        getCategory((error, data) => {
            if (error != null) console.log("error is " + error)
            else this.setState({ categoryList: data.data })
        })

    }
    render() {
        const clan = "mm"
        return (
            <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: "#dab03c" }}>
                <Link className="navbar-brand d-flex" to="#">
                    <img src={logo} alt="logo text" className="imgLogo rounded-circle " />
                    <p className="logoText" >
                        <small>
                            <MMText
                                text={lan[clan].logotext}
                                showFont={"unicode"}
                                conveter={"rabbit"}
                                detector={"knayi"}
                            />
                        </small>
                        <br />
                        <span >
                            <MMText
                                text={lan[clan].shop}
                                showFont={"unicode"}
                                conveter={"rabbit"}
                                detector={"knayi"}
                            />
                        </span>
                    </p>

                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse dropdownclick " id="collapsibleNavbar">
                    <ul className=" nav navbar-nav ml-auto ">
                        <li className="nav-item " data-toggle="collapse" data-target=".navbar-collapse.show">
                            <Link className="nav-link " to="/home">Home</Link>
                        </li>
                        <li className="nav-item " data-toggle="collapse" data-target=".navbar-collapse.show">
                            <Link className="nav-link " to="/discount/3">New Arrival</Link>
                        </li>
                        <li className="nav-item " data-toggle="collapse" data-target=".navbar-collapse.show">
                            <Link className="nav-link " to="/discount/2">Popular </Link>
                        </li>
                        <li className="nav-item dropdown " >
                            <Link to="#" className="nav-link ">Jwellery <i className="fa fa-caret-down"></i> </Link>
                            <li className="dropdown-content small text-center" data-toggle="collapse" data-target=".navbar-collapse.show">
                                {
                                    this.state.categoryList.map((category, k) => (
                                        <Link key={k} to={"/product/" + category.cat_id}>{category.cat_name}</Link>)
                                    )
                                }
                                <div className="dropdown-divider"></div>
                                <Link to="/discount/1">Discount Items</Link>
                            </li>
                        </li>

                        <li className="nav-item dropdown " >
                            <Link to="#" className="nav-link ">Info <i className="fa fa-caret-down"></i> </Link>
                            <li className="dropdown-content small text-center" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <Link to="/service"> Convertor</Link>
                                <div className="dropdown-divider"></div>
                                <Link to="/loan">Loan Calculator</Link>
                            </li>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <Link className="nav-link" to="/contactus">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>


        )
    }
}