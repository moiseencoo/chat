function last(list) {
	return (Array.isArray(list) && list[list.length - 1]) 
            ? list[list.length - 1] 
            : undefined;
}
