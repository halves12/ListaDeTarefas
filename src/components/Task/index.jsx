/* eslint-disable react/prop-types */
import './styles.scss'
import CheckIconSvg from '../../assets/check.svg'
import { Trash } from '@phosphor-icons/react'


export function Task(props){
    function handleCheckTask(){
        props.checkedTask(props.idTask)
    }

    function handleDeleteTask(){
        props.deleteTask(props.idTask)
    }

    return (
        <div className={`task ${props.checked ? 'taskChecked' : 'taskUnchecked'}`}>
            <button 
                className='checkbox'
                onClick={handleCheckTask}
            >
                <div className={props.checked ? 'radioChecked' : 'radioUnchecked'}>
                    {props.checked && <img src={CheckIconSvg} alt="Ícone de concluído" />}
                </div>
            </button>
            <p className={props.checked ? 'textChecked' : 'textUnchecked'}>
                {props.title}
            </p>
            <button
                className='deleteButton'
                onClick={handleDeleteTask}
            >
                <Trash size={20} color="#808080" weight="bold" />
            </button>
        </div>
    )
}