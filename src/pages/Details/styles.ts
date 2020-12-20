import {StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 14,
  },
  imageContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionContainer: {
    flex: 1,
    padding: 20,
  },
  itemImage: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
