/**
 * The ListItem interface defines the basic information that any item
 * (such as a TaskItem) must have in this project.
 */
interface ListItem {
    String getId();
    String getDescription();
    String getDueDate();
    int getPriority();
    String toString();
}
