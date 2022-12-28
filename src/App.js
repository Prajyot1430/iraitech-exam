import logo from './logo.svg';
import './App.css';
import MissingNumber from './Component/MissingNumber';
import PhoneBook from './Component/PhoneBook';
import HomeModule from './Component/HomeModule';
import DynamicComponents from './Component/DynamicComponents';

function App() {
  return (
    <>
      <h2>Prajyot Rajpure - IRAITECH EXAM</h2>
      <MissingNumber />
      <DynamicComponents />
      <PhoneBook />
      <HomeModule />
    </>
  );
}

export default App;
