// Array: Last Element
function last(list) {
	return (Array.isArray(list) && list[list.length - 1]) 
            ? list[list.length - 1] 
            : undefined;
}

// Array: First Element
function first(list) {
	  return (Array.isArray(list) && list[0]) 
	    ? list[0] 
	  : undefined;
}

// Array: Range
function range(start, end, step = 1) {
    if (arguments.length === 1) {
        end = start;
        start = 0;
    }

    step = Math.abs(step)
  
    let result = [];
    if (end > 0) {
      for (let i = start; i < end; i += step) {
        if (step === 0) {
          result.push(start);
          i++;
        } else {
          result.push(i);
        }
      }
    } else {
      for (let i = start; i > end; i -= step) {
        if (step === 0) {
          result.push(start);
          i--;
        } else {
          result.push(i);
        }
      }
    }

    return result;
}
