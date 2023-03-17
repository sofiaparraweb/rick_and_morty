import React from "react";
import { Link } from "react-router-dom"
;import SearchBar from "../SEARCHBAR/SearchBar";

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SearchBar onSearch={this.props.onSearch} />
<link to="/about">
    <h3>ABOUT</h3>
    </link>
    <link to="/home">
    <h3>HOME</h3>
    </link>
            </div>
        );
    }
}

export default Nav;