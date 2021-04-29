const titleCased = () => {
  return tutorials
     .map( (sentence) =>
      { return sentence.split(' ')
         .map ((word) => word[0].toUpperCase() + word.slice(1))
             .join(' ')
           }
         )
}
