import lc.kra.system.keyboard.GlobalKeyboardHook;
import lc.kra.system.keyboard.event.GlobalKeyAdapter;
import lc.kra.system.keyboard.event.GlobalKeyEvent;

import java.io.*;
import java.util.HashMap;

public class KeyLogger {
    private static boolean run = true;
    private final String logFilePath = System.getProperty("user.dir") + "/log.txt";
    private HashMap<Integer, Integer> map = new HashMap<>();
    private GlobalKeyboardHook keyboardHook;

    //    IOException[FileNotFoundException], ClassNotFoundException
    public KeyLogger() throws IOException, ClassNotFoundException {
        try {
            file2Map();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }

        // Might throw a UnsatisfiedLinkError if the native library fails to load or a RuntimeException if hooking fails
        keyboardHook = new GlobalKeyboardHook(true); // Use false here to switch to hook instead of raw input
        keyboardHook.addKeyListener(new GlobalKeyAdapter() {

            @Override
            public void keyPressed(GlobalKeyEvent event) {
            }

            @Override
            public void keyReleased(GlobalKeyEvent event) {
                int virtualKeyCode = event.getVirtualKeyCode();
                int nextValue = map.getOrDefault(virtualKeyCode, 0) + 1;
                map.put(virtualKeyCode, nextValue);
                try {
                    map2File();
                } catch (IOException e) {
                    e.printStackTrace();
                    throw new RuntimeException(e);
                }
            }
        });

        try {
            while (run) {
                Thread.sleep(128);
            }
        } catch (InterruptedException e) {
            //Do nothing
            e.printStackTrace();
        } finally {
            map2File();
            keyboardHook.shutdownHook();
        }
    }

    private void map2File() throws IOException {
        FileOutputStream fileOutputStream = new FileOutputStream(logFilePath);
        ObjectOutputStream objectOutputStream = new ObjectOutputStream(fileOutputStream);
        objectOutputStream.writeObject(map);
        objectOutputStream.close();
        fileOutputStream.close();
    }

    private void file2Map() throws IOException, ClassNotFoundException {
        FileInputStream fileInputStream = new FileInputStream(logFilePath);
        ObjectInputStream objectInputStream = new ObjectInputStream(fileInputStream);
        //        FIXME try to generify KeyLogger.java
        map = (HashMap<Integer, Integer>) objectInputStream.readObject();
        objectInputStream.close();
        fileInputStream.close();
    }
}
