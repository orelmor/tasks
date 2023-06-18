import express, { Request, Response, NextFunction } from "express";
import logic from "../5-logic/logic";
import { TaskModel } from "../4-models/task-model";


const router = express.Router(); // Capital R

// GET http://localhost:3001/api/customers
router.get("/customers", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const customers = await logic.getAllCustomers()
        response.json(customers)

    }
    catch (err: any) {
        next(err);
    }
});

// GET http://localhost:3001/api/tasks
router.get("/tasks", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const tasks  = await logic.getAllTasks()
        response.json(tasks)

    }
    catch (err: any) {
        next(err);
    }
});

// POST http://localhost:3001/api/tasks
router.post("/tasks", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const task = new TaskModel(request.body)
        const added = await logic.addTask(task)
        response.status(201).json(added)
    }
    catch (err: any) {
        next(err);
    }
});

// DELETE http://localhost:3001/api/tasks
router.delete("/tasks/:_id", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const _idToDelete = request.params._id
        await logic.deleteTask(_idToDelete)
        response.sendStatus(204)
    }
    catch (err: any) {
        next(err);
    }
});

export default router;
