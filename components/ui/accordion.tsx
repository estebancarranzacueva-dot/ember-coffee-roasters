import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"
import { MinusIcon, PlusIcon } from "lucide-react"
import { cn } from "@/lib/utils"

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col", className)}
      {...props}
    />
  )
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b border-muted/30", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger flex flex-1 items-start justify-between gap-6 rounded-ui py-6 text-left font-serif text-[1.6rem] leading-tight font-normal text-text transition-colors duration-200 outline-none hover:text-text/70 focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none sm:text-[1.9rem]",
          className
        )}
        {...props}
      >
        {children}
        <PlusIcon
          aria-hidden
          className="mt-1.5 size-5 shrink-0 text-muted group-aria-expanded/accordion-trigger:hidden"
        />
        <MinusIcon
          aria-hidden
          className="mt-1.5 hidden size-5 shrink-0 text-muted group-aria-expanded/accordion-trigger:block"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="overflow-hidden data-open:animate-accordion-down data-closed:animate-accordion-up motion-reduce:animate-none"
      {...props}
    >
      <div
        className={cn(
          "h-(--accordion-panel-height) max-w-[60ch] pb-6 text-[1rem] text-muted data-ending-style:h-0 data-starting-style:h-0",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
