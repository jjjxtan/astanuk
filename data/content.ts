export const contentData = [
  {
    title: 'Work experience',
    items: [
      {
        title: 'Senior Student Ambassador',
        location: 'University of Sheffield, Sheffield - UK',
        date: 'Nov 2018 - Present',
        description: [
          'Acted as a representative of the university and supported departmental and faculty recruitment through calling campaigns, open days, and media creation.',
          'Demonstrated commitment, reliability, team coordination, and the ability to communicate effectively with a range of audiences.',
        ],
      },
      {
        title: 'SEAS CAREER FAIR // Student Event Coordinator',
        location: 'Sheffield - UK',
        date: 'Nov 2021 - Mar 2022',
        description: [
          'Successfully planned and executed a dynamic career event alongside a group of dedicated students creating networking opportunities for students.',
          'Coordinated logistics, including event scheduling, venue selection and vendor management and secured participation from a range of industry professionals, alumni, employers, recruiters, and governmental institutions.',
        ],
      },
      {
        title: '"Digital Asia" Art Exhibition // Assistant',
        location: 'Sheffield - UK',
        date: 'Jun 2021 - Sep 2021',
        description: [
          'Assisted in the planning, curation and execution of a digital art exhibition.',
          'Designed and implemented feedback mechanisms to gather input and ensure engagement.',
        ],
      },
      {
        title: 'Private English Tutor',
        location: 'Online',
        date: 'Jun 2021 - Sep 2021',
        description: [
          "Conducted private English tutoring sessions, developing personalized lesson plans tailored to each student's needs and learning style.",
        ],
      },
    ],
  },
  {
    title: 'Education',
    items: [
      {
        title: 'BA Business Management & Japanese Studies',
        location: 'University of Sheffield, Sheffield - UK',
        date: 'Sep 2018 - Present',
        description: [
          "Completed projects on complex topics (e.g., analyzing Boeing's organizational culture issues related to the 737 MAX tragedy, examining ethical marketing and gambling in video games, reviewing the way in which the Chuo Shinkansen megaproject is being handled).",
          'Developed transferable skills such as time management, critical thinking, teamwork and leading abilities, strong communication skills and digital aptitudes through assignments and extracurricular work.',
        ],
      },
      {
        title: 'JTW Program',
        location: 'Kyushu University, Fukuoka - Japan',
        date: 'Sep 2022 - July 2023',
        meta: '”JASSO Scholarship”',
        description: [
          'Studied a variety of subjects related to Japanese culture, society, education, economy, history, and language.',
          'Gained practical insights into the Japanese way of life and developed cross-cultural communication skills through immersive learning experiences.',
        ],
      },
      {
        title: 'Highschool degree - Computer science',
        location: 'CTET “Gheorghe Marzescu”, Iasi - Romania',
        description: [
          'Baccalaureate: Mathematics (9); Physics (9.15); Romanian (9.4); Digital competences: Experienced user',
        ],
      },
    ],
  },
  {
    title: 'Leadership and volunteering experience',
    items: [
      {
        title: 'Academic Representative',
        location: 'Sheffield - UK',
        date: 'Oct 2018 - July 2022',
        description: [
          'Developed strong communication and negotiation skills through effective articulation of ideas and advocating for student concerns.',
          'Organized and promoted academic events and workshops to support student learning.',
        ],
      },
      {
        title: 'Learning and Teaching commission - Student representative',
        location: 'Sheffield - UK',
        date: 'Oct 2018 - July 2020',
        description: [
          'Represented the perspectives and interests of students, developing leadership, problem-solving, communication, diplomacy, and advocacy skills.',
          'Actively sought student feedback and concerns related to learning and teaching through various channels.',
        ],
      },
    ],
  },
  {
    title: 'Activities',
    items: [
      {
        title: 'Youth in action /',
        location: 'Oberhof - Germany',
        description: [
          'Team leader in the “New values or old values in Europe" project in Germany.',
          'Coordinated a 7-man team representing Romania alongside a professor.',
          'Helped organize seminars and lectures in relevant topics.',
        ],
      },
      {
        title: 'ERASMUS+ DIGIT /',
        location: 'Viseu - Portugal',
        description: [
          'Team leader in the DIGIT Erasmus+ project.',
          'Advanced digital skills by creating digital stories.',
        ],
      },
      {
        title: 'ERASMUS+ DIGIT /',
        location: 'Campobasso - Italy',
        description: [
          'Team member in the DIGIT Erasmus+ project.',
          'Developed digital skills such as video editing and formatting documents by creating digital stories on different topics / experiences in Italy in a multinational and cultural team.',
        ],
      },
    ],
  },
]

export type Content = {
  title: string
  items: {
    title: string
    location?: string
    meta?: string
    date?: string
    description: Array<string>
  }[]
}

export type ContentData = Content[]
