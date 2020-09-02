const formatDate = (value: Date): string => {
  const stringDate = value.toString();
  const arrayDate = stringDate.split('-');
  const year = arrayDate[0];
  const month = arrayDate[1];
  const day = arrayDate[2].slice(0, 2);
  return `${day}/${month}/${year}`;
};

export default formatDate;
