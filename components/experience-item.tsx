import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface ExperienceItemProps {
  title: string
  company: string
  period: string
  description: string
  skills: string[]
}

export function ExperienceItem({ title, company, period, description, skills }: ExperienceItemProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-lg text-muted-foreground">{company}</p>
          </div>
          <p className="text-sm text-muted-foreground">{period}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-left">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
