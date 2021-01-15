export const parseMapAddress = (street: string, city: string, state: string, country: string) => {
  return (
    (street ? street : '') + (city ? ', ' + city : '') + (state ? ', ' + state : '') + (country ? ', ' + country : '')
  );
};
