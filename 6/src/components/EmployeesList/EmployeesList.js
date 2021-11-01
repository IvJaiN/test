import EmployeesListItem from "../EmployeesListItem/EmployeesListItem";

import './EmployeesList.css'

const EmployeesList = ({data, onDelete}) => {
    return (
        <ul className='employees-list'>
            {data.map(item => {
                return (
                    <EmployeesListItem
                        item={item}
                        key={item.id}
                        onDelete={() => onDelete(item.id)}
                    />
                )
            })}
        </ul>
    );
};

export default EmployeesList;
