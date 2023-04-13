function createEle(tagname,attrname,attrvalue,content){
    let ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
    }

function createInput(tagname,attrname,attrvalue,attrname1,attrvalue1,content){
    let ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    return ele;
    }    

function createlinebreak(tagname) {
    let ele=document.createElement(tagname);
    return ele;    
    }


var fname=createEle("lable","for","fname","First Name:");
var br=createlinebreak("br");
var input=createInput("input","type","text","id","fname")
var br1=createlinebreak("br");

var mname=createEle("lable","for","mname","Middle Name:");
var br2=createlinebreak("br");
var input1=createInput("input","type","text","id","mname")
var br3=createlinebreak("br");

var lname=createEle("lable","for","lname","last Name:");
var br4=createlinebreak("br");
var input2=createInput("input","type","text","id","lname")
var br5=createlinebreak("br");

var emailid=createEle("lable","for","mail","E-mail ID:")
var br6=createlinebreak("br");
var input3=createInput("input","type","email","id","mail")
var br7=createlinebreak("br");

var state=createEle("lable","for","state","State:")
var br8=createlinebreak("br");
var input4=createInput("input","type","text","id","state")
var br9=createlinebreak("br");


document.body.append(fname,br,input,br1,mname,br2,input1,br3,lname,br4,input2,br5,emailid,br6,input3,br7,state,br8,input4)
