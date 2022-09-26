import javax.swing.*;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.io.File;
import java.util.HashMap;

//FIXME JFrame을 쓰면 해당 윈도우가 활성화 된 경우만 로그 수집
//FIXME 비정상 종료는 finalize로 대응 가능하지만, 정상종료에 해당되는 hook 필요
public class KeyLogger extends JFrame implements KeyListener {
//    File 객체
    private File file;
//    입력 기록(순서 상관x)
    private HashMap<Integer, Integer> map;

    public KeyLogger() {
//        File 객체 open
//        버퍼? 버퍼쓸꺼면 죽기전에 버퍼에 있는거 File에 flush하고 close
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setSize(500, 500);
        this.setLayout(null);
        this.setVisible(true);
        this.addKeyListener(this);
    }

    @Override
    protected void finalize() throws Throwable {
        System.out.println("finalize");
//        map
        super.finalize();
    }

    @Override
    public void keyTyped(KeyEvent e) {

    }

    @Override
    public void keyPressed(KeyEvent e) {

    }

    @Override
    public void keyReleased(KeyEvent e) {
        System.out.println("keyReleased::e.getKeyCode(): " + e.getKeyCode());
    }
}
