exports.my_function = (async () => {
  return new Promise((res, rej) => {
    console.log(`it'll take sometime folder3....`);
    setTimeout(() => res('folder3 done!'), 1000);
  });
})();

module.exports;
