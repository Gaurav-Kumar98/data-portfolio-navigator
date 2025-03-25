import { cn } from "@/lib/utils"
import { TestimonialCarousel, Testimonial } from "@/components/ui/testimonial"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Testimonial[]
  className?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section 
      id="testimonials"
      className={cn(
        "bg-background text-foreground",
        "py-12 sm:py-24 md:py-32 px-4",
        "relative",
        className
      )}
    >
      <div className="mx-auto flex max-w-container flex-col items-center gap-8 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
            {description}
          </p>
        </div>

        <div className="w-full max-w-3xl mx-auto">
          <TestimonialCarousel 
            testimonials={testimonials}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  )
} 