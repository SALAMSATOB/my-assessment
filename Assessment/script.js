document.getElementById('userForm').onsubmit=function(event)
{
    event.preventDefault();
    const firstname=document.getElementById('firstname').value;
    const lastname=document.getElementById('lastname').value;
    const sex=document.getElementById('sex').value;
    const address=document.getElementById('address').value;
    const mobile=document.getElementById('mobile').value;
    const email=document.getElementById('email').value;
    const lg=document.getElementById('lg').value;
    const city=document.getElementById('city').value;
    const state=document.getElementById('state').value;
    const country=document.getElementById('country').value;

const table=document.getElementById('userInfoTable');
const newRow=table.insertRow();
newRow.insertCell(0).innerText=firstname;
newRow.insertCell(1).innerText=lastname;
newRow.insertCell(2).innerText=sex;
newRow.insertCell(3).innerText=address;
newRow.insertCell(4).innerText=mobile;
newRow.insertCell(5).innerText=email;
newRow.insertCell(6).innerText=lg;
newRow.insertCell(7).innerText=city;
newRow.insertCell(8).innerText=state;
newRow.insertCell(9).innerText=country;

table.style.display="block";
table.style.border="5";
document.getElementById('userForm').reset();
};
























9