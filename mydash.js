function last(list) {
	return (Array.isArray(list) && list[list.length - 1]) 
            ? list[list.length - 1] 
            : undefined;
}

function first(list) {
	  return (Array.isArray(list) && list[0]) 
	    ? list[0] 
	  : undefined;
}

