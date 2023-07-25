import React, {useState} from "react"

import "../Stylesheets/General.css";
import "../Stylesheets/GroupScreen.css"

export default function GroupScreen() {
    const [tabIndex, setTabIndex] = useState(0);

    return (
    <React.Fragment>
        <div className = "entire-group-screen-flex-box">
            <Header tabIndex={tabIndex} setTabIndex={setTabIndex} />
            <div className="group-screen-main-content-div">
                {tabIndex === 0 && <GroupActivity />}
                {tabIndex === 1 && <IndividualDebts />}
            </div>
        </div>
    </React.Fragment>
    );
}

function Header({tabIndex, setTabIndex}) {
    return <p>Just Place Holder Text</p>
}

function IndividualDebts() {
    return (
    <React.Fragment>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
    </React.Fragment>
    );
}

function GroupActivity() {
    return (
    <React.Fragment>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
        <p>item</p>
    </React.Fragment>
    );
}