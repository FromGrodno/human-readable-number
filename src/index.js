module.exports = function toReadable(n) {
   let first = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "zero"];
   let second = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
   let third = ["one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"]
   result = ""
   if (n < 1) {
      result = result + first[19]
   }
   if (n < 20 && n > 0) {
      result = result + first[n - 1]
   }
   if (n > 19 && n < 100) {
      let nn = n.toString().split('');
      if (nn[1] == 0) {
         result = result + second[nn[0] - 1]
      }
      else {
         result = result + second[nn[0] - 1] + " " + first[nn[1] - 1]
      }
   }
   if (n > 99) {
      let nn = n.toString().split('');
      if (nn[1] == 0 && nn[2] == 0) {
         result = result + third[nn[0] - 1]
      }
      else if (nn[2] == 0) {
         result = result + third[nn[0] - 1] + " " + second[nn[1] - 1]
      }
      else if (nn[1] == 1) {
         result = result + third[nn[0] - 1] + " " + first[`${nn[1]}${nn[2]}` - 1]
      }
      else if (nn[1] == 0) {
         result = result + third[nn[0] - 1] + " " + first[nn[2] - 1]
      }

      else {
         result = result + third[nn[0] - 1] + " " + second[nn[1] - 1] + " " + first[nn[2] - 1]
      }
   }
   return result
}
