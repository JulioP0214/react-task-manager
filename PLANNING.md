# Task Manager Project Planning

## User Stories

1. As a user, I want to add a new task so that I can keep track of things I need to complete.

2. As a user, I want to mark a task as completed so that I can see which tasks I have finished.

3. As a user, I want to delete a task so that I can remove tasks I no longer need.

4. As a user, I want to filter my tasks by all, completed, or incomplete so that I can easily find the tasks I need.

---

## Todo Page Wireframe

```text
----------------------------------------------------------
| TASK MANAGER                     Todos      Contact     |
----------------------------------------------------------
|                                                        |
|                    My Todo List                        |
|                                                        |
|       [ Enter a new task__________ ] [ Add Task ]      |
|                                                        |
|        [ All ] [ Completed ] [ Incomplete ]            |
|                                                        |
| ----------------------------------------------------   |
| ☐  Finish homework                         [ Delete ]   |
| ----------------------------------------------------   |
| ☑  Study React                             [ Delete ]   |
| ----------------------------------------------------   |
| ☐  Complete project                        [ Delete ]   |
| ----------------------------------------------------   |
|                                                        |
----------------------------------------------------------
```

## Contact Page Wireframe

```text
----------------------------------------------------------
| TASK MANAGER                     Todos      Contact     |
----------------------------------------------------------
|                                                        |
|                     Contact Us                         |
|                                                        |
| First Name                                             |
| [_______________________________]                      |
|                                                        |
| Last Name                                              |
| [_______________________________]                      |
|                                                        |
| Email                                                  |
| [_______________________________]                      |
|                                                        |
| Comments                                               |
| [_______________________________]                      |
| [_______________________________]                      |
|                                                        |
|                  [ Submit ]                            |
|                                                        |
----------------------------------------------------------
```

## Application State Tree

```text
App State
├── todos
│ ├── id
│ ├── text
│ └── completed
└── filter
└── "all" / "completed" / "incomplete"
```

## Contact Form State

```Text
Contact Form State
├── firstName
├── lastName
├── email
└── comments
```

## Components

### Container Components

- App
- TodoPage
- ContactPage

### Presentational Components

- Navbar
- TodoItem
