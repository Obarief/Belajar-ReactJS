import Card from '../components/Card';
import PlaceContentCenter from '../components/PlaceContentCenter';
import ButtonMUI from '../components/Button';
import { useState } from 'react';

export default function Belajartodo() {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([]);

    function handleAddTask(e) {
        if (newTask === '' || newTask.trim() === '') {
            e.preventDefault();
            return setNewTask('');
        }
        e.preventDefault();
        setTasks((prevTasks) => [
            ...prevTasks,
            {
                id: Math.floor(Math.random() * Date.now()),
                name: newTask,
                completed: false,
            },
        ]);
        setNewTask(''); // agar ketika sudah submit dapat dikosongkan untuk inputnya
    }

    function handleCompleteTask(id) {
        const updateTask = tasks.map((task) => {
            if (id === task.id) {
                return {
                    ...task,
                    completed: !task.completed,
                };
            }
            return task;
        });

        setTasks(updateTask);
    }

    function handleRemoveTask(id) {
        const removeTask = tasks.filter((task) => id !== task.id);
        setTasks(removeTask);
    }

    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>Todo</Card.Title>
                <Card.Body>
                    <form>
                        <div className='flex items-center gap-x-2 w-full'>
                            {/* <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} /> */}
                            <textarea
                                className='flex-grow border border-slate-200 shadow-md px-2 py-1'
                                value={newTask}
                                onChange={(e) => setNewTask(e.target.value)}></textarea>
                            <ButtonMUI onClick={handleAddTask} text={'Add Task'} type='submit' />
                        </div>
                    </form>

                    {tasks.length > 0 ? (
                        <ol className='space-y-2 mt-4'>
                            {tasks.map((tasks) => (
                                <li key={tasks.id} className='border px-2 py-2 shadow-sm flex items-center justify-between text-overflow'>
                                    <div className='w-2/4 overflow-hidden text-overflow'>
                                        <div className='w-6 h-6 flex items-center justify-center'>{tasks.completed ? '✔' : '❌'}</div>
                                        <div className='text-justify'>{tasks.name}</div>
                                    </div>

                                    <div className='flex items-center gap-x-2 '>
                                        <button onClick={() => handleCompleteTask(tasks.id)} className='px-2 py-1 border '>
                                            {tasks.completed ? '❌' : '✔'}
                                        </button>
                                        <button onClick={() => handleRemoveTask(tasks.id)} className='px-2 py-1 border'>
                                            🗑
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    ) : null}
                </Card.Body>
                <Card.Footer>Your Tasks Count : {tasks.length}</Card.Footer>
            </Card>
        </PlaceContentCenter>
    );
}
