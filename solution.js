function countPositivesSumNegatives(input) {
  if(!isNaN(input)) {
    return [];
  }
  else {
    const neg = input.filter(x => x < 0).reduce((acc, curr) => acc + curr);
	  let pos = input.filter(x => x > 0).sort((a, b) => a - b).length;
    
    if(pos <= 0) {
      pos = 0;
    }
    
	  return [pos, neg];
  }
}
