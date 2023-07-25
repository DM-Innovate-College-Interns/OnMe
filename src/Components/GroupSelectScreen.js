/*
    Components related to the screen where users
    can select groups and friends
*/

import React, {useState} from "react"
import {Tabs, Tab, Avatar, Box, Button, AvatarGroup} from "@mui/material";
import styled from "@emotion/styled";

import "../Stylesheets/General.css";
import "../Stylesheets/GroupSelectScreen.css"

const StyledTab = styled(Tab)(({theme}) => ({
    textTransform: "none",
    fontWeight: 700,
    fontSize: 32,
    padding: 5,
    marginLeft: 20,
    marginRight: 20,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3
}));


export default function GroupSelectScreen() {
    const [tabIndex, setTabIndex] = useState(0);

    return (
    <React.Fragment>
        <div class="centering-container">
            <Box sx ={{width: {xs: 1, sm: 600}, display: 'flex', justifyContent: "right"}}>
                <Avatar style={{marginTop: 20, marginBottom: 10, marginRight: 20}}/>
            </Box>
        </div>
        <Tabs value={tabIndex} 
              onChange={(event, val) => setTabIndex(val)} 
              centered
              TabIndicatorProps={{ 
                sx: {
                    backgroundColor: "black",
                    height: 1.2
                }
              }}>
            <StyledTab className=".make-ripple-black"
                        focusRipple={true}
                       label={<span style={{ color: 'black' }}>
                                Groups
                              </span>}
                        />
            <StyledTab 
                       label={<span style={{ color: 'black' }}>
                                Friends
                              </span>} />
        </Tabs>
        {tabIndex === 0 && <GroupsList />}
        {tabIndex === 1 && <FriendsList />}
    </React.Fragment>);
}

/*
    Button for a group, displaying its title, 
    some members of it, and the user's net debt in it.

    avatarList is a list of objects with fields:
    * memberName
    * src
*/
function GroupButton({color, groupTitle, avatarList, owedAmount, userOwesOthers}) {
    let avatarIconList = []
    for (const avatarInfo of avatarList) {
        const {memberName, src} = avatarInfo
        avatarIconList.push(<Avatar alt={memberName}
                                    key={memberName} 
                                    src={src}/>)
    }

    const moneyTextColor = (userOwesOthers)? "#D34C4C" : "#87D34C"
    const moneyStatusText = (userOwesOthers)? "Owe" : "Need"
    const moneyDisplayHTML = <React.Fragment>
                                <div style={{alignSelf:"center"}}>
                                    <p style={{margin: 10, marginRight: 2, color: moneyTextColor, 
                                                fontSize: 8, lineHeight: 1.4}}>
                                        You<br/>{moneyStatusText}
                                    </p>
                                </div>
                                <p style={{margin: 10, color: moneyTextColor, 
                                            fontSize: 20, lineHeight: 1.4, 
                                            alignSelf: "center"}}>
                                    {owedAmount}
                                </p>
                            </React.Fragment>;
    const allGoodDisplay = <p style={{margin: 10, color: "#5F5F5F", 
                                      fontSize: 16, lineHeight: 0.5, 
                                      alignSelf: "center", justifySelf: "center"}}>
                                None
                           </p>;


    return (
        <React.Fragment>
            <Button style={{width: "auto", height: "auto", backgroundColor: color, 
                            borderRadius: 15, color: "white", textTransform: "none",
                            margin: 10}}>
                <Box className="group-button-flex-wrapper">
                    <Box sx={{width: .5, height: .5, display: "flex", 
                              flexDirection: "column", justifyContent: "space-between",
                              marginLeft: .4}}
                         id="avatar-and-name-wrapper">
                        <h3 style={{marginTop: 3, marginBottom: 5, marginLeft: 5, textAlign: "left"}}>{groupTitle}</h3>
                        <AvatarGroup max={4}
                                     spacing={8}
                                     sx={{justifyContent: "left", 
                                          '& .MuiAvatar-root': { 
                                                width: 26, 
                                                height: 26,
                                                borderColor: color,
                                                borderWidth: 2,
                                                fontSize: 12
                                            },
                                            marginLeft: 0,
                                            marginBottom: 1
                                        }}>
                            {avatarIconList}
                        </AvatarGroup>
                    </Box>
                    <div style={{backgroundColor: "white", width: 114, height: 45, 
                                 borderRadius: 10, alignSelf: "center", marginLeft: 20, 
                                 marginRight: 7, display: "flex", justifyContent: "center"}}
                         id="money-display-wrapper">
                        {owedAmount !== undefined && moneyDisplayHTML}
                        {owedAmount === undefined && allGoodDisplay}
                    </div>
                </Box>
            </Button>
        </React.Fragment>
    );
}

function GroupAddButton() {
    return (
        <React.Fragment>
            <Button style={{width: 230, height: 80, backgroundColor: "white", 
                            borderRadius: 15, textTransform: "none",
                            margin: 10, borderColor: "gray",
                            color: "gray", fontSize: 40, fontWeight: 300}}
                    variant="outlined">
                +
            </Button>
        </React.Fragment>
    );
}

function GroupsList() {
    const avatars = [{memberName: "Example Man", src: "https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg"},
                     {memberName: "John", src:"/"},
                     {memberName: "Hames", src: "/"},
                     {memberName: "Lohnson", src: "/"},
                     {memberName: "Ariya", src: "/"}]
    return (
        <div className="centering-container">
            <div class="groups-list-container">
                <GroupAddButton />
                <GroupButton color={"#0e3f10"} 
                        groupTitle={"The Apartment"}
                        key={"The Apartment"}
                        avatarList={avatars}
                        owedAmount={"$50.00"}
                        userOwesOthers={true}/>
                <GroupButton color={"#2f0e3f"} 
                        groupTitle={"Club Expenses"}
                        key={"Club Expenses"}
                        avatarList={avatars}
                        owedAmount={"$23.65"}
                        userOwesOthers={false}/>
                <GroupButton color={"#14194A"} 
                        groupTitle={"Hangout Group"}
                        key={"Hangout Group"}
                        avatarList={avatars}/>
            </div>
        </div>
    );
}

function FriendsList() {
    
}