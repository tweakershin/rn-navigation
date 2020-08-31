const { divide } = require("react-native-reanimated")

const sampleObj = {
  name: "ys",
  city: 'seoul',
}

const newObj = {
  ...sampleObj,
  animal: 'cat'
}
const { name } = sampleObj

function sampleFunc({ name, ...props }) {
  // props: obj
  //...props
}