export const searchOptions = (searchValue, options) => options
  .filter(({ value }) => value.toLowerCase()
    .includes(searchValue.toLowerCase()));
