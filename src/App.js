
import './App.css';
import { useState } from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
function App() {

  const [data, setdata] = useState()

  const [list, setlist] = useState([])

  const [show, setshow] = useState(false)
  const [index, setindex] = useState()

  function handleAdd() {
    setlist([...list, data])
    setdata("")
  }

  const handeldelete = (index) => {
    const del = list.filter((item, i) => i !== index)
    setlist(del)
  }

  function handleEdit(i) {

    setdata(list[i])
    setshow(true)
    setindex(i)

  }

  function handleupdate(){
    list.splice(index,1,data)
    setlist([...list])
    setdata("")
    setshow(false)
  }

  return (
    <div className="App">

        <h1>create empolyee</h1>
        <br/>
        <div className='inputt'>
        <input value={data} onChange={(e) => setdata(e.target.value)} placeholder='enter the name' />
        {
          !show ? <Button variant="success " onClick={handleAdd} className="mb-2 sm">Add</Button> :
            <Button variant="primary" className='sm' onClick={handleupdate}> Update</Button>
        }
       </div>
   
      <div className='table' >
        <Table size="sm" striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th colSpan={2}> Name</th>

              <th>Functions</th>

            </tr>
          </thead>
          <tbody>
            {
              list.map((item, i) => (
                <tr>
                  <td>{i}</td>
                  <td colSpan={2}>{item}</td>
                  <td> <Button className='btn' variant="warning" onClick={() => handleEdit(i)} >Edit</Button>{' '}
                    <Button variant="danger" onClick={() => handeldelete(i)} >Delete</Button>{' '}
                  </td>
                </tr>

              ))
            }
          </tbody>

        </Table>

      </div>

    </div>



  );
}

export default App;
