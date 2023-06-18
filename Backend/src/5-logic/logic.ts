import { CustomerModel, ICustomerModel } from "../4-models/customer-model";
import { ResourceNotFoundErrorModel, ValidationErrorModel } from "../4-models/error-models";
import { ITaskModel, TaskModel } from "../4-models/task-model";

 function getAllCustomers():Promise<ICustomerModel[]>{
    return CustomerModel.find().exec()

}

function getAllTasks():Promise<ITaskModel[]>{
    return TaskModel.find().populate("customer").exec()

}

function addTask(task:ITaskModel):Promise<ITaskModel>{
    // Validation
    const errors = task.validateSync()
    if(errors) throw new ValidationErrorModel(errors.message)

    return task.save()
}

async function deleteTask(_id:string):Promise<void> {
    const deletedId = TaskModel.findByIdAndDelete(_id).exec()
    if(!deletedId) throw new ResourceNotFoundErrorModel(_id)
}

export default {
    getAllCustomers,
    getAllTasks,
    addTask,
    deleteTask
}