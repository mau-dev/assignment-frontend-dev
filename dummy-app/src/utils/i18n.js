export function getCurrentLocale(url) {
  // your code here. have fun!

  // assuming this url example theartling.com/en/prints/
  // the part that we need to manipulate (the locale) comes after the root path
  //if the string is split into multiple substrings we can get that part and store in a variable named locale and mutate it's value accordingly
  //the string method .split() will split the string in as many substrings whenever it sees the charachter passed as an argument
  //ex.  if url = theartling.com/en/prints/ url.split('/') will give 3 strings omiting the ('/') character
  //result 'theartling.com', 'en', 'prints'
  //to get the locale part of the url, if the root is always on first index(0), we need the second item from the substrings outputed, url.split('/')[1]

      const locale = url.split('/')[1]

      //if the locale is en we need to return currentLocale into en
      //if is zh-ch return to zh-ch
      //if it doesn't exist, set default, return en


      if (locale === "en" || locale == "zh-cn") {
        return locale
      } else {
        return "en"
      }

};