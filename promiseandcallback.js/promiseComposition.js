//promises composition is arranging multiple asynchronuse operations so that the result one operation can be used by another;

function first() {
  return Promise.resolve(10);
}

function second() {
  return Promise.resolve(20);
}

first()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// 1.  Closure                     ✅
// 2.  Callback                    ✅
// 3.  HOF                         ✅
// 4.  Currying                    ✅
// 5.  Factory Function            ✅
// 6.  Function Borrowing          ✅
// 7.  call/apply/bind             ✅
// 8.  Debounce                    ✅
// 9.  Throttle                    ✅
// 10. Generator                   ✅
// 11. Polyfill                    ✅

// 12. Promise                    ✅
// 13. Promise.all/any/race       ✅
// 14. Async/Await                ✅
// 15. Event Loop                 🔥🔥
// 16. Microtask/Macrotask        🔥🔥
// 17. Execution Context          🔥🔥
// 18. Hoisting + TDZ             ✅🔥
// 19. Prototype Chain            🔥🔥
// 20. Prototype vs __proto__     🔥🔥
// 21. Object.create              🔥
// 22. Proxy + Reflect            ✅
// 23. Map/Set/WeakMap/WeakSet    ✅
// 24. Memoization                🔥
// 25. IIFE                       🔥 
// 26. Function Composition       ✅
// 27. Partial Application        🔥
// 28. Event Delegation           🔥
// 29. Error Handling             ✅
// 30. ES Modules                 🔥
