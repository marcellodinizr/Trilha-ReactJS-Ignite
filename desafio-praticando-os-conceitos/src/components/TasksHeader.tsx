import styles from './TasksHeader.module.css'

interface TasksHeaderProps {
  tasksCounter: number
  checkedTasksCounter: number
}

export function TasksHeader({ tasksCounter, checkedTasksCounter }: TasksHeaderProps) {
  return (
    <header className={styles.tasksHeader}>
      <aside>
        <p>Tarefas criadas</p>
        <span>{tasksCounter}</span>
      </aside>

      <aside>
        <p>Concluídas</p>
        <span>
          {tasksCounter === 0
            ? tasksCounter
            : `${checkedTasksCounter} de ${tasksCounter}`}
        </span>
      </aside>
    </header>
  )
}
