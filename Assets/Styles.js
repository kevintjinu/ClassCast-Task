import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1 / 3,
    flexDirection: 'row',
    marginTop: 35,
    marginLeft: 20,
  },
  headerView: {
    flex: 1,
  },
  video: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 15,
    marginHorizontal: 15,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 10,
    borderColor: '#171717',
    borderWidth: 1,
  },
  text: {
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 18,
    fontFamily: 'OpenSans',
    margin: 20,
  },
  intro: {
    lineHeight: 25,
    fontSize: 18,
    color: '#808080',
    textAlign: 'justify',
  },
  separator: {
    marginTop: 20,
    marginHorizontal: 15,
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#222222',
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginVertical: 5,
  },
  button: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#0D66B5',
    marginRight: 16,
    marginLeft: 16,
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    height: 55,
  },
  topics: {
    flex: 1,
    margin: 10,
    marginTop: 15,
    borderColor: 'black',
    backgroundColor: '#F3FAFF',
    borderRadius: 10,
    elevation: 3,
  },
  icon: {
    padding: 5,
    justifyContent: 'center',
  },
});

export default styles;
