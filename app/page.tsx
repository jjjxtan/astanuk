import Image from 'next/image'
import ThemeSwitch from '@/components/theme-switch'
import { generalData } from '@/data/general'
import { contentData } from '@/data/content'
import type { Content } from '@/data/content'

type ContentProps = Content

const Content: React.FC<ContentProps> = ({ title, items }) => {
  return (
    <section className='text-sm mt-8'>
      <div className='bg-neon-yellow dark:bg-purple-800 h-5 w-32 absolute mt-3 -ml-9 -z-10'></div>
      <h1 className='z-10 text-xl font-bold text-slate-900 dark:text-slate-100'>
        {title}
      </h1>
      <div className='ml-7 mt-8 flex flex-col gap-8'>
        {items.map((item, index) => {
          return (
            <div key={index}>
              <div className='flex flex-row align-middle place-items-center'>
                <h3 className='font-bold text-lg'>{item.title}</h3>
                {item.meta ? (
                  <p className='ml-2 italic font-semibold'>
                    -&nbsp;&nbsp;&nbsp;{item.meta}
                  </p>
                ) : null}
              </div>
              <div className='flex flex-row'>
                {item.date ? (
                  <div className='font-medium -ml-1 mr-4 before:inline-block before:content-calendar before:scale-70 before:align-middle'>
                    {item.date}
                  </div>
                ) : null}
                {item.location ? (
                  <div className='-ml-1 font-medium before:inline-block before:content-location before:scale-70 before:align-middle'>
                    {item.location}
                  </div>
                ) : null}
              </div>
              <div className='flex flex-col flex-1'>
                {item.description.map(function (value, index, _) {
                  return (
                    <div key={index} className='flex flex-row'>
                      <p className='mt-2 ml-1 mr-3 font-bold text-xs'>╱</p>
                      <p className='mt-3 font-normal'>{value}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

const BoldText = (children: any) => {
  return <span style={{ fontWeight: 'bold' }}>[children]</span>
}

export default function Home() {
  return (
    <>
      <main className='max-w-2xl mx-auto py-20 relative min-h-screen font-light'>
        <section className='flex items-end'>
          <Image
            alt='Author'
            src={generalData.avatar}
            width={110}
            height={110}
            className='rounded-full object-cover'
          />
          <div className='ml-4 mb-5'>
            <div className='bg-neon-yellow dark:bg-purple-800 h-5 w-28 absolute mt-5 -ml-4 -z-10'></div>
            <h1 className='z-10 mb-0.5 ml-2 text-3xl font-bold text-slate-900 dark:text-slate-100'>
              {generalData.name}
            </h1>
          </div>
          <div className='flex flex-col text-sm text-slate-900 dark:text-slate-100 place-self-start grow content-end'>
            <a
              href='mailto:me@astan.uk'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline inline-flex place-content-end'
            >
              me@astan.uk
              <svg
                width='12'
                height='12'
                viewBox='0 0 12 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z'
                  className='fill-current text-slate-900 dark:text-slate-100'
                ></path>
              </svg>
            </a>
          </div>
        </section>
        <section className='my-9 text-sm'>
          <div className='text-slate-800 dark:text-slate-200'>
            <p className='text-justify'>
              <BoldText>A motivated, sociable</BoldText>, and{' '}
              <BoldText>open</BoldText> individual, able to easily adapt to any
              environment and <BoldText>fully commit</BoldText> to the task at
              hand. Driven by the desire to{' '}
              <BoldText>challenge myself</BoldText> and turn theory into
              practice. <BoldText>Always keen</BoldText> on acquiring new skills
              and insights.
            </p>
            <br></br>
            <p className='text-justify'>
              <BoldText>Ingenious & analytical</BoldText>, can{' '}
              <BoldText>think laterally</BoldText> &bull; Easily{' '}
              <BoldText>adaptable</BoldText> to any situation &bull;{' '}
              <BoldText>Experienced</BoldText> at working in teams &bull;{' '}
              Advanced <BoldText>digital</BoldText> competencies &bull;{' '}
              <BoldText>Multilingual</BoldText>, I speak English, Japanese and
              Romanian
            </p>
          </div>
        </section>
        {contentData.map((content, index) => {
          return <Content {...content} key={index} />
        })}
        <section className='mt-14 mb-4 text-sm'>
          <div className='flex flex-col gap-6'>
            {generalData.contacts.map((contact, index) => {
              return (
                <div className='flex' key={index}>
                  <div className='font-semibold max-w-[100px] w-full'>
                    {contact.label}
                  </div>
                  <div className='flex flex-col flex-1 text-slate-900 dark:text-slate-100'>
                    <a
                      href={contact.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:underline inline-flex'
                    >
                      {contact.value}
                      <svg
                        width='12'
                        height='12'
                        viewBox='0 0 12 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z'
                          className='fill-current text-slate-900 dark:text-slate-100'
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
        <div className='px-6 absolute -left-6 bottom-6'>
          <ThemeSwitch />
        </div>
      </main>
    </>
  )
}
