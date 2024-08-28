export const fetcher = (...args) => fetch(...args).then(res => res.json());

export const getGroupedAndSortedData = (data, groupByKey, sortByKey) => {
  const groupedData = Object.groupBy(data, item => item[groupByKey]);

  return Object.fromEntries(
    Object.entries(groupedData).map(([groupKey, items]) => [
      groupKey,
      items.slice().sort((a, b) => (a[sortByKey] < b[sortByKey] ? -1 : a[sortByKey] > b[sortByKey] ? 1 : 0))
    ])
  );
};

export const getUserData = (users, userId) => {
  return users.find(user => user.id === userId);
}