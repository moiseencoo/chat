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
// function range(start, end, step = 1) {
//     if (arguments.length === 1) {
//         end = start;
//         start = 0;
//     }

//     step = Math.abs(step)
  
//     let result = [];
//     if (end > 0) {
//       for (let i = start; i < end; i += step) {
//         if (step === 0) {
//           result.push(start);
//           i++;
//         } else {
//           result.push(i);
//         }
//       }
//     } else {
//       for (let i = start; i > end; i -= step) {
//         if (step === 0) {
//           result.push(start);
//           i--;
//         } else {
//           result.push(i);
//         }
//       }
//     }

//     return result;
// }

function rangeRight(start, end, step) {
	return range(start, end, step, true);
}

function range(start, end, step, isRight) {  
    // Ensure the sign of `-0` is preserved.
    start = start
    if (end === undefined) {
      end = start
      start = 0
    } else {
      end = end
    }
    step = step === undefined ? (start < end ? 1 : -1) : step
    return baseRange(start, end, step, isRight)
  
}

function baseRange(start, end, step, fromRight) {
  let index = -1
  let length = Math.max(Math.ceil((end - start) / (step || 1)), 0)
  const result = new Array(length)

  while (length--) {
    result[fromRight ? length : ++index] = start
    start += step
  }
  return result
}

function isEmpty(value) {
    if (value == null) {
      return true
    }
    
		if (typeof value == 'number' || typeof value == 'boolean') {
      return true
    }

    if (Array.isArray(value) || typeof value === 'string' || typeof value.splice === 'function') {
      return !value.length
    }

    if (Object.keys(value).length === 0 && value.constructor === Object) {
      return true
    }

  return false
}
