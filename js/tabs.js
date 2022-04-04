let tabs = {
	tabsElement: "#my_tabs_1",
	objectTab: null,
	checked: function(){

		let context = this;

		this.objectTab.addEventListener('click', (evt)=>{
			if(evt.target.closest(".btn")){
				let parentEl = evt.target.parentElement;

				if(parentEl.tagName != "LI"){
					context.exeption(null);
					return 0;
				} 

				let parentElActive = context.objectTab.querySelector(".tabs_list li.active");

				context.removeClass(parentElActive);
				context.addClass(parentEl);


				let valueAttribute = parentEl.getAttribute("data-block");

				if(valueAttribute === null){
					context.exeption(null);
					return 0;
				}

				let blockElActive = context.objectTab.querySelector("#" + valueAttribute);
				
				if(blockElActive === null){
					context.exeption(null);
					return 0;
				}
				else{
					let blockActive = context.objectTab.querySelector(".tabs_content div.active");
					context.removeClass(blockActive);
					context.addClass(blockElActive);
				}
			}
		})
	},
	addClass: (el)=>{
		el.classList.add("active");
	},
	removeClass: (el)=>{
		el.classList.remove("active");
	},
	exeption: (obj)=>{
		if(obj === null){
			console.log("Error");
			return false;
		}
		else{
			return true;
		}
	},
	init: function(){

		this.objectTab = document.querySelector(this.tabsElement);
		
		if(this.exeption(this.objectTab) == false){
			return 0;
		}

		this.checked();
	}
}