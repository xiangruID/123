// html 
var wrapHtml = `<div class='wrap'>
					<div class='innerWrap'></div>
				</div>
				<button id='btn'>点我</button>`;

document.write(wrapHtml)
var wrapDom = document.querySelector('.wrap');
var innerWrapDom = document.querySelector('.innerWrap');
var btnDom = document.getElementById('btn');

// css
document.documentElement.style.cssText=`font-size:100px;`

wrapDom.style.cssText = `position:fixed;
							bottom:0.2rem;
							width:95%;
							height:3.5rem;
							border:0.01rem solid #eee;
							z-index:99;
							right:0.1rem;
							font-size:0.16rem;
		  					display:none`;
		  					
innerWrapDom.style.cssText=`position:relative;
							height:100%;
							width:100%;
							overflow-y:scroll;
							word-wrap: break-word`;
							
btnDom.style.cssText = `width:0.6rem;
							height:0.4rem;
							line-height:0.2rem;
							opacity:0.8;
							position:fixed;
							z-index:100;
							bottom:0.2rem;
							border:0;
							right:0.1rem;
							font-size:0.14rem;
							border-radius:0.05rem;
							outline:none;
							color:black`;

// btn 
btnDom.onclick = function() {
    var wrapDisplay = wrapDom.style.display;
    if (wrapDisplay == 'none') {
        wrapDom.style.display = 'block'
    } else if (wrapDisplay == 'block') {
        wrapDom.style.display = 'none'
    }
}


// mConsole()
function mConsole(print) {
	var p=document.createElement(`p`)
	p.innerHTML=print;

	innerWrapDom.appendChild(p)
	p.style.cssText=`border-bottom:1px solid #eee;
					padding:3px 0px;`
}


