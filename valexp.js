

// Créer une table de Multiplication >


   function creerTabMulti(size) {

      const table = [];

      for (let i = 1; i <= size; i++) {

         const row = [];

         for (let j = 1; j <= size; i++) {

            row.push(i *j);
         }

         table.push(row);
      }

      return table;
   }
   const TableMulti = creerTabMulti(10);
   

   // Lancer le script ... 

    console.log(TableMulti);
