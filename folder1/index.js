exports.my_function = (async () => {
  return new Promise((res) => {
    console.log(`it'll take sometime folder1....`);
    setTimeout(() => res('folder1 done!'), 1000);
  });
})();

module.exports;
