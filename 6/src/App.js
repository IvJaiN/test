import {Route} from "react-router-dom";
import {useState, useEffect} from "react";

import Header from "./components/Header/Header";
import EmployeesList from "./components/EmployeesList/EmployeesList";
import AddForm from "./components/AddForm/AddForm";

import './App.css';


function App() {
    const [data, setData] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [currentId, setCurrentId] = useState(13)

    useEffect(
        () => {
            fetchData()
        }, []
    )

    async function fetchData() {
        const response = await fetch('https://reqres.in/api/users?per_page=12')
        const data = await response.json()
        const refactorData = data.data.map(item => {
            return {
                name: `${item['first_name']} ${item['last_name']}`,
                id: item.id
            }
        })
        setData([...refactorData])
    }

    const onChangeInput = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        const newItem = {
            name: inputValue,
            id: currentId
        }
        setData(data => [newItem, ...data ])
        setCurrentId(currentId + 1)
        setInputValue('')
    }

    const onDelete = (id) => {
        setData(data => data.filter(item => item.id !== id))
    }

    return (
        <div className="App">
            <Header/>
            <Route exact path='/'>
                <div className="main">
                    <h1 style={{textAlign: 'center'}}>Content main page</h1>
                </div>
            </Route>
            <Route exact path='/employees'>
                <AddForm
                    onChangeInput={onChangeInput}
                    inputValue={inputValue}
                    onSubmitForm={onSubmitForm}
                />
                <EmployeesList
                    data={data}
                    onDelete={onDelete}
                />
            </Route>
        </div>
    );
}

export default App;
