export default [
  {
    title: 'Home',
    to: 'apps-academy-dashboard',
    icon: { icon: 'tabler-smart-home' },
  },
  { heading: 'Management' },
  {
    title: 'Programmes',
    to: 'programmes',
    icon: { icon: 'tabler-file' },
  },
  {
    title: 'Contracts',
    to: { name: 'second-page' },
    icon: { icon: 'tabler-file' },
  },
  {
    title: 'Contractors',
    to: { name: 'second-page' },
    icon: { icon: 'tabler-file' },
  },
  {
    title: 'Lots',
    to: { name: 'second-page' },
    icon: { icon: 'tabler-file' },
  },
  {
    title: 'Sites',
    to: { name: 'second-page' },
    icon: { icon: 'tabler-file' },
  },
  {
    title: 'BOQ',
    to: { name: 'second-page' },
    icon: { icon: 'tabler-file' },
  },


  { heading: 'Analytics' },
  {
    title: 'Reports',
    to: { name: 'second-page' },
    icon: { icon: 'tabler-file' },
    children: [
      {
        title: 'Progress Reports',
        to: 'second-page',
        
      },
      {
        title: 'Executive Reports',
        to: 'second-page',
        
      },
    ],
  },
  {
    title: 'Valuation',
    to: { name: 'second-page' },
    icon: { icon: 'tabler-file' },
    children: [
      
      {
        title: 'Lot Summary',
        to: 'second-page',
        
      },
      {
        title: 'Contract Summary',
        to: 'second-page',
        
      },
      {
        title: 'Contractors Reports',
        to: 'second-page',
        
      },
    ],
  },
  { heading: 'Systems' },

  {
    title: 'Profile',
    to: { name: 'second-page' },
    icon: { icon: 'tabler-file' },
  },
  {
    title: 'Settings',
    to: { name: 'second-page' },
    icon: { icon: 'tabler-file' },
  },
  {
    title: 'Roles & Permission',
    to: { name: 'second-page' },
    icon: { icon: 'tabler-file' },
    children: [
      
      {
        title: 'Roles',
        to: 'apps-roles',
        
      },
      {
        title: 'Permissions',
        to: 'apps-permissions',
        
      },
    
    ],
  },
  {
    title: 'Licenses',
    to: { name: 'second-page' },
    icon: { icon: 'tabler-file' },
  },
  

]
