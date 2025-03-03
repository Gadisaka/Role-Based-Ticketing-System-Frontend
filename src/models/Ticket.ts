export interface ITicketHistory {
  action: "created" | "updated" | "assigned" | "closed";
  user: string;
  timestamp: Date;
}

export interface ITicket {
  title: string;
  description: string;
  status: "Open" | "In Progress" | "Resolved" | "Closed";
  priority: "Low" | "Medium" | "High" | "Critical";
  companyName: string;
  customerName: string;
  agent?: string;
  history: ITicketHistory[];
  attachments?: string[];
  deadline?: Date;
  tags?: string[];
}

export const fakeTickets: ITicket[] = [
  {
    title: "Login Issue",
    description: "User unable to login with correct credentials.",
    status: "Open",
    priority: "High",
    companyName: "TechCorp",
    customerName: "John Doe",
    history: [
      {
        action: "created",
        user: "John Doe",
        timestamp: new Date(),
      },
    ],
  },
  {
    title: "Payment Gateway Error",
    description: "Payment gateway returns error code 500.",
    status: "In Progress",
    priority: "Critical",
    companyName: "ShopEase",
    customerName: "Jane Smith",
    agent: "Agent A",
    history: [
      {
        action: "created",
        user: "Jane Smith",
        timestamp: new Date(),
      },
      {
        action: "assigned",
        user: "Admin",
        timestamp: new Date(),
      },
    ],
    attachments: ["error_screenshot.png"],
  },
  {
    title: "Door handle broken",
    description: "the front door handle is broken and needs to be replaced",
    status: "In Progress",
    priority: "Critical",
    companyName: "ShopEase",
    customerName: "Jane Smith",
    agent: "Agent A",
    history: [
      {
        action: "created",
        user: "Jane Smith",
        timestamp: new Date(),
      },
      {
        action: "assigned",
        user: "Admin",
        timestamp: new Date(),
      },
    ],
    attachments: ["error_screenshot.png"],
  },
  {
    title: "Feature Request: Dark Mode",
    description: "Request to add dark mode to the application.",
    status: "Resolved",
    priority: "Medium",
    companyName: "Innovatech",
    customerName: "Alice Johnson",
    agent: "Agent B",
    history: [
      {
        action: "created",
        user: "Alice Johnson",
        timestamp: new Date(),
      },
      {
        action: "assigned",
        user: "Admin",
        timestamp: new Date(),
      },
      {
        action: "updated",
        user: "Agent B",
        timestamp: new Date(),
      },
      {
        action: "closed",
        user: "Agent B",
        timestamp: new Date(),
      },
    ],
    tags: ["feature-request", "UI"],
  },
  // {
  //   title: "Data Sync Issue",
  //   description: "Data not syncing between mobile and web app.",
  //   status: "Closed",
  //   priority: "High",
  //   companyName: "SyncSolutions",
  //   customerName: "Bob Brown",
  //   agent: "Agent C",
  //   history: [
  //     {
  //       action: "created",
  //       user: "Bob Brown",
  //       timestamp: new Date(),
  //     },
  //     {
  //       action: "assigned",
  //       user: "Admin",
  //       timestamp: new Date(),
  //     },
  //     {
  //       action: "updated",
  //       user: "Agent C",
  //       timestamp: new Date(),
  //     },
  //     {
  //       action: "closed",
  //       user: "Agent C",
  //       timestamp: new Date(),
  //     },
  //   ],
  //   attachments: ["sync_log.txt"],
  //   deadline: new Date(new Date().setDate(new Date().getDate() + 7)),
  // },
  {
    title: "UI Bug on Dashboard",
    description: "Dashboard widgets not displaying correctly.",
    status: "Open",
    priority: "Low",
    companyName: "WebWidgets",
    customerName: "Charlie Davis",
    history: [
      {
        action: "created",
        user: "Charlie Davis",
        timestamp: new Date(),
      },
    ],
    tags: ["bug", "UI"],
  },
];
