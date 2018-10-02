
const groupBy = (fn) => (data) => {
  return data.reduce((memo, item) => {
    if (!memo.hasOwnProperty(fn(item))) {
      memo[fn(item)] = [];
    }

    memo[fn(item)] = memo[fn(item)].concat([item]);

    return memo;
  }, {});
}

const prop = (string) => (obj) => obj[string];

const groupByCategory = groupBy(prop('category'))

console.log(
  groupByCategory([
    {category: 'ciao', item: 'pippo'},
    {category: 'pippo', item: 'pluto'},
    {category: 'ciao', item: 'paperino'},
  ])
);
