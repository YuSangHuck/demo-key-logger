import lc.kra.system.keyboard.GlobalKeyboardHook;
import lc.kra.system.keyboard.event.GlobalKeyAdapter;
import lc.kra.system.keyboard.event.GlobalKeyEvent;

import java.util.HashMap;

public class KeyLogger {
    private static boolean run = true;
    //    입력 기록(순서 상관x)
    private HashMap<Integer, Integer> map = new HashMap<>();
    private GlobalKeyboardHook keyboardHook;

    public KeyLogger() {
//        File 객체 open
//        버퍼? 버퍼쓸꺼면 죽기전에 버퍼에 있는거 File에 flush하고 close
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
            }
        });

        try {
            while (run) {
                Thread.sleep(128);
            }
        } catch (InterruptedException e) {
            //Do nothing
        } finally {
            keyboardHook.shutdownHook();
        }
    }

}
