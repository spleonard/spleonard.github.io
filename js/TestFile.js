let myArray= [
        {
          name: 'Jack',
          age: 25,
        },
        {
          name: 'Maria',
          age: 22,
        }];
       let index = myArray.findIndex( element => {
         if (element.name === 'Maria') {
           return true;
         }
       });
       console.log('--Start TestFile--';)
       console.log('Maria is at index: ' + index);
       console.log('--End TestFile--';);
