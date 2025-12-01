public interface IlinkedList<T> {
    void addFirst(T item);
    void addLast(T item);
    T removeFirst();
    int size();
    boolean isEmpty();
}
