import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  imageStyle: {
    width: 65,
    height: 65,
  },
  rowViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textwrapparStyle: {
    justifyContent: 'space-around',
    height: 90,
    width: '70%',
    paddingVertical: 15,
  },
  timeStyle: {
    fontSize: 16,
    fontWeight: '100',
    color: 'gray',
  },
  nameTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  msgTextStyle: {
    fontSize: 16,
  },
});
export default styles;
