export interface ICompany {
  owner: string;
  name: string;
  service: string;
  location: string;
  logo: string;
  bankingInfo: string;
  agents: string[];
  tickets: string[];
  invoices: string[];
}

export const companies: ICompany[] = [
  {
    owner: "Alice Johnson",
    name: "Tech Solutions Inc.",
    service: "IT Consulting",
    location: "New York, NY",
    bankingInfo: "Bank of America, Account No: 123456789",
    logo: "https://example.com/logo1.png",
    agents: ["agent1", "agent2", "agent3"],
    tickets: ["ticket1", "ticket2"],
    invoices: ["invoice1", "invoice2"],
  },
  {
    owner: "Bob Smith",
    name: "Creative Designs LLC",
    service: "Graphic Design",
    location: "Los Angeles, CA",
    bankingInfo: "Chase Bank, Account No: 987654321",
    agents: ["agent4", "agent5"],
    tickets: ["ticket3", "ticket4", "ticket5"],
    invoices: ["invoice3"],
    logo: "https://example.com/logo1.png",
  },
];
