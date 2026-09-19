const str1 = 'listen'
const str2 = 'silent'

function checkAnagram(str1,str2)
{
      let orderStr1 = str1.split('').sort().join()
      console.log(orderStr1);

      let orderStr2 = str2.split('').sort().join()
      console.log(orderStr2);

      if (orderStr1 === orderStr2)
      {
            console.log("It is anagram");
            
      }
      else{
            console.log("It is not anagram");
      }      
}
checkAnagram(str1, str2)