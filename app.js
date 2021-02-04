let buttonElement=document.getElementById('color-button')
buttonElement.addEventListener('click',changeColor);

function changeColor()
{
     let hexArray= ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
     let hexString="";
     for(let i=0;i<6;i++)
     {
        let rand=hexArray[Math.floor(Math.random()*16)];
        hexString +=rand;
     }

     let changeTo= "#"+hexString;
     let bodyElement = document.getElementsByTagName('body')[0];
     bodyElement.style.backgroundColor=hexString; 

     let hds=document.getElementById('string-span');
     hds.innerText="#"+hexString;
    
}