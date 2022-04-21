(async function () {
  const keyCodes = {
    0: 'That key has no keycode',
    3: 'break',
    8: 'backspace / delete',
    9: 'tab',
    12: 'clear',
    13: 'enter',
    16: 'shift',
    17: 'ctrl',
    18: 'alt',
    19: 'pause/break',
    20: 'caps lock',
    21: 'hangul',
    25: 'hanja',
    27: 'escape',
    28: 'conversion',
    29: 'non-conversion',
    32: 'spacebar',
    33: 'page up',
    34: 'page down',
    35: 'end',
    36: 'home',
    37: 'left arrow',
    38: 'up arrow',
    39: 'right arrow',
    40: 'down arrow',
    41: 'select',
    42: 'print',
    43: 'execute',
    44: 'Print Screen / F13 (firefox)',
    45: 'insert',
    46: 'delete',
    47: 'help',
    48: '0',
    49: '1',
    50: '2',
    51: '3',
    52: '4',
    53: '5',
    54: '6',
    55: '7',
    56: '8',
    57: '9',
    58: ':',
    59: 'semicolon (firefox), equals',
    60: '<',
    61: 'equals (firefox)',
    63: 'ß',
    64: '@ (firefox)',
    65: 'a',
    66: 'b',
    67: 'c',
    68: 'd',
    69: 'e',
    70: 'f',
    71: 'g',
    72: 'h',
    73: 'i',
    74: 'j',
    75: 'k',
    76: 'l',
    77: 'm',
    78: 'n',
    79: 'o',
    80: 'p',
    81: 'q',
    82: 'r',
    83: 's',
    84: 't',
    85: 'u',
    86: 'v',
    87: 'w',
    88: 'x',
    89: 'y',
    90: 'z',
    91: 'Windows Key / Left ⌘ / Chromebook Search key',
    92: 'right window key',
    93: 'Windows Menu / Right ⌘',
    95: 'sleep',
    96: 'numpad 0',
    97: 'numpad 1',
    98: 'numpad 2',
    99: 'numpad 3',
    100: 'numpad 4',
    101: 'numpad 5',
    102: 'numpad 6',
    103: 'numpad 7',
    104: 'numpad 8',
    105: 'numpad 9',
    106: 'multiply',
    107: 'add',
    108: 'numpad period (firefox)',
    109: 'subtract',
    110: 'decimal point',
    111: 'divide',
    112: 'f1',
    113: 'f2',
    114: 'f3',
    115: 'f4',
    116: 'f5',
    117: 'f6',
    118: 'f7',
    119: 'f8',
    120: 'f9',
    121: 'f10',
    122: 'f11',
    123: 'f12',
    124: 'f13',
    125: 'f14',
    126: 'f15',
    127: 'f16',
    128: 'f17',
    129: 'f18',
    130: 'f19',
    131: 'f20',
    132: 'f21',
    133: 'f22',
    134: 'f23',
    135: 'f24',
    136: 'f25',
    137: 'f26',
    138: 'f27',
    139: 'f28',
    140: 'f29',
    141: 'f30',
    142: 'f31',
    143: 'f32',
    144: 'num lock',
    145: 'scroll lock',
    151: 'airplane mode',
    160: '^',
    161: '!',
    162: '؛ (arabic semicolon)',
    163: '#',
    164: '$',
    165: 'ù',
    166: 'page backward',
    167: 'page forward',
    168: 'refresh',
    169: 'closing paren (AZERTY)',
    170: '*',
    171: '~ + * key',
    172: 'home key',
    173: 'minus (firefox), mute/unmute',
    174: 'decrease volume level',
    175: 'increase volume level',
    176: 'next',
    177: 'previous',
    178: 'stop',
    179: 'play/pause',
    180: 'e-mail',
    181: 'mute/unmute (firefox)',
    182: 'decrease volume level (firefox)',
    183: 'increase volume level (firefox)',
    186: 'semi-colon / ñ',
    187: 'equal sign',
    188: 'comma',
    189: 'dash',
    190: 'period',
    191: 'forward slash / ç',
    192: 'grave accent / ñ / æ / ö',
    193: '?, / or °',
    194: 'numpad period (chrome)',
    219: 'open bracket',
    220: 'back slash',
    221: 'close bracket / å',
    222: 'single quote / ø / ä',
    223: '`',
    224: 'left or right ⌘ key (firefox)',
    225: 'altgr',
    226: '< /git >, left back slash',
    230: 'GNOME Compose Key',
    231: 'ç',
    233: 'XF86Forward',
    234: 'XF86Back',
    235: 'non-conversion',
    240: 'alphanumeric',
    242: 'hiragana/katakana',
    243: 'half-width/full-width',
    244: 'kanji',
    251: 'unlock trackpad (Chrome/Edge)',
    255: 'toggle touchpad',
  }

  let keyMap = {};
  try {
    keyMap = (JSON.parse(localStorage.getItem('aw2-settings-key-mapping'))) || {};
  } catch (error) {
    console.error(error);
  }

  function checkSettingsFromLocalStorage() {

    try {
      const newKeyMap = (JSON.parse(localStorage.getItem('aw2-settings-key-mapping'))) || {};
      if (JSON.stringify(newKeyMap) !== JSON.stringify(keyMap)) {
        keyMap = newKeyMap;
        updateKeymaps();
      }
    } catch (error) {
      console.error(error);
    }
    setTimeout(checkSettingsFromLocalStorage, 1000);
  }

  function saveKeyMap() {
    localStorage.setItem('aw2-settings-key-mapping', JSON.stringify(keyMap));
  }

  function loadSkills() {
    const aw2Skills = Array.from(document.querySelectorAll('[data-aw2-skill]'));
    aw2Skills.forEach(function (key) {
      if (!key.classList.contains("armory-inline")) {
        const skillId = key.getAttribute('data-aw2-skill');
        key.classList.add("armory-inline");
        const armoryElement = document.createElement("span");
        armoryElement.setAttribute('data-armory-ids', skillId);
        armoryElement.setAttribute('data-armory-size', "32");
        armoryElement.setAttribute('data-armory-embed', "skills");
        armoryElement.style.userSelect = "none";
        key.appendChild(armoryElement);
        const showKey = document.createElement("span");
        showKey.classList.add("aw2-show-key");
        showKey.textContent = key.getAttribute("data-aw2-key-mapped") || key.getAttribute("data-aw2-key");
        var observer = new MutationObserver(function (mutations) {
          showKey.textContent = key.getAttribute("data-aw2-key-mapped") || key.getAttribute("data-aw2-key");
        });
        observer.observe(key, {
          attributes: true,
          attributeFilter: ['data-aw2-key-mapped']
        });
        key.appendChild(showKey);
      }
    });

    const keyMapNotice = document.querySelector(".aw2-key-map-notice");
    if (aw2Skills.length > 0) {
      if (!keyMapNotice) {
        const keyMapNoticeParent = document.querySelector(".sidebar__right>.toc");
        const keyMapNotice = document.createElement("footer");
        keyMapNotice.classList.add("aw2-key-map-notice");
        keyMapNotice.innerHTML = "<a href=\"/key-bind-mapping\"><i class=\"fas fa-cog\"></i> Customize Key-bindings</a>";
        keyMapNoticeParent.appendChild(keyMapNotice);
      }
    } else {
      if (keyMapNotice) {
        keyMapNotice.remove();
      }
    }
  }
  loadSkills();
  function updateKeymaps() {
    const aw2Skills = Array.from(document.querySelectorAll('[data-aw2-key]'));
    aw2Skills.forEach(function (key) {
      const k = key.getAttribute('data-aw2-key');
      if (keyMap[k]) {
        hasCustomKeyMapping = true;
        key.setAttribute('data-aw2-key-mapped', keyMap[k])
      } else {
        key.removeAttribute('data-aw2-key-mapped');
      }
    });
  }
  updateKeymaps();

  const buttons = {
    1: "Mouse1",
    2: "Mouse2",
    4: "Mouse3",
    8: "Mouse4",
    16: "Mouse5"
  }

  function updateSettingsControl() {
    const settingsHook = document.querySelector('[data-aw2-settings="hook"]');
    if (settingsHook) {
      const aw2NoJsNotice = settingsHook.querySelector(".aw2-no-js-notice");
      aw2NoJsNotice.style.display = "none";
      const keyBindingList = settingsHook.querySelector(".aw2-key-binding-list");
      keyBindingList.style.display = "block";
      const aw2SkillKeySettings = Array.from(document.querySelectorAll('[data-aw2-settings-key]'));
      function skillSettingKeyDownHandler(event) {
        if (event instanceof MouseEvent) {
          if (document.activeElement === event.target) {
            event.preventDefault();
            console.log(event, event.buttons);
            if (buttons[event.buttons]) {
              const defaultKey = event.target.getAttribute("data-aw2-settings-key");
              keyMap[defaultKey] = buttons[event.buttons];
              saveKeyMap();
              event.target.value = keyMap[defaultKey];
            }
          }
        } else if (event instanceof KeyboardEvent) {
          event.preventDefault();
          if (["Shift", "Alt", "Control"].includes(event.key)) {
            return;
          }
          const defaultKey = event.target.getAttribute("data-aw2-settings-key");
          if (event.key === "Escape") {
            delete keyMap[defaultKey];
            saveKeyMap();
            event.target.value = "";
            event.target.blur();
            return;
          }
          const modifiers = [];
          if (event.ctrlKey) {
            modifiers.push("Ctrl +");
          }
          if (event.altKey) {
            modifiers.push("Alt +");
          }
          if (event.shiftKey) {
            modifiers.push("Shift +");
          }
          /*const digit = event.code.match(/^Digit(\d)$/);
          const letter = event.code.match(/^Key(\w)$/);
          if(digit){
            modifiers.push(digit[1]);
          }else if(letter){
            modifiers.push(letter[1]);
          }else if(event.key === "Dead" && event.code ==="Backquote"){
            modifiers.push("`");
          }else{
            modifiers.push(event.key);
          }*/
          const keyLabel = keyCodes[event.keyCode];
          if (keyLabel.includes(" ")) {
            modifiers.push('(' + keyLabel + ')');
          } else {
            modifiers.push(keyLabel);
          }


          keyMap[defaultKey] = modifiers.join(" ");
          saveKeyMap();
          event.target.value = keyMap[defaultKey];
        }
      }
      aw2SkillKeySettings.forEach(function (aw2SkillKeySettingInput) {
        aw2SkillKeySettingInput.addEventListener("keydown", skillSettingKeyDownHandler);
        aw2SkillKeySettingInput.addEventListener("mousedown", skillSettingKeyDownHandler);
        const key = aw2SkillKeySettingInput.getAttribute("data-aw2-settings-key");
        aw2SkillKeySettingInput.setAttribute("placeholder", key);
        if (keyMap[key]) {
          aw2SkillKeySettingInput.value = keyMap[key];
        }
      });
    } else {
      checkSettingsFromLocalStorage();
    }
  }
  updateSettingsControl();
})();