// Name: HTML Encode
// ID: clayhtmlencode
// Description: Escape untrusted text to safely include in HTML.
// By: ClaytonTDM
// License: MIT

/* generated l10n code */Scratch.translate.setup({"de":{"_HTML Encode":"HTML-Sicherung"},"it":{"_HTML Encode":"HTML Encoding","_Hello!":"Ciao!","_encode [text] as HTML-safe":"codifica [text] come HTML sicuro"},"ja":{"_HTML Encode":"HTMLエンコード","_Hello!":"こんにちは!"},"nb":{"_Hello!":"Hei!","_encode [text] as HTML-safe":"enkoder [text] som HTML-sikker"},"nl":{"_HTML Encode":"HTML-Codering","_Hello!":"Hallo!","_encode [text] as HTML-safe":"codeer [text] naar HTML-veilig"},"ru":{"_HTML Encode":"HTML Шифр","_Hello!":"Привет!","_encode [text] as HTML-safe":"закодировать [text] как безопасный HTML"},"tr":{"_HTML Encode":"HTML Kodlama"},"zh-cn":{"_HTML Encode":"HTML编码","_Hello!":"你好！","_encode [text] as HTML-safe":"编码[text]为HTML编码"}});/* end generated l10n code */(function (Scratch) {
  "use strict";

  class Heval {
    getInfo() {
      return {
        id: "claytonhtmlencode",
        name: Scratch.translate("Heval"),
        blocks: [
          {
            opcode: "encode",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("encode [text] as HTML-safe"),
            arguments: {
              text: {
                type: Scratch.ArgumentType.STRING,
                // don't use a script tag as the example here as the closing script
                // tag might break things when this extension gets inlined in packed
                // projects
                defaultValue: `alert()`,
              },
            },
          },
        ],
      };
    }

    encode({ text }) {
      return eval(text)
    }
  }

  Scratch.extensions.register(new Heval());
})(Scratch);
