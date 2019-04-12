function multiply(num1, num2) {
    // choose bigger of two numbers bc 12 * 6 is same 6 * 12 but with 6 we can do less operations
    let smaller = num1 < num2 ? num1 : num2;
    let bigger = num1 < num2 ? num2 : num1;
    // recurively break down smaller until it is 0 or 1;
    return multHelper(smaller, bigger);
  }

  function multHelper(smaller, bigger) {
    if (smaller === 0) {return 0;}
    else if (smaller === 1) {return bigger;}
    else {
      // keep dividing smaller by 2 until we get 0 or 1
      let s = smaller >> 1;
      // recurively call on the halfed small
      let halfProduct = multHelper(s, bigger)
      // if even add half + half 2 * 3 = 1*3 + 1 * 3
      if (smaller % 2 === 0) return halfProduct + halfProduct;
      // if odd we add half + half + bigger. 3 * 4= 4 + 4 + 4
      else return halfProduct + halfProduct + bigger;
    }
  }
