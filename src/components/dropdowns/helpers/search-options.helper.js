export const searchOptions = (
  searchValue,
  options,
) => options.filter((option) => option.toLowerCase().includes(searchValue.toLowerCase()));
