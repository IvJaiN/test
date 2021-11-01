import './EmployeesListItem.css'

const EmployeesListItem = ({item, onDelete}) => {

    return (
        <li className='employees-item'>
            <h3 className='employees-item__title'>{item.name}</h3>
            <div><button
                className='employees-item__btn'
                onClick={onDelete}
            >Удалить</button></div>
        </li>
    );
};

export default EmployeesListItem;
