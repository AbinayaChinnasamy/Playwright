var browser = 'safari'
var testTyp = 'other'

function launchBrowser(browserName)
{
      if (browserName === 'Chrome')
      {
            console.log("It is Chrome browser")
      }
      else
      {
           console.log("It is not Chrome browser: " + browserName) 
      }
}

function runTests(testTyp)
{
      switch (testTyp)
      {
            case 'sanity':
                  console.log("The test type is: " + testTyp)
                  break
            case 'regression':
                  console.log("The test type is: " + testTyp)
                  break
            case 'smoke':
                  console.log("The test type is: " + testTyp)
                  break
            default:
                  console.log("The test type is: smoke")
                  break
      }    
}
launchBrowser(browser)
runTests(testTyp)