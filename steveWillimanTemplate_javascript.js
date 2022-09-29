
// #####################################  my header section : type writer #####################################
	/* first <span> of <h2> of header section */
var headerH2Span1Var = document.getElementById("headerH2Span1Id") ,
	/* second <span> of <h2> of header section */
	headerH2Span2Var = document.getElementById("headerH2Span2Id") ,
	/* second <p> of <h2> of header section */
	headerPara2Var = document.getElementById("headerPara2Id"),
	headerH2Span1String="i'm" ,
	headerH2Span2String ="steve williams." ,
	headerPara2String = "a freelance web designer" ;
	// " I'm " counter
var count1Var=0 ,
	// " Steve Williams. " counter
	count2Var=0 ,
	// " A FREELANCE WEB DESIGNER " counter
	count3Var=0 ;
/* ------------------- when page load , header information will be written using "type writer" ------------------- */
window.onload =function()
{

	var headerH2Span1VarInterval =  setInterval( h1Span1Func, 150)  ,
		headerH2Span2VarInterval =  setInterval( h1Span2Func, 250)  ,
		headerH2ParaVarInterval  =  setInterval( h1Para2Func, 300) ;		

}		
/* first <span> of <h2> of header section */
function h1Span1Func()
{
	if( count1Var < headerH2Span1String.length )
	{
		headerH2Span1Var.innerHTML += headerH2Span1String[count1Var];
		count1Var++ ;
	}
}
/* second <span> of <h2> of header section */
function h1Span2Func()
{
/* first string عدد حروفة بيساوي عدد حروف ال span 1 فالو محتوي ال "I'm" الا بعد ما يكتب الكلمة الاولي "Steve Williams." مش هيبدا يكتب الكلمة الثانية 
	"Steve Williams." فهيبدا يكتب الكلمة الثانية
*/
	if( headerH2Span1Var.textContent.length >= headerH2Span1String.length )
	{
		if( count2Var < headerH2Span2String.length )
		{
			headerH2Span2Var.innerHTML += headerH2Span2String[count2Var];
			count2Var++ ;
		}
	}
}
/* first <p> of <h2> of header section */
function h1Para2Func()
{
	/* "Steve Williams." الا بعد ما يكتب الكلمة الثانية "A FREELANCE WEB DESIGNER" مش هيبدا يكتب الكلمة الثالثة  */
	/* first string عدد حروفة بيساوي عدد حروف ال span 1 فالو محتوي ال "I'm" الا بعد ما يكتب الكلمة الاولي "A FREELANCE WEB DESIGNER." مش هيبدا يكتب الكلمة الثالثة 
		"Steve Williams." فهيبدا يكتب الكلمة الثانية
	*/
	if( headerH2Span2Var.textContent.length >= headerH2Span2String.length )
	{
		if( count3Var < headerPara2String.length )
		{
			headerPara2Var.innerHTML += headerPara2String[count3Var];
			count3Var++ ;
		}
	}
}
// ##############################################################################################################
	window.onscroll = function()
	{
		console.log( scrollY );
		/* ****************************************** button up section ****************************************** */
		var buttonUpEl = document.getElementById("buttonUpId");
		/*  لو ارتفاع البكرة عن القمة اكبر من او يساوي 1000 بيكسل هيتم اظهار الزرار   */
		if( scrollY >=1000 )
			{
				buttonUpEl.style.display="block";
			}
		/*  لو ارتفاع البكرة عن القمة اقل من 1000 بيكسل هيتم اخفاء الزرار  */
		else
			{
				buttonUpEl.style.display="none";
			}
		/*    scrollY = 0 و scrollX = 0 لما اضغط علي الزرار هيتم الانتثال الي قمة الصفحة حيث ال */
		buttonUpEl.onclick = function()
		{
			window.scrollTo(0,0) ;
		}
		// ############################### Our Achievements section : number scroller #############################
		// هتشتغل Our Achievements section لو البكرة اتحركت راسيا لمسافة اكبر من او تساوي 300 بيكسل فالارقام اللي موجودة في ال
		// هذه الدالة هتنادي علي ثلاث دوال كل دالة منهم مسئولة عن زيادة رقم معين من الثلاث ارقم وبيتم النداء علي الدالة الاول كل 50 ملي ثانية والدالة الثانية بعد 100 ملي ثانية وهكذا
		// when reach the "Our Achievements section" , progressbars will appear 
		// --------------------- will implement this code when scrollY >= 600px -------------------------------------
		if( scrollY >= 1480)
		{		
			// we reach the "Our Achievements section" , it will call "callNumScroller" function to increase numbers
				// 50 milli-second كل  increase1Func هيتم النداء علي الدالة
			var a = setInterval( increase1Func , 50 )  ,
				// 100 milli-second كل  increase2Func هيتم النداء علي الدالة
				b = setInterval( increase2Func , 100 ) ,
				// 150 milli-second كل  increase3Func هيتم النداء علي الدالة
				c = setInterval( increase3Func , 150 ) ;
		}
		// #####################################  about us section : progressbar #####################################
		//  هتظهر about us section لو البكرة اتحركت راسيا لمسافة اكبر من او تساوي 1180 بيكسل فالمعلومات الشخصية اللي موجودة في ال
		// when reach the "about us section" , personal information will be written using "type writer" 
		// --------------------- will implement this code when scrollY >= 1180 -------------------------------------
		if( scrollY >= 740)
		{
			var aboutNameInterval 		= setInterval(aboutNameFunc 	, 600) 		,
				aboutBirthDayInterval 	= setInterval(aboutBirthDayFunc , 600) 		,
				aboutAddressInterval	= setInterval(aboutAddressFunc 	, 600) 		,
				aboutEmailInterval		= setInterval(aboutEmailFunc 	, 600) 		,
				aboutZipCodeInterval	= setInterval(aboutZipCodeFunc 	, 600)		,
				aboutPhoneInterval 		= setInterval(aboutPhoneFunc 	, 600)		,
				// هيزود 1 علي عدد المشاريع كل 50 ميللي ثعنية
				aboutProjectsNumInterval = setInterval(aboutProjectsNumFunc , 50)	;
		}
		// #####################################  my skills section : progressbar #####################################
		// هتشتغل my sckills section لو البكرة اتحركت راسيا لمسافة اكبر من او تساوي 1820 بيكسل فالنسب المئوية اللي موجودة في ال
		// when reach the "my skills section" , progressbars will appear 
		if( scrollY >= 1880)
		{
				// 10 milli-second كل  progressbar1Func هيتم النداء علي الدالة
			var progressbar1Var = setInterval(progressbar1Func , 60) ,
				// 20 milli-second كل  progressbar2Func هيتم النداء علي الدالة
				progressbar2Var = setInterval(progressbar2Func , 50) ,
				// 30 milli-second كل  progressbar3Func هيتم النداء علي الدالة
				progressbar3Var = setInterval(progressbar3Func , 40) ,
				// 40 milli-second كل  progressbar4Func هيتم النداء علي الدالة
				progressbar4Var = setInterval(progressbar4Func , 45) ,
				// 50 milli-second كل  progressbar5Func هيتم النداء علي الدالة
				progressbar5Var = setInterval(progressbar5Func , 55) ,
				// 60 milli-second كل  progressbar6Func هيتم النداء علي الدالة
				progressbar6Var = setInterval(progressbar6Func , 70) ;
		}
		
	}	
// #####################################################################################################################

// ################################## Our Achievements section : number scroller #####################################
	var x1 = document.getElementById("counterPara1Id") ,
		x2 = document.getElementById("counterPara2Id") ,
		x3 = document.getElementById("counterPara3Id") ,
		para1Val = x1.innerHTML  ,
		para2Val = x2.innerHTML  ,
		para3Val = x3.innerHTML  ;
		// counter of first achievement from +100 to +1000
	var i=101 ,
		// counter of second achievement from +2000 to +3000
		j=2001 ,
		// counter of third achievement from +3000 to +4000
		k=3001 ;
	skills = document.getElementById("mySkillsId");
	console.log(window.scrollY);
	console.log("x1.clientWidth = " , skills.clientWidth );
	// هذه الدالة كل 50 ملي ثانية بتزود 1 علي الرقم 100 حتي الوصول للقيمة 1000 فيتم التوقف عن النداء علي هذه الدالة
	function increase1Func()
	{
		if(  i <= 1000 )
		{
			x1.innerHTML = "+"+i ;
		}
		i++ ;
	}
	// هذه الدالة كل 100 ملي ثانية بتزود 1 علي الرقم 1000 حتي الوصول للقيمة 3000 فيتم التوقف عن النداء علي هذه الدالة
	function increase2Func()
	{
		if(  j <= 3000 )
		{
			x2.innerHTML = "+"+j ;
		}
		j++ ;
	}
	// هذه الدالة كل 150 ملي ثانية بتزود 1 علي الرقم 2000 حتي الوصول للقيمة 4000 فيتم التوقف عن النداء علي هذه الدالة
	function increase3Func()
	{
		if(  k <= 4000 )
		{
			x3.innerHTML = "+"+k ;
		}
		k++ ;
	}
// #####################################  my skills section : progressBar #####################################
		// ********** progressbar elements **********
	var progress1Bar = document.getElementById("span1Id") , 
		progress2Bar = document.getElementById("span2Id") ,
		progress3Bar = document.getElementById("span3Id") ,
		progress4Bar = document.getElementById("span4Id") ,
		progress5Bar = document.getElementById("span5Id") ,
		progress6Bar = document.getElementById("span6Id") ,
		 // progressbar percentage elements
		percentage1  = document.getElementById("progressBar1Perentage"),
		percentage2  = document.getElementById("progressBar2Perentage"),
		percentage3  = document.getElementById("progressBar3Perentage"),
		percentage4  = document.getElementById("progressBar4Perentage"),
		percentage5  = document.getElementById("progressBar5Perentage"),
		percentage6  = document.getElementById("progressBar6Perentage"),
		// progressbar counters 
		// progressbar 1 counter 
		a = 0 ,
		// progressbar 2 counter 
		b = 0 ,
		// progressbar 3 counter 
		c = 0 ,
		// progressbar 4 counter 
		d = 0 ,
		// progressbar 5 counter 
		e = 0 ,
		// progressbar 6 counter 
		f = 0 ;
// -------------------------------------  scroll هذا الكود موجود في الاعلي حيث هيتم تنفيذه عند عمل -------------------------------------
//  10 milli-second كل  progressbar1Func هيتم النداء علي الدالة
//var progressbar1Var = setInterval(progressbar1Func , 60) ,
//	// 20 milli-second كل  progressbar2Func هيتم النداء علي الدالة
//	progressbar2Var = setInterval(progressbar2Func , 50) ,
//	// 30 milli-second كل  progressbar3Func هيتم النداء علي الدالة
//	progressbar3Var = setInterval(progressbar3Func , 40) ,
//	// 40 milli-second كل  progressbar4Func هيتم النداء علي الدالة
//	progressbar4Var = setInterval(progressbar4Func , 45) ,
//	// 50 milli-second كل  progressbar5Func هيتم النداء علي الدالة
//	progressbar5Var = setInterval(progressbar5Func , 55) ,
//	// 60 milli-second كل  progressbar6Func هيتم النداء علي الدالة
//	progressbar6Var = setInterval(progressbar6Func , 20) ;

		/* --------------------------- progressbar 1 function ---------------------------- */
		function progressbar1Func()
		{
			if( a <= 90)
			{
	/* 10 milli-second كل progressbar1 بتاع ال width هيزود 1 في المائة علي ال progressbar1Func في كل مرة هيتم فيها النداء علي الدالة */
				progress1Bar.style.width= a+"%";
				/*  في كل مرة هزود علي قيمة النسبة المئوية قيمة 1 في المائة  */
				percentage1.innerHTML = a + "%";
				/* progressbar هخلي النسبة المئوية تزداد و تتحرك مع ال */
				percentage1.style.marginLeft = a + "%" ;	
				a++ ;				
			}
		}
		/* --------------------------- progressbar 2 function ---------------------------- */
		function progressbar2Func()
		{
			if( b <= 75 )
			{
	/* 20 milli-second كل progressbar2 بتاع ال width هيزود 1 في المائة علي ال progressbar2Func في كل مرة هيتم فيها النداء علي الدالة */
				progress2Bar.style.width= b+"%";
				/*  في كل مرة هزود علي قيمة النسبة المئوية قيمة 1 في المائة  */
				percentage2.innerHTML = b + "%";
				/* progressbar هخلي قيمة النسبة المئوية تزداد و تتحرك مع ال */
				percentage2.style.marginLeft = b + "%" ;
				b++ ;	
			}
		}
		/* --------------------------- progressbar 3 function ---------------------------- */
		function progressbar3Func()
		{
			if( c <= 85 )
			{
	/* 30 milli-second كل progressbar3 بتاع ال width هيزود 1 في المائة علي ال progressbar3Func في كل مرة هيتم فيها النداء علي الدالة */
				progress3Bar.style.width= c+"%";
				/*  في كل مرة هزود علي قيمة النسبة المئوية قيمة 1 في المائة  */
				percentage3.innerHTML = c + "%";
				/* progressbar هخلي النسبة المئوية تزداد و تتحرك مع ال */
				percentage3.style.marginLeft = c + "%" ;	
				c++ ;
			}
		}
		/* --------------------------- progressbar 4 function ---------------------------- */
		function progressbar4Func()
		{
			if( d <= 80 )
			{
	/* 40 milli-second كل progressbar4 بتاع ال width هيزود 1 في المائة علي ال progressbar4Func في كل مرة هيتم فيها النداء علي الدالة */
				progress4Bar.style.width= d+"%";
				/*  في كل مرة هزود علي قيمة النسبة المئوية قيمة 1 في المائة  */
				percentage4.innerHTML = d + "%";
				/* progressbar هخلي قيمة النسبة المئوية تزداد و تتحرك مع ال */
				percentage4.style.marginLeft = d + "%" ;
				d++ ;	
			}
		}
		/* --------------------------- progressbar 5 function ---------------------------- */
		function progressbar5Func()
		{
			if( e <= 60 )
			{

	/* 50 milli-second كل progressbar5 بتاع ال width هيزود 1 في المائة علي ال progressbar5Func في كل مرة هيتم فيها النداء علي الدالة */
				progress5Bar.style.width= e+"%";
				/*  في كل مرة هزود علي قيمة النسبة المئوية قيمة 1 في المائة  */
				percentage5.innerHTML = e + "%";
				/* progressbar هخلي قيمة النسبة المئوية تزداد و تتحرك مع ال */
				percentage5.style.marginLeft = e + "%" ;
				e++ ;
			}
		}
		/* --------------------------- progressbar 6 function ---------------------------- */
		function progressbar6Func()
		{
			if( f <= 68 )
			{
	/* 60 milli-second كل progressbar6 بتاع ال width هيزود 1 في المائة علي ال progressbar6Func في كل مرة هيتم فيها النداء علي الدالة */
				progress6Bar.style.width= f+"%";
				/*  في كل مرة هزود علي قيمة النسبة المئوية قيمة 1 في المائة  */
				percentage6.innerHTML = f + "%";
				/* progressbar هخلي قيمة النسبة المئوية تزداد و تتحرك مع ال */
				percentage6.style.marginLeft = f + "%" ;
				f++ ;
			}
		}

// ************************************************** about us section ************************************************** 

var aboutNameEl 	   = document.getElementById("nameSpanId"),
	aboutBirthdayEl 	   = document.getElementById("birthdaySpanId"),
	aboutEmailEl 	   = document.getElementById("emailSpanId") ,
	aboutAddressEl 	   = document.getElementById("addressSpanId") ,
	aboutZipCodeEl    = document.getElementById("zipCodeSpanId") ,
	aboutPhoneEl 	   = document.getElementById("phoneSpanId") ,
	aboutProjectsNumEl = document.getElementById("prohectNumId") ;
	
var aboutNameString ="steve williams",
	aboutBirthdayString ="january 01,1980",
	aboutEmailString ="stevewill@gmail.com",
	aboutAddressString ="new work CA 829 USA",
	aboutZipCodeString ="758844", 
	aboutPhoneString ="+4854 384 0000", 
	aboutProjectsNumVar = 0 ;
	
var aboutNameCounter 	 = 0 ,
	aboutBirthDayCounter = 0 ,
	aboutEmailCounter	 = 0 ,
	aboutAddressCounter	 = 0 ,
	aboutZipCodeCounter  = 0 ,
	aboutPhoneCounter 	 = 0 ;
// -------------------------------------  scroll هذا الكود موجود في الاعلي حيث هيتم تنفيذه عند عمل -------------------------------------
// 600 milli-second  في نفس الوقت حيث كل حرف هيتم كتبته كل personal information[name,birthday,address,email,zipCode,phone number] هيتم كتابة كل ال
//var aboutNameInterval 		= setInterval(aboutNameFunc 	, 600) 		,
//	aboutBirthDayInterval 	= setInterval(aboutBirthDayFunc , 600) 		,
//	aboutAddressInterval	= setInterval(aboutAddressFunc 	, 600) 		,
//	aboutEmailInterval		= setInterval(aboutEmailFunc 	, 600) 		,
//	aboutZipCodeInterval	= setInterval(aboutZipCodeFunc 	, 600)		,
//	aboutPhoneInterval 		= setInterval(aboutPhoneFunc 	, 600)		,
//	// هيزود 1 علي عدد المشاريع كل 50 ميللي ثعنية
//	aboutProjectsNumInterval = setInterval(aboutProjectsNumFunc , 50)	;
	
function aboutNameFunc()
{
	if( aboutNameCounter < aboutNameString.length )
	{
		aboutNameEl.innerHTML += aboutNameString[aboutNameCounter] ;
		aboutNameCounter++;
	}
}
function aboutBirthDayFunc()
{

	if( aboutBirthDayCounter < aboutBirthdayString.length )
	{
		aboutBirthdayEl.innerHTML += aboutBirthdayString[aboutBirthDayCounter] ;
		aboutBirthDayCounter++;
	}	
}
function aboutEmailFunc()
{
	if( aboutEmailCounter < aboutEmailString.length )
	{
		aboutEmailEl.innerHTML += aboutEmailString[aboutEmailCounter] ;
		aboutEmailCounter++;
	}
}
function aboutAddressFunc()
{
	if( aboutAddressCounter < aboutAddressString.length )
	{
		aboutAddressEl.innerHTML += aboutAddressString[aboutAddressCounter] ;
		aboutAddressCounter++;
	}
}
function aboutZipCodeFunc()
{
	if( aboutZipCodeCounter < aboutZipCodeString.length )
		{
			aboutZipCodeEl.innerHTML += aboutZipCodeString[aboutZipCodeCounter] ;
			aboutZipCodeCounter++;
		}
}
function aboutPhoneFunc()
{
	if( aboutPhoneCounter < aboutPhoneString.length )
		{
			aboutPhoneEl.innerHTML += aboutPhoneString[aboutPhoneCounter] ;
			aboutPhoneCounter++;
		}
}
function aboutProjectsNumFunc()
{
	if( aboutProjectsNumVar <= 120 )
		{
			aboutProjectsNumEl.innerHTML = aboutProjectsNumVar ;
			aboutProjectsNumVar++;
		}
}
/* ******************************************** contact us section ************************************************** */
var userNameContactForm = document.getElementById("usernameId")  ,
	emailcontactForm 	= document.getElementById("emailId")	 ,
	subjectContactForm 	= document.getElementById("subjectId") 	 ,
	textAreaContactForm = document.getElementById("textAreaId")	 ;
/* ############################################# username inputField ############################################ */
/*  placeholder  يرجع يحط ال inputField ولما اشيل الفارة من علي اي  placeholder يحذف ال inputField عايز لما احط الارة علي اي  */
// ------------------- when focus on "username inputField" , placeholder will be removed ------------------------------
userNameContactForm.onfocus = function()
{
	userNameContactForm.setAttribute("placeholder","");
}
// ------------------ when blur from "username inputField" , return the placeholder again ------------------------------
userNameContactForm.onblur = function()
{
	userNameContactForm.setAttribute("placeholder","Your Name");
}
/* ############################################# email inputField ############################################ */
/*  placeholder  يرجع يحط ال inputField ولما اشيل الفارة من علي اي  placeholder يحذف ال inputField عايز لما احط الارة علي اي  */
// ------------------- when focus on "email inputField"  , placeholder will be removed ------------------------------
emailcontactForm.onfocus = function()
{
	emailcontactForm.setAttribute("placeholder","");
}
// ------------------ when blur from "email inputField" , return the placeholder again ------------------------------
emailcontactForm.onblur = function()
{
	emailcontactForm.setAttribute("placeholder","Your Email");
}
/* ############################################# subject inputField ############################################ */
/*  placeholder  يرجع يحط ال inputField ولما اشيل الفارة من علي اي  placeholder يحذف ال inputField عايز لما احط الارة علي اي  */
// ------------------- when focus on "subject inputField"  , placeholder will be removed ------------------------------
subjectContactForm.onfocus = function()
{
	subjectContactForm.setAttribute("placeholder","");
}
// ------------------ when blur from "subject inputField" , return the placeholder again ------------------------------
subjectContactForm.onblur = function()
{
	subjectContactForm.setAttribute("placeholder","Your Subject");
}
/* ################################### textAreaContactForm inputField ######################################## */
/*  placeholder  يرجع يحط ال inputField ولما اشيل الفارة من علي اي  placeholder يحذف ال inputField عايز لما احط الارة علي اي  */
// ------------------- when focus on "textArea inputField"  , placeholder will be removed ------------------------------
textAreaContactForm.onfocus = function()
{
	textAreaContactForm.setAttribute("placeholder","");
}
// ------------------ when blur from "textArea inputField" , return the placeholder again ------------------------------
textAreaContactForm.onblur = function()
{
	textAreaContactForm.setAttribute("placeholder","Enter Message");
}
