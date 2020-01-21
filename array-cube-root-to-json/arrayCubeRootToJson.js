
const cuberoot = (result,cube) => {
  result[cube] = cube !== Infinity ? Math.cbrt(parseInt(cube)) : Infinity
  return result;
}; 

const isIntegerOrInfinity = (value) => (Number.isInteger(parseInt(value)) || value === Infinity);

function arrayCubeRootToJson(cubes) {
  if(Array.isArray(cubes) && !cubes.every(isIntegerOrInfinity)){
    throw new Error(`Expected an Array of Integers. Received a ${typeof cube} and Integer : ${cubes.every(Number.isInteger)}`);
  }
  const result = cubes.reduce(cuberoot,{});
  return result
}

export {
  arrayCubeRootToJson,
};
