import * as React from "react"
import { motion, PanInfo } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  id: number | string
  name: string
  avatar: string
  description: string
}

interface TestimonialCarouselProps
  extends React.HTMLAttributes<HTMLDivElement> {
  testimonials: Testimonial[]
  showArrows?: boolean
  showDots?: boolean
}

const TestimonialCarousel = React.forwardRef<
  HTMLDivElement,
  TestimonialCarouselProps
>(
  (
    { className, testimonials, showArrows = true, showDots = true, ...props },
    ref,
  ) => {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [exitX, setExitX] = React.useState<number>(0)

    const handlePrevClick = () => {
      setExitX(100) // Set positive value for sliding right
      setTimeout(() => {
        setCurrentIndex((prev) => 
          prev === 0 ? testimonials.length - 1 : prev - 1
        )
        setExitX(0)
      }, 100)
    }

    const handleNextClick = () => {
      setExitX(-100) // Set negative value for sliding left
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        setExitX(0)
      }, 100)
    }

    const handleDragEnd = (
      event: MouseEvent | TouchEvent | PointerEvent,
      info: PanInfo,
    ) => {
      if (info.offset.x > 100) {
        handlePrevClick()
      } else if (info.offset.x < -100) {
        handleNextClick()
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          "h-96 w-full flex items-center justify-center relative",
          className
        )}
        {...props}
      >
        {showArrows && (
          <>
            <button 
              className="absolute left-0 z-10 bg-white dark:bg-card rounded-full p-2 shadow-md text-gray-400 hover:text-gray-600 dark:text-muted-foreground dark:hover:text-primary"
              onClick={handlePrevClick}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              className="absolute right-0 z-10 bg-white dark:bg-card rounded-full p-2 shadow-md text-gray-400 hover:text-gray-600 dark:text-muted-foreground dark:hover:text-primary"
              onClick={handleNextClick}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        <div className="relative w-full max-w-md h-full flex items-center justify-center">
          {testimonials.map((testimonial, index) => {
            const isCurrentCard = index === currentIndex

            if (!isCurrentCard) return null

            return (
              <motion.div
                key={testimonial.id}
                className={cn(
                  "absolute w-full max-w-sm rounded-3xl cursor-default bg-white shadow-lg dark:bg-card dark:shadow-[0px_2px_8px_rgba(0,0,0,0.3)]",
                )}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={handleDragEnd}
                initial={{
                  scale: 0.95,
                  opacity: 0,
                  x: exitX,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  scale: 0.95,
                  opacity: 0,
                  x: exitX,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <div className="p-8 flex flex-col items-center gap-6">
                  <div className="flex justify-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-foreground text-center">
                    {testimonial.name}
                  </h3>
                  
                  <p className="text-center text-gray-600 dark:text-muted-foreground">
                    {testimonial.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
          
          {showDots && (
            <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    index === currentIndex
                      ? "bg-blue-500 dark:bg-primary"
                      : "bg-gray-300 dark:bg-muted-foreground/30",
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    )
  },
)
TestimonialCarousel.displayName = "TestimonialCarousel"

export { TestimonialCarousel, type Testimonial } 