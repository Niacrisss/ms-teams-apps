import React, { useState } from "react";
import { Trash2, Plus, CheckCircle2, Circle } from 'lucide-react';
import * as teamsJs from "@microsoft/teams-js";
import "./App.css";

interface Task {
  id: string,
  title: string,
  description: string,
  completed: boolean,
  createdAt: number
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTask, setNewTask] = useState({title: '', description: ''});

  React.useEffect(() => {
    (async () => {
      teamsJs.app.initialize().then(() => {
       
      });
    })();
  }, []);

  const addTask = () => {
    if (!newTask.title.trim()) return;

    const task: Task = {
      id: Date.now().toString(),
      title: newTask.title,
      description: newTask.description,
      completed: false,
      createdAt: Date.now(),
    };

    setTasks([task, ...tasks]);
    setNewTask({ title: '', description: '' });
    setShowAddForm(false);
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const pendingTasks = tasks.filter(t => !t.completed);
  const completedTasks = tasks.filter(t => t.completed);

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="app-container">
      <div className="header">
        <div className="header-content">
          <div>
            <h1 className="header-title">Team Task Board</h1>
            <p className="header-subtitle"></p>
          </div>
          <button onClick={()=> setShowAddForm(!showAddForm)} className="btn-add">
            <Plus size={20} />
            Add Task
          </button>
        </div>
      </div>
      <div className="content">
        {showAddForm && (
          <div className="add-task-form">
            <h2 className="form-title">New Task</h2>
            <input
              type="text"
              placeholder="Task title"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              className="input-title"
              autoFocus
            />
            <textarea
              placeholder="Description (optional)"
              value={newTask.description}
              onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
              className="input-description"
              rows={3}
            />
            <div className="form-actions">
              <button onClick={addTask} className="btn-submit">
                Add Task
              </button>
              <button
                onClick={() => {
                  setShowAddForm(false);
                  setNewTask({ title: '', description: '' });
                }}
                className="btn-cancel"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {tasks.length === 0 ? (
          <div className="empty-state">
            <Circle size={48} className="empty-icon" />
            <h3 className="empty-title">No tasks yet</h3>
            <p className="empty-text">Get started by adding your first task</p>
          </div>
        ) : (
          <div className="tasks-list">
            {tasks.map((task) => (
              <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                <div className="task-content">
                  <button onClick={() => toggleTask(task.id)} className="btn-toggle">
                    {task.completed ? (
                      <CheckCircle2 size={24} className="icon-completed" />
                    ) : (
                      <Circle size={24} />
                    )}
                  </button>
                  
                  <div className="task-details">
                    <h3 className={`task-title ${task.completed ? 'task-title-completed' : ''}`}>
                      {task.title}
                    </h3>
                    {task.description && (
                      <p className="task-description">{task.description}</p>
                    )}
                    <p className="task-timestamp">
                      {new Date(task.createdAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>

                  <button onClick={() => deleteTask(task.id)} className="btn-delete">
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
