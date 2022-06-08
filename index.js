// a function called receivesAFunction that receives a callback function and calls it

recievesAFunction = (callback) => {
  callback();

  const spy = chai.spy();

    receivesAFunction(spy);
};

// a function called returnsANamedFunction that returns a named function

returnsANamedFunction = () => { 
  
    var fn = function namedFunction() {};
    return fn;
}
    
// a function called returnsAnAnonymousFunction that returns an anonymous function

    returnsAnAnonymousFunction = () => { 
  
    var fn = function() {};
    return fn;
}


