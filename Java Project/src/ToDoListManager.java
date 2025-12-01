/**
 * ToDoListManager: the main orchestrator.
 */
public class ToDoListManager<T extends TaskItem> extends AbstractListManager<T> {

    private TaskList<T> taskList;
    private UndoRedoManager<TaskList<T>> undoHistory;
    private UndoRedoManager<TaskList<T>> redoHistory;
    private Scheduler<T> scheduledTasks;
    private PriorityTaskManager<T> highPriorityTasks;
    private TaskTree<T> taskTree;

    // WRITE YOUR CODE HERE
}
