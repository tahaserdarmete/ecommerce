const { Dimensions } = require('react-native');

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export { screenHeight, screenWidth };
