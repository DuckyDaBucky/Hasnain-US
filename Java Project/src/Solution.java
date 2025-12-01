import java.util.Scanner;

/* ============================
   FREEZE: Interfaces & Driver
   ============================ */

/**
 * The Solution class runs the To-Do List program.
 *
 * This program reads commands from standard input. Each line must follow
 * a specific format. The program then calls the correct method in the
 * ToDoListManager and prints the result.
 *
 * The program ends when the command "EXIT" is read.
 */

public class Solution {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ToDoListManager<TaskItem> manager = new ToDoListManager<>();

        while (sc.hasNextLine()) {
            String line = sc.nextLine();
            if (line == null) break;
            line = line.trim();
            if (line.isEmpty()) continue;

            String[] p = line.split(";", -1);
            String cmd = p[0];

            try {
                switch (cmd) {

                    case "ADD":
                        manager.addItem(new TaskItem(p[1], p[2], p[3], Integer.parseInt(p[4])));
                        System.out.println("TASK ADDED");
                        break;

                    case "UPDATE":
                        manager.updateItem(p[1], new TaskItem(p[1], p[2], p[3], Integer.parseInt(p[4])));
                        System.out.println("TASK UPDATED");
                        break;

                    case "REMOVE":
                        manager.removeItem(p[1]);
                        System.out.println("TASK REMOVED");
                        break;

                    case "DISPLAY":
                        TaskList<? extends ListItem> all = manager.getAllTasks();
                        if (all.size() == 0) System.out.println("NOT FOUND");
                        else for (int i = 0; i < all.size(); i++)
                            System.out.println(all.get(i).toString());
                        break;

                    case "SEARCH_ID":
                        ListItem found = manager.searchById(p[1]);
                        System.out.println(found == null ? "NOT FOUND" : found.toString());
                        break;

                    case "SEARCH_DESC":
                        TaskList<? extends ListItem> res = manager.searchByDescription(p[1]);
                        if (res.size() == 0) System.out.println("NOT FOUND");
                        else for (int i = 0; i < res.size(); i++)
                            System.out.println(res.get(i).toString());
                        break;

                    case "SORT_DESC":
                        manager.sortByDescription();
                        System.out.println("SORTED");
                        break;

                    case "SORT_DUE":
                        manager.sortByDueDate();
                        System.out.println("SORTED");
                        break;

                    case "SORT_PRIO":
                        manager.sortByPriority();
                        System.out.println("SORTED");
                        break;

                    case "UNDO":
                        manager.undo();
                        System.out.println("UNDO");
                        break;

                    case "REDO":
                        manager.redo();
                        System.out.println("REDO");
                        break;

                    case "COMPLETE":
                        boolean done = manager.completeTask(p[1]);
                        System.out.println(done ? "TASK COMPLETED" : "NOT FOUND");
                        break;

                    case "REMOVE_COMPLETED":
                        manager.removeCompletedTasks();
                        System.out.println("COMPLETED REMOVED");
                        break;

                    case "GET_STATUS":
                        TaskList<TaskItem> filtered = manager.getTasksByStatusSortedByPriority(p[1]);
                        if (filtered.size() == 0) System.out.println("NOT FOUND");
                        else for (int i = 0; i < filtered.size(); i++)
                            System.out.println(filtered.get(i).toString());
                        break;

                    case "BST_DFS":
                        manager.traverseBSTDFS();
                        break;

                    case "BST_BFS":
                        manager.traverseBSTBFS();
                        break;

                    case "SCHEDULE_ID":
                        System.out.println(manager.scheduleTask(p[1]) ? "TASK SCHEDULED" : "NOT FOUND");
                        break;

                    case "SCHEDULE":
                        manager.scheduleTask(new TaskItem(p[1], p[2], p[3], Integer.parseInt(p[4])));
                        System.out.println("NEW TASK SCHEDULED");
                        break;

                    case "PROCESS_NEXT":
                        TaskItem next = manager.processNextScheduledTask();
                        System.out.println(next == null ? "NOT FOUND" : next.toString());
                        break;

                    case "GET_NEXT_PRIORITY":
                        TaskItem top = manager.getNextHighPriorityTask();
                        System.out.println(top == null ? "NOT FOUND" : top.toString());
                        break;

                    case "DISPLAY_HEAP":
                        manager.displayHeap();
                        break;

                    case "EXIT":
                        System.out.println("GOODBYE");
                        sc.close();
                        return;

                    default:
                        System.out.println("UNKNOWN COMMAND");
                }

            } catch (Exception ex) {
                System.out.println("ERROR: " + ex.getMessage());
            }
        }

        sc.close();
    }
}
