/* eslint-disable react/prop-types */
import { useState } from 'react';
import './styles.scss';
import { PlusCircle } from "@phosphor-icons/react";

export function RegisterTask(props){
    const [textTask, setTextTask] = useState('');

    function handleCreateTask() {
        props.createTask(textTask);
        setTextTask('')
    }

    return (
        <div className='container_new_task'>
            <input 
                type="text" 
                placeholder='Adicionar uma nova tarefa'
                onChange={(event) => setTextTask(event.target.value)}
                value={textTask}
            />
            <button
                onClick={handleCreateTask}
            >
                Criar
                <PlusCircle size={15} color="#F2F2F2" weight="bold" />
            </button>
        </div>
    )
}