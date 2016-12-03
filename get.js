var get = {
	
	/**
	 * Get single element by querySelector method
	 * 
	 * @param  {String}		el	Selector to match against (class, ID, data attribute, or tag)
	 * @return {Element}	Returns null if not matched 
	 */
	el: (el) => { return document.querySelector(el) },

	/**
	 * Get single element with getElementById method
	 * 
	 * @param  {String}		el
	 * @return {Element}	Returns null if not matched
	 */
	elById: (el) => { return document.getElementById(el) },

	/**
	 * Get nodelist by querySelectorAll
	 * 
	 * @param  {String}		el
	 * @return {NodeList}	Returns multiple elements as nodelist
	 */
	all: (el) => { return document.querySelectorAll(el) },
	
	/**
	 * Get array
	 * 
	 * @param  {String} list
	 * @return {Array}	Returns multiple elements as array
	 */
	allArray: function(el) { return [].slice.call(this.all(el)) },

	/**
	 * Get array index of an element
	 * 
	 * @param  {HTMLElement} el
	 * @return {int}	Returns integer
	 */
	index: function(el){
		let children = [].slice.call(el.parentElement.children),
				elIndex;

		// find the element by iterate each array item
		children.filter((child, index)=> {

			// if match, assign index value to variable 
			if(child === el){
				elIndex = index;
			}

		});

		return elIndex;
	},
	
	/**
	 * Get siblings
	 * 
	 * @param  {HTMLElement}	el	The base element
	 * @return {Array}	Returns an array of element's siblings
	 */
	siblings: function(el){

		// first child
		let child = el.parentElement.children[0],
				siblings = [];

		// if this element has at least 1 sibling, it will loop through the next elements
		if(child.nextElementSibling) {
			for(; child; child = child.nextElementSibling){

				// if the next sibling is not the parameter then push them to array
				if(child !== el){
					siblings.push(child);
				}
			}
		} else { // throw error if there's no siblings
			throw new Error("this element doesn't have any siblings");
		}

		return siblings;
	},
	
	/**
	 * Get parent of an element by using class or ID as parent reference
	 * 
	 * @param  {HTMLElement}	el	The children					
	 * @param  {String}				parentSelector	Selector to match against class or ID
	 * @return {HTMLElement}	Returns parent of the children
	 */
	parentOf: function(el, parentSelector){

		let parent;	

		if(parentSelector){
			var parentType = parentSelector.charAt(0);
		} else {
			throw new Error("parent selector is not defined");
		}

		let parentWithoutSymbol = parentSelector.substr(1);

		for(; el && el !== document; el = el.parentNode){
			// the first time around, it is a parentNode of the base elem
			// the elem reference is constantly changing over loop

			// if parent is a class
			if(parentType === "."){
				if(el.classList.contains(parentWithoutSymbol)) {
					parent = el;
				}
			}

			// if parent is an ID
			if(parentType === "#"){
				if(el.id === parentWithoutSymbol){
					parent = el;
				}
			}
			
		}

		return parent;
	},

	/**
	 * Get children of an element
	 * 
	 * @param  {Node} el	The parent that contains children	
	 * @param  {String} childrenSelector	Selector to match against class, ID, etc as children reference
	 * @return {Array | HTMLElement}	Returns array if children > 1, otherwise return single element
	 */
	childrenOf: function(el, childrenSelector){
		let children = el.querySelectorAll(childrenSelector);
		// if children > 1 return array, if not return single HTML element
		(children.length > 1) ? children = [].slice.call(children) : children = children[0];
		
		return children;
	}
}