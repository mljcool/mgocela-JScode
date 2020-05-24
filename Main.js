(async () => {
  const folder_name1 = require('./folder1').my_function;
  const folder_name2 = require('./folder2').my_function;
  const folder_name3 = require('./folder3').my_function;

  const result = await Promise.all([folder_name1, folder_name2, folder_name3]);
  console.log(result);

  const parallel = async () => {
    const awaitFolder1 = await folder_name1;
    console.log(awaitFolder1);
    const awaitFolder2 = await folder_name2;
    console.log(awaitFolder2);
    const awaitFolder3 = await folder_name3;
    console.log(awaitFolder3);
  };
  //ELSE IN PARALLEL CALLS
  // parallel();
})();
