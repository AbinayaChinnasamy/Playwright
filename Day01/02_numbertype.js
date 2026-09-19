let num = 10
function getNumber(number)
{      
      if (number > 0)
      {
            return "It is a positive number: " + number
      }
      else if (num < 0)
      {
            return "It is a negative number: " + number
      }
      else
      {
            return "The given number is neutral: " + number
      }
     
}  
console.log(getNumber(num))