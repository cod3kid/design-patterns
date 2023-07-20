class TextEditorMemento {
  constructor(content) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }
}

class TextEditor {
  constructor() {
    this.content = "";
    this.history = [];
  }

  type(text) {
    this.content += text;
  }

  save() {
    const memento = new TextEditorMemento(this.content);
    this.history.push(memento);
  }

  undo() {
    this.history.pop();
    const historyLength = this.history.length;
    if (historyLength) {
      this.content = this.history[historyLength - 1].getContent();
    } else {
      this.content = "";
    }
  }

  getContent() {
    return this.content;
  }
}

const editor = new TextEditor();

editor.type("Hello, ");
editor.save();

editor.type("world!");
editor.save();

console.log(editor.getContent());

editor.undo();
console.log(editor.getContent());

editor.undo();
console.log(editor.getContent());
