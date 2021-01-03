const list = {
    _archive: [],
    addTask(text) { 
        const newTask = {
            text: text,
            condition: false, 
            id: Date.now(),
        }
        this.archive.push(newTask);
        this.preservationInLocalStorage();
    },
    deleteTask(id) {
        for (let i = 0; i < this.archive.length; i++) {
            if (id === this.archive[i].id) {
                this.archive.splice(i, 1);
                this.preservationInLocalStorage();
                return this.archive[i];
            }
        }
    },
    updateTask(text, id) { 
        for (let i = 0; i < this.archive.length; i++) {
            if (id === this.archive[i].id) {
                this.archive[i].text = text;
                this.preservationInLocalStorage();
                return this.archive[i];
            }
        }
    },
    conditionTask(id) {
        for (let i = 0; i < this.archive.length; i++) {
            if (id === this.archive[i].id) {
                this.archive[i].condition = !this.archive[i].condition;
                this.preservationInLocalStorage();
                return this.archive[i];
            }
        }
    },
    get archive() {
        return this._archive;
    },
    preservationInLocalStorage() {
        localStorage.setItem("archive", JSON.stringify(this.archive))
    }
}

Object.defineProperties(list, {
    _archive: {configurable: false,},
    addTask: {configurable: false,},
    deleteTask: {configurable: false,},
    updateTask: {configurable: false,},
    conditionTask: {configurable: false,},
})

Object.freeze(list);

list.addTask('Сходить на занятие');
list.addTask('Сходить в магазин');
list.addTask('Построить дом');
list.addTask('Посадить дерево');


if (JSON.parse(localStorage.getItem("archive"))) {
            const currentTasks = JSON.parse(localStorage.getItem("archive"));
            console.log(currentTasks)
}