// Shared site content: contact details, navigation and audience solutions.

export const contact = {
  email: 'sales@finultrasolution.com',
  phone: '+263 77 180 4964',
  phoneHref: 'tel:+263771804964',
  offices: [
    { city: 'Lusaka', country: 'Zambia', address: '6 Ibex Hill' }
  ],
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com' },
    { label: 'X / Twitter', href: 'https://www.twitter.com' },
    { label: 'YouTube', href: 'https://www.youtube.com' }
  ]
}

export const audiences = [
  {
    id: 'mfi',
    icon: 'groups',
    title: 'Microfinance institutions',
    short: 'Group & individual lending at scale',
    pick: 'Loans, savings, DFA, mobile money',
    bundle: [
      { title: 'Cloud core banking', text: 'Loans, savings, accounting and reports' },
      { title: 'Digital Field Application', text: 'Onboard clients and collect in the field' },
      { title: 'Mobile money + SMS', text: 'Repayments, deposits and automated reminders' }
    ]
  },
  {
    id: 'sacco',
    icon: 'diversity_3',
    title: 'SACCOs & credit unions',
    short: 'Member savings, shares and loans',
    pick: 'Shares, member portal, SMS',
    bundle: [
      { title: 'Member savings & shares', text: 'Contributions, dividends and statements' },
      { title: 'Self-service member portal', text: 'Members check balances and apply online' },
      { title: 'WhatsApp & USSD banking', text: 'Members check balances and contribute from any phone' }
    ]
  },
  {
    id: 'lender',
    icon: 'bolt',
    title: 'Digital & payroll lenders',
    short: 'Fast origination, mobile repayments',
    pick: 'Fast decisions, mobile money',
    bundle: [
      { title: 'Configurable loan products', text: 'Payroll, salary-advance and SME loans' },
      { title: 'Mobile money integration', text: 'Disburse and collect over mobile phones' },
      { title: 'AI credit scoring', text: 'Faster, data-driven approval decisions' }
    ]
  },
  {
    id: 'bank',
    icon: 'account_balance',
    title: 'Community & rural banks',
    short: 'Full core with self-service portals',
    pick: 'Full core + self-service portals',
    bundle: [
      { title: 'Full core banking', text: 'Deposits, lending, GL and regulatory reports' },
      { title: 'Self-service portals', text: 'Digital banking for your customers' },
      { title: 'Branch IT infrastructure', text: 'Hardware, installation and maintenance' }
    ]
  }
]

export const equipment = [
  { id: 'computers', icon: 'computer', title: 'Computers', text: 'Desktops and laptops configured for branch and head-office staff.' },
  { id: 'printers', icon: 'print', title: 'Printers', text: 'Receipt, statement and office printers.' },
  { id: 'scanners', icon: 'document_scanner', title: 'Scanners', text: 'Document scanners for KYC and loan files.' },
  { id: 'photocopiers', icon: 'content_copy', title: 'Photocopiers', text: 'Multi-function copiers for busy branches.' },
  { id: 'projectors', icon: 'videocam', title: 'Projectors', text: 'For training sessions and group meetings.' },
  { id: 'pos', icon: 'point_of_sale', title: 'Cameras & POS machines', text: 'Client photo capture and point-of-sale terminals.' }
]

// Platform FAQ — also published as FAQPage structured data for search engines
export const faqs = [
  { q: 'What is core banking software?', a: 'Core banking software is the central system a financial institution runs on: it manages clients, loans, savings, repayments and accounting in one place. FinUltra delivers it from the cloud, so there are no servers to buy or maintain.' },
  { q: 'Is FinUltra suitable for microfinance institutions and SACCOs in Zambia?', a: 'Yes. FinUltra is built for microfinance institutions, SACCOs, digital lenders and community banks, with a local team in Lusaka for implementation, training and support.' },
  { q: 'Do I need servers or IT staff?', a: 'No. FinUltra is cloud based — all you need is a reliable internet connection and a modern web browser. We guarantee an uptime of over 99.9%.' },
  { q: 'How does per-client pricing work?', a: 'You pay according to the number of clients you serve, so the system stays affordable for small MFIs and scales as you grow. Contact us for a quote based on your client numbers.' },
  { q: 'Can you migrate our existing data?', a: 'Yes. Data migration is part of implementation, alongside parameterisation, interface development and system integration.' },
  { q: 'Do you provide training?', a: 'Yes — technical and functional training for your staff, plus post-implementation support, maintenance and upgrades.' },
  { q: 'Do you offer WhatsApp and USSD banking?', a: 'Yes. Clients can check balances, request statements, apply for loans and repay through WhatsApp, or through a USSD short code that works on any phone without internet.' },
  { q: 'How does AI banking help my institution?', a: 'AI-assisted credit scoring speeds up approvals, early-warning alerts flag clients at risk of arrears, and a portfolio assistant answers questions about your data.' },
  { q: 'Can you supply hardware too?', a: 'Yes. We supply and maintain computers, printers, scanners, photocopiers, projectors, cameras and POS machines.' }
]
