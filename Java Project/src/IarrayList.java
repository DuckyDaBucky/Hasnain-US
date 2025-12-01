interface IarrayList<T> {
    void add(T item);
    T get(int index);
    void set(int index, T item);
    T removeAt(int index);
    int size();
    boolean isEmpty();
}
