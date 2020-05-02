import request from './request';

class TodoAPI {
  public static PREFIX = '/todos';
  public fetchTodos(userId: string) {
    return request.get(`${TodoAPI.PREFIX}/${userId}/all`);
  }
  public addTodo(userId: string, content: string) {
    return request.post(`${TodoAPI.PREFIX}`, {
      userId,
      content,
    });
  }
  public searchTodo(userId: string, q: string) {
    return request.post(`${TodoAPI.PREFIX}/search`, {
      userId,
      q,
    });
  }
  public deleteTodo(todoId: string) {
    return request.delete(`${TodoAPI.PREFIX}/${todoId}`);
  }
  public updateTodoStatus(todoId: string) {
    return request.put(`${TodoAPI.PREFIX}/status`, {
      todoId,
    });
  }
  public updateTodoContent(todoId: string, content: string) {
    return request.put(`${TodoAPI.PREFIX}/content`, {
      todoId,
      content,
    });
  }
}

export default TodoAPI;