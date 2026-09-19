var integer = 3

function isOddOrEven(integer)
{
      if (integer % 2 == 0)
      {
            return "Even"
      }
      else
      {
            return "Odd"
      }
}
console.log("The given number is: " + isOddOrEven(integer))