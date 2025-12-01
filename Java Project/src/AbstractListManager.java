public abstract class AbstractListManager<T extends ListItem> {

    public abstract void addItem(T item);
    public abstract void removeItem(String taskID);
    public abstract void updateItem(String taskID, T newItem);

    public abstract boolean completeTask(String id);
    public abstract void removeCompletedTasks();

    public abstract T searchById(String taskID);
    public abstract TaskList<T> searchByDescription(String keyword);
    public abstract TaskList<T> getTasksByStatusSortedByPriority(String status);
    public abstract TaskList<T> getAllTasks();

    public abstract void sortByDescription();
    public abstract void sortByDueDate();
    public abstract void sortByPriority();

    public abstract void undo();
    public abstract void redo();

    public abstract boolean scheduleTask(String taskID);
    public abstract void scheduleTask(T task);
    public abstract ListItem processNextScheduledTask();

    public abstract void traverseBSTDFS();
    public abstract void traverseBSTBFS();

    public abstract T getNextHighPriorityTask();
    public abstract void displayHeap();
}
