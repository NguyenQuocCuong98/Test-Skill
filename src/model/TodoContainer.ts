class TodoContainer {
  text: string;
  id: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}
export default TodoContainer;
