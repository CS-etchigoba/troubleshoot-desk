const troubleshootingCases = [
  {
    id: 1,
    title: "Monitor shows no signal",
    category: "Hardware",
    description: "The computer is powered on, but the monitor has no picture.",
    symptoms: [
      "The monitor displays a 'No signal' message.",
      "The computer's power light is on."
    ],
    steps: [
      "Confirm that the monitor is powered on.",
      "Check that the display cable is securely connected at both ends.",
      "Select the monitor input that matches the connected cable.",
      "If available, test with another display cable or monitor."
    ],
    resolution:
      "If the picture returns, the last change helps identify the cause. If it does not, further hardware diagnosis may be needed.",
    keywords: ["screen", "display", "HDMI", "DisplayPort", "black screen"]
  },
  {
    id: 2,
    title: "An application will not open",
    category: "Software",
    description: "An installed application fails to launch.",
    symptoms: [
      "Clicking the application produces no visible window.",
      "The application closes immediately or displays an error."
    ],
    steps: [
      "Record any error message before closing it.",
      "Check whether the application is already running in Task Manager.",
      "Save other work, then restart the computer and try again.",
      "Check the application's documentation for system requirements and repair options."
    ],
    resolution:
      "Confirm that the application opens and its main features work. If the problem continues, use the recorded error message to guide further investigation.",
    keywords: ["program", "launch", "crash", "startup", "error"]
  },
  {
    id: 3,
    title: "Connected to Wi-Fi but no internet",
    category: "Networking",
    description: "The device is connected to Wi-Fi, but websites will not load.",
    symptoms: [
      "The device reports 'No internet'.",
      "Multiple websites fail to load."
    ],
    steps: [
      "Try several websites to determine whether only one is unavailable.",
      "Check whether another device on the same network can access the internet.",
      "Disconnect from Wi-Fi, reconnect, and check for a network sign-in page.",
      "If multiple devices are affected, check for a service outage or contact the network administrator."
    ],
    resolution:
      "Confirm that multiple websites load. A problem affecting only one device suggests a different cause than a problem affecting the whole network.",
    keywords: ["wireless", "connection", "offline", "network", "Wi-Fi"]
  },
  {
    id: 4,
    title: "Application cannot reach its license server",
    category: "Licensing",
    description: "An application reports that its license server is unavailable.",
    symptoms: [
      "A license server connection error appears.",
      "The application cannot complete its license check."
    ],
    steps: [
      "Record the exact licensing error message.",
      "Confirm that the device is connected to the required network or authorized VPN.",
      "Compare the configured server address and port with the administrator's documentation.",
      "Ask the administrator to verify server availability and license availability."
    ],
    resolution:
      "Reopen the application after the connection issue is addressed and confirm that it obtains a valid license.",
    keywords: ["activation", "license", "server", "VPN", "connection"]
  }
];