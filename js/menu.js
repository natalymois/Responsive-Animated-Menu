 
 var dropdownMenu = document.getElementById("nav_2"); //nav_2 == drop-menu 
 var dropdownToggle = document.getElementById("aLink");
 
 function myFunction() {
   
   if (dropdownMenu.className === "drop-menu") {
       dropdownMenu.className += " responsive";
   } else {
       dropdownMenu.className = "drop-menu";
   }
   
   if (dropdownToggle.className === "header-menu_link") {
       dropdownToggle.className += " responsive";
   } else {
       dropdownToggle.className = "header-menu_link";
   }
 };
 
 /*Открываем нижние уровни меню*/
 
	var child_A = dropdownMenu.querySelectorAll('a');
	
	var subLi = document.getElementsByClassName('sub-li');
	
	var subSubLi = document.getElementsByClassName('sub-sub-li');

	if (window.innerWidth < 768){
	
		dropdownToggle.onclick = function() {
		
			for (let i = 0; i < child_A.length; i++) {			
				child_A[i].classList.remove('open');			
			}
			
			dropdownMenu.classList.toggle('responsive');
			
			if (this.className === "header-menu_link") {
			   this.className += " responsive";
		   } else {
			   this.className = "header-menu_link";
		   }
		};
		
		for (var i = 0; i < subLi.length; i++) {
			
			var subLiA = subLi[i].querySelectorAll('a')[0];
			subLiA.onclick = function(){
				
				this.classList.toggle('open');
								
			}
		}

		for (var j = 0; j < subSubLi.length; j++) {
			var subSubLiA = subSubLi[j].querySelectorAll('a')[0];
			subSubLiA.onclick = function(){
				this.classList.toggle('open');
			}
		}
	}