var score = 49
function studentScore(score)
{
      switch (true)
      {            
            case score >= 80:
                  return 'HD'
            case score >= 70:
                  return 'D'            
            case score >= 60:
                  return 'C'
            case score >= 50:
                  return 'P'                       
            default:
                  return 'F'
      }
}
console.log("The student grade is: " + studentScore(score))