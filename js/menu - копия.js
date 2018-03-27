 
 var obenMenu = document.getElementById("nav_2"); //nav_2 == ground-menu 
 var ss = document.getElementById("aLink");
 
 function myFunction() {
   
   if (obenMenu.className === "ground-menu") {
       obenMenu.className += " responsive";
   } else {
       obenMenu.className = "ground-menu";
   }
   
   if (ss.className === "header-menu_link") {
       ss.className += " responsive";
   } else {
       ss.className = "header-menu_link";
   }
 };
 
 /*Открываем второй уровень меню*/
 
	var subLi = document.getElementsByClassName('sub-li');
	var subLiA = subLi.getElementsByTagName('a')[0];
	
	var subSubLi = document.getElementsByClassName('sub-sub-li');
 
		var subLi_1 = obenMenu.querySelector('.sub-li:nth-child(1)');
		var subLi_2 = obenMenu.querySelector('.sub-li:nth-child(2)');
		var subLi_3 = obenMenu.querySelector('.sub-li:nth-child(3)');
		var subLi_4 = obenMenu.querySelector('.sub-li:nth-child(4)');
		var subLi_5 = obenMenu.querySelector('.sub-li:nth-child(5)');
 
		var subLiA_1 = obenMenu.querySelector('.sub-li:nth-child(1) a');
		var subLiA_2 = obenMenu.querySelector('.sub-li:nth-child(2) a');
		var subLiA_3 = obenMenu.querySelector('.sub-li:nth-child(3) a');
		var subLiA_4 = obenMenu.querySelector('.sub-li:nth-child(4) a');
		var subLiA_5 = obenMenu.querySelector('.sub-li:nth-child(5) a');
		
		var subMenu_1 = obenMenu.querySelector('.sub-li:nth-child(1) ul.sub-menu');
		var subMenu_2 = obenMenu.querySelector('.sub-li:nth-child(2) ul.sub-menu');
		var subMenu_3 = obenMenu.querySelector('.sub-li:nth-child(3) ul.sub-menu');
		var subMenu_4 = obenMenu.querySelector('.sub-li:nth-child(4) ul.sub-menu');
		var subMenu_5 = obenMenu.querySelector('.sub-li:nth-child(5) ul.sub-menu');

	if (window.innerWidth < 800){
	
		ss.onclick = function() {
			/*obenMenu.classList.remove('open-1','open-2','open-3','open-4','open-5');*/
			obenMenu.classList.toggle('responsive');
			
			if (this.className === "header-menu_link") {
			   this.className += " responsive";
		   } else {
			   this.className = "header-menu_link";
		   }
		};
	
		subLiA_1.onclick = function() {			
			subLi_2.classList.remove('open');
			subLi_3.classList.remove('open');
			subLi_4.classList.remove('open');
			subLi_5.classList.remove('open');
			subLi_1.classList.toggle('open');
			/*obenMenu.classList.remove('open-2','open-3','open-4','open-5');
			obenMenu.classList.toggle('open-1');*/
		};
		
		subLiA_2.onclick = function() {
			subLi_1.classList.remove('open');
			subLi_3.classList.remove('open');
			subLi_4.classList.remove('open');
			subLi_5.classList.remove('open');
			subLi_2.classList.toggle('open');
			/*obenMenu.classList.remove('open-1','open-3','open-4','open-5');
			obenMenu.classList.toggle('open-2');*/
		};
		
		subLiA_3.onclick = function() {
			subLi_1.classList.remove('open');
			subLi_2.classList.remove('open');
			subLi_4.classList.remove('open');
			subLi_5.classList.remove('open');
			subLi_3.classList.toggle('open');
			/*obenMenu.classList.remove('open-1','open-2','open-4','open-5');
			obenMenu.classList.toggle('open-3');*/
		};
		
		subLiA_4.onclick = function() {
			subLi_1.classList.remove('open');
			subLi_2.classList.remove('open');
			subLi_3.classList.remove('open');
			subLi_5.classList.remove('open');
			subLi_4.classList.toggle('open');
			/*obenMenu.classList.remove('open-1','open-2','open-3','open-5');
			obenMenu.classList.toggle('open-4');*/
		};
		
		subLiA_5.onclick = function() {
			subLi_1.classList.remove('open');
			subLi_2.classList.remove('open');
			subLi_3.classList.remove('open');
			subLi_4.classList.remove('open');
			subLi_5.classList.toggle('open');
			/*obenMenu.classList.remove('open-1','open-2','open-3','open-4');
			obenMenu.classList.toggle('open-5');*/
		};
	}
	
	
	
	
	
	
	
	
	
	
	/*Открываем третий уровень меню*/
	
		/*Подменю первого пункта меню*/
		/*var subLi_1_1 = obenMenu.querySelector('.sub-li:nth-child(1) .sub-sub-li:nth-child(1) a');
		var subLi_1_2 = obenMenu.querySelector('.sub-li:nth-child(1) .sub-sub-li:nth-child(2) a');
		var subLi_1_3 = obenMenu.querySelector('.sub-li:nth-child(1) .sub-sub-li:nth-child(3) a');
		var subLi_1_4 = obenMenu.querySelector('.sub-li:nth-child(1) .sub-sub-li:nth-child(4) a');
		var subLi_1_5 = obenMenu.querySelector('.sub-li:nth-child(1) .sub-sub-li:nth-child(5) a');
		
	if (window.innerWidth < 800){
	
		subLi_1.onclick = function() {
			subMenu_1.classList.remove('open-1','open-2','open-3','open-4','open-5');
			subMenu_1.classList.toggle('responsive');
			
			if (this.className === "ground-menu_link") {
			   this.className += " responsive";
		   } else {
			   this.className = "ground-menu_link";
		   }
		};
	
		subLi_1.onclick = function() {
			obenMenu.classList.remove('open-2','open-3','open-4','open-5');
			obenMenu.classList.toggle('open-1');
		};
		
		subLi_2.onclick = function() {
			obenMenu.classList.remove('open-1','open-3','open-4','open-5');
			obenMenu.classList.toggle('open-2');
		};
		
		subLi_3.onclick = function() {
			obenMenu.classList.remove('open-1','open-2','open-4','open-5');
			obenMenu.classList.toggle('open-3');
		};
		
		subLi_4.onclick = function() {
			obenMenu.classList.remove('open-1','open-2','open-3','open-5');
			obenMenu.classList.toggle('open-4');
		};
		
		subLi_5.onclick = function() {
			obenMenu.classList.remove('open-1','open-2','open-3','open-4');
			obenMenu.classList.toggle('open-5');
		};
	}*/
		
		/*Подменю второго пункта меню*/
		/*var subLi_2_1 = obenMenu.querySelector('.sub-li:nth-child(2) .sub-sub-li:nth-child(1) a');
		var subLi_2_2 = obenMenu.querySelector('.sub-li:nth-child(2) .sub-sub-li:nth-child(2) a');
		var subLi_2_3 = obenMenu.querySelector('.sub-li:nth-child(2) .sub-sub-li:nth-child(3) a');
		var subLi_2_4 = obenMenu.querySelector('.sub-li:nth-child(2) .sub-sub-li:nth-child(4) a');
		var subLi_2_5 = obenMenu.querySelector('.sub-li:nth-child(2) .sub-sub-li:nth-child(5) a');*/
		
		/*Подменю третьего пункта меню*/
		/*var subLi_3_1 = obenMenu.querySelector('.sub-li:nth-child(3) .sub-sub-li:nth-child(1) a');
		var subLi_3_2 = obenMenu.querySelector('.sub-li:nth-child(3) .sub-sub-li:nth-child(2) a');
		var subLi_3_3 = obenMenu.querySelector('.sub-li:nth-child(3) .sub-sub-li:nth-child(3) a');
		var subLi_3_4 = obenMenu.querySelector('.sub-li:nth-child(3) .sub-sub-li:nth-child(4) a');
		var subLi_3_5 = obenMenu.querySelector('.sub-li:nth-child(3) .sub-sub-li:nth-child(5) a');*/
		
		/*Подменю четвертого пункта меню*/
		/*var subLi_4_1 = obenMenu.querySelector('.sub-li:nth-child(4) .sub-sub-li:nth-child(1) a');
		var subLi_4_2 = obenMenu.querySelector('.sub-li:nth-child(4) .sub-sub-li:nth-child(2) a');
		var subLi_4_3 = obenMenu.querySelector('.sub-li:nth-child(4) .sub-sub-li:nth-child(3) a');
		var subLi_4_4 = obenMenu.querySelector('.sub-li:nth-child(4) .sub-sub-li:nth-child(4) a');
		var subLi_4_5 = obenMenu.querySelector('.sub-li:nth-child(4) .sub-sub-li:nth-child(5) a');*/
		/*Подменю пятого пункта меню*/
		/*var subLi_4_1 = obenMenu.querySelector('.sub-li:nth-child(5) .sub-sub-li:nth-child(1) a');
		var subLi_4_2 = obenMenu.querySelector('.sub-li:nth-child(5) .sub-sub-li:nth-child(2) a');
		var subLi_4_3 = obenMenu.querySelector('.sub-li:nth-child(5) .sub-sub-li:nth-child(3) a');
		var subLi_4_4 = obenMenu.querySelector('.sub-li:nth-child(5) .sub-sub-li:nth-child(4) a');
		var subLi_4_5 = obenMenu.querySelector('.sub-li:nth-child(5) .sub-sub-li:nth-child(5) a');

	if (window.innerWidth < 800){
	
		ss.onclick = function() {
			obenMenu.classList.remove('open-1','open-2','open-3','open-4','open-5');
			obenMenu.classList.toggle('responsive');
			
			if (this.className === "header-menu_link") {
			   this.className += " responsive";
		   } else {
			   this.className = "header-menu_link";
		   }
		};
	
		subLi_1.onclick = function() {
			obenMenu.classList.remove('open-2','open-3','open-4','open-5');
			obenMenu.classList.toggle('open-1');
		};
		
		subLi_2.onclick = function() {
			obenMenu.classList.remove('open-1','open-3','open-4','open-5');
			obenMenu.classList.toggle('open-2');
		};
		
		subLi_3.onclick = function() {
			obenMenu.classList.remove('open-1','open-2','open-4','open-5');
			obenMenu.classList.toggle('open-3');
		};
		
		subLi_4.onclick = function() {
			obenMenu.classList.remove('open-1','open-2','open-3','open-5');
			obenMenu.classList.toggle('open-4');
		};
		
		subLi_5.onclick = function() {
			obenMenu.classList.remove('open-1','open-2','open-3','open-4');
			obenMenu.classList.toggle('open-5');
		};
	}*/
	