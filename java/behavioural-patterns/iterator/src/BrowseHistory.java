public class BrowseHistory {
    public String[] urls = new String[10];
    private int count;

    public void push(String url) {
        urls[count++] = url;
    }

    public String pop() {

        return urls[--count];
    }

    public Iterator createIterator(){
    return new ArrayIterator(this);
    }

    public class ArrayIterator implements Iterator {
        private BrowseHistory history;
        private int index;

        public ArrayIterator(BrowseHistory history) {
            this.history = history;
        }

        @Override
        public boolean hasNext() {
            return (index < history.count);
        }

        @Override
        public String current() {
            return history.urls[index];
        }

        @Override
        public void next() {
            index++;
        }

    }

    // If type of the iterator is List we can use the following code
    // If we change the type of the iterator only this BrowseHistory class will be affected. 

    // public Iterator createIterator(){
    // return new ListIterator(this);
    // }

    // public class ListIterator implements Iterator {
    // private BrowseHistory history;
    // private int index;

    // public ListIterator(BrowseHistory history) {
    // this.history = history;
    // }

    // @Override
    // public boolean hasNext() {
    // return (index < history.urls.size());
    // }

    // @Override
    // public String current() {
    // return history.urls.get(index);
    // }

    // @Override
    // public void next() {
    // index++;
    // }
    // }
}
