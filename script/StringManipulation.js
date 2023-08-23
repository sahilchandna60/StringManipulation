class StringManipulation {
  // str = "";

  constructor(str) {
    this.str = str;
  }
  //Length Function
  length = () => {
    let i = 0;
    while (this.str[i] !== undefined) {
      i++;
    }
    return i;
  }
  //Index for the first occurance
  indexOf = (b) => {
    let a = this.str;
    let p = this.length();
    for (var j = 0; j < p; j++) {
      if (a[j] == b) {
        break;
      }
    }
    if (j == p) {
      return "not Found";
    } else {
      return j;
    }
  }
  //Substr Function
  substr = (z, y) => {
    let tstr = "";
    let k = this.length();
    let m = k + z;
    if (y <= k && Math.sign(z) == 1) {
      for (let i = z; i < y + z; i++) {
        tstr += this.str[i];
      }
    } else if (Math.sign(z) == -1 && m + y <= k) {
      o = Math.abs(z);
      for (let i = m; i < y + m; i++) {
        tstr += this.str[i];
      }
    } else if (Math.sign(z) == -1 && m + y > k) {
      o = Math.abs(z);
      for (let i = m; i < k; i++) {
        tstr += this.str[i];
      }
    } else if (y <= k && Math.sign(z) == 0) {
      for (let i = 0; i < y; i++) {
        tstr += this.str[i];
      }
    } else {
      for (let i = z; i < k; i++) {
        tstr += this.str[i];
      }
    }
    return tstr;
  }
  //Split Function
  split = (k, l) => {
    let len = this.length();
    let arr = [];
    let tstr = "";
    if (l <= len) {
      if (k == " ") {
        for (let i = 0; i < l; i++) {
          if (this.str[i] !== " ") {
            tstr += this.str[i];
          } else {
            arr.push(tstr);
            tstr = "";
          }
        }
      } else if (k == "") {
        for (let i = 0; i < l; i++) {
          tstr = this.str[i];
          arr.push(tstr);
        }
      }
      if (tstr) {
        arr.push(tstr);
      }
    } else if (l > len) {
      console.log("Invalid input");
    } else {
      if (k == " ") {
        for (let i = 0; i < len; i++) {
          if (this.str[i] !== " ") {
            tstr += this.str[i];
          } else {
            arr.push(tstr);
            tstr = "";
          }
        }
      } else if (k == "") {
        for (let i = 0; i < len; i++) {
          tstr = this.str[i];
          arr.push(tstr);
        }
      }
      if (tstr) {
        arr.push(tstr);
      }
    }
    return arr;
  }
  //Replace Function for First occurance
  replace = (a, b) => {
    let p = new StringManipulation(a).length();
    var str2 = "";
    for (var i = 0; i < this.length(); i++) {
      var j = 0;
      let t = p + i - 1;
      let r = p + j - 1;
      if (this.str[i] == a[j] && this.str[t] == a[r]) {
        str2 += b;
        i = i + p;
        break;
      } else {
        str2 += this.str[i];
        j++;
      }
    }
    for (i; i < this.length(); i++) {
      str2 += this.str[i];
    }
    return str2;
  }
  //Concatination
  concat = (str2) => {
    let str1 = this.str;
    return str1 + " " + str2;
  }
  //Match Function
  match = (fi, con) => {
    let strr = this.str;
    //For Fi to be string "fi"
    if (typeof fi == "string") {
      var result = [];
      let tstr = "";
      // console.log("String Found");
      var p = new StringManipulation(fi).length();
      var k = new StringManipulation(strr).length();
      // For Global Scope
      if (con == "g") {
        console.log("Uncaught SyntaxError: missing ) after argument list");
      }
      // For Case-insensitive
      else if (con == "i") {
        console.log("Uncaught SyntaxError: missing ) after argument list");
      }
      // For Both Condition
      else if (con == "gi") {
        console.log("Uncaught SyntaxError: missing ) after argument list");
      }
      // when no condition given
      else {
        // console.log("No Condition Found");
        let m = strr.search(fi);
        var z = p + m;
        if (m == -1) {
          return null;
        } else {
          for (let i = m; i < z; i++) {
            tstr += strr[i];
          }
          result.push(tstr);
        }
      }
    }
    // For /fi/ input
    else if (typeof fi == "object") {
      // console.log("Object Found")
      var result = [];
      let o = fi.toString();
      var p = new StringManipulation(o).length();
      var k = new StringManipulation(strr).length();
      // For Global Scope
      if (con == "g") {
        // console.log("global scope");
        let m = strr.search(fi);
        var s = "";
        var z = p + m - 2;
        if (m == -1) {
          return null;
        } else {
          for (let i = m; i < z; i++) {
            s += strr[i];
          }
          result.push(s);
          var strrr = "";
          var y = z;
          for (var j = z; j < k; j++) {
            var newstr = strr.slice(y);
            let t = newstr.search(fi);
            let q = p + t - 2;
            if (t == 0) {
              for (let g = 0; g < q; g++) {
                strrr += newstr[g];
              }
              result.push(strrr);
              strrr = "";
            } else if (t == -1) {
              break;
            }
            y++;
          }
        }
      }
      // For Case-insensitive
      else if (con == "i") {
        // console.log("case-insensitive");
        let strrr = "";
        for (j = 1; j < p - 1; j++) {
          strrr += o[j];
        }
        const regexp = new RegExp(`${strrr}`, con);
        let m = strr.search(regexp);
        let s = "";
        let z = p + m - 2;
        if (m == -1) {
          return null;
        } else {
          for (let i = m; i < z; i++) {
            s += strr[i];
          }
          result.push(s);
        }
      }
      // For Both Condition
      else if (con == "gi") {
        // console.log("Both Condition");
        con = "i";
        strrr = "";
        for (let w = 1; w < p - 1; w++) {
          strrr += o[w];
        }
        const regexp = new RegExp(`${strrr}`, con);
        let m = strr.search(regexp);
        s = "";
        z = p + m - 2;
        if (m == -1) {
          return null;
        } else {
          for (var i = m; i < z; i++) {
            s += strr[i];
          }
          result.push(s);
          let strrrr = "";
          var y = z;
          for (var j = z; j < k; j++) {
            newstr = strr.slice(y);
            let t = newstr.search(regexp);
            let q = p + t - 2;
            if (t == 0) {
              for (let g = 0; g < q; g++) {
                strrrr += newstr[g];
              }
              result.push(strrrr);
              strrrr = "";
            } else if (t == -1) {
              break;
            }
            y++;
          }
        }
      }
      // when no condition given
      else {
        // console.log("No Condition Found");
        let m = strr.search(fi);
        let s = "";
        console.log(m);
        let z = p + m - 2;
        if (m == -1) {
          //If not having match
          return null;
        } else {
          //If having match
          for (let i = m; i < z; i++) {
            s += strr[i];
          }
          result.push(s);
        }
      }
    } else {
      console.log("Uncaught SyntaxError: missing ) after argument list");
    }
    return result;
  }
  //ReplaceAll Function
  replaceall = (a, b) => {
    let strr = this.str;
    var str2 = "";
    let z = new StringManipulation(strr).length();
    let p = new StringManipulation(a).length();
    for (var i = 0; i < z; i++) {
      var j = 0;
      let t = p + i - 1;
      let r = p + j - 1;
      for (var j = 0; j < p; j++) {
        if (strr[i] == a[j] && strr[t] == a[r]) {
          str2 += b;
          // console.log(strr[i], a[j]);
          // console.log(strr[t], a[r]);
          i = i + p;
          // console.log("hii");
        } else {
          str2 += strr[i];
          // console.log(strr[i])
          j = j + p;
          // console.log("contin")
        }
      }
    }
    for (i; i < z; i++) {
      str2 += strr[i];
    }
    return str2;
  }
  // Trim Function
  trim = () => {
    let strr = this.str;
    let j = new StringManipulation(strr).length();
    let m = "";
    for (let i = 0; i < j; i++) {
      if (strr.charAt(i) != " ") {
        m = m + strr.charAt(i);
        if (strr.charAt(i + 1) == " ") {
          m = m + strr.charAt(i + 1);
        }
      } else {
        continue;
      }
    }
    return m;
  }
  // Capitalize First Word
  capitalize = () => {
    for (var i = 0; i < this.length(); i++) {
      if (this.str.charAt(i) == " ") {
        continue;
      }
      else {
        return (this.str.substring(i, i + 1).toUpperCase() + this.str.substring(i + 1));
      }
    }
  }
  // CapitalizeAll
  capitalizeall = () => {
    let result = [];
    let e = this.str.split(" ");
    var p = new StringManipulation(e).length();
    let tstr = "";
    for (let i = 0; i < p; i++) {
      if (e[i] == "") {
        continue;
      }
      else {
        tstr = e[i].toString();
        for (let j = 0; j < tstr.length; j++) {
          let f = tstr.substring(j, j + 1).toUpperCase() + tstr.substring(j + 1);
          result.push(f);
          break;
        }
      }
    }
    return (result.join(" "));
  }
  // deCapitalize First Word
  decapitalize = () => {
    for (var i = 0; i < this.length(); i++) {
      if (this.str.charAt(i) == " ") {
        continue;
      }
      else {
        return (this.str.substring(i, i + 1).toLowerCase() + this.str.substring(i + 1));
      }
    }
  }
  //decapitalizeAll
  decapitalizeall = () => {
    let result = [];
    let e = this.str.split(" ");
    var p = new StringManipulation(e).length();
    let tstr = "";
    for (let i = 0; i < p; i++) {
      if (e[i] == "") {
        continue;
      }
      else {
        tstr = e[i].toString();
        for (let j = 0; j < tstr.length; j++) {
          let f = tstr.substring(j, j + 1).toLowerCase() + tstr.substring(j + 1);
          result.push(f);
          break;
        }
      }
    }
    return (result.join(" "));
  }
}
