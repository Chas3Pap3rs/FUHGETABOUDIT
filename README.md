# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


* Chase Poulton

* A simple GTA/Mobster themed To-Do List (task manager) with a fun puzzle aspect for gaining access.
    - fuhgetaboudit.net

* Use details and functionality: Access the todo-list, if you can. If you ain't "made" (ie: part of the family) then    you're a rat. Tasks and related states save locally, you must know the passphrase to access the "To-Do" list. 

* Tech Used: HTML, CSS, JS, React, Vite, React Router, Drag and Drop, Bootstrap, Google Fonts, CDN Fonts, and Font Awesome.

* Ideas for future improvement (minimum of 3)
    1. Improve drag and drop feature, along with audio details (clips) that play when a card is dropped (with the ability to mute all audio on page)
    2. Add more security to the passphrase and todo-list page so that the passphrase can't be found or bypassed to access the todo-list page
    3. Add more features like different view options, time and date deadlines on tasks that have visual effects (and backend data) that automate's these state changes if the task is not completed in time.

Other Requirements/Deliverables:

    User stories:
        1. John Doe heard about the website from a friend and is curious, so he checks it out. Realizing there is a passcode, and having no technical experience or knowledge tries to “create an account”. The only option John sees is to “Join The Family” so he clicks on it. This prompts a contact form that he fills out and sends. After sending he notices a “secret passphrase” is given to him. So he clicks “I’m Made” and is presented a prompt to input the passphrase. He puts in the passphrase and successfully accesses the “Hit List” to do list where he can save tasks locally.
        2. Jane Doe is told about the website and goes to check it out, hearing it seems like a secretive app and/or puzzle. Having technical knowledge, she uses inspect on her browser and can see the pathways by looking through the sources. Instead of using the interface she simply types the /todo-list pathway in her URL browser input and discovers the passphrase is not needed if the pathway is known. 
        3. Jim Doe finds the website/app and looks around a bit. Having no technical knowledge he doesn’t know how to bypass the passphrase. Not finding a sign-up button and not wanting to send a message via the contact form, Jim never finds the passphrase and leaves the site/app thinking nothing of it.

    Wireframes:
        
    State Tree:
        App
        - BrowserRouter
        - Routes
            - Route (path='/')
            - Home
            - Route (path='/todo-list')
            - TodoList
            - Route (path='/contact')
            - ContactForm
        - DndProvider
        Home
            - audioRef (ref)
            - playAudio
            - modalOpen (state)
            - toggleContactForm
            - showAlert (state)
            - toggleAlert
            - AccessPass (function)
            - showPassphraseForm (state)
            - handleShowPassphraseForm
            - togglePassphraseForm
        ContactForm (props)
            - state (from useForm)
            - showFirstAlert (state)
            - showSecondAlert (state)
            - handleFormSubmit
            - handleFirstAlertClose
            - handleSecondAlertClose
        PassphraseForm (props)
            - passphrase (state)
            - showRatSmelt (state)
            - handlePassphraseChange
            - handleCloseAlert
            - handleSubmit
        CustomAlert (props)
            - message (props)
            - type (props)
            - onClose
        TodoList (useState, useEffect)
            - modal (state)
            - taskList (state)
            - modalOpen (state)
            - deleteTask
            - updateListArray
            - toggle
            - toggleContactForm
            - saveTask
            - handleSetCompleted
            - handleCardDrop
        CreateTask (props)
            - taskName (state)
            - description (state)
            - handleChange
            - handleSave
            - handleToggle
        Card (props, useState, useEffect)
            - modal (state)
            - completed (state)
            - toggle
            - updateTask
            - handleDelete
            - handleCompletedClick
            - handleCardHeaderClick
            - handleCardDetailsClick
            - isDragging (from useDrag)
    
    Container and presentational components from the planning phase:
        - Home
            - Contact Form (Modal)
            - Passphrase Form  (form container)
        - TodoList
            - Contact Form (Modal)
            - Tasks (Cards) (In Task Container)
            - Create Task (and Edit Task)

    