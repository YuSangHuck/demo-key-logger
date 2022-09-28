log = {
    "8": 1922,
    "9": 1488,
    "13": 1129,
    "16": 1534,
    "17": 2968,
    "145": 2,
    "18": 724,
    "19": 1,
    "20": 8,
    "21": 469,
    "25": 39,
    "27": 504,
    "32": 1518,
    "33": 254,
    "34": 634,
    "35": 455,
    "36": 184,
    "37": 1423,
    "38": 930,
    "39": 1974,
    "40": 960,
    "44": 2,
    "45": 6,
    "46": 92,
    "174": 27,
    "175": 69,
    "48": 158,
    "49": 326,
    "50": 193,
    "51": 239,
    "52": 69,
    "53": 42,
    "54": 47,
    "55": 26,
    "56": 31,
    "57": 85,
    "186": 29,
    "187": 10,
    "188": 99,
    "189": 105,
    "190": 114,
    "191": 39,
    "192": 35,
    "65": 791,
    "66": 129,
    "67": 454,
    "68": 1855,
    "69": 681,
    "70": 948,
    "71": 568,
    "72": 717,
    "73": 210,
    "74": 961,
    "75": 1256,
    "76": 1744,
    "77": 865,
    "78": 584,
    "79": 537,
    "80": 464,
    "81": 524,
    "82": 1201,
    "83": 1634,
    "84": 1083,
    "85": 339,
    "86": 417,
    "87": 990,
    "88": 399,
    "89": 147,
    "90": 285,
    "91": 354,
    "219": 4,
    "220": 13,
    "92": 2,
    "221": 3,
    "222": 22,
    "226": 9,
    "112": 2,
    "113": 24,
    "114": 13,
    "115": 41,
    "116": 2,
    "117": 1,
    "118": 5,
    "119": 3,
    "120": 9,
    "121": 1,
    "122": 2,
    "123": 10,
    "255": 23
}

LOOKUP = {
    0x00 : 'VK_UNDEFINED',
    0x01 : 'VK_LBUTTON', //Left mouse button
    0x02 : 'VK_RBUTTON', //Right mouse button
    0x03 : 'VK_CANCEL', //Control-break processing
    0x04 : 'VK_MBUTTON', //Middle mouse button (three-button mouse)
    0x05 : 'VK_XBUTTON1', //X1 mouse button
    0x06 : 'VK_XBUTTON2', //X2 mouse button
    0x08 : 'VK_BACK', //BACKSPACE key
    0x09 : 'VK_TAB', //TAB key
    0x0C : 'VK_CLEAR', //CLEAR key
    0x0D : 'VK_RETURN', //ENTER key
    0x10 : 'VK_SHIFT', //SHIFT key
    0x11 : 'VK_CONTROL', //CTRL key
    0x12 : 'VK_MENU', //ALT key
    0x13 : 'VK_PAUSE', //PAUSE key
    0x14 : 'VK_CAPITAL', //CAPS LOCK key
    0x15 : 'VK_KANA', //IME Kana mode
    0x15 : 'VK_HANGUEL', //IME Hanguel mode (maintained for compatibility; use VK_HANGUL)
    0x15 : 'VK_HANGUL', //IME Hangul mode
    0x17 : 'VK_JUNJA', //IME Junja mode
    0x18 : 'VK_FINAL', //IME final mode
    0x19 : 'VK_HANJA', //IME Hanja mode
    0x19 : 'VK_KANJI', //IME Kanji mode
    0x1B : 'VK_ESCAPE', //ESC key
    0x1C : 'VK_CONVERT', //IME convert
    0x1D : 'VK_NONCONVERT', //IME nonconvert
    0x1E : 'VK_ACCEPT', //IME accept
    0x1F : 'VK_MODECHANGE', //IME mode change request
    0x20 : 'VK_SPACE', //SPACEBAR
    0x21 : 'VK_PRIOR', //PAGE UP key
    0x22 : 'VK_NEXT', //PAGE DOWN key
    0x23 : 'VK_END', //END key
    0x24 : 'VK_HOME', //HOME key
    0x25 : 'VK_LEFT', //LEFT ARROW key
    0x26 : 'VK_UP', //UP ARROW key
    0x27 : 'VK_RIGHT', //RIGHT ARROW key
    0x28 : 'VK_DOWN', //DOWN ARROW key
    0x29 : 'VK_SELECT', //SELECT key
    0x2A : 'VK_PRINT', //PRINT key
    0x2B : 'VK_EXECUTE', //EXECUTE key
    0x2C : 'VK_SNAPSHOT', //PRINT SCREEN key
    0x2D : 'VK_INSERT', //INS key
    0x2E : 'VK_DELETE', //DEL key
    0x2F : 'VK_HELP', //HELP key
    0x30 : 'VK_0', //0 key
    0x31 : 'VK_1', //1 key
    0x32 : 'VK_2', //2 key
    0x33 : 'VK_3', //3 key
    0x34 : 'VK_4', //4 key
    0x35 : 'VK_5', //5 key
    0x36 : 'VK_6', //6 key
    0x37 : 'VK_7', //7 key
    0x38 : 'VK_8', //8 key
    0x39 : 'VK_9', //9 key
    0x41 : 'VK_A', //A key
    0x42 : 'VK_B', //B key
    0x43 : 'VK_C', //C key
    0x44 : 'VK_D', //D key
    0x45 : 'VK_E', //E key
    0x46 : 'VK_F', //F key
    0x47 : 'VK_G', //G key
    0x48 : 'VK_H', //H key
    0x49 : 'VK_I', //I key
    0x4A : 'VK_J', //J key
    0x4B : 'VK_K', //K key
    0x4C : 'VK_L', //L key
    0x4D : 'VK_M', //M key
    0x4E : 'VK_N', //N key
    0x4F : 'VK_O', //O key
    0x50 : 'VK_P', //P key
    0x51 : 'VK_Q', //Q key
    0x52 : 'VK_R', //R key
    0x53 : 'VK_S', //S key
    0x54 : 'VK_T', //T key
    0x55 : 'VK_U', //U key
    0x56 : 'VK_V', //V key
    0x57 : 'VK_W', //W key
    0x58 : 'VK_X', //X key
    0x59 : 'VK_Y', //Y key
    0x5A : 'VK_Z', //Z key
    0x5B : 'VK_LWIN', //Left Windows key (Natural keyboard)
    0x5C : 'VK_RWIN', //Right Windows key (Natural keyboard)
    0x5D : 'VK_APPS', //Applications key (Natural keyboard)
    0x5F : 'VK_SLEEP', //Computer Sleep key
    0x60 : 'VK_NUMPAD0', //Numeric keypad 0 key
    0x61 : 'VK_NUMPAD1', //Numeric keypad 1 key
    0x62 : 'VK_NUMPAD2', //Numeric keypad 2 key
    0x63 : 'VK_NUMPAD3', //Numeric keypad 3 key
    0x64 : 'VK_NUMPAD4', //Numeric keypad 4 key
    0x65 : 'VK_NUMPAD5', //Numeric keypad 5 key
    0x66 : 'VK_NUMPAD6', //Numeric keypad 6 key
    0x67 : 'VK_NUMPAD7', //Numeric keypad 7 key
    0x68 : 'VK_NUMPAD8', //Numeric keypad 8 key
    0x69 : 'VK_NUMPAD9', //Numeric keypad 9 key
    0x6A : 'VK_MULTIPLY', //Multiply key
    0x6B : 'VK_ADD', //Add key
    0x6C : 'VK_SEPARATOR', //Separator key
    0x6D : 'VK_SUBTRACT', //Subtract key
    0x6E : 'VK_DECIMAL', //Decimal key
    0x6F : 'VK_DIVIDE', //Divide key
    0x70 : 'VK_F1', //F1 key
    0x71 : 'VK_F2', //F2 key
    0x72 : 'VK_F3', //F3 key
    0x73 : 'VK_F4', //F4 key
    0x74 : 'VK_F5', //F5 key
    0x75 : 'VK_F6', //F6 key
    0x76 : 'VK_F7', //F7 key
    0x77 : 'VK_F8', //F8 key
    0x78 : 'VK_F9', //F9 key
    0x79 : 'VK_F10', //F10 key
    0x7A : 'VK_F11', //F11 key
    0x7B : 'VK_F12', //F12 key
    0x7C : 'VK_F13', //F13 key
    0x7D : 'VK_F14', //F14 key
    0x7E : 'VK_F15', //F15 key
    0x7F : 'VK_F16', //F16 key
    0x80 : 'VK_F17', //F17 key
    0x81 : 'VK_F18', //F18 key
    0x82 : 'VK_F19', //F19 key
    0x83 : 'VK_F20', //F20 key
    0x84 : 'VK_F21', //F21 key
    0x85 : 'VK_F22', //F22 key
    0x86 : 'VK_F23', //F23 key
    0x87 : 'VK_F24', //F24 key
    0x90 : 'VK_NUMLOCK', //NUM LOCK key
    0x91 : 'VK_SCROLL', //SCROLL LOCK key
    0xA0 : 'VK_LSHIFT', //Left SHIFT key
    0xA1 : 'VK_RSHIFT', //Right SHIFT key
    0xA2 : 'VK_LCONTROL', //Left CONTROL key
    0xA3 : 'VK_RCONTROL', //Right CONTROL key
    0xA4 : 'VK_LMENU', //Left MENU key
    0xA5 : 'VK_RMENU', //Right MENU key
    0xA6 : 'VK_BROWSER_BACK', //Browser Back key
    0xA7 : 'VK_BROWSER_FORWARD', //Browser Forward key
    0xA8 : 'VK_BROWSER_REFRESH', //Browser Refresh key
    0xA9 : 'VK_BROWSER_STOP', //Browser Stop key
    0xAA : 'VK_BROWSER_SEARCH', //Browser Search key
    0xAB : 'VK_BROWSER_FAVORITES', //Browser Favorites key
    0xAC : 'VK_BROWSER_HOME', //Browser Start and Home key
    0xAD : 'VK_VOLUME_MUTE', //Volume Mute key
    0xAE : 'VK_VOLUME_DOWN', //Volume Down key
    0xAF : 'VK_VOLUME_UP', //Volume Up key
    0xB0 : 'VK_MEDIA_NEXT_TRACK', //Next Track key
    0xB1 : 'VK_MEDIA_PREV_TRACK', //Previous Track key
    0xB2 : 'VK_MEDIA_STOP', //Stop Media key
    0xB3 : 'VK_MEDIA_PLAY_PAUSE', //Play/Pause Media key
    0xB4 : 'VK_LAUNCH_MAIL', //Start Mail key
    0xB5 : 'VK_LAUNCH_MEDIA_SELECT', //Select Media key
    0xB6 : 'VK_LAUNCH_APP1', //Start Application 1 key
    0xB7 : 'VK_LAUNCH_APP2', //Start Application 2 key
    0xBA : 'VK_OEM_1', //Used for miscellaneous characters; it can vary by keyboard. For the US standard keyboard, the ';:' key
    0xBB : 'VK_OEM_PLUS', //For any country/region, the '+' key
    0xBC : 'VK_OEM_COMMA', //For any country/region, the ',' key
    0xBD : 'VK_OEM_MINUS', //For any country/region, the '-' key
    0xBE : 'VK_OEM_PERIOD', //For any country/region, the '.' key
    0xBF : 'VK_OEM_2', //Used for miscellaneous characters; it can vary by keyboard. For the US standard keyboard, the '/?' key
    0xC0 : 'VK_OEM_3', //Used for miscellaneous characters; it can vary by keyboard. For the US standard keyboard, the '`~' key
    0xDB : 'VK_OEM_4', //Used for miscellaneous characters; it can vary by keyboard. For the US standard keyboard, the '[{' key
    0xDC : 'VK_OEM_5', //Used for miscellaneous characters; it can vary by keyboard. For the US standard keyboard, the '\|' key
    0xDD : 'VK_OEM_6', //Used for miscellaneous characters; it can vary by keyboard. For the US standard keyboard, the ']}' key
    0xDE : 'VK_OEM_7', //Used for miscellaneous characters; it can vary by keyboard. For the US standard keyboard, the 'single-quote/double-quote' key
    0xDF : 'VK_OEM_8', //Used for miscellaneous characters; it can vary by keyboard.
    0xE2 : 'VK_OEM_102', //Either the angle bracket key or the backslash key on the RT 102-key keyboard
    0xE5 : 'VK_PROCESSKEY', //IME PROCESS key
    0xE7 : 'VK_PACKET', //Used to pass Unicode characters as if they were keystrokes. The VK_PACKET key is the low word of a 32-bit Virtual Key value used for non-keyboard input methods. For more information, see Remark in KEYBDINPUT, SendInput, WM_KEYDOWN, and WM_KEYUP
    0xF6 : 'VK_ATTN', //Attn key
    0xF7 : 'VK_CRSEL', //CrSel key
    0xF8 : 'VK_EXSEL', //ExSel key
    0xF9 : 'VK_EREOF', //Erase EOF key
    0xFA : 'VK_PLAY', //Play key
    0xFB : 'VK_ZOOM', //Zoom key
    0xFC : 'VK_NONAME', //Reserved
    0xFD : 'VK_PA1', //PA1 key
    0xFE : 'VK_OEM_CLEAR' //Clear key
}

reversed = Object.keys(log).map((k) => {
    return {
        'code': k,
        'hexCode': Number(k).toString(16),
        'readable': LOOKUP[k],
        'count': log[k]
    }
})

ordered = reversed.sort((a,b) => -a.count + b.count)
