import { revalidatePath } from "next/cache";
import { postTask } from "./tasks";
import { redirect } from "next/navigation";




export const addATask = async (formData) => {
    "use server"

    // const title = formData.get('title');
    // const priority = formData.get('priority');
    // const status = formData.get('status');
    // const category = formData.get('category');
    // const description = formData.get('description');

    // const newtask = {
    //     title,
    //     priority,
    //     status,
    //     category,
    //     description
    // }

    const newTask = Object.fromEntries(formData.entries())

    console.log('adding a task with name:', newTask);

    const res = await postTask(newTask);
    if(res.ok){
        revalidatePath('/task')
    }
    return res;


}



export const newtaskAction = async (formData) => {
    'use server'

    const newTask = Object.fromEntries(formData.entries());
    console.log('adding a task with name:', newTask);

    const res = await postTask(newTask);
    if(res.ok){
        revalidatePath('/task');
        redirect('/task')
    }

}









