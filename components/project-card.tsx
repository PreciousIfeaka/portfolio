import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  demoUrl: string
  codeUrl: string
}

export function ProjectCard({ title, description, tags, imageUrl, demoUrl, codeUrl }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full min-h-[400px] overflow-hidden transition-all hover:shadow-md">
  <div className="aspect-video w-full overflow-hidden">
    <img
      src={imageUrl || "/placeholder.svg"}
      alt={title}
      className="h-full w-full object-cover transition-all hover:scale-105"
    />
  </div>

  <CardHeader>
    <h3 className="text-xl font-bold">{title}</h3>
  </CardHeader>

  {/* This section grows to fill space */}
  <CardContent className="text-muted-foreground flex-1">
    <p>{description}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge key={tag} variant="secondary">
          {tag}
        </Badge>
      ))}
    </div>
  </CardContent>

  {/* Footer stays pinned to bottom */}
  <CardFooter className="flex justify-between">
    <Button variant="outline" size="sm" asChild>
      <Link href={demoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1">
        <ExternalLink className="h-4 w-4" />
        Demo
      </Link>
    </Button>
    <Button variant="outline" size="sm" asChild>
      <Link href={codeUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1">
        <Github className="h-4 w-4" />
        Code
      </Link>
    </Button>
  </CardFooter>
</Card>
  )
}
