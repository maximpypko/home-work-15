const list = {
    _archive: [],
    addTask(text) { 
        const newTask = {
            text: text,
            condition: false, 
            id: Date.now(),
        }
        this.archive.push(newTask);
        this.recordInLocalStorage();
    },
    deleteTask(id) {
        for (let i = 0; i < this.archive.length; i++) {
            if (id === this.archive[i].id) {
                this.archive.splice(i, 1);
                this.recordInLocalStorage();
                return this.archive[i];
            }
        }
    },
    updateTask(text, id) { 
        for (let i = 0; i < this.archive.length; i++) {
            if (id === this.archive[i].id) {
                this.archive[i].text = text;
                this.recordInLocalStorage();
                return this.archive[i];
            }
        }
    },
    conditionTask(id) {
        for (let i = 0; i < this.archive.length; i++) {
            if (id === this.archive[i].id) {
                this.archive[i].condition = !this.archive[i].condition;
                this.recordInLocalStorage();
                return this.archive[i];
            }
        }
    },
    get archive() {
        return this._archive;
    },
    recordInLocalStorage() {
        localStorage.setItem("archive", JSON.stringify(this.archive))
    },
    getLocalStorageContent() {
        if (JSON.parse(localStorage.getItem("archive"))) {
            this.archive= JSON.parse(localStorage.getItem("archive"));
        }
        return this.archive;
    }
}

Object.defineProperties(list, {
    _archive: {configurable: false,},
    addTask: {configurable: false,},
    deleteTask: {configurable: false,},
    updateTask: {configurable: false,},
    conditionTask: { configurable: false,},
    recordInLocalStorage: { configurable: false,} ,
    getLocalStorageContent: { configurable: false,},
})

Object.freeze(list);

list.getLocalStorageContent();