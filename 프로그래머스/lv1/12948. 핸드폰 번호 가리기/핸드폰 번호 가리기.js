const solution = (i) => {
  const star = '*'.repeat(i.length-4);
  return star + i.slice(-4);
};