export const flattenObject = (obj) => {
    let output = {};
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'object') {
        output = {
          ...output,
          ...flattenObject(value)
        };
      } 
      if (typeof value !== 'object'){
        output[key] = value;
      }
    }
    return output;
  }

