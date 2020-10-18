var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.querySelector("Body");


color1.addEventListener("input",function()
{
	body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
})
color2.addEventListener("input",function()
{
body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";	
})

for(let i=0;i<li.length;i++)
{
	const text=li[i];
	text.addEventListener("click",()=>{
		text.style.textDecoration="line-through";
	})
}