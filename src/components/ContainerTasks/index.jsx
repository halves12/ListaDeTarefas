
import { ClipboardText } from '@phosphor-icons/react';
import { Task } from '../Task';
import './styles.scss';

export function ContainerTasks(props){
    const createdTasksLength = props.tasks.length;

    // reduce = percorrer um array
    // retorna: acc (acumulador): para acompanhar o número total de tarefas concluídas até o momento
    // retorna: task: a tarefa atual que está sendo avaliada/percorrida
    const tasksCompleted = props.tasks.reduce((acc, task) => {
        /*
            Se a tarefa estiver conluída (task.checked for true),
            entao incrementamos o value do acumulador em 1. Ou seja, estamos contando mais 1 tarefa concluida
        */
       if(task.checked) {
        return acc + 1
       }
       return acc;
    }, 0)

    return (
        <div className="container-tasks">
            {/* Informacoes da tarefa */}
            <div className="tasks-info">
                <div className="task-created">
                    <strong>Tarefas criadas</strong>
                    <span>{createdTasksLength}</span>
                </div>
                <div className="task-done">
                    <strong>Concluídas</strong>
                    <span>{tasksCompleted} de {createdTasksLength}</span>
                </div>
            </div>
            {/* tasks/tarefas */}
            {createdTasksLength ? props.tasks.map(task => (
                <Task 
                    key={task.id}
                    idTask={task.id}
                    title={task.titleTask}
                    checked={task.checked}
                    checkedTask={props.checkedTask}
                    deleteTask={props.deleteTask}
                />

            )) : (
                <div className="containerEmptyTasks">
                    <ClipboardText size={56} color="#808080" weight="regular" />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            )}
        </div>
    )
}