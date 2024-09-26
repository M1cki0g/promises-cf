
         function upperCaseAsync(s) {
           return new Promise((resolve, reject) => {
               if (s != null) {
               resolve(s.toUpperCase());
             } else {
               reject("No string received!");
             }
           });
         }
      
         upperCaseAsync("steve").then(console.log);
      
         upperCaseAsync(null).catch((x) => {
           console.log("No string received!");
         });
