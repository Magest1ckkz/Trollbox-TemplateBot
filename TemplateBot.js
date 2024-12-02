const io = require("socket.io-client");
const socket = io("https://www.windows93.net:8086", {
	forceNew: true,
	transportOptions: {
		polling: {
			extraHeaders: {
				"Accept": "*/*",
				"Accept-Encoding": "identity",
				"Accept-Language": "*",
				"Cache-Control": "no-cache",
				"Connection": "keep-alive",
				"Cookie": "",
				"Host": "https://websim.ai/p/wgpgz67iiiobt9tlw2yp/51",
				"Origin": "http://www.windows93.net",
				"Pragma": "no-cache",
				"Referer": 'http://www.windows93.net/trollbox/index.php',
				"User-Agent": "Mozilla/5.0 (X11; windows x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36"
			}
		}
	}
});

        socket.emit("user joined", "BotTemplate", "lime", "", "");

        socket.on("message", function(data) {

            if (data.msg == "t!hello") {
                socket.send("Hello, "+data.nick+"!")
            }

            })
