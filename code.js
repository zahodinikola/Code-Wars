function descendingOrder(n){
  //get number and put it in an array
  var string = n.toString();
  var array = string.split("");

  //go through arry and sort it in descending order
  function bubbleSort(array){
      var startIndex = 0;
      var endIndex = array.length - 1;
      
      bubble(startIndex, endIndex);

      function swap(a, b){
        var temp;
        temp = array[a];
        array[a] = array[b];
        array[b] = temp;
      };
      function bubble(i, k){
        if (i===k) return;
          for (var j = i + 1; j <= k; j += 1){
            if (array[j] > array[j-1]){
            swap (j, j-1);
            }
          }
          bubble (i+1,k);
       } 
     }
    
    //output array as a string or convert it to an integer
    
  }