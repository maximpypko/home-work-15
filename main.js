const list = {
    _archive: [],
    addTask(text) { 
        const newTask = {
            text: text,
            condition: false, 
            id: 12345,
        }
        this.archive.push(newTask);
        this.recordInLocalStorage();
    },
    deleteTask(id) {
        const index = this.getId(id);
        this.archive.splice(index, 1);
        this.recordInLocalStorage();

    },
    updateTask(text, id) { 
        const index = this.getId(id);
        
        this.archive[index].text = text;
        this.recordInLocalStorage();

        return this.archive[index];
    },
    conditionTask(id) {
        const index = this.getId(id);
        this.archive[index].condition = true;
        this.recordInLocalStorage();
    },
    getId(id) {
        return this.archive.findIndex((item) => item.id === id);
    },
    get archive() {
        return this._archive;
    },
    recordInLocalStorage() {
        localStorage.setItem("archive", JSON.stringify(this.archive));
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