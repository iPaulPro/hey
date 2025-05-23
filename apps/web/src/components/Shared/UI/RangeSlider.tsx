import cn from "@/helpers/cn";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { forwardRef } from "react";

interface RangeSliderProps extends SliderPrimitive.SliderProps {
  className?: string;
  displayValue?: string;
  showValueInThumb?: boolean;
}

export const RangeSlider = forwardRef<HTMLInputElement, RangeSliderProps>(
  function RangeSlider(
    { className = "", displayValue, showValueInThumb = false, ...rest },
    ref
  ) {
    return (
      <SliderPrimitive.Root
        className={cn(
          "relative flex h-5 w-full touch-none select-none items-center",
          className
        )}
        max={100}
        ref={ref}
        step={1}
        {...rest}
      >
        <SliderPrimitive.Track className="relative h-1 grow rounded-full bg-neutral-200 dark:bg-neutral-800">
          <SliderPrimitive.Range className="absolute h-full rounded-full bg-neutral-600" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          aria-label="Slider"
          className={cn(
            showValueInThumb
              ? "rounded-lg px-2 py-1 font-bold text-white text-xs"
              : "size-5 rounded-full",
            "block bg-neutral-900 focus:outline-hidden active:scale-110"
          )}
        >
          {showValueInThumb ? displayValue || rest.value : null}
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Root>
    );
  }
);
