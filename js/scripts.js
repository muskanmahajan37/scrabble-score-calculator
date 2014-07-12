function getScore(word) {
  var letterValues={q:10,z:10,j:8,x:8,k:5,f:4,h:4,v:4,w:4,y:4,b:3,c:3,m:3,p:3,d:2,g:2,a:1,e:1,i:1,o:1,u:1,l:1,n:1,r:1,s:1,t:1}
  var score = 0;
  var wordArray = word.toLowerCase().split("");
  wordArray.forEach(function (letter) {
        score += letterValues[letter]
    });
  return score;
}
