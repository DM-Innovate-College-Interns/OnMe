import React, { useState } from 'react';

import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip'; 




export default function LoginScreen() {
    const content = <div><p><center>Have you ever gone to a concert and don't feel like paying back debts right away?
        Or maybe, you may not have the funds to pay back at the moment. Fret not, for OnMe is here to save the day.
        Simply log in and let us take care of the tracking!</center> </p></div>;

   
    function Root() {
      return <div>{content}</div>;
    }
  
  
  return (
    <React.Fragment>
      <div className="centering-container">
        <div className="not-logged-in-info-container"> 
          <div id="onme-title">
            <h1>OnMe</h1>
            <h2>Headache-Free Payment Splitting</h2>
          </div>
          <ul id="features-list">
            <li>Make groups</li>
            <li>Track group expenses</li>
            <li>Figure out who owes what and why</li>
          </ul>
          <div id="not-logged-in-info-padding"></div>
        </div>

        <div className="button1"> 
            <Button variant="contained" color="success">
             Log In 
            </Button>
        </div>

        <div className="blurb">
            <div className = "one">
                {content}
                
            </div>
        </div>

       


      </div>
    </React.Fragment>
  );
}
