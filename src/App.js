import './App.css';
  import { ToastContainer } from "react-toastify";
   import Table from './components/table/Table'
 import Form from './components/form/Form';

function App() {
  return (
    <div className="App">
      <Form />
      <Table/>
      <ToastContainer />
    </div>
  );
}

export default App;
