import Addtask from '@/components/Addtask';
import Taskscard from '@/components/Taskscard';
import { getTasks } from '@/lib/tasks';
import React from 'react';

const TasksPage = async() => {
    const tasks = await getTasks();


    return (
        <div className='w-8/12 mx-auto my-5 space-y-5'>
            <h2>tasks : {tasks.length}</h2>
            <Addtask />
            <div className='grid grid-cols-3 gap-4'>
                {
                    tasks.map(task=> <Taskscard key={task.id} task={task} />)
                }
            </div>
        </div>
    );
};

export default TasksPage;