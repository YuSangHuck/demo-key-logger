public class Main {
    public static void main(String[] args) {
        KeyLogger keyLogger = new KeyLogger();
        keyLogger = null;
        System.gc();

    }
}
