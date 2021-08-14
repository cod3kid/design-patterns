public class App {
    public static void main(String[] args) throws Exception {
        var history = new BrowseHistory();

        history.push("a");
        history.push("b");
        history.push("c");
        Iterator iterator = history.createIterator();
        while(iterator.hasNext()){
            var url = iterator.current();
            System.out.println(url);
            iterator.next();
        }
    }
}
