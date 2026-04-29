1. `values added: 20`
2. `final result: 20`
3. You shouldn't use var because it is function-scoped. Variables can be accessed outside the block they are defined in, making them easy to overwrite. You should use block-scoped variables such as let and const.
4. `values added: 20`
5. There is an error because let is block-scoped and result is not accessible outside the if block.
6. There is an error because you cannot reassign const variables. Here, there is an attempt to reassign result.
7. There is an error because the code crashes (at reassignment) before it reaches line 13.