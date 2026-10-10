import { experience } from '../data/portfolioData'
import SectionTitle from './SectionTitle'
import Timeline from './Timeline'

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionTitle
          eyebrow="Experience"
          title="Where I've worked"
          description="Hands-on internship experience across web, API and database work."
        />
        <Timeline items={experience} />
      </div>
    </section>
  )
}
