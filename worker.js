{
  "meta": {
    "siteName": "JumperJunction",
    "siteUrl": "https://prashanthg05.github.io/JumperJunction/",
    "githubRepo": "JumperJunction",
    "counterApiBase": "https://jumperjunction-admin-backend.prashanthg0505.workers.dev",
    "totalVisits": 0,
    "visitsSyncedAt": null
  },
  "boards": [
    {
      "id": "arduino",
      "label": "Arduino",
      "icon": "\u2b21",
      "color": "#4ade80"
    },
    {
      "id": "esp32",
      "label": "ESP32",
      "icon": "\u25c8",
      "color": "#60a5fa"
    },
    {
      "id": "esp8266",
      "label": "ESP8266",
      "icon": "\u25c7",
      "color": "#f59e0b"
    },
    {
      "id": "raspberry-pi",
      "label": "Raspberry Pi",
      "icon": "\u25c9",
      "color": "#f87171"
    },
    {
      "id": "stm32",
      "label": "STM32",
      "icon": "\u25a3",
      "color": "#a78bfa"
    }
  ],
  "projects": [
    {
      "id": "blink-led",
      "title": "Blink LED",
      "description": "Make a single LED blink on and off. The Hello World of Arduino \u2014 every beginner starts here.",
      "board": "arduino",
      "difficulty": "beginner",
      "parts": [
        "Arduino Uno",
        "1 LED (any color)",
        "220\u03a9 resistor",
        "Breadboard",
        "Jumper wires"
      ],
      "learns": "pinMode, digitalWrite, delay, uploading code",
      "tabs": [
        {
          "id": "wiring",
          "label": "Wiring",
          "type": "table",
          "headers": [
            "From",
            "To",
            "Notes"
          ],
          "rows": [
            [
              "Arduino Pin 13",
              "LED long leg (+)",
              "Through 220\u03a9 resistor"
            ],
            [
              "LED short leg (\u2212)",
              "Arduino GND",
              "Direct wire"
            ]
          ],
          "tip": {
            "type": "tip",
            "text": "The long leg of the LED is + (positive). Always use a resistor or the LED will burn out. 220\u03a9 is the orange-orange-brown colored resistor."
          }
        },
        {
          "id": "code",
          "label": "Code",
          "type": "code",
          "content": "// Project: Blink LED\n// LED is connected to pin 13\n\nvoid setup() {\n  pinMode(13, OUTPUT);  // set pin 13 as output\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);  // turn LED ON\n  delay(1000);             // wait 1 second\n  digitalWrite(13, LOW);   // turn LED OFF\n  delay(1000);             // wait 1 second\n}"
        },
        {
          "id": "howto",
          "label": "How it works",
          "type": "steps",
          "steps": [
            "setup() runs once when Arduino starts \u2014 we set pin 13 as an output.",
            "loop() runs forever \u2014 it turns the LED on, waits 1 second, turns it off, waits 1 second, and repeats.",
            "Try changing the delay(1000) number \u2014 smaller = faster blink, larger = slower."
          ],
          "tip": {
            "type": "tip",
            "text": "Change delay(1000) to delay(200) to make it blink faster!"
          }
        }
      ]
    },
    {
      "id": "traffic-light",
      "title": "LED Traffic Light",
      "description": "3 LEDs simulate a real traffic light \u2014 red, yellow, green with proper timing.",
      "board": "arduino",
      "difficulty": "beginner",
      "parts": [
        "Arduino Uno",
        "1 Red LED",
        "1 Yellow LED",
        "1 Green LED",
        "3 \u00d7 220\u03a9 resistors",
        "Breadboard + wires"
      ],
      "learns": "variables, multiple output pins, sequence logic",
      "tabs": [
        {
          "id": "wiring",
          "label": "Wiring",
          "type": "table",
          "headers": [
            "From",
            "To",
            "LED Color"
          ],
          "rows": [
            [
              "Arduino Pin 8",
              "Red LED (+) via 220\u03a9",
              "Red"
            ],
            [
              "Arduino Pin 9",
              "Yellow LED (+) via 220\u03a9",
              "Yellow"
            ],
            [
              "Arduino Pin 10",
              "Green LED (+) via 220\u03a9",
              "Green"
            ],
            [
              "GND",
              "All LED short legs (\u2212)",
              "shared rail"
            ]
          ],
          "tip": {
            "type": "tip",
            "text": "Connect all 3 LED negative legs to the same GND rail on the breadboard, then one wire from that rail to Arduino GND."
          }
        },
        {
          "id": "code",
          "label": "Code",
          "type": "code",
          "content": "// Traffic Light: Red=8, Yellow=9, Green=10\n\nint redPin    = 8;\nint yellowPin = 9;\nint greenPin  = 10;\n\nvoid setup() {\n  pinMode(redPin,    OUTPUT);\n  pinMode(yellowPin, OUTPUT);\n  pinMode(greenPin,  OUTPUT);\n}\n\nvoid loop() {\n  // RED - stop (3 seconds)\n  digitalWrite(redPin, HIGH);\n  delay(3000);\n  digitalWrite(redPin, LOW);\n\n  // YELLOW - get ready (1 second)\n  digitalWrite(yellowPin, HIGH);\n  delay(1000);\n  digitalWrite(yellowPin, LOW);\n\n  // GREEN - go (3 seconds)\n  digitalWrite(greenPin, HIGH);\n  delay(3000);\n  digitalWrite(greenPin, LOW);\n\n  // YELLOW again (1 second)\n  digitalWrite(yellowPin, HIGH);\n  delay(1000);\n  digitalWrite(yellowPin, LOW);\n}"
        },
        {
          "id": "howto",
          "label": "How it works",
          "type": "steps",
          "steps": [
            "We give each LED its own pin number stored in a variable \u2014 easy to change later.",
            "The light sequence is: Red \u2192 Yellow \u2192 Green \u2192 Yellow \u2192 (repeat).",
            "Only one LED is ON at a time \u2014 we turn the previous one OFF before turning the next ON."
          ],
          "tip": {
            "type": "tip",
            "text": "Change the delay times to match real traffic lights in your city!"
          }
        }
      ]
    },
    {
      "id": "oled-distance",
      "title": "OLED Distance Meter",
      "description": "Shows real-time distance using ultrasonic sensor on a tiny OLED screen. Incredibly impressive for beginners!",
      "board": "arduino",
      "difficulty": "fun",
      "parts": [
        "Arduino Uno",
        "HC-SR04 Ultrasonic sensor",
        "0.96\" I2C OLED display",
        "Breadboard",
        "Jumper wires"
      ],
      "learns": "I2C communication, libraries, OLED graphics, live sensor data",
      "tabs": [
        {
          "id": "lib",
          "label": "Libraries",
          "type": "steps",
          "steps": [
            "Go to Sketch \u2192 Include Library \u2192 Manage Libraries in Arduino IDE.",
            "Search for Adafruit SSD1306 and click Install.",
            "When asked to install Adafruit GFX Library too, click Install All."
          ],
          "tip": {
            "type": "info",
            "text": "Your OLED is I2C type. It only needs 4 wires: VCC, GND, SDA, SCL."
          }
        },
        {
          "id": "wiring",
          "label": "Wiring",
          "type": "table",
          "headers": [
            "From",
            "To",
            "Notes"
          ],
          "rows": [
            [
              "OLED VCC",
              "Arduino 3.3V or 5V",
              "Most modules work on both"
            ],
            [
              "OLED GND",
              "Arduino GND",
              "\u2014"
            ],
            [
              "OLED SDA",
              "Arduino A4",
              "I2C data line"
            ],
            [
              "OLED SCL",
              "Arduino A5",
              "I2C clock line"
            ],
            [
              "Sensor VCC",
              "Arduino 5V",
              "\u2014"
            ],
            [
              "Sensor GND",
              "Arduino GND",
              "\u2014"
            ],
            [
              "Sensor TRIG",
              "Arduino Pin 9",
              "\u2014"
            ],
            [
              "Sensor ECHO",
              "Arduino Pin 10",
              "\u2014"
            ]
          ],
          "tip": {
            "type": "tip",
            "text": "SDA goes to A4 and SCL goes to A5 on Arduino Uno \u2014 these are fixed I2C pins. Don't change them!"
          }
        },
        {
          "id": "code",
          "label": "Code",
          "type": "code",
          "content": "#include <Wire.h>\n#include <Adafruit_GFX.h>\n#include <Adafruit_SSD1306.h>\n\n#define SCREEN_WIDTH 128\n#define SCREEN_HEIGHT 64\n\nAdafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);\n\nint trigPin = 9;\nint echoPin = 10;\n\nvoid setup() {\n  pinMode(trigPin, OUTPUT);\n  pinMode(echoPin, INPUT);\n  Serial.begin(9600);\n\n  if (!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {\n    Serial.println(\"OLED not found! Check wiring.\");\n    while (true);\n  }\n\n  display.clearDisplay();\n  display.setTextColor(WHITE);\n  display.setTextSize(2);\n  display.setCursor(10, 20);\n  display.print(\"Ready!\");\n  display.display();\n  delay(1500);\n}\n\nlong getDistance() {\n  digitalWrite(trigPin, LOW);\n  delayMicroseconds(2);\n  digitalWrite(trigPin, HIGH);\n  delayMicroseconds(10);\n  digitalWrite(trigPin, LOW);\n  long dur = pulseIn(echoPin, HIGH);\n  return dur * 0.034 / 2;\n}\n\nvoid loop() {\n  long dist = getDistance();\n\n  display.clearDisplay();\n  display.setTextSize(1);\n  display.setCursor(25, 5);\n  display.print(\"Distance Meter\");\n\n  display.setTextSize(3);\n  display.setCursor(10, 22);\n  display.print(dist);\n  display.print(\" cm\");\n\n  display.setTextSize(1);\n  display.setCursor(10, 52);\n  if (dist < 10) {\n    display.print(\">> VERY CLOSE <<\");\n  } else if (dist < 30) {\n    display.print(\"Close\");\n  } else {\n    display.print(\"Far away\");\n  }\n\n  display.display();\n  delay(200);\n}"
        },
        {
          "id": "howto",
          "label": "How it works",
          "type": "steps",
          "steps": [
            "We include three libraries \u2014 Wire (I2C), GFX (graphics), and SSD1306 (OLED driver).",
            "In setup() we start the OLED \u2014 if not found, a message goes to Serial Monitor.",
            "Every 200ms we read distance, clear the screen, and draw fresh title, number, and status.",
            "Always call display.display() at the end \u2014 nothing shows until you do!"
          ],
          "tip": {
            "type": "warn",
            "text": "If OLED shows nothing \u2014 change 0x3C to 0x3D in the code. Some modules use a different I2C address."
          }
        }
      ]
    },
    {
      "id": "esp32-wifi-led",
      "title": "WiFi Controlled LED",
      "description": "Control an LED from your phone browser over WiFi. ESP32 hosts a tiny web server \u2014 no internet needed!",
      "board": "esp32",
      "difficulty": "beginner",
      "parts": [
        "ESP32 Dev Board",
        "1 LED",
        "220\u03a9 resistor",
        "Breadboard",
        "Jumper wires"
      ],
      "learns": "WiFi library, web server, HTTP requests, GPIO",
      "tabs": [
        {
          "id": "wiring",
          "label": "Wiring",
          "type": "table",
          "headers": [
            "From",
            "To",
            "Notes"
          ],
          "rows": [
            [
              "ESP32 GPIO2",
              "LED long leg (+)",
              "Via 220\u03a9 resistor"
            ],
            [
              "LED short leg (\u2212)",
              "ESP32 GND",
              "Direct"
            ]
          ],
          "tip": {
            "type": "tip",
            "text": "GPIO2 has a built-in LED on most ESP32 boards \u2014 you can test without any wiring first!"
          }
        },
        {
          "id": "code",
          "label": "Code",
          "type": "code",
          "content": "#include <WiFi.h>\n#include <WebServer.h>\n\nconst char* ssid     = \"YOUR_WIFI_NAME\";\nconst char* password = \"YOUR_WIFI_PASSWORD\";\n\nWebServer server(80);\nint ledPin = 2;\nbool ledState = false;\n\nvoid handleRoot() {\n  String html = \"<html><body style='font-family:sans-serif;text-align:center;padding:40px'>\";\n  html += \"<h1>ESP32 LED Control</h1>\";\n  html += \"<p>LED is: <b>\" + String(ledState ? \"ON\" : \"OFF\") + \"</b></p>\";\n  html += \"<a href='/on'><button style='padding:20px 40px;font-size:20px;background:green;color:white'>ON</button></a> \";\n  html += \"<a href='/off'><button style='padding:20px 40px;font-size:20px;background:red;color:white'>OFF</button></a>\";\n  html += \"</body></html>\";\n  server.send(200, \"text/html\", html);\n}\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(ledPin, OUTPUT);\n\n  WiFi.begin(ssid, password);\n  while (WiFi.status() != WL_CONNECTED) {\n    delay(500);\n    Serial.print(\".\");\n  }\n  Serial.println(\"\\nConnected! IP: \" + WiFi.localIP().toString());\n\n  server.on(\"/\",    handleRoot);\n  server.on(\"/on\",  []() { ledState = true;  digitalWrite(ledPin, HIGH); handleRoot(); });\n  server.on(\"/off\", []() { ledState = false; digitalWrite(ledPin, LOW);  handleRoot(); });\n  server.begin();\n}\n\nvoid loop() {\n  server.handleClient();\n}"
        },
        {
          "id": "howto",
          "label": "How it works",
          "type": "steps",
          "steps": [
            "Replace YOUR_WIFI_NAME and YOUR_WIFI_PASSWORD with your home WiFi details.",
            "Upload code, open Serial Monitor at 115200 baud \u2014 it will print the IP address.",
            "Open that IP address in your phone or laptop browser on the same WiFi.",
            "Tap ON/OFF to control the LED remotely!"
          ],
          "tip": {
            "type": "tip",
            "text": "Your phone and ESP32 must be on the same WiFi network for this to work."
          }
        }
      ]
    },
    {
      "id": "gps_tracker",
      "title": "Arduino GPS Tracker",
      "description": "An Arduino GPS Tracker reads live GPS data and prints latitude and longitude in real time to the Serial Monitor.",
      "board": "arduino",
      "difficulty": "intermediate",
      "parts": [
        "Arduino Uno (or Nano)",
        "GPS Module (NEO-6M GPS)",
        "Breadboard",
        "Jumper Wires"
      ],
      "learns": "How to read GPS data with Arduino and display real-time location coordinates.",
      "tabs": [
        {
          "id": "tab-1775390163033",
          "label": "libraries required",
          "type": "steps",
          "content": "",
          "steps": [
            "TinyGPS++ \u2192 For parsing GPS NMEA sentences.",
            "SoftwareSerial \u2192 For Uno/Nano to create extra serial ports."
          ],
          "headers": [
            "From",
            "To",
            "Notes"
          ],
          "rows": [],
          "tip": {
            "type": "tip",
            "text": "- SoftwareSerial is less reliable at high baud rates; keep GPS at 9600 baud for stable communication."
          },
          "diagram": null
        },
        {
          "id": "tab-1775390226516",
          "label": "wiring",
          "type": "wiring",
          "content": "",
          "headers": [
            "From",
            "To",
            "Notes"
          ],
          "rows": [
            [
              "GPS TX",
              "Arduino Pin 4",
              "TX from GPS must go to RX on Arduino"
            ],
            [
              "GPS RX",
              "Arduino Pin 3",
              "RX from GPS must go to TX on Arduino"
            ],
            [
              "GPS VCC",
              "Arduino Pin 5V",
              "Ensure stable 5V supply"
            ],
            [
              "GPS GND",
              "Arduino Pin GND",
              "Common ground is essential"
            ],
            [
              "For Arduino Mega",
              "",
              ""
            ],
            [
              "GPS TX",
              "Mega Pin 16",
              "(RX2)"
            ],
            [
              "GPS RX",
              "Mega Pin 17",
              "(TX2)"
            ],
            [
              "GPS VCC",
              "Mega Pin 5V",
              ""
            ],
            [
              "GPS GND",
              "Mega Pin GND",
              ""
            ]
          ],
          "tip": {
            "type": "info",
            "text": " Always connect TX \u2192 RX and RX \u2192 TX (cross connection), GPS modules are sensitive to power; use a stable 5V supply."
          },
          "diagram": {
            "dataUrl": "data:image/webp;base64,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",
            "name": "arduino_gps_tracker.webp",
            "mimeType": "image/webp",
            "width": 1067,
            "height": 627,
            "size": 39090
          }
        },
        {
          "id": "tab-1775390254046",
          "label": "Arduino UNO or Nano code",
          "type": "code",
          "content": "#include <TinyGPS++.h>\n#include <SoftwareSerial.h>\n\nstatic const int RXPin = 4, TXPin = 3;\nstatic const uint32_t GPSBaud = 9600;\n\n// The TinyGPS++ object\nTinyGPSPlus gps;\n\n// The serial connection to the GPS device\nSoftwareSerial GPS(RXPin, TXPin);\n\nvoid setup(){\n  Serial.begin(115200);\n  GPS.begin(GPSBaud);\n}\n\nvoid loop(){\n  while (GPS.available() > 0){\n    gps.encode(GPS.read());\n    if (gps.location.isUpdated()){\n      Serial.print(\"Latitude= \"); \n      Serial.print(gps.location.lat(), 6);\n      Serial.print(\" Longitude= \"); \n      Serial.println(gps.location.lng(), 6);\n    }\n  }\n}",
          "steps": [],
          "tip": {
            "type": "info",
            "text": "On Uno/Nano, use SoftwareSerial with pins like 4 & 3, Baud rate must match GPS module (usually 9600)."
          },
          "diagram": null
        },
        {
          "id": "tab-1775390307423",
          "label": "Arduino Mega code",
          "type": "code",
          "content": "#include <TinyGPS++.h>\n#include <SoftwareSerial.h>\n\nstatic const int RXPin = 16, TXPin = 17; \nstatic const uint32_t GPSBaud = 9600;\n\n// The TinyGPS++ object\nTinyGPSPlus gps;\n\n// The serial connection to the GPS device\nSoftwareSerial GPS(RXPin, TXPin);\n\nvoid setup(){\n  Serial.begin(115200);\n  GPS.begin(GPSBaud);\n}\n\nvoid loop(){\n  while (GPS.available() > 0){\n    gps.encode(GPS.read());\n    if (gps.location.isUpdated()){\n      Serial.print(\"Latitude= \"); \n      Serial.print(gps.location.lat(), 6);\n      Serial.print(\" Longitude= \"); \n      Serial.println(gps.location.lng(), 6);\n    }\n  }\n}",
          "steps": [],
          "tip": {
            "type": "info",
            "text": "On Mega, prefer hardware Serial2 (pins 16 & 17) for reliability, Baud rate must match GPS module (usually 9600)."
          },
          "diagram": null
        },
        {
          "id": "tab-1775392151147",
          "label": "steps",
          "type": "steps",
          "content": "",
          "steps": [
            "Install TinyGPS++ library in Arduino IDE.",
            "Connect GPS module to Arduino (Uno/Nano: pins 4 & 3; Mega: pins 16 & 17).",
            "Upload the GPS tracker sketch.",
            "Open Serial Monitor at 115200 baud.",
            "Place the GPS module outdoors for satellite lock.",
            "Observe latitude and longitude updates."
          ],
          "tip": {
            "type": "info",
            "text": "Don\u2019t expect instant GPS lock; first fix may take 1\u20132 minutes, Keep Serial Monitor baud rate consistent with Serial.begin(115200), If no data appears, check wiring and try swapping RX/TX pins."
          },
          "diagram": null
        }
      ]
    }
  ]
}
