import './AddForm.css'

const AddForm = ({onChangeInput, inputValue, onSubmitForm}) => {
    return (
        <form
            className='add-form'
            onSubmit={onSubmitForm}
        >
            <input
                type="text"
                onChange={(e) => onChangeInput(e)}
                value={inputValue}
                placeholder='Введите имя:'
            />
            <button
                type={"submit"}
            >Добавить</button>
        </form>
    );
};

export default AddForm;
