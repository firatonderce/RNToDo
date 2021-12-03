const getDate = () => {
  let now = `${new Date()}`;
  return now.substring(0, now.length - 18).replace(' ', ', ');
};

export {getDate};
