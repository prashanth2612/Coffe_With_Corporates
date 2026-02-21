export const fields = {
  type: {
    type: 'selectWithFeedback',
    renderAsTag: true,
    options: [
      { value: 'people', label: 'people', color: 'magenta' },
      { value: 'company', label: 'company', color: 'blue' },
    ],
    required: true,
    hasFeedback: true,
  },
  name: {
    type: 'string',
    disableForForm: true,   // computed by backend from people/company
  },
  // These fields come from the migrated flat structure and are shown in the read panel
  phone: {
    type: 'phone',
    disableForForm: true,   // set via people/company sub-docs, not directly
  },
  email: {
    type: 'email',
    disableForForm: true,
  },
  country: {
    type: 'country',
    disableForForm: true,
  },
  // People sub-doc selector (shown only when type === 'people')
  people: {
    type: 'search',
    label: 'people',
    entity: 'people',
    redirectLabel: 'Add New Person',
    withRedirect: true,
    urlToRedirect: '/people',
    displayLabels: ['firstname', 'lastname'],
    searchFields: 'firstname,lastname',
    dataIndex: ['people', 'firstname'],
    disableForTable: true,
    feedback: 'people',
  },
  // Company sub-doc selector (shown only when type === 'company')
  company: {
    type: 'search',
    label: 'company',
    entity: 'company',
    redirectLabel: 'Add New Company',
    withRedirect: true,
    urlToRedirect: '/company',
    displayLabels: ['name'],
    searchFields: 'name',
    dataIndex: ['company', 'name'],
    disableForTable: true,
    feedback: 'company',
  },
};