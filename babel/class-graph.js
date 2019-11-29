module.exports = function({types: t}) {
  return {
    visitor: {
      ClassDeclaration(path) {
        console.log(path.node.id.name);
        console.log('enter');
      },
    },
  };
}
