<!DOCTYPE html>
<html lang="en">
<link rel="stylesheet" href="style1.css">
<head>
    <meta charset="UTF-8">
    <title>NATO Phonetics</title>
</head>
<body>
<form onsubmit="return false">
    <div class="section1">
        <label>
            <input id="words" type="text" >
        </label>
        <p class="subsection1">
            Enter the message:
        </p>
    </div>
    <div class="section2">
        <button type="submit" onclick="Message()">RELAY</button>
    </div>
    <div class="section3">
        <p class="subsection3">
            Message NATO phonetics relay
        </p>
        <div id="solution a"></div>
        <div id="solution b"></div>
        <div id="solution c"></div>
    </div>
</form>
</body>
<script>
    function Message() {
        let num ;

        let letter = {
            A: "Alpha", B: "Bravo", C: "Charlie", D: "Delta", E: "Echo", F: "Foxtrot",
            G: "Golf", H: "Hotel", I: "India", J: "Juliet", K: "Kilo", L: "Lima", M: "Mike", N: "November",
            O: "Oscar", P: "Papa", Q: "Quebec", R: "Romeo", S: "Sierra", T: "Tango", U: "Uniform", V: "Victor",
            W: "Whiskey", X: "X-ray", Y: "Yankee", Z: "Zulu"
        }
        let array = [];
        let array2 = [];
        let word = "word";
        let c = Object.keys(letter);
        for( let i = 0; i < word.length; i++)
        {
            array.push(word[i])
            document.getElementById("solution a").innerHTML = array.toString();
        }
        for(let g of c)
        {
            array2.push(g)
            document.getElementById("solution b").innerHTML = array2.toString();
        }
        document.getElementById("solution c").innerHTML = array[0];





    }
</script>
</html>
