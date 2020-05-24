exports.my_function = (() => {
  return new Promise((res) => {
    console.log(`it'll take sometime folder2....`);
    setTimeout(() => res('folder2 done!'), 1000);
  });
})();

module.exports;
