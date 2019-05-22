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

          function chekinimas(duomenys, tipas) {
            return duomenys.filter( (value) => {
              return typeof value == tipas
            } )

          }
          console.log(chekinimas([`1` , 2 , `a`, 5], `number`));

          // jei keiciu string i zodi number iesko value, jei string parasau iesko stringu

          // Fourth taskas
          function chekinimas(duomenys) {
            return duomenys.map( (value) => {
                return Number(value)
            } )

          }
          console.log(chekinimas([`2` , `6` , `8`]));

          // Five Task
          function paskaita (arr , key) {
            return arr.map( (value) => {
              return value[key]
            })


          }
            console.log(paskaita([ { name: `Jon`, age: 15 }, { name: `Marry`, age: 12 } ], `name`));
