import { skillCategories } from '../data/portfolioData'
import SectionTitle from './SectionTitle'
import SkillCard from './SkillCard'

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-alt">
      <div className="section-container">
        <SectionTitle
          eyebrow="Skills"
          title="Tools I reach for"
          description="Technical skills grouped by area, as listed on my resume."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
