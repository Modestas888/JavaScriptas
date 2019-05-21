// First task
      function check(num) {
        if(isNaN(num)){
          return NaN;
          }
        if(num % 2 == 0) {
          return 'Number is Even!';
          }
        else {
          return 'Number is Odd!';
          }
      }
        console.log(check(`rgty`));

      // Second Task

      function funkcija(taskas){
        return taskas.split("").map((value, ind) => value.repeat(ind)).join(`-`);
        }
        console.log(funkcija(`hello`));

          // Third Task
          function filteris(reiksmes) {
            return reiksmes.filter().typeof(`number`)
          }
