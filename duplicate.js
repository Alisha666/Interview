// const hm={};
// const nums=[8,9,3,2];
// const target = 5;
// for(let i=0;i<nums.length;i++){
//     const res=target-nums[i];
//     if(res in hm){
//         console.log(hm[res],i);
//     }
//     hm[nums[i]]=i;
// }
// console.log(hm);

// function hasThreeConsecutiveDots(str,n) {
//     const pattern =`\\.{${n}}`;
//     const regex= new RegExp(pattern) ;
//     return regex.test(str);
//     //return /\.{4}/.test(str);
//   }
//   function hasNConsecutiveDots(str, n) {
//     const pattern = new RegExp(`\\.{${n}}`);
//     return pattern.test(str);
//   }
  
//   // Example usage:
//   console.log(hasNConsecutiveDots("a.b.....c..",4));

  function hasNConsecutiveDots(str, n) {
    const pattern = new RegExp(`\\.{${n}}`);
    return pattern.test(str);
  }
  
  // Example usage:
  console.log(hasNConsecutiveDots("a.b...c....", 4)); // true
  console.log(hasNConsecutiveDots("....", 4)); // true
  console.log(hasNConsecutiveDots("c.....d", 4)); // false
  console.log(hasNConsecutiveDots("a.b.c.d", 4)); // false
  console.log(hasNConsecutiveDots("", 4)); // false
  console.log(hasNConsecutiveDots("a.b..", 4)); // fal

 