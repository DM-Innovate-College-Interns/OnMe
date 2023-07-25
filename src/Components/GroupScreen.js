import React, {useState} from "react"

import "../Stylesheets/General.css";
import "../Stylesheets/GroupScreen.css"

import { Avatar, AvatarGroup, List, ListItemButton } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function GroupScreen({color}) {
    const [tabIndex, setTabIndex] = useState(0);

    return (
    <React.Fragment>
        <div className = "entire-group-screen-flex-box">
            <Header tabIndex={tabIndex} setTabIndex={setTabIndex} color={color} />
            <div className="group-screen-main-content-div">
                {tabIndex === 0 && <GroupActivity color={color} />}
                {tabIndex === 1 && <IndividualDebts color={color} />}
            </div>
        </div>
    </React.Fragment>
    );
}

function Header({tabIndex, setTabIndex, color}) {
    return <p>Just Place Holder Text</p>
}

function IndividualDebts({color}) {
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

function GroupActivity({color}) {
    return (
    <div className="centering-container">
        <GroupMonthActivity color={color} monthAndYear={"Jul 2023"}/>
        <GroupMonthActivity color={color} monthAndYear={"Jun 2023"}/>
        <GroupMonthActivity color={color} monthAndYear={"May 2023"}/>
        <GroupMonthActivity color={color} monthAndYear={"April 2023"}/>
        <GroupMonthActivity color={color} monthAndYear={"March 2023"}/>
    </div>
    );
}

function GroupMonthActivity({color, monthAndYear}) {
    const lenders = [<Avatar />, <Avatar />, <Avatar />, <Avatar />, <Avatar />]
    const creditor = <Avatar alt={"John"}
                             key={"John"} 
                             src={"/"}
                             sx={{marginLeft: "16px", width: 26, height: 26, fontSize: 12}}/>

    return ( 
    <React.Fragment>
    <div className="month-activity-wrapper">
        <div style={{
                     backgroundColor: color,
                     padding: 2,
                     paddingLeft: 20,
                     paddingRight: 20,
                     borderRadius: 9,
                     color: 'white',
                     fontWeight: '500',
                     fontSize: 15,
                     alignSelf: "center"}}>
            {monthAndYear}
        </div>

        <List>
            <GroupActivityItem date={"May 5"} title={"Groceries"} creditor={creditor} lenders={lenders} owedAmount={"$500"} userOwesOthers={true} />
            <GroupActivityItem date={"May 15"} title={"Groceries"} creditor={creditor} lenders={lenders} owedAmount={"$20.00"} userOwesOthers={true} />
            <GroupActivityItem date={"May 18"} title={"Groceries"} creditor={creditor} lenders={lenders} owedAmount={"$45.00"} userOwesOthers={false}/>
            <GroupActivityItem date={"May 20"} title={"Groceries"} creditor={creditor} lenders={lenders} />
        </List>
    </div>
    </React.Fragment>
    );
}

function GroupActivityItem({date, title, creditor, lenders, owedAmount, userOwesOthers}) {
    const moneyTextColor = (userOwesOthers)? "#D34C4C" : "#87D34C"
    const moneyStatusText = (userOwesOthers)? "Owe" : "Need"
    const moneyDisplayHTML = <React.Fragment>
                                 <div>
                                     <p style={{margin: 0, marginLeft: 16, marginRight: 2, color: moneyTextColor, 
                                                fontSize: 8, lineHeight: 1.4, fontWeight: 500}}>
                                         You<br/>{moneyStatusText}
                                     </p>
                                 </div>
                                 <p style={{margin: 0, marginLeft: 10, color: moneyTextColor, 
                                            fontSize: 20, lineHeight: 1.4, fontWeight: 500}}>
                                    {owedAmount}
                                 </p>
                             </React.Fragment>;

    return ( 
    <ListItemButton divider={true} 
                    sx={{
                        paddingBottom: 1.01,
                        paddingTop: 1.01,
                        flexWrap: "wrap",
                        justifyContent: "end"
                    }}>
        <div className="group-activity-item-name-date">
            <p style={{fontSize: "12px", color: "#5F5F5F"}}>{date}</p>
            <p style={{fontSize: "14px"}}>{title}</p>
        </div>

        <div id="space" style={{flexGrow: 1}}></div>

        <div className="group-activity-item-people">
            <AvatarGroup sx={{justifyContent: "left", 
                              paddingLeft: "16px",
                              '& .MuiAvatar-root': { 
                                width: 26, 
                                height: 26,
                                borderWidth: 0,
                                fontSize: 12}}}>
                {creditor}
            </AvatarGroup>
            <ArrowForwardIcon />
            <AvatarGroup max={4}
                        spacing={10}
                        sx={{justifyContent: "left", 
                            '& .MuiAvatar-root': { 
                                width: 26, 
                                height: 26,
                                borderWidth: 2,
                                fontSize: 12}}}>
                {lenders}
            </AvatarGroup>
        </div>

        <div className="group-activity-item-debt"> 
            {owedAmount !== undefined && moneyDisplayHTML}
        </div>

    </ListItemButton>
    );
}