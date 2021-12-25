import React from "react";
import ReactDom from "react-dom";
import "./index.css";
const currTime=new Date().getHours();
const currTime2=new Date().toLocaleTimeString();
const currDate=new Date().toLocaleDateString();
let greeting='';
const css={};
if(currTime>=1&&currTime<12)
{
  greeting="Good Morning";
  css.color='green';
}
else if(currTime>=12&&currTime<=17){
  greeting="Good Afternoon";
  css.color='Orange';
}
else
{
  greeting="Good Night";
  css.color='Black';

}
ReactDom.render(
  <>
    <h1>Hola ! <span style={css}> {greeting} </span>
    <br></br>
   
    <center>  <span style={css}>{currTime2}</span></center>

    
    <center><span style={css}>{currDate}</span></center></h1>
    </>

  
  
  ,document.getElementById('root')
);

