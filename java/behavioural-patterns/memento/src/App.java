public class App {
    public static void main(String[] args) throws Exception {
        var editor = new Editor();
        var history  = new History();

        editor.setContent("a");
        history.push(editor.createState());

        editor.setContent("b");
        history.push(editor.createState());

        editor.setContent("c");
        history.push(editor.createState());

        editor.restore(history.pop());      

        System.out.println(editor.getContent());

    }
}
