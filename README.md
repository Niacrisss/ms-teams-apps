# Microsoft Teams Apps Collection

A collection of Microsoft Teams applications including tabs, bots, meeting extensions, message extensions, and more. Built using the Microsoft 365 Agents Toolkit and Teams JavaScript SDK.

## 📁 Repository Structure

This repository contains multiple Microsoft Teams applications organized in the samples folder:
```
ms-teams-apps/
├── samples/
│   ├── tab-todo/          # Task management tab app
│   └── (future projects will go here)
├── LICENSE
├── .gitignore
└── README.md
```

### [Team Task Board](./samples/tab-todo) - Personal Tab
A simple task management application for Microsoft Teams.
- ✅ Create and manage tasks
- ✅ Mark tasks as complete
- ✅ Clean, modern interface
- **Status**: ✅ Complete

### Help Desk Bot *(Coming Soon)*
AI-powered help desk bot for team support.
- 🤖 Automated responses
- 📊 Ticket management
- **Status**: 🔄 Planned

### Meeting Notes Extension *(Coming Soon)*
Capture and share meeting notes directly in Teams.
- 📝 Real-time note taking
- 🔗 Link to meeting recordings
- **Status**: 🔄 Planned

### Message Extension *(Coming Soon)*
Quick actions and searches via the compose box.
- 🔍 Search external data
- ⚡ Quick actions
- **Status**: 🔄 Planned

## 🛠️ Technology Stack

- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **Teams SDK**: @microsoft/teams-js
- **Development**: Microsoft 365 Agents Toolkit
- **Styling**: CSS / Tailwind CSS

## 📋 Prerequisites

To run any of these apps locally, you'll need:

- [Node.js](https://nodejs.org/) (version 20 or higher)
- [Microsoft 365 account for development](https://docs.microsoft.com/microsoftteams/platform/toolkit/accounts)
- [Microsoft 365 Agents Toolkit VS Code Extension](https://aka.ms/teams-toolkit) (version 6.0.0+)
- [Visual Studio Code](https://code.visualstudio.com/)

## 🚦 Getting Started

### For any individual app:

1. Navigate to the app folder:
```bash
   cd app-folder-name
```

2. Open in VS Code:
```bash
   code .
```

3. Press `F5` to start debugging
   - Select `Debug in Teams (Edge)` or `Debug in Teams (Chrome)`

4. When Teams launches, click **Add** to install the app

See each app's individual README for specific setup instructions.

## 📚 App Types Covered

This repository demonstrates various Microsoft Teams extensibility options:

### ✅ Tabs
- **Personal Tabs**: Apps for individual users (like the Task Board)
- **Channel/Group Tabs**: Collaborative apps for teams
- **Configurable Tabs**: Customizable team apps

### 🤖 Bots
- **Chat Bots**: Conversational interfaces
- **Command Bots**: Action-based interactions
- **Notification Bots**: Proactive messaging

### 💬 Message Extensions
- **Search Commands**: Query external systems
- **Action Commands**: Quick data entry
- **Link Unfurling**: Rich previews of URLs

### 📞 Meeting Extensions
- **Meeting Tabs**: In-meeting experiences
- **Meeting Sidepanel**: Additional meeting tools
- **Meeting Stage**: Shared collaborative content

### 🔗 Connectors & Webhooks
- **Incoming Webhooks**: Send data to Teams
- **Office 365 Connectors**: Interactive cards

## 🎯 Learning Resources

- [Microsoft Teams Developer Documentation](https://learn.microsoft.com/microsoftteams/platform/)
- [Teams Toolkit Documentation](https://learn.microsoft.com/microsoftteams/platform/toolkit/teams-toolkit-fundamentals)
- [Teams JavaScript SDK](https://learn.microsoft.com/javascript/api/overview/msteams-client)
- [Adaptive Cards Designer](https://adaptivecards.io/designer/)
- [Teams App Samples](https://github.com/OfficeDev/Microsoft-Teams-Samples)

## 🔧 Common Tasks

### Create a new app
```bash
# Use Teams Toolkit in VS Code
# 1. Ctrl+Shift+P → "Teams: Create a new app"
# 2. Follow the prompts
# 3. Save in a new folder within this repo
```

### Deploy to Azure
Each app can be deployed to Azure:
1. Open the app in VS Code
2. Use Teams Toolkit to provision resources
3. Deploy the code to Azure

See individual app READMEs for deployment instructions.

### Collaborate
To work on these apps with a team:
1. Clone this repository
2. Follow setup instructions for the specific app
3. Create feature branches for new work
4. Submit pull requests for review

## 📖 Development Guidelines

### Folder Structure
Each app should follow this structure:
```
app-name/
├── README.md              # App-specific documentation
├── package.json
├── src/                   # Source code
├── appPackage/           # Teams manifest
├── env/                   # Environment files
└── infra/                # Azure infrastructure
```

### Naming Conventions
- Use kebab-case for folder names: `meeting-notes`, `task-board`
- Use descriptive names that indicate app type: `tab-`, `bot-`, `ext-`
- Keep names concise but clear

### Branching Strategy
- `master` - Production-ready code
- `feature/app-name-feature` - New features
- `fix/app-name-bug` - Bug fixes

## 🤝 Contributing

1. Create a new branch for your app or feature
2. Follow the existing project structure
3. Include a detailed README in your app folder
4. Test thoroughly before committing
5. Update this main README with your new app

## 📝 Notes

- Each app maintains its own dependencies and configuration
- Apps can be developed and deployed independently
- Shared utilities or components can be added to a `/shared` folder if needed

## 📄 License

This is a personal development repository. Individual apps may have different licensing requirements based on the libraries and services they use.

## 🔗 Links

- **Repository**: https://github.com/Niacrisss/ms-teams-apps
- **Microsoft Teams**: https://teams.microsoft.com
- **Developer Portal**: https://dev.teams.microsoft.com

---

**Last Updated**: January 2026  
**Maintainer**: Alexandr Abdulca  
**Status**: Active Development
